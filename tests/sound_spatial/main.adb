with Ada.Numerics.Elementary_Functions;
with Ada.Text_IO;
with Sf;
with Sf.Audio;
with Sf.Audio.Sound;
with Sf.Audio.SoundBuffer;
with Sf.Audio.SoundSourceCone;
with Sf.System.Vector3;
with Sf.System.Time;
with Sf.System.Sleep;
with Sound_Spatial_Effect;

procedure Main is
   package Math renames Ada.Numerics.Elementary_Functions;
   package Sound renames Sf.Audio.Sound;
   package Sound_Buffer renames Sf.Audio.SoundBuffer;
   package Cone renames Sf.Audio.SoundSourceCone;
   package Sleep renames Sf.System.Sleep;
   package Time renames Sf.System.Time;
   package Vec3 renames Sf.System.Vector3;
   use Ada.Text_IO;
   use Sf;
   use type Sf.Audio.sfSoundBuffer_Ptr;
   use type Sf.Audio.sfSound_Ptr;

   Buffer_Path : constant String := "../doodle_pop.ogg";
   Buffer : Sf.Audio.sfSoundBuffer_Ptr := Sound_Buffer.createFromFile (Buffer_Path);
   The_Sound : Sf.Audio.sfSound_Ptr;
   Spatial_Cone : constant Cone.sfSoundSourceCone :=
     (innerAngle => 45.0,
      outerAngle => 90.0,
      outerGain  => 0.2);

begin
   if Buffer = null then
      Put_Line ("Failed to load sample " & Buffer_Path);
      return;
   end if;

   The_Sound := Sound.create (Buffer);
   Sound.setBuffer (The_Sound, Buffer);
   Sound.setSpatializationEnabled (The_Sound, sfTrue);
   Sound.setPosition (The_Sound, (x => -5.0, y => 0.0, z => -5.0));
   Sound.setDirection (The_Sound, (x => 0.0, y => 0.0, z => 1.0));
   Sound.setCone (The_Sound, Spatial_Cone);
   Sound.setRelativeToListener (The_Sound, sfFalse);
   Sound.setMinDistance (The_Sound, 1.0);
   Sound.setMaxDistance (The_Sound, 50.0);
   Sound.setMinGain (The_Sound, 0.0);
   Sound.setMaxGain (The_Sound, 1.0);
   Sound.setDopplerFactor (The_Sound, 1.2);
   Sound.setDirectionalAttenuationFactor (The_Sound, 0.75);
   Sound.setEffectProcessor (The_Sound, Sound_Spatial_Effect.Callback);
   Sound.setEffectProcessor (The_Sound, null);

   Sound.play (The_Sound);
   for Step in 0 .. 30 loop
      declare
         Angle    : constant Float := Float (Step) * 0.25;
         Pan      : constant Float := Math.Sin (Angle);
         Velocity : constant Vec3.sfVector3f :=
           (x => Math.Cos (Angle) * 5.0,
            y => 0.0,
            z => Math.Sin (Angle) * 5.0);
      begin
         Sound.setPan (The_Sound, Pan);
         Sound.setVelocity (The_Sound, Velocity);
         Sound.setPlayingOffset (The_Sound, Time.sfMilliseconds (sfInt32 (Step * 10)));
         Sleep.sfSleep (Time.sfMilliseconds (50));
      end;
   end loop;
   Sound.stop (The_Sound);

   Sound.destroy (The_Sound);
   Sound_Buffer.destroy (Buffer);
end Main;
