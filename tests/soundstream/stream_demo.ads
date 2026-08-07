with Sf;
with Sf.Audio;
with Sf.Audio.SoundStream;
with Sf.Audio.EffectProcessor;

package Stream_Demo is

   procedure Initialize;

   function Create_Stream return Sf.Audio.sfSoundStream_Ptr;

   function Effect_Callback return Sf.Audio.EffectProcessor.sfEffectProcessor;

end Stream_Demo;
