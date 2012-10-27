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
with Sf.Audio.Types;

package Sf.Audio.SoundRecorder is
   use Sf.Config;
   use Sf.Audio.Types;

   type sfSoundRecorderStartCallback is access function (Arg0 : sfVoid_Ptr) return sfBool; -- ///< Type of the callback used when starting a capture
   type sfSoundRecorderProcessCallback is access function
     (Arg0 : sfInt16_Ptr;
      Arg1 : sfSize_t;
      Arg2 : sfVoid_Ptr)
      return sfBool; -- ///< Type of the callback used to process audio data
   type sfSoundRecorderStopCallback is access procedure (Arg0 : sfVoid_Ptr); -- ///< Type of the callback used when stopping a capture

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new sound recorder with callback functions
   -- /// for processing captured samples
   -- ///
   -- /// \param OnStart :   Callback function which will be called when a new capture starts (can be NULL)
   -- /// \param OnProcess : Callback function which will be called each time there's audio data to process
   -- /// \param OnStop :    Callback function which will be called when the current capture stops (can be NULL)
   -- /// \param UserData :  Data to pass to the callback function (can be NULL)
   -- ///
   -- /// \return A new sfSoundRecorder object (NULL if failed)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundRecorder_Create
     (OnStart   : sfSoundRecorderStartCallback;
      OnProcess : sfSoundRecorderProcessCallback;
      OnStop    : sfSoundRecorderStopCallback;
      UserData  : sfVoid_Ptr)
      return      sfSoundRecorder_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing sound recorder
   -- ///
   -- /// \param SoundRecorder : Sound recorder to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundRecorder_Destroy (SoundRecorder : sfSoundRecorder_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Start the capture.
   -- /// Warning : only one capture can happen at the same time
   -- ///
   -- /// \param SoundRecorder : Sound recorder to start
   -- /// \param SampleRate :    Sound frequency (the more samples, the higher the quality)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundRecorder_Start (SoundRecorder : sfSoundRecorder_Ptr; SampleRate : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Stop the capture
   -- ///
   -- /// \param SoundRecorder : Sound recorder to stop
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSoundRecorder_Stop (SoundRecorder : sfSoundRecorder_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the sample rate of a sound recorder
   -- ///
   -- /// \param SoundRecorder : Sound recorder to get sample rate from
   -- ///
   -- /// \return Frequency, in samples per second
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundRecorder_GetSampleRate (SoundRecorder : sfSoundRecorder_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Tell if the system supports sound capture.
   -- /// If not, this class won't be usable
   -- ///
   -- /// \return sfTrue if audio capture is supported
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundRecorder_CanCapture return sfBool;

private

   pragma Convention (C, sfSoundRecorderStartCallback);
   pragma Convention (C, sfSoundRecorderProcessCallback);
   pragma Convention (C, sfSoundRecorderStopCallback);

   pragma Import (C, sfSoundRecorder_Create, "sfSoundRecorder_Create");
   pragma Import (C, sfSoundRecorder_Destroy, "sfSoundRecorder_Destroy");
   pragma Import (C, sfSoundRecorder_Start, "sfSoundRecorder_Start");
   pragma Import (C, sfSoundRecorder_Stop, "sfSoundRecorder_Stop");
   pragma Import (C, sfSoundRecorder_GetSampleRate, "sfSoundRecorder_GetSampleRate");
   pragma Import (C, sfSoundRecorder_CanCapture, "sfSoundRecorder_CanCapture");

end Sf.Audio.SoundRecorder;
