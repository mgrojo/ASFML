--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2015 Laurent Gomila (laurent@sfml-dev.org)
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
with Sf.Audio.SoundStatus;
with Sf.System.Vector3;

package Sf.Audio.SoundStream is

   --//////////////////////////////////////////////////////////
   --/ sfSoundStreamChunk defines the data to fill by the
   --/ OnGetData callback
   --//////////////////////////////////////////////////////////
   type sfSoundStreamChunk is record
      Samples   : sfInt16_Ptr;   --/< Pointer to the audio samples
      NbSamples : aliased sfUint32; --/< Number of samples pointed by Samples
   end record;

   --/< Type of the callback used to get a sound stream data
   type sfSoundStreamGetDataCallback is access
     function (chunk : access sfSoundStreamChunk;
               userData : Standard.System.Address) return sfBool;
   
   --/< Type of the callback used to seek in a sound stream
   type sfSoundStreamSeekCallback is access
     procedure (time : Sf.System.Time.sfTime; userData : Standard.System.Address);

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new sound stream
   --/
   --/ @param onGetData    Function called when the stream needs more data (can't be NULL)
   --/ @param onSeek       Function called when the stream seeks (can't be NULL)
   --/ @param channelCount Number of channels to use (1 = mono, 2 = stereo)
   --/ @param sampleRate   Sample rate of the sound (44100 = CD quality)
   --/ @param userData     Data to pass to the callback functions
   --/
   --/ @return A new sfSoundStream object
   --/
   --//////////////////////////////////////////////////////////
   function create
     (onGetData    : sfSoundStreamGetDataCallback;
      onSeek       : sfSoundStreamSeekCallback;
      channelCount : sfUint32;
      sampleRate   : sfUint32;
      userData     : Standard.System.Address) return sfSoundStream_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a sound stream
   --/
   --/ @param soundStream Sound stream to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Start or resume playing a sound stream
   --/
   --/ This function starts the stream if it was stopped, resumes
   --/ it if it was paused, and restarts it from beginning if it
   --/ was it already playing.
   --/ This function uses its own thread so that it doesn't block
   --/ the rest of the program while the music is played.
   --/
   --/ @param soundStream Sound stream object
   --/
   --//////////////////////////////////////////////////////////
   procedure play (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Pause a sound stream
   --/
   --/ This function pauses the stream if it was playing,
   --/ otherwise (stream already paused or stopped) it has no effect.
   --/
   --/ @param soundStream Sound stream object
   --/
   --//////////////////////////////////////////////////////////
   procedure pause (soundStream : sfSoundStream_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Stop playing a sound stream
   --/
   --/ This function stops the stream if it was playing or paused,
   --/ and does nothing if it was already stopped.
   --/ It also resets the playing position (unlike sfSoundStream_pause).
   --/
   --/ @param soundStream Sound stream object
   --/
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
   function getStatus (soundStream : sfSoundStream_Ptr) return Sf.Audio.SoundStatus.sfSoundStatus;

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
   procedure setPosition (soundStream : sfSoundStream_Ptr;
                                        position    : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Make a sound stream's position relative to the listener or absolute
   --/
   --/ Making a stream relative to the listener will ensure that it will always
   --/ be played the same way regardless the position of the listener.
   --/ This can be useful for non-spatialized streams, streams that are
   --/ produced by the listener, or streams attached to it.
   --/ The default value is false (position is absolute).
   --/
   --/ @param soundStream Sound stream object
   --/ @param relative    sfTrue to set the position relative, sfFalse to set it absolute
   --/
   --//////////////////////////////////////////////////////////
   procedure setRelativeToListener (soundStream : sfSoundStream_Ptr; relative : sfBool);

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
   procedure setMinDistance (soundStream : sfSoundStream_Ptr; distance : float);

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
   procedure setAttenuation (soundStream : sfSoundStream_Ptr; attenuation : float);

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
   procedure setPlayingOffset (soundStream : sfSoundStream_Ptr;
                                             timeOffset : Sf.System.Time.sfTime);

   --//////////////////////////////////////////////////////////
   --/ @brief Set whether or not a sound stream should loop after reaching the end
   --/
   --/ If set, the stream will restart from beginning after
   --/ reaching the end and so on, until it is stopped or
   --/ sfSoundStream_setLoop(stream, sfFalse) is called.
   --/ The default looping state for sound streams is false.
   --/
   --/ @param soundStream Sound stream object
   --/ @param inLoop      sfTrue to play in loop, sfFalse to play once
   --/
   --//////////////////////////////////////////////////////////
   procedure setLoop (soundStream : sfSoundStream_Ptr; inLoop : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pitch of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Pitch of the stream
   --/
   --//////////////////////////////////////////////////////////
   function getPitch (soundStream : sfSoundStream_Ptr) return float;

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
   --/ @brief Get the 3D position of a sound stream in the audio scene
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Position of the stream in the world
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a sound stream's position is relative to the
   --/        listener or is absolute
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return sfTrue if the position is relative, sfFalse if it's absolute
   --/
   --//////////////////////////////////////////////////////////
   function isRelativeToListener (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum distance of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Minimum distance of the stream
   --/
   --//////////////////////////////////////////////////////////
   function getMinDistance (soundStream : sfSoundStream_Ptr) return float;

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
   --/ @return sfTrue if the music is looping, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function getLoop (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current playing position of a sound stream
   --/
   --/ @param soundStream Sound stream object
   --/
   --/ @return Current playing position
   --/
   --//////////////////////////////////////////////////////////
   function getPlayingOffset (soundStream : sfSoundStream_Ptr) return Sf.System.Time.sfTime;

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
   pragma Import (C, setPitch, "sfSoundStream_setPitch");
   pragma Import (C, setVolume, "sfSoundStream_setVolume");
   pragma Import (C, setPosition, "sfSoundStream_setPosition");
   pragma Import (C, setRelativeToListener, "sfSoundStream_setRelativeToListener");
   pragma Import (C, setMinDistance, "sfSoundStream_setMinDistance");
   pragma Import (C, setAttenuation, "sfSoundStream_setAttenuation");
   pragma Import (C, setPlayingOffset, "sfSoundStream_setPlayingOffset");
   pragma Import (C, setLoop, "sfSoundStream_setLoop");
   pragma Import (C, getPitch, "sfSoundStream_getPitch");
   pragma Import (C, getVolume, "sfSoundStream_getVolume");
   pragma Import (C, getPosition, "sfSoundStream_getPosition");
   pragma Import (C, isRelativeToListener, "sfSoundStream_isRelativeToListener");
   pragma Import (C, getMinDistance, "sfSoundStream_getMinDistance");
   pragma Import (C, getAttenuation, "sfSoundStream_getAttenuation");
   pragma Import (C, getLoop, "sfSoundStream_getLoop");
   pragma Import (C, getPlayingOffset, "sfSoundStream_getPlayingOffset");


end Sf.Audio.SoundStream;
