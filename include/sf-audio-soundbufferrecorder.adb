with Interfaces.C.Strings; use Interfaces.C;

package body Sf.Audio.SoundBufferRecorder is

  --//////////////////////////////////////////////////////////
  --/ @brief Set the audio capture device
  --/
  --/ This function sets the audio capture device to the device
  --/ with the given name. It can be called on the fly (i.e:
  --/ while recording). If you do so while recording and
  --/ opening the device fails, it stops the recording.
  --/
  --/ @param soundRecorder Sound recorder object
  --/ @param name          The name of the audio capture device
  --/
  --/ @return sfTrue, if it was able to set the requested device
  --/
  --//////////////////////////////////////////////////////////
  function setDevice
    (soundBufferRecorder : sfSoundBufferRecorder_Ptr; name : String)
    return sfBool is

     function Internal
        (soundBufferRecorder : sfSoundBufferRecorder_Ptr; name : Interfaces.C.Strings.chars_ptr)
        return sfBool;
      pragma Import (C, Internal, "sfSoundBufferRecorder_setDevice");

      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (name);
      Result : constant sfBool := Internal (soundBufferRecorder, Temp);
   begin
      Interfaces.C.Strings.Free (Temp);
      return Result;
  end setDevice;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the name of the current audio capture device
  --/
  --/ @param soundBufferRecorder Sound recorder object
  --/
  --/ @return The name of the current audio capture device
  --/
  --//////////////////////////////////////////////////////////
  function getDevice (soundBufferRecorder : sfSoundBufferRecorder_Ptr) return String is
     function Internal (soundBufferRecorder : sfSoundBufferRecorder_Ptr) return Interfaces.C.Strings.chars_ptr;
     pragma Import (C, Internal, "sfSoundBufferRecorder_getDevice");
  begin

     return Interfaces.C.Strings.Value (Internal (soundBufferRecorder));
  end getDevice;

end Sf.Audio.SoundBufferRecorder;
