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

with Interfaces.C; use Interfaces.C;

with Interfaces.C.Strings;

with System;

with Sf.Config;
with Sf.Audio.Types;
with Sf.System.Time;

package Sf.Audio.SoundRecorder is
   use Config, Types;

   --/< Type of the callback used when starting a capture
   type sfSoundRecorderStartCallback is access function
     (userData : Standard.System.Address) return sfBool;
   pragma Convention (C, sfSoundRecorderStartCallback);

   --/< Type of the callback used to process audio data
   type sfSoundRecorderProcessCallback is access function
     (arg1     : access Sf.Config.sfInt16;
      arg2     : size_t;
      userData : Standard.System.Address) return sfBool;
   pragma Convention (C, sfSoundRecorderProcessCallback);

   --/< Type of the callback used when stopping a capture
   type sfSoundRecorderStopCallback is access procedure (userData : Standard.System.Address);
   pragma Convention (C, sfSoundRecorderStopCallback);

   --//////////////////////////////////////////////////////////
   --/ \brief Construct a new sound recorder from callback functions
   --/
   --/ \param onStart   Callback function which will be called when a new capture starts (can be NULL)
   --/ \param onProcess Callback function which will be called each time there's audio data to process
   --/ \param onStop    Callback function which will be called when the current capture stops (can be NULL)
   --/ \param userData  Data to pass to the callback function (can be NULL)
   --/
   --/ \return A new sfSoundRecorder object (NULL if failed)
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_create
     (onStart : sfSoundRecorderStartCallback;
      onProcess : sfSoundRecorderProcessCallback;
      onStop : sfSoundRecorderStopCallback;
      userData : Standard.System.Address) return sfSoundRecorder_Ptr;

   --//////////////////////////////////////////////////////////
   --/ \brief Destroy a sound recorder
   --/
   --/ \param soundRecorder Sound recorder to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSoundRecorder_destroy (soundRecorder : sfSoundRecorder_Ptr);

   --//////////////////////////////////////////////////////////
   --/ \brief Start the capture of a sound recorder
   --/
   --/ The \a sampleRate parameter defines the number of audio samples
   --/ captured per second. The higher, the better the quality
   --/ (for example, 44100 samples/sec is CD quality).
   --/ This function uses its own thread so that it doesn't block
   --/ the rest of the program while the capture runs.
   --/ Please note that only one capture can happen at the same time.
   --/
   --/ \param soundRecorder Sound recorder object
   --/ \param sampleRate    Desired capture rate, in number of samples per second
   --/
   --/ \return True, if start of capture was successful
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_start (soundRecorder : sfSoundRecorder_Ptr; sampleRate : unsigned) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ \brief Stop the capture of a sound recorder
   --/
   --/ \param soundRecorder Sound recorder object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSoundRecorder_stop (soundRecorder : sfSoundRecorder_Ptr);

   --//////////////////////////////////////////////////////////
   --/ \brief Get the sample rate of a sound recorder
   --/
   --/ The sample rate defines the number of audio samples
   --/ captured per second. The higher, the better the quality
   --/ (for example, 44100 samples/sec is CD quality).
   --/
   --/ \param soundRecorder Sound recorder object
   --/
   --/ \return Sample rate, in samples per second
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_getSampleRate (soundRecorder : sfSoundRecorder_Ptr) return unsigned;

   --//////////////////////////////////////////////////////////
   --/ \brief Check if the system supports audio capture
   --/
   --/ This function should always be called before using
   --/ the audio capture features. If it returns false, then
   --/ any attempt to use sfSoundRecorder will fail.
   --/
   --/ \return sfTrue if audio capture is supported, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_isAvailable return sfBool;

   --//////////////////////////////////////////////////////////
   --/ \brief Set the processing interval
   --/
   --/ The processing interval controls the period
   --/ between calls to the onProcessSamples function. You may
   --/ want to use a small interval if you want to process the
   --/ recorded data in real time, for example.
   --/
   --/ Note: this is only a hint, the actual period may vary.
   --/ So don't rely on this parameter to implement precise timing.
   --/
   --/ The default processing interval is 100 ms.
   --/
   --/ \param soundRecorder Sound recorder object
   --/ \param interval      Processing interval
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSoundRecorder_setProcessingInterval (soundRecorder : sfSoundRecorder_Ptr; interval : Sf.System.Time.sfTime);

   --//////////////////////////////////////////////////////////
   --/ \brief Get a list of the names of all availabe audio capture devices
   --/
   --/ This function returns an array of strings
   --/ containing the names of all availabe audio capture devices.
   --/ If no devices are available then an empty array is returned.
   --/
   --/ \return An array of strings containing the names
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_getAvailableDevices return sfArrayOfStrings;


   --//////////////////////////////////////////////////////////
   --/ \brief Get the name of the default audio capture device
   --/
   --/ This function returns the name of the default audio
   --/ capture device. If none is available, NULL is returned.
   --/
   --/ \return The name of the default audio capture device (null terminated)
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_getDefaultDevice return Interfaces.C.Strings.chars_ptr;

   --//////////////////////////////////////////////////////////
   --/ \brief Set the audio capture device
   --/
   --/ This function sets the audio capture device to the device
   --/ with the given name. It can be called on the fly (i.e:
   --/ while recording). If you do so while recording and
   --/ opening the device fails, it stops the recording.
   --/
   --/ \param soundRecorder Sound recorder object
   --/ \param name          The name of the audio capture device
   --/
   --/ \return sfTrue, if it was able to set the requested device
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_setDevice (soundRecorder : sfSoundRecorder_Ptr; name : String) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ \brief Get the name of the current audio capture device
   --/
   --/ \param soundRecorder Sound recorder object
   --/
   --/ \return The name of the current audio capture device
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_getDevice (soundRecorder : sfSoundRecorder_Ptr) return String;

   --//////////////////////////////////////////////////////////
   --/ \brief Set the channel count of the audio capture device
   --/
   --/ This method allows you to specify the number of channels
   --/ used for recording. Currently only 16-bit mono and
   --/ 16-bit stereo are supported.
   --/
   --/ \param channelCount Number of channels. Currently only
   --/                     mono (1) and stereo (2) are supported.
   --/
   --/ \see sfSoundRecorder_getChannelCount
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSoundRecorder_setChannelCount (soundRecorder : sfSoundRecorder_Ptr;
                                              channelCount : unsigned);

   --//////////////////////////////////////////////////////////
   --/ \brief Get the number of channels used by this recorder
   --/
   --/ Currently only mono and stereo are supported, so the
   --/ value is either 1 (for mono) or 2 (for stereo).
   --/
   --/ \return Number of channels
   --/
   --/ \see sfSoundRecorder_setChannelCount
   --/
   --//////////////////////////////////////////////////////////
   function sfSoundRecorder_getChannelCount (soundRecorder : sfSoundRecorder_Ptr) return unsigned;

private

   pragma Import (C, sfSoundRecorder_create, "sfSoundRecorder_create");
   pragma Import (C, sfSoundRecorder_destroy, "sfSoundRecorder_destroy");
   pragma Import (C, sfSoundRecorder_start, "sfSoundRecorder_start");
   pragma Import (C, sfSoundRecorder_stop, "sfSoundRecorder_stop");
   pragma Import (C, sfSoundRecorder_getSampleRate, "sfSoundRecorder_getSampleRate");
   pragma Import (C, sfSoundRecorder_isAvailable, "sfSoundRecorder_isAvailable");
   pragma Import (C, sfSoundRecorder_setProcessingInterval, "sfSoundRecorder_setProcessingInterval");
   pragma Import (C, sfSoundRecorder_getDefaultDevice, "sfSoundRecorder_getDefaultDevice");
   pragma Import (C, sfSoundRecorder_setChannelCount, "sfSoundRecorder_setChannelCount");
   pragma Import (C, sfSoundRecorder_getChannelCount, "sfSoundRecorder_getChannelCount");

end Sf.Audio.SoundRecorder;
