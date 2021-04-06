--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2018 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.System.InputStream;

with Sf.System.Time;
with Sf.Audio.SoundStatus;
with Sf.System.Vector3;

package Sf.Audio.Music is


   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Structure defining a time range
   --/
   --//////////////////////////////////////////////////////////
   --/< The beginning offset of the time range
   --/< The length of the time range
   type sfTimeSpan is record
      offset : aliased Sf.System.Time.sfTime;
      length : aliased Sf.System.Time.sfTime;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a file
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param filename Path of the music file to open
   --/
   --/ @return A new sfMusic object (NULL if failed)
   --/
   --//////////////////////////////////////////////////////////
   function createFromFile (filename : String) return sfMusic_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a file in memory
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param data        Pointer to the file data in memory
   --/ @param sizeInBytes Size of the data to load, in bytes
   --/
   --/ @return A new sfMusic object (NULL if failed)
   --/
   --//////////////////////////////////////////////////////////
   function createFromMemory (data : Standard.System.Address; sizeInBytes : sfSize_t) return sfMusic_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new music and load it from a custom stream
   --/
   --/ This function doesn't start playing the music (call
   --/ sfMusic_play to do so).
   --/ Here is a complete list of all the supported audio formats:
   --/ ogg, wav, flac, aiff, au, raw, paf, svx, nist, voc, ircam,
   --/ w64, mat4, mat5 pvf, htk, sds, avr, sd2, caf, wve, mpc2k, rf64.
   --/
   --/ @param stream Source stream to read from
   --/
   --/ @return A new sfMusic object (NULL if failed)
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
   --/ sfMusic_setLoop(music, sfFalse) is called.
   --/ The default looping state for musics is false.
   --/
   --/ @param music  Music object
   --/ @param inLoop sfTrue to play in loop, sfFalse to play once
   --/
   --//////////////////////////////////////////////////////////
   procedure setLoop (music : sfMusic_Ptr; inLoop : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a music is in loop mode
   --/
   --/ @param music Music object
   --/
   --/ @return sfTrue if the music is looping, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function getLoop (music : sfMusic_Ptr) return sfBool;

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
   --/ @return Loop Time position class.
   --/
   --/ @warning Since sfMusic_setLoopPoints() performs some adjustments on the
   --/ provided values and rounds them to internal samples, a call to
   --/ sfMusic_getLoopPoints() is not guaranteed to return the same times passed
   --/ into a previous call to sfMusic_setLoopPoints(). However, it is guaranteed
   --/ to return times that will map to the valid internal samples of
   --/ this Music if they are later passed to sfMusic_setLoopPoints().
   --/
   --/ @see setLoopPoints
   --/
   --//////////////////////////////////////////////////////////
   function getLoopPoints (music : sfMusic_Ptr) return sfTimeSpan;

   --//////////////////////////////////////////////////////////
   --/ @brief Sets the beginning and end of the sound's looping sequence using sf::Time
   --/
   --/ Loop points allow one to specify a pair of positions such that, when the music
   --/ is enabled for looping, it will seamlessly seek to the beginning whenever it
   --/ encounters the end. Valid ranges for timePoints.offset and timePoints.length are
   --/ [0, Dur) and (0, Dur-offset] respectively, where Dur is the value returned by sfMusic_getDuration().
   --/ Note that the EOF "loop point" from the end to the beginning of the stream is still honored,
   --/ in case the caller seeks to a point after the end of the loop range. This function can be
   --/ safely called at any point after a stream is opened, and will be applied to a playing sound
   --/ without affecting the current playing offset.
   --/
   --/ @warning Setting the loop points while the stream's status is Paused
   --/ will set its status to Stopped. The playing offset will be unaffected.
   --/
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
   --/ @brief Set the attenuation factor of a music
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
   --/ @brief Get the volume of a music
   --/
   --/ @param music Music object
   --/
   --/ @return Volume of the music, in the range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   function getVolume (music : sfMusic_Ptr) return float;

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
   --/ @brief Tell whether a music's position is relative to the
   --/        listener or is absolute
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
   pragma Import (C, setLoop, "sfMusic_setLoop");
   pragma Import (C, getLoop, "sfMusic_getLoop");
   pragma Import (C, getDuration, "sfMusic_getDuration");
   pragma Import (C, getLoopPoints, "sfMusic_getLoopPoints");
   pragma Import (C, setLoopPoints, "sfMusic_setLoopPoints");
   pragma Import (C, play, "sfMusic_play");
   pragma Import (C, pause, "sfMusic_pause");
   pragma Import (C, stop, "sfMusic_stop");
   pragma Import (C, getChannelCount, "sfMusic_getChannelCount");
   pragma Import (C, getSampleRate, "sfMusic_getSampleRate");
   pragma Import (C, getStatus, "sfMusic_getStatus");
   pragma Import (C, getPlayingOffset, "sfMusic_getPlayingOffset");
   pragma Import (C, setPitch, "sfMusic_setPitch");
   pragma Import (C, setVolume, "sfMusic_setVolume");
   pragma Import (C, setPosition, "sfMusic_setPosition");
   pragma Import (C, setRelativeToListener, "sfMusic_setRelativeToListener");
   pragma Import (C, setMinDistance, "sfMusic_setMinDistance");
   pragma Import (C, setAttenuation, "sfMusic_setAttenuation");
   pragma Import (C, setPlayingOffset, "sfMusic_setPlayingOffset");
   pragma Import (C, getPitch, "sfMusic_getPitch");
   pragma Import (C, getVolume, "sfMusic_getVolume");
   pragma Import (C, getPosition, "sfMusic_getPosition");
   pragma Import (C, isRelativeToListener, "sfMusic_isRelativeToListener");
   pragma Import (C, getMinDistance, "sfMusic_getMinDistance");
   pragma Import (C, getAttenuation, "sfMusic_getAttenuation");


end Sf.Audio.Music;
