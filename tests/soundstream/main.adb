with Ada.Numerics.Elementary_Functions;
with Ada.Text_IO;
with Sf;
with Sf.Audio;
with Sf.Audio.SoundStream;
with Sf.Audio.SoundSourceCone;
with Sf.System.Sleep;
with Sf.System.Time;
with Sf.System.Vector3;
with Stream_Demo;

procedure Main is
   package Math renames Ada.Numerics.Elementary_Functions;
   package Sound_Stream renames Sf.Audio.SoundStream;
   package Sleep renames Sf.System.Sleep;
   package Time renames Sf.System.Time;
   package Vec3 renames Sf.System.Vector3;
   use Ada.Text_IO;
   use Sf;
   use type Sf.Audio.sfSoundStream_Ptr;

   Stream : Sf.Audio.sfSoundStream_Ptr;

begin
   Stream_Demo.Initialize;
   Stream := Stream_Demo.Create_Stream;

   if Stream = null then
      Put_Line ("Failed to create sound stream");
      return;
   end if;

   Sound_Stream.setEffectProcessor (Stream, Stream_Demo.Effect_Callback);
   Sound_Stream.setEffectProcessor (Stream, null);
   Sound_Stream.setLooping (Stream, sfTrue);
   Sound_Stream.setSpatializationEnabled (Stream, sfTrue);
   Sound_Stream.setPosition (Stream, (x => 0.0, y => 0.0, z => -5.0));
   Sound_Stream.setDirection (Stream, (x => 0.0, y => 0.0, z => 1.0));
   Sound_Stream.setMinDistance (Stream, 1.0);
   Sound_Stream.setMaxDistance (Stream, 25.0);
   Sound_Stream.setCone (Stream, (innerAngle => 60.0, outerAngle => 120.0, outerGain => 0.4));

   Sound_Stream.play (Stream);
   for Step in 0 .. 30 loop
      declare
         Angle : constant Float := Float (Step) * 0.25;
         Pan   : constant Float := Math.Sin (Angle);
         Speed : constant Vec3.sfVector3f :=
           (x => Math.Cos (Angle) * 3.0,
            y => 0.0,
            z => Math.Sin (Angle) * 3.0);
      begin
         Sound_Stream.setPan (Stream, Pan);
         Sound_Stream.setVelocity (Stream, Speed);
         Sleep.sfSleep (Time.sfMilliseconds (50));
      end;
   end loop;
   Sound_Stream.stop (Stream);

   Sound_Stream.destroy (Stream);
end Main;
