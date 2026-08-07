--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2023 Laurent Gomila (laurent@sfml-dev.org)
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
   type sfSoundStreamGetDataCallback is access
     function (chunk    : access sfSoundStreamChunk;
               userData : Standard.System.Address) return sfBool;

   --/< Type of the callback used to seek in a sound stream
   type sfSoundStreamSeekCallback is access
     procedure (time     : Sf.System.Time.sfTime;
                userData : Standard.System.Address);

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
      channelMap     : access constant Sf.Audio.SoundChannel.sfSoundChannel := null;
      channelMapSize : sfSize_t := 0;
      userData       : Standard.System.Address) return sfSoundStream_Ptr;

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
   --/ @brief Get the map of sample positions to sound channels
   --/
   --/ @param count Filled with the number of entries in the returned map
   --/
   --/ @return Pointer to the current channel map
   --//////////////////////////////////////////////////////////
    function getChannelMap (soundStream : sfSoundStream_Ptr; count : access sfSize_t)
       return access constant Sf.Audio.SoundChannel.sfSoundChannel;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pitch of a sound stream
   --//////////////////////////////////////////////////////////
   procedure setPitch (soundStream : sfSoundStream_Ptr; pitch : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the pan of the sound
   --//////////////////////////////////////////////////////////
   procedure setPan (soundStream : sfSoundStream_Ptr; pan : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the volume of a sound stream
   --//////////////////////////////////////////////////////////
   procedure setVolume (soundStream : sfSoundStream_Ptr; volume : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable spatialization for this stream
   --//////////////////////////////////////////////////////////
   procedure setSpatializationEnabled (soundStream : sfSoundStream_Ptr; enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D position of a sound stream in the audio scene
   --//////////////////////////////////////////////////////////
   procedure setPosition (soundStream : sfSoundStream_Ptr; position : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D direction of the sound in the audio scene
   --//////////////////////////////////////////////////////////
   procedure setDirection (soundStream : sfSoundStream_Ptr; direction : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the cone properties that control directional attenuation
   --//////////////////////////////////////////////////////////
   procedure setCone (soundStream : sfSoundStream_Ptr; cone : Sf.Audio.SoundSourceCone.sfSoundSourceCone);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the 3D velocity of the sound in the audio scene
   --//////////////////////////////////////////////////////////
   procedure setVelocity (soundStream : sfSoundStream_Ptr; velocity : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the doppler factor of the sound
   --//////////////////////////////////////////////////////////
   procedure setDopplerFactor (soundStream : sfSoundStream_Ptr; factor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the directional attenuation factor of the sound
   --//////////////////////////////////////////////////////////
   procedure setDirectionalAttenuationFactor (soundStream : sfSoundStream_Ptr; factor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Make a sound stream's position relative to the listener or absolute
   --//////////////////////////////////////////////////////////
   procedure setRelativeToListener (soundStream : sfSoundStream_Ptr; relative : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum distance of a sound stream
   --//////////////////////////////////////////////////////////
   procedure setMinDistance (soundStream : sfSoundStream_Ptr; distance : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the maximum distance of the sound
   --//////////////////////////////////////////////////////////
   procedure setMaxDistance (soundStream : sfSoundStream_Ptr; distance : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the minimum gain of the sound
   --//////////////////////////////////////////////////////////
   procedure setMinGain (soundStream : sfSoundStream_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the maximum gain of the sound
   --//////////////////////////////////////////////////////////
   procedure setMaxGain (soundStream : sfSoundStream_Ptr; gain : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the attenuation factor of a sound stream
   --//////////////////////////////////////////////////////////
   procedure setAttenuation (soundStream : sfSoundStream_Ptr; attenuation : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current playing position of a sound stream
   --//////////////////////////////////////////////////////////
   procedure setPlayingOffset (soundStream : sfSoundStream_Ptr; timeOffset : Sf.System.Time.sfTime);

   --//////////////////////////////////////////////////////////
   --/ @brief Set whether or not a sound stream should loop after reaching the end
   --//////////////////////////////////////////////////////////
   procedure setLooping (soundStream : sfSoundStream_Ptr; enable : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Attach an effect processor to the stream
   --//////////////////////////////////////////////////////////
   procedure setEffectProcessor (soundStream : sfSoundStream_Ptr; effectProcessor : Sf.Audio.EffectProcessor.sfEffectProcessor);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pitch of a sound stream
   --//////////////////////////////////////////////////////////
   function getPitch (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the pan of the sound
   --//////////////////////////////////////////////////////////
   function getPan (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the volume of a sound stream
   --//////////////////////////////////////////////////////////
   function getVolume (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether spatialization of the sound is enabled
   --//////////////////////////////////////////////////////////
   function isSpatializationEnabled (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D position of a sound stream in the audio scene
   --//////////////////////////////////////////////////////////
   function getPosition (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D direction of the sound in the audio scene
   --//////////////////////////////////////////////////////////
   function getDirection (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the cone properties of the sound in the audio scene
   --//////////////////////////////////////////////////////////
   function getCone (soundStream : sfSoundStream_Ptr) return Sf.Audio.SoundSourceCone.sfSoundSourceCone;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the 3D velocity of the sound in the audio scene
   --//////////////////////////////////////////////////////////
   function getVelocity (soundStream : sfSoundStream_Ptr) return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the doppler factor of the sound
   --//////////////////////////////////////////////////////////
   function getDopplerFactor (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the directional attenuation factor of the sound
   --//////////////////////////////////////////////////////////
   function getDirectionalAttenuationFactor (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a sound stream's position is relative to the listener
   --//////////////////////////////////////////////////////////
   function isRelativeToListener (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum distance of a sound stream
   --//////////////////////////////////////////////////////////
   function getMinDistance (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum distance of the sound
   --//////////////////////////////////////////////////////////
   function getMaxDistance (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the minimum gain of the sound
   --//////////////////////////////////////////////////////////
   function getMinGain (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum gain of the sound
   --//////////////////////////////////////////////////////////
   function getMaxGain (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the attenuation factor of a sound stream
   --//////////////////////////////////////////////////////////
   function getAttenuation (soundStream : sfSoundStream_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a sound stream is in loop mode
   --//////////////////////////////////////////////////////////
   function isLooping (soundStream : sfSoundStream_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current playing position of a sound stream
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
