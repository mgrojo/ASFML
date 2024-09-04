with Sf.Audio.SoundBufferRecorder;
with Sf.Audio.SoundBuffer;
with Ada.Text_IO;

procedure Main is
   use Sf, Sf.Audio, Ada.Text_IO;
   Sound_Buffer_Recorder : constant sfSoundBufferRecorder_Ptr :=
     SoundBufferRecorder.create;
   Sound_Buffer : sfSoundBuffer_Ptr;
   Sound_File : constant String := "output.ogg";
begin

   if Sound_Buffer_Recorder = null then
      Put_Line (Standard_Error, "Error: sound recorder not available!");
      return;
   end if;

   SoundBufferRecorder.setChannelCount (Sound_Buffer_Recorder, 2);

   -- By default the recording is in 16-bit mono. Using the
   -- setChannelCount method you can change the number of channels
   -- used by the audio capture device to record.
   if SoundBufferRecorder.start (Sound_Buffer_Recorder, sampleRate => 44_100) /= sfTrue then
      Put_Line (Standard_Error, "Error: sound recorder cannot start!");
      return;
   end if;

   delay 10.0;
   SoundBufferRecorder.stop (Sound_Buffer_Recorder);

   Sound_Buffer := SoundBufferRecorder.getBuffer (Sound_Buffer_Recorder);
   if SoundBuffer.saveToFile (Sound_Buffer, filename => Sound_File) /= sfTrue then
      Put_Line (Standard_Error, "Error: recorded sound could not be saved!");
   end if;

   Put_Line ("Saved sound in `" & Sound_File & "` with ");
   Put_Line ("- Channel count: " &
      SoundBufferRecorder.getChannelCount (Sound_Buffer_Recorder)'Image);
   Put_Line ("- Sample rate: " &
      SoundBufferRecorder.getSampleRate (Sound_Buffer_Recorder)'Image);

   SoundBufferRecorder.destroy (Sound_Buffer_Recorder);
end Main;
