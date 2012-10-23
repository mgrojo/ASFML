-- ////////////////////////////////////////////////////////////
-- //
-- // SFML - Simple and Fast Multimedia Library
-- // Copyright (C) 2007-2009 Laurent Gomila (laurent.gom@gmail.com)
-- //
-- // This software is provided 'as-is', without any express or implied warranty.
-- // In no event will the authors be held liable for any damages arising from the use of this software.
-- //
-- // Permission is granted to anyone to use this software for any purpose,
-- // including commercial applications, and to alter it and redistribute it freely,
-- // subject to the following restrictions:
-- //
-- // 1. The origin of this software must not be misrepresented;
-- //    you must not claim that you wrote the original software.
-- //    If you use this software in a product, an acknowledgment
-- //    in the product documentation would be appreciated but is not required.
-- //
-- // 2. Altered source versions must be plainly marked as such,
-- //    and must not be misrepresented as being the original software.
-- //
-- // 3. This notice may not be removed or altered from any source distribution.
-- //
-- ////////////////////////////////////////////////////////////

-- ////////////////////////////////////////////////////////////
-- // Headers
-- ////////////////////////////////////////////////////////////
with Sf.Config;
with Sf.Audio.SoundStatus;
with Sf.Audio.Types;

package Sf.Audio.SoundStream is
   use Sf.Config;
   use Sf.Audio.SoundStatus;
   use Sf.Audio.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// sfSoundStreamChunk defines the data to fill by the
   -- /// OnGetData callback
   -- ////////////////////////////////////////////////////////////
   type sfSoundStreamChunk is record
      Samples   : access sfInt16;   -- ///< Pointer to the audio samples
      NbSamples : aliased sfUint32; -- ///< Number of samples pointed by Samples
   end record;

   type sfSoundStreamStartCallback is access function (Arg0 : sfVoid_Ptr) return sfBool; -- ///< Type of the callback used to start a sound stream
   type sfSoundStreamGetDataCallback is access function (Arg0 : access sfSoundStreamChunk; Arg1 : sfVoid_Ptr) return sfBool; -- ///< Type of the callback used to get a sound stream data

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new sound stream
   -- ///
   -- /// \param OnStart :       Function called when the stream starts (can be NULL)
   -- /// \param OnGetData :     Function called when the stream needs more data (can't be NULL)
   -- /// \param ChannelsCount : Number of channels to use (1 = mono, 2 = stereo)
   -- /// \param SampleRate :    Sample rate of the sound (44100 = CD quality)
   -- /// \param UserData :      Data to pass to the callback functions
   -- ///
   -- /// \return A new sfSoundStream object (NULL if failed)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_Create
     (OnStart       : sfSoundStreamStartCallback;
      OnGetData     : sfSoundStreamGetDataCallback;
      ChannelsCount : sfUint32;
      SampleRate    : sfUint32;
      UserData      : sfVoid_Ptr)
      return          sfSoundStream_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_Destroy (SoundStream : sfSoundStream_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Start playing a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to play
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_Play (SoundStream : sfSoundStream_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Pause a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to pause
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_Pause (SoundStream : sfSoundStream_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Stop playing a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to stop
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_Stop (SoundStream : sfSoundStream_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the status of a sound stream (stopped, paused, playing)
   -- ///
   -- /// \param SoundStream : Sound stream to get the status from
   -- ///
   -- /// \return Current status of the sound stream
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetStatus (SoundStream : sfSoundStream_Ptr) return sfSoundStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Return the number of channels of a sound stream
   -- /// (1 = mono, 2 = stereo)
   -- ///
   -- /// \param SoundStream : Sound stream to get the channels count from
   -- ///
   -- /// \return Number of channels
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetChannelsCount (SoundStream : sfSoundStream_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the sample rate of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the sample rate from
   -- ///
   -- /// \return Stream frequency (number of samples per second)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetSampleRate (SoundStream : sfSoundStream_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Set the pitch of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param Pitch :       New pitch
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetPitch (SoundStream : sfSoundStream_Ptr; Pitch : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the volume of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param Volume :      Volume (in range [0, 100])
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetVolume (SoundStream : sfSoundStream_Ptr; Volume : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the position of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param X :           X position of the sound stream in the world
   -- /// \param Y :           Y position of the sound stream in the world
   -- /// \param Z :           Z position of the sound stream in the world
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetPosition (SoundStream : sfSoundStream_Ptr; X, Y, Z : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Make the sound stream's position relative to the listener's
   -- /// position, or absolute.
   -- /// The default value is false (absolute)
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param Relative :    True to set the position relative, false to set it absolute
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetRelativeToListener (SoundStream : sfSoundStream_Ptr; Relative : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the minimum distance - closer than this distance,
   -- /// the listener will hear the sound stream at its maximum volume.
   -- /// The default minimum distance is 1.0
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param MinDistance : New minimum distance for the sound stream
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetMinDistance (SoundStream : sfSoundStream_Ptr; MinDistance : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the attenuation factor - the higher the attenuation, the
   -- /// more the sound stream will be attenuated with distance from listener.
   -- /// The default attenuation factor 1.0
   -- ///
   -- /// \param SoundStream : Sound stream to modify
   -- /// \param Attenuation : New attenuation factor for the sound stream
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetAttenuation (SoundStream : sfSoundStream_Ptr; Attenuation : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set a stream loop state
   -- ///
   -- /// \param SoundStream : Stream to set the loop state
   -- /// \param Loop :        sfTrue to play in loop, sfFalse to play once
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_SetLoop (SoundStream : sfSoundStream_Ptr; Enable : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the pitch of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the pitch from
   -- ///
   -- /// \return Pitch value
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetPitch (SoundStream : sfSoundStream_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the volume of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the volume from
   -- ///
   -- /// \return Volume value (in range [1, 100])
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetVolume (SoundStream : sfSoundStream_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the position of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the position from
   -- /// \param X :           X position of the sound stream in the world
   -- /// \param Y :           Y position of the sound stream in the world
   -- /// \param Z :           Z position of the sound stream in the world
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundStream_GetPosition (SoundStream : sfSoundStream_Ptr; X, Y, Z : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Tell if the sound stream's position is relative to the listener's
   -- /// position, or if it's absolute
   -- ///
   -- /// \param SoundStream : Sound stream to check
   -- ///
   -- /// \return sfTrue if the position is relative, sfFalse if it's absolute
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_IsRelativeToListener (SoundStream : sfSoundStream_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the minimum distance of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the minimum distance from
   -- ///
   -- /// \return Minimum distance for the sound stream
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetMinDistance (SoundStream : sfSoundStream_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the attenuation factor of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the attenuation factor from
   -- ///
   -- /// \return Attenuation factor for the sound stream
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetAttenuation (SoundStream : sfSoundStream_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Tell whether or not a stream is looping
   -- ///
   -- /// \param SoundStream : Soundstream to get the loop state from
   -- ///
   -- /// \return sfTrue if the stream is looping, sfFalse otherwise
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetLoop (SoundStream : sfSoundStream_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current playing position of a sound stream
   -- ///
   -- /// \param SoundStream : Sound stream to get the position from
   -- ///
   -- /// \return Current playing position, expressed in seconds
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundStream_GetPlayingOffset (SoundStream : sfSoundStream_Ptr) return Float;

private

   pragma Convention (C, sfSoundStreamStartCallback);
   pragma Convention (C, sfSoundStreamGetDataCallback);
   pragma Convention (C_Pass_By_Copy, sfSoundStreamChunk);

   pragma Import (C, sfSoundStream_Create, "sfSoundStream_Create");
   pragma Import (C, sfSoundStream_Destroy, "sfSoundStream_Destroy");
   pragma Import (C, sfSoundStream_Play, "sfSoundStream_Play");
   pragma Import (C, sfSoundStream_Pause, "sfSoundStream_Pause");
   pragma Import (C, sfSoundStream_Stop, "sfSoundStream_Stop");
   pragma Import (C, sfSoundStream_GetStatus, "sfSoundStream_GetStatus");
   pragma Import (C, sfSoundStream_GetChannelsCount, "sfSoundStream_GetChannelsCount");
   pragma Import (C, sfSoundStream_GetSampleRate, "sfSoundStream_GetSampleRate");
   pragma Import (C, sfSoundStream_SetPitch, "sfSoundStream_SetPitch");
   pragma Import (C, sfSoundStream_SetVolume, "sfSoundStream_SetVolume");
   pragma Import (C, sfSoundStream_SetPosition, "sfSoundStream_SetPosition");
   pragma Import (C, sfSoundStream_SetRelativeToListener, "sfSoundStream_SetRelativeToListener");
   pragma Import (C, sfSoundStream_SetMinDistance, "sfSoundStream_SetMinDistance");
   pragma Import (C, sfSoundStream_SetAttenuation, "sfSoundStream_SetAttenuation");
   pragma Import (C, sfSoundStream_SetLoop, "sfSoundStream_SetLoop");
   pragma Import (C, sfSoundStream_GetPitch, "sfSoundStream_GetPitch");
   pragma Import (C, sfSoundStream_GetVolume, "sfSoundStream_GetVolume");
   pragma Import (C, sfSoundStream_GetPosition, "sfSoundStream_GetPosition");
   pragma Import (C, sfSoundStream_IsRelativeToListener, "sfSoundStream_IsRelativeToListener");
   pragma Import (C, sfSoundStream_GetMinDistance, "sfSoundStream_GetMinDistance");
   pragma Import (C, sfSoundStream_GetAttenuation, "sfSoundStream_GetAttenuation");
   pragma Import (C, sfSoundStream_GetLoop, "sfSoundStream_GetLoop");
   pragma Import (C, sfSoundStream_GetPlayingOffset, "sfSoundStream_GetPlayingOffset");

end Sf.Audio.SoundStream;
