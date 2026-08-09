--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2026 Laurent Gomila (laurent@sfml-dev.org)
-- This software is provided 'as-is', without any express or implied warranty.
-- In no event will the authors be held liable for any damages arising from the use of this software.
-- Permission is granted to anyone to use this software for any purpose,
-- including commercial applications, and to alter it and redistribute it freely,
-- subject to the following restrictions:
-- 1. The origin of this software must not be misrepresented;
--    you must not claim that you wrote the original software.
--    If you use this software in a product, an acknowledgment
--    in the product documentation would be appreciated but is not required.
-- 2. Altered source versions must be plainly marked as such,
--    and must not be misrepresented as being the original software.
-- 3. This notice may not be removed or altered from any source distribution.
--//////////////////////////////////////////////////////////

--//////////////////////////////////////////////////////////

with System;

with Sf.System.InputStream;

with Sf.System.Time;
with Sf.Audio.SoundStatus;
with Sf.Audio.EffectProcessor;
with Sf.Audio.SoundChannel;
with Sf.Audio.SoundSourceCone;
with Sf.System.Vector3;

package Sf.Audio.Music is


   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Structure defining a time range
   --/
   --//////////////////////////////////////////////////////////
   type sfTimeSpan is record
      offset : aliased Sf.System.Time.sfTime;
      --/< The beginning offset of the time range
      length : aliased Sf.System.Time.sfTime;
      --/< The length of the time range
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a file
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, mp3, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param filename Path of the music file to open
   --/
   --/ @return A new sfMusic object (`null` if failed)
   --/
   --//////////////////////////////////////////////////////////
   function createFromFile (filename : String) return sfMusic_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a file in memory
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, mp3, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param data        Pointer to the file data in memory
   --/ @param sizeInBytes Size of the data to load, in bytes
   --/
   --/ @return A new sfMusic object (`null` if failed)
   --/
   --//////////////////////////////////////////////////////////
   function createFromMemory (data : Standard.System.Address; sizeInBytes : sfSize_t) return sfMusic_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a custom stream
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, mp3, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param stream Source stream to read from
   --/
   --/ @return A new sfMusic object (`null` if failed)
   --/
   --//////////////////////////////////////////////////////////
   function createFromStream (stream : access Sf.System.InputStream.sfInputStream)
                                     return sfMusic_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a music
   --/
   --/ @param music Music to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (music : sfMusic_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set whether or not a music should loop after reaching the end
   --/
   --/ If set, the music will restart from beginning after
   --/ reaching the end and so on, until it is stopped or
   --/ setLooping(music, sfFalse) is called.
   --/ The default looping state for musics is false.
   --/
   --/ @param music  Music object
   --/ @param enable sfTrue to play in loop, sfFalse to play once
   --/
   --//////////////////////////////////////////////////////////
   procedure setLooping (music : sfMusic_Ptr; enable : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a music is in loop mode
   --/
   --/ @param music Music object
   --/
   --/ @return sfTrue if the music is looping, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isLooping (music : sfMusic_Ptr) return sfBool;


  --//////////////////////////////////////////////////////////
  --/ @brief Set the effect processor to be applied to the sound
  --/
  --/ The effect processor is a callable that will be called
  --/ with sound data to be processed.
  --/
  --/ @param music           Music object
  --/ @param effectProcessor The effect processor to attach to this sound, 
  --/                        attach a null processor to disable processing
  --/
  --//////////////////////////////////////////////////////////
   procedure setEffectProcessor
    (music : sfMusic_Ptr;
     effectProcessor : Sf.Audio.EffectProcessor.sfEffectProcessor);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the total duration of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Music duration
   --/
   --//////////////////////////////////////////////////////////
   function getDuration (music : sfMusic_Ptr) return Sf.System.Time.sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the positions of the of the sound's looping sequence
   --/
   --/ @param music Music object
   --/
   --/ @return Loop Time position class.
   --/
   --/ @warning Since setLoopPoints() performs some adjustments on the
   --/ provided values and rounds them to internal samples, a call to
   --/ getLoopPoints() is not guaranteed to return the same times passed
   --/ into a previous call to setLoopPoints(). However, it is guaranteed
   --/ to return times that will map to the valid internal samples of
   --/ this Music if they are later passed to setLoopPoints().
   --/
   --/ @see setLoopPoints
   --/
   --//////////////////////////////////////////////////////////
   function getLoopPoints (music : sfMusic_Ptr) return sfTimeSpan;

   --//////////////////////////////////////////////////////////
   --/ @brief Sets the beginning and end of the sound's looping sequence using sfTime
   --/
   --/ Loop points allow one to specify a pair of positions such that, when the music
   --/ is enabled for looping, it will seamlessly seek to the beginning whenever it
   --/ encounters the end. Valid ranges for timePoints.offset and timePoints.length are
   --/ [0, Dur) and (0, Dur-offset] respectively, where Dur is the value returned by getDuration().
   --/ Note that the EOF "loop point" from the end to the beginning of the stream is still honored,
   --/ in case the caller seeks to a point after the end of the loop range. This function can be
   --/ safely called at any point after a stream is opened, and will be applied to a playing sound
   --/ without affecting the current playing offset.
   --/
   --/ @warning Setting the loop points while the stream's status is Paused
   --/ will set its status to Stopped. The playing offset will be unaffected.
   --/
   --/ @param music Music object
   --/ @param timePoints The definition of the loop. Can be any time points within the sound's length
   --/
   --/ @see getLoopPoints
   --/
   --//////////////////////////////////////////////////////////
   procedure setLoopPoints (music : sfMusic_Ptr; timePoints : sfTimeSpan);

   --//////////////////////////////////////////////////////////
   --/ @brief Start or resume playing a music
   --/
   --/ This function starts the music if it was stopped, resumes
   --/ it if it was paused, and restarts it from beginning if it
   --/ was it already playing.
   --/ This function uses its own thread so that it doesn't block
   --/ the rest of the program while the music is played.
   --/
   --/ @param music Music object
   --/
   --//////////////////////////////////////////////////////////
   procedure play (music : sfMusic_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Pause a music
   --/
   --/ This function pauses the music if it was playing,
   --/ otherwise (music already paused or stopped) it has no effect.
   --/
   --/ @param music Music object
   --/
   --//////////////////////////////////////////////////////////
   procedure pause (music : sfMusic_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Stop playing a music
   --/
   --/ This function stops the music if it was playing or paused,
   --/ and does nothing if it was already stopped.
   --/ It also resets the playing position (unlike sfMusic_pause).
   --/
   --/ @param music Music object
   --/
   --//////////////////////////////////////////////////////////
   procedure stop (music : sfMusic_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Return the number of channels of a music
   --/
   --/ 1 channel means a mono sound, 2 means stereo, etc.
   --/
   --/ @param music Music object
   --/
   --/ @return Number of channels
   --/
   --//////////////////////////////////////////////////////////
   function getChannelCount (music : sfMusic_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sample rate of a music
   --/
   --/ The sample rate is the number of audio samples played per
   --/ second. The higher, the better the quality.
   --/
   --/ @param music Music object
   --/
   --/ @return Sample rate, in number of samples per second
   --/
   --//////////////////////////////////////////////////////////
   function getSampleRate (music : sfMusic_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the map of position in sample frame to sound channel
   --/
   --/ This is used to map a sample in the sample stream to a
   --/ position during spatialization.
   --/
   --/ @param music Music object
   --/ @param count A variable that will be filled with the number of channels in the map
   --/
   --/ @return Map of position in sample frame to sound channel
   --/
   --//////////////////////////////////////////////////////////
   function getChannelMap
     (music : sfMusic_Ptr;
      count : in out sfSize_t) return access Sf.Audio.SoundChannel.sfSoundChannel;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current status of a music (stopped, paused, playing)
   --/
   --/ @param music Music object
   --/
   --/ @return Current status
   --/
   --//////////////////////////////////////////////////////////
   function getStatus (music : sfMusic_Ptr) return Sf.Audio.SoundStatus.sfSoundStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current playing position of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Current playing position
   --/
   --//////////////////////////////////////////////////////////
   function getPlayingOffset (music : sfMusic_Ptr) return Sf.System.Time.sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pitch of a music
   --/
   --/ The pitch represents the perceived fundamental frequency
   --/ of a sound; thus you can make a music more acute or grave
   --/ by changing its pitch. A side effect of changing the pitch
   --/ is to modify the playing speed of the music as well.
   --/ The default value for the pitch is 1.
   --/
   --/ @param music Music object
   --/ @param pitch New pitch to apply to the music
   --/
   --//////////////////////////////////////////////////////////
   procedure setPitch (music : sfMusic_Ptr; pitch : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pan of the music object
   --/
   --/ Using panning, a mono sound can be panned between
   --/ stereo channels. When the pan is set to -1, the sound
   --/ is played only on the left channel, when the pan is set
   --/ to +1, the sound is played only on the right channel.
   --/
   --/ @param music Music object
   --/ @param pan   New pan to apply to the music [-1, +1]
   --/
   --//////////////////////////////////////////////////////////
   procedure setPan (music : sfMusic_Ptr; pan : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the volume of a music
   --/
   --/ The volume is a value between 0 (mute) and 100 (full volume).
   --/ The default value for the volume is 100.
   --/
   --/ @param music  Music object
   --/ @param volume Volume of the music
   --/
   --//////////////////////////////////////////////////////////
   procedure setVolume (music : sfMusic_Ptr; volume : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set whether spatialization of the sound is enabled
   --/
   --/ Spatialization is the application of various effects to
   --/ simulate a sound being emitted at a virtual position in
   --/ 3D space and exhibiting various physical phenomena such as
   --/ directional attenuation and doppler shift.
   --/
   --/ @param music   Music object
   --/ @param enabled sfTrue to enable spatialization, sfFalse to disable
   --/
   --//////////////////////////////////////////////////////////
   procedure setSpatializationEnabled (music : sfMusic_Ptr; enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D position of a music in the audio scene
   --/
   --/ Only musics with one channel (mono musics) can be
   --/ spatialized.
   --/ The default position of a music is (0, 0, 0).
   --/
   --/ @param music    Music object
   --/ @param position Position of the music in the scene
   --//////////////////////////////////////////////////////////
   procedure setPosition (music : sfMusic_Ptr; position : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D direction of the sound in the audio scene
   --/
   --/ The direction defines where the sound source is facing
   --/ in 3D space. It will affect how the sound is attenuated
   --/ if facing away from the listener.
   --/ The default direction of a sound is (0, 0, -1).
   --/
   --/ @param music     Music object
   --/ @param direction Direction of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setDirection (music : sfMusic_Ptr; direction : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the cone properties of the sound in the audio scene
   --/
   --/ The cone defines how directional attenuation is applied.
   --/ The default cone of a sound is (2 * PI, 2 * PI, 1).
   --/
   --/ @param music Music object
   --/ @param cone  Cone properties of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setCone (music : sfMusic_Ptr; cone : Sf.Audio.SoundSourceCone.sfSoundSourceCone);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D velocity of the sound in the audio scene
   --/
   --/ The velocity is used to determine how to doppler shift
   --/ the sound. Sounds moving towards the listener will be
   --/ perceived to have a higher pitch and sounds moving away
   --/ from the listener will be perceived to have a lower pitch.
   --/
   --/ @param music    Music object
   --/ @param velocity Velocity of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setVelocity (music : sfMusic_Ptr; velocity : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the doppler factor of the sound
   --/
   --/ The doppler factor determines how strong the doppler
   --/ shift will be.
   --/
   --/ @param music  Music object
   --/ @param factor New doppler factor to apply to the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setDopplerFactor (music : sfMusic_Ptr; factor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the directional attenuation factor of the sound
   --/
   --/ Depending on the virtual position of an output channel
   --/ relative to the listener (such as in surround sound
   --/ setups), sounds will be attenuated when emitting them
   --/ from certain channels. This factor determines how strong
   --/ the attenuation based on output channel position
   --/ relative to the listener is.
   --/
   --/ @param music  Music object
   --/ @param factor New directional attenuation factor to apply to the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setDirectionalAttenuationFactor (music : sfMusic_Ptr; factor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Make a musics's position relative to the listener or absolute
   --/
   --/ Making a music relative to the listener will ensure that it will always
   --/ be played the same way regardless the position of the listener.
   --/ This can be useful for non-spatialized musics, musics that are
   --/ produced by the listener, or musics attached to it.
   --/ The default value is false (position is absolute).
   --/
   --/ @param music    Music object
   --/ @param relative sfTrue to set the position relative, sfFalse to set it absolute
   --/
   --//////////////////////////////////////////////////////////
   procedure setRelativeToListener (music : sfMusic_Ptr; relative : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum distance of a music
   --/
   --/ The "minimum distance" of a music is the maximum
   --/ distance at which it is heard at its maximum volume. Further
   --/ than the minimum distance, it will start to fade out according
   --/ to its attenuation factor. A value of 0 ("inside the head
   --/ of the listener") is an invalid value and is forbidden.
   --/ The default value of the minimum distance is 1.
   --/
   --/ @param music    Music object
   --/ @param distance New minimum distance of the music
   --/
   --//////////////////////////////////////////////////////////
   procedure setMinDistance (music : sfMusic_Ptr; distance : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the maximum distance of the sound
   --/
   --/ The "maximum distance" of a sound is the minimum
   --/ distance at which it is heard at its minimum volume. Closer
   --/ than the maximum distance, it will start to fade in according
   --/ to its attenuation factor.
   --/ The default value of the maximum distance is the maximum
   --/ value a float can represent.
   --/
   --/ @param music    Music object
   --/ @param distance New maximum distance of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMaxDistance (music : sfMusic_Ptr; distance : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum gain of the sound
   --/
   --/ When the sound is further away from the listener than
   --/ the "maximum distance" the attenuated gain is clamped
   --/ so it cannot go below the minimum gain value.
   --/
   --/ @param music Music object
   --/ @param gain  New minimum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMinGain (music : sfMusic_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the maximum gain of the sound
   --/
   --/ When the sound is closer from the listener than
   --/ the "minimum distance" the attenuated gain is clamped
   --/ so it cannot go above the maximum gain value.
   --/
   --/ @param music Music object
   --/ @param gain  New maximum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMaxGain (music : sfMusic_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the attenuation factor of a music object
   --/
   --/ The attenuation is a multiplicative factor which makes
   --/ the music more or less loud according to its distance
   --/ from the listener. An attenuation of 0 will produce a
   --/ non-attenuated music, i.e. its volume will always be the same
   --/ whether it is heard from near or from far. On the other hand,
   --/ an attenuation value such as 100 will make the music fade out
   --/ very quickly as it gets further from the listener.
   --/ The default value of the attenuation is 1.
   --/
   --/ @param music       Music object
   --/ @param attenuation New attenuation factor of the music
   --/
   --//////////////////////////////////////////////////////////
   procedure setAttenuation (music : sfMusic_Ptr; attenuation : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current playing position of a music
   --/
   --/ The playing position can be changed when the music is
   --/ either paused or playing.
   --/
   --/ @param music      Music object
   --/ @param timeOffset New playing position
   --/
   --//////////////////////////////////////////////////////////
   procedure setPlayingOffset (music : sfMusic_Ptr; timeOffset : Sf.System.Time.sfTime);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pitch of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Pitch of the music
   --/
   --//////////////////////////////////////////////////////////
   function getPitch (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pan of the music
   --/
   --/ @param music Music object
   --/
   --/ @return Pan of the music
   --/
   --//////////////////////////////////////////////////////////
   function getPan (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the volume of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Volume of the music, in the range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   function getVolume (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether spatialization of the sound is enabled
   --/
   --/ @param music Music object
   --/
   --/ @return `true` if spatialization is enabled, `false` if it's disabled
   --/
   --//////////////////////////////////////////////////////////
   function isSpatializationEnabled (music : sfMusic_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D position of a music in the audio scene
   --/
   --/ @param music Music object
   --/
   --/ @return Position of the music in the world
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (music : sfMusic_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D position of a music in the audio scene
   --/
   --/ @param music Music object
   --/
   --/ @return Position of the music in the world
   --/
   --//////////////////////////////////////////////////////////
   function getDirection (music : sfMusic_Ptr) return Sf.System.Vector3.sfVector3f;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the cone properties of the sound in the audio scene
  --/
  --/ @param music Music object
  --/
  --/ @return Cone properties of the sound
  --/
  --//////////////////////////////////////////////////////////
   function getCone (music : sfMusic_Ptr) return Sf.Audio.SoundSourceCone.sfSoundSourceCone;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D velocity of the sound in the audio scene
   --/
   --/ @param music Music object
   --/
   --/ @return Velocity of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getVelocity (music : sfMusic_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the doppler factor of the sound
   --/
   --/ @param music Music object
   --/
   --/ @return Doppler factor of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getDopplerFactor (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the directional attenuation factor of the sound
   --/
   --/ @param music Music object
   --/
   --/ @return Directional attenuation factor of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getDirectionalAttenuationFactor (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a music's position is relative to the
   --/ listener or is absolute
   --/
   --/ @param music Music object
   --/
   --/ @return sfTrue if the position is relative, sfFalse if it's absolute
   --/
   --//////////////////////////////////////////////////////////
   function isRelativeToListener (music : sfMusic_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum distance of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Minimum distance of the music
   --/
   --//////////////////////////////////////////////////////////
   function getMinDistance (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum distance of the sound
   --/
   --/ @param music Music object
   --/
   --/ @return Maximum distance of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMaxDistance (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum gain of the sound
   --/
   --/ @param music Music object
   --/
   --/ @return Minimum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMinGain (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum gain of the sound
   --/
   --/ @param music Music object
   --/
   --/ @return Maximum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMaxGain (music : sfMusic_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the attenuation factor of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Attenuation factor of the music
   --/
   --//////////////////////////////////////////////////////////
   function getAttenuation (music : sfMusic_Ptr) return float;

private

   pragma Convention (C_Pass_By_Copy, sfTimeSpan);

   pragma Import (C, createFromMemory, "sfMusic_createFromMemory");
   pragma Import (C, createFromStream, "sfMusic_createFromStream");
   pragma Import (C, destroy, "sfMusic_destroy");
   pragma Import (C, setLooping, "sfMusic_setLooping");
   pragma Import (C, isLooping, "sfMusic_isLooping");
   pragma Import (C, setEffectProcessor, "sfMusic_setEffectProcessor");
   pragma Import (C, getDuration, "sfMusic_getDuration");
   pragma Import (C, getLoopPoints, "sfMusic_getLoopPoints");
   pragma Import (C, setLoopPoints, "sfMusic_setLoopPoints");
   pragma Import (C, play, "sfMusic_play");
   pragma Import (C, pause, "sfMusic_pause");
   pragma Import (C, stop, "sfMusic_stop");
   pragma Import (C, getChannelCount, "sfMusic_getChannelCount");
   pragma Import (C, getSampleRate, "sfMusic_getSampleRate");
   pragma Import (C, getChannelMap, "sfMusic_getChannelMap");
   pragma Import (C, getStatus, "sfMusic_getStatus");
   pragma Import (C, getPlayingOffset, "sfMusic_getPlayingOffset");
   pragma Import (C, setPitch, "sfMusic_setPitch");
   pragma Import (C, setPan, "sfMusic_setPan");
   pragma Import (C, setVolume, "sfMusic_setVolume");
   pragma Import (C, setSpatializationEnabled, "sfMusic_setSpatializationEnabled");
   pragma Import (C, setPosition, "sfMusic_setPosition");
   pragma Import (C, setDirection, "sfMusic_setDirection");
   pragma Import (C, setCone, "sfMusic_setCone");
   pragma Import (C, setVelocity, "sfMusic_setVelocity");
   pragma Import (C, setDopplerFactor, "sfMusic_setDopplerFactor");
   pragma Import (C, setDirectionalAttenuationFactor, "sfMusic_setDirectionalAttenuationFactor");
   pragma Import (C, setRelativeToListener, "sfMusic_setRelativeToListener");
   pragma Import (C, setMinDistance, "sfMusic_setMinDistance");
   pragma Import (C, setMaxDistance, "sfMusic_setMaxDistance");
   pragma Import (C, setMinGain, "sfMusic_setMinGain");
   pragma Import (C, setMaxGain, "sfMusic_setMaxGain");
   pragma Import (C, setAttenuation, "sfMusic_setAttenuation");
   pragma Import (C, setPlayingOffset, "sfMusic_setPlayingOffset");
   pragma Import (C, getPitch, "sfMusic_getPitch");
   pragma Import (C, getPan, "sfMusic_getPan");
   pragma Import (C, getVolume, "sfMusic_getVolume");
   pragma Import (C, isSpatializationEnabled, "sfMusic_isSpatializationEnabled");
   pragma Import (C, getPosition, "sfMusic_getPosition");
   pragma Import (C, getDirection, "sfMusic_getDirection");
   pragma Import (C, getCone, "sfMusic_getCone");
   pragma Import (C, getVelocity, "sfMusic_getVelocity");
   pragma Import (C, getDopplerFactor, "sfMusic_getDopplerFactor");
   pragma Import (C, getDirectionalAttenuationFactor, "sfMusic_getDirectionalAttenuationFactor");
   pragma Import (C, isRelativeToListener, "sfMusic_isRelativeToListener");
   pragma Import (C, getMinDistance, "sfMusic_getMinDistance");
   pragma Import (C, getMaxDistance, "sfMusic_getMaxDistance");
   pragma Import (C, getMinGain, "sfMusic_getMinGain");
   pragma Import (C, getMaxGain, "sfMusic_getMaxGain");
   pragma Import (C, getAttenuation, "sfMusic_getAttenuation");


end Sf.Audio.Music;
