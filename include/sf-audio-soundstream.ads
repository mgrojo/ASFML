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

with Sf.System.Time;
with Sf.System.Vector3;
with Sf.Audio.SoundStatus;
with Sf.Audio.SoundChannel;
with Sf.Audio.SoundSourceCone;
with Sf.Audio.EffectProcessor;

package Sf.Audio.SoundStream is

   --//////////////////////////////////////////////////////////
   --/ sfSoundStreamChunk defines the data to fill by the
   --/ OnGetData callback
   --//////////////////////////////////////////////////////////
   type sfSoundStreamChunk is record
      Samples   : sfInt16_Ptr;      --/< Pointer to the audio samples
      NbSamples : aliased sfUint32; --/< Number of samples pointed by Samples
   end record;

   --/< Type of the callback used to get a sound stream data
   type sfSoundStreamGetDataCallback is
     access function
       (chunk : access sfSoundStreamChunk; userData : Standard.System.Address)
        return sfBool;

   --/< Type of the callback used to seek in a sound stream
   type sfSoundStreamSeekCallback is
     access procedure
       (time : Sf.System.Time.sfTime; userData : Standard.System.Address);

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new sound stream
   --/
   --/ @param onGetData      Function called when the stream needs more data (can't be NULL)
   --/ @param onSeek         Function called when the stream seeks (can't be NULL)
   --/ @param channelCount   Number of channels to use (1 = mono, 2 = stereo)
   --/ @param sampleRate     Sample rate of the sound (44100 = CD quality)
   --/ @param channelMap     Optional pointer to the array describing how samples map to sound channels
   --/ @param channelMapSize Element count of @p channelMap
   --/ @param userData       Data to pass to the callback functions
   --/
   --/ @return A new sfSoundStream object
   --/
   --//////////////////////////////////////////////////////////
   function create
     (onGetData      : sfSoundStreamGetDataCallback;
      onSeek         : sfSoundStreamSeekCallback;
      channelCount   : sfUint32;
      sampleRate     : sfUint32;
      channelMap     : access constant Sf.Audio.SoundChannel.sfSoundChannel :=
        null;
      channelMapSize : sfSize_t := 0;
      userData       : Standard.System.Address := Standard.System.Null_Address)
      return sfSoundStream_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a sound stream
   --/
   --/ @param soundStream Sound stream to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Start or resume playing a sound stream
   --//////////////////////////////////////////////////////////
   procedure play (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Pause a sound stream
   --//////////////////////////////////////////////////////////
   procedure pause (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Stop playing a sound stream
   --//////////////////////////////////////////////////////////
   procedure stop (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current status of a sound stream (stopped, paused, playing)
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Current status
   --/
   --//////////////////////////////////////////////////////////
   function getStatus
     (soundStream : sfSoundStream_Ptr)
      return Sf.Audio.SoundStatus.sfSoundStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Return the number of channels of a sound stream
   --/
   --/ 1 channel means a mono sound, 2 means stereo, etc.
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Number of channels
   --/
   --//////////////////////////////////////////////////////////
   function getChannelCount (soundStream : sfSoundStream_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sample rate of a sound stream
   --/
   --/ The sample rate is the number of audio samples played per
   --/ second. The higher, the better the quality.
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Sample rate, in number of samples per second
   --/
   --//////////////////////////////////////////////////////////
   function getSampleRate (soundStream : sfSoundStream_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the map of sample positions to sound channels
   --/
   --/ @param soundStream Sound stream object
   --/ @param count       Pointer to a variable that will be filled with the number of channels in the map
   --/
   --/ @return Pointer to the current channel map
   --//////////////////////////////////////////////////////////
   function getChannelMap
     (soundStream : sfSoundStream_Ptr; count : access sfSize_t)
      return access constant Sf.Audio.SoundChannel.sfSoundChannel;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pitch of a sound stream
   --/
   --/ The pitch represents the perceived fundamental frequency
   --/ of a sound; thus you can make a stream more acute or grave
   --/ by changing its pitch. A side effect of changing the pitch
   --/ is to modify the playing speed of the stream as well.
   --/ The default value for the pitch is 1.
   --/
   --/ @param soundStream Sound stream object
   --/ @param pitch       New pitch to apply to the stream
   --/
   --//////////////////////////////////////////////////////////
   procedure setPitch (soundStream : sfSoundStream_Ptr; pitch : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pan of the sound
   --/
   --/ Using panning, a mono sound can be panned between
   --/ stereo channels. When the pan is set to -1, the sound
   --/ is played only on the left channel, when the pan is set
   --/ to +1, the sound is played only on the right channel.
   --/
   --/ @param soundStream Sound stream object
   --/ @param pan         New pan to apply to the sound [-1, +1]
   --/
   --//////////////////////////////////////////////////////////
   procedure setPan (soundStream : sfSoundStream_Ptr; pan : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the volume of a sound stream
   --/
   --/ The volume is a value between 0 (mute) and 100 (full volume).
   --/ The default value for the volume is 100.
   --/
   --/ @param soundStream Sound stream object
   --/ @param volume      Volume of the stream
   --/
   --//////////////////////////////////////////////////////////
   procedure setVolume (soundStream : sfSoundStream_Ptr; volume : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable spatialization for this stream
   --/
   --/ Spatialization is the application of various effects to
   --/ simulate a sound being emitted at a virtual position in
   --/ 3D space and exhibiting various physical phenomena such as
   --/ directional attenuation and doppler shift.
   --/
   --/ @param soundStream Sound stream object
   --/ @param enabled     `true` to enable spatialization, `false` to disable
   --/
   --//////////////////////////////////////////////////////////
   procedure setSpatializationEnabled
     (soundStream : sfSoundStream_Ptr; enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D position of a sound stream in the audio scene
   --/
   --/ Only streams with one channel (mono streams) can be
   --/ spatialized.
   --/ The default position of a stream is (0, 0, 0).
   --/
   --/ @param soundStream Sound stream object
   --/ @param position    Position of the stream in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition
     (soundStream : sfSoundStream_Ptr;
      position    : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D direction of the sound in the audio scene
   --/
   --/ The direction defines where the sound source is facing
   --/ in 3D space. It will affect how the sound is attenuated
   --/ if facing away from the listener.
   --/ The default direction of a sound is (0, 0, -1).
   --/
   --/ @param soundStream Sound stream object
   --/ @param direction   Direction of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setDirection
     (soundStream : sfSoundStream_Ptr;
      direction   : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the cone properties that control directional attenuation
   --/
   --/ The cone defines how directional attenuation is applied.
   --/ The default cone of a sound is (2 * PI, 2 * PI, 1).
   --/
   --/ @param soundStream Sound stream object
   --/ @param cone        Cone properties of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setCone
     (soundStream : sfSoundStream_Ptr;
      cone        : Sf.Audio.SoundSourceCone.sfSoundSourceCone);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D velocity of the sound in the audio scene
   --/
   --/ The velocity is used to determine how to doppler shift
   --/ the sound. Sounds moving towards the listener will be
   --/ perceived to have a higher pitch and sounds moving away
   --/ from the listener will be perceived to have a lower pitch.
   --/
   --/ @param soundStream Sound stream object
   --/ @param velocity    Velocity of the sound in the scene
   --/
   --//////////////////////////////////////////////////////////
   procedure setVelocity
     (soundStream : sfSoundStream_Ptr;
      velocity    : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the doppler factor of the sound
   --/
   --/ The doppler factor determines how strong the doppler
   --/ shift will be.
   --/
   --/ @param soundStream Sound stream object
   --/ @param factor      New doppler factor to apply to the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setDopplerFactor
     (soundStream : sfSoundStream_Ptr; factor : float);

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
   --/ @param soundStream Sound stream object
   --/ @param factor      New directional attenuation factor to apply to the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setDirectionalAttenuationFactor
     (soundStream : sfSoundStream_Ptr; factor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Make a sound stream's position relative to the listener or absolute
   --//////////////////////////////////////////////////////////
   procedure setRelativeToListener
     (soundStream : sfSoundStream_Ptr; relative : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum distance of a sound stream
   --/
   --/ The "minimum distance" of a stream is the maximum
   --/ distance at which it is heard at its maximum volume. Further
   --/ than the minimum distance, it will start to fade out according
   --/ to its attenuation factor. A value of 0 ("inside the head
   --/ of the listener") is an invalid value and is forbidden.
   --/ The default value of the minimum distance is 1.
   --/
   --/ @param soundStream Sound stream object
   --/ @param distance    New minimum distance of the stream
   --/
   --//////////////////////////////////////////////////////////
   procedure setMinDistance
     (soundStream : sfSoundStream_Ptr; distance : float);

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
   --/ @param soundStream Sound stream object
   --/ @param distance    New maximum distance of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMaxDistance
     (soundStream : sfSoundStream_Ptr; distance : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum gain of the sound
   --/
   --/ When the sound is further away from the listener than
   --/ the "maximum distance" the attenuated gain is clamped
   --/ so it cannot go below the minimum gain value.
   --/
   --/ @param soundStream Sound stream object
   --/ @param gain        New minimum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMinGain (soundStream : sfSoundStream_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the maximum gain of the sound
   --/
   --/ When the sound is closer from the listener than
   --/ the "minimum distance" the attenuated gain is clamped
   --/ so it cannot go above the maximum gain value.
   --/
   --/ @param soundStream Sound stream object
   --/ @param gain        New maximum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   procedure setMaxGain (soundStream : sfSoundStream_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the attenuation factor of a sound stream
   --/
   --/ The attenuation is a multiplicative factor which makes
   --/ the stream more or less loud according to its distance
   --/ from the listener. An attenuation of 0 will produce a
   --/ non-attenuated stream, i.e. its volume will always be the same
   --/ whether it is heard from near or from far. On the other hand,
   --/ an attenuation value such as 100 will make the stream fade out
   --/ very quickly as it gets further from the listener.
   --/ The default value of the attenuation is 1.
   --/
   --/ @param soundStream Sound stream object
   --/ @param attenuation New attenuation factor of the stream
   --/
   --//////////////////////////////////////////////////////////
   procedure setAttenuation
     (soundStream : sfSoundStream_Ptr; attenuation : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current playing position of a sound stream
   --/
   --/ The playing position can be changed when the stream is
   --/ either paused or playing.
   --/
   --/ @param soundStream Sound stream object
   --/ @param timeOffset  New playing position
   --/
   --//////////////////////////////////////////////////////////
   procedure setPlayingOffset
     (soundStream : sfSoundStream_Ptr; timeOffset : Sf.System.Time.sfTime);

   --//////////////////////////////////////////////////////////
   --/ @brief Set whether or not a sound stream should loop after reaching the end
   --/
   --/ If set, the stream will restart from beginning after
   --/ reaching the end and so on, until it is stopped or
   --/ sfSoundStream_setLooping(stream, false) is called.
   --/ The default looping state for sound streams is false.
   --/
   --/ @param soundStream Sound stream object
   --/ @param enable      true to play in loop, false to play once
   --/
   --//////////////////////////////////////////////////////////
   procedure setLooping (soundStream : sfSoundStream_Ptr; enable : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pitch of a sound stream
   --/ \brief Get the pitch of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Pitch of the stream
   --/
   --//////////////////////////////////////////////////////////
   function getPitch (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pan of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Pan of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getPan (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the volume of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Volume of the stream, in the range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   function getVolume (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether spatialization of the sound is enabled
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return `true` if spatialization is enabled, `false` if it's disabled
   --/
   --//////////////////////////////////////////////////////////
   function isSpatializationEnabled
     (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D position of a sound stream in the audio scene
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Position of the stream in the world
   --/
   --//////////////////////////////////////////////////////////
   function getPosition
     (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D direction of the sound in the audio scene
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Direction of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getDirection
     (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the cone properties of the sound in the audio scene
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Cone properties of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getCone
     (soundStream : sfSoundStream_Ptr)
      return Sf.Audio.SoundSourceCone.sfSoundSourceCone;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D velocity of the sound in the audio scene
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Velocity of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getVelocity
     (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the doppler factor of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Doppler factor of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getDopplerFactor (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the directional attenuation factor of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Directional attenuation factor of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getDirectionalAttenuationFactor
     (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a sound stream's position is relative to the listener
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return `true` if the position is relative, `false` if it's absolute
   --/
   --//////////////////////////////////////////////////////////
   function isRelativeToListener
     (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum distance of a sound stream
   --//////////////////////////////////////////////////////////
   function getMinDistance (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum distance of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Maximum distance of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMaxDistance (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum gain of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Minimum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMinGain (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum gain of the sound
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Maximum gain of the sound
   --/
   --//////////////////////////////////////////////////////////
   function getMaxGain (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the attenuation factor of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Attenuation factor of the stream
   --/
   --//////////////////////////////////////////////////////////
   function getAttenuation (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a sound stream is in loop mode
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return true if the music is looping, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isLooping (soundStream : sfSoundStream_Ptr) return sfBool;


   --//////////////////////////////////////////////////////////
   --/ @brief Attach an effect processor to the stream
   --/
   --/ The effect processor is a callable that will be called
   --/ with sound data to be processed.
   --/
   --/ @param soundStream Sound stream object
   --/ @param effectProcessor The effect processor to attach to this sound, attach an empty processor to disable processing
   --/
   --//////////////////////////////////////////////////////////
   procedure setEffectProcessor
     (soundStream     : sfSoundStream_Ptr;
      effectProcessor : Sf.Audio.EffectProcessor.sfEffectProcessor);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current playing position of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Current playing position
   --/
   --//////////////////////////////////////////////////////////
   function getPlayingOffset
     (soundStream : sfSoundStream_Ptr) return Sf.System.Time.sfTime;

private

   pragma Convention (C, sfSoundStreamGetDataCallback);
   pragma Convention (C, sfSoundStreamSeekCallback);
   pragma Convention (C_Pass_By_Copy, sfSoundStreamChunk);

   pragma Import (C, create, "sfSoundStream_create");
   pragma Import (C, destroy, "sfSoundStream_destroy");
   pragma Import (C, play, "sfSoundStream_play");
   pragma Import (C, pause, "sfSoundStream_pause");
   pragma Import (C, stop, "sfSoundStream_stop");
   pragma Import (C, getStatus, "sfSoundStream_getStatus");
   pragma Import (C, getChannelCount, "sfSoundStream_getChannelCount");
   pragma Import (C, getSampleRate, "sfSoundStream_getSampleRate");
   pragma Import (C, getChannelMap, "sfSoundStream_getChannelMap");
   pragma Import (C, setPitch, "sfSoundStream_setPitch");
   pragma Import (C, setPan, "sfSoundStream_setPan");
   pragma Import (C, setVolume, "sfSoundStream_setVolume");
   pragma Import (C, setSpatializationEnabled, "sfSoundStream_setSpatializationEnabled");
   pragma Import (C, setPosition, "sfSoundStream_setPosition");
   pragma Import (C, setDirection, "sfSoundStream_setDirection");
   pragma Import (C, setCone, "sfSoundStream_setCone");
   pragma Import (C, setVelocity, "sfSoundStream_setVelocity");
   pragma Import (C, setDopplerFactor, "sfSoundStream_setDopplerFactor");
   pragma Import (C, setDirectionalAttenuationFactor, "sfSoundStream_setDirectionalAttenuationFactor");
   pragma Import (C, setRelativeToListener, "sfSoundStream_setRelativeToListener");
   pragma Import (C, setMinDistance, "sfSoundStream_setMinDistance");
   pragma Import (C, setMaxDistance, "sfSoundStream_setMaxDistance");
   pragma Import (C, setMinGain, "sfSoundStream_setMinGain");
   pragma Import (C, setMaxGain, "sfSoundStream_setMaxGain");
   pragma Import (C, setAttenuation, "sfSoundStream_setAttenuation");
   pragma Import (C, setPlayingOffset, "sfSoundStream_setPlayingOffset");
   pragma Import (C, setLooping, "sfSoundStream_setLooping");
   pragma Import (C, setEffectProcessor, "sfSoundStream_setEffectProcessor");
   pragma Import (C, getPitch, "sfSoundStream_getPitch");
   pragma Import (C, getPan, "sfSoundStream_getPan");
   pragma Import (C, getVolume, "sfSoundStream_getVolume");
   pragma Import (C, isSpatializationEnabled, "sfSoundStream_isSpatializationEnabled");
   pragma Import (C, getPosition, "sfSoundStream_getPosition");
   pragma Import (C, getDirection, "sfSoundStream_getDirection");
   pragma Import (C, getCone, "sfSoundStream_getCone");
   pragma Import (C, getVelocity, "sfSoundStream_getVelocity");
   pragma Import (C, getDopplerFactor, "sfSoundStream_getDopplerFactor");
   pragma Import (C, getDirectionalAttenuationFactor, "sfSoundStream_getDirectionalAttenuationFactor");
   pragma Import (C, isRelativeToListener, "sfSoundStream_isRelativeToListener");
   pragma Import (C, getMinDistance, "sfSoundStream_getMinDistance");
   pragma Import (C, getMaxDistance, "sfSoundStream_getMaxDistance");
   pragma Import (C, getMinGain, "sfSoundStream_getMinGain");
   pragma Import (C, getMaxGain, "sfSoundStream_getMaxGain");
   pragma Import (C, getAttenuation, "sfSoundStream_getAttenuation");
   pragma Import (C, isLooping, "sfSoundStream_isLooping");
   pragma Import (C, getPlayingOffset, "sfSoundStream_getPlayingOffset");

end Sf.Audio.SoundStream;
