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

package Sf.Audio.SoundBufferRecorder is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new sound buffer recorder
   --/
   --/ @return A new sfSoundBufferRecorder object (NULL if failed)
   --/
   --//////////////////////////////////////////////////////////
   function create return sfSoundBufferRecorder_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a sound buffer recorder
   --/
   --/ @param soundBufferRecorder Sound buffer recorder to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (soundBufferRecorder : sfSoundBufferRecorder_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Start the capture of a sound recorder recorder
   --/
   --/ The @a sampleRate parameter defines the number of audio samples
   --/ captured per second. The higher, the better the quality
   --/ (for example, 44100 samples/sec is CD quality).
   --/ This function uses its own thread so that it doesn't block
   --/ the rest of the program while the capture runs.
   --/ Please note that only one capture can happen at the same time.
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/ @param sampleRate          Desired capture rate, in number of samples per second
   --/
   --/ @return sfTrue, if it was able to start recording
   --/
   --//////////////////////////////////////////////////////////
   function start (soundBufferRecorder : sfSoundBufferRecorder_Ptr; sampleRate : sfUint32) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Stop the capture of a sound recorder
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/
   --//////////////////////////////////////////////////////////
   procedure stop (soundBufferRecorder : sfSoundBufferRecorder_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sample rate of a sound buffer recorder
   --/
   --/ The sample rate defines the number of audio samples
   --/ captured per second. The higher, the better the quality
   --/ (for example, 44100 samples/sec is CD quality).
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/
   --/ @return Sample rate, in samples per second
   --/
   --//////////////////////////////////////////////////////////
   function getSampleRate (soundBufferRecorder : sfSoundBufferRecorder_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sound buffer containing the captured audio data
   --/
   --/ The sound buffer is valid only after the capture has ended.
   --/ This function provides a read-only access to the internal
   --/ sound buffer, but it can be copied if you need to
   --/ make any modification to it.
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/
   --/ @return Read-only access to the sound buffer
   --/
   --//////////////////////////////////////////////////////////
   function getBuffer
     (soundBufferRecorder : sfSoundBufferRecorder_Ptr) return sfSoundBuffer_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Set the audio capture device
   --/
   --/ This function sets the audio capture device to the device
   --/ with the given name. It can be called on the fly (i.e:
   --/ while recording). If you do so while recording and
   --/ opening the device fails, it stops the recording.
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/ @param name                The name of the audio capture device
   --/
   --/ @return sfTrue, if it was able to set the requested device
   --/
   --//////////////////////////////////////////////////////////
   function setDevice (soundBufferRecorder : sfSoundBufferRecorder_Ptr;
                                             name : String) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the name of the current audio capture device
   --/
   --/ @param soundBufferRecorder Sound buffer recorder object
   --/
   --/ @return The name of the current audio capture device
   --/
   --//////////////////////////////////////////////////////////
   function getDevice (soundBufferRecorder : sfSoundBufferRecorder_Ptr)
                                            return String;

private

   pragma Import (C, create, "sfSoundBufferRecorder_create");
   pragma Import (C, destroy, "sfSoundBufferRecorder_destroy");
   pragma Import (C, start, "sfSoundBufferRecorder_start");
   pragma Import (C, stop, "sfSoundBufferRecorder_stop");
   pragma Import (C, getSampleRate, "sfSoundBufferRecorder_getSampleRate");
   pragma Import (C, getBuffer, "sfSoundBufferRecorder_getBuffer");


end Sf.Audio.SoundBufferRecorder;
