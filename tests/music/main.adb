with Ada.Text_IO;          use Ada.Text_IO;
with Ada.Integer_Text_IO;  use Ada.Integer_Text_IO;
with Ada.Float_Text_IO;    use Ada.Float_Text_IO;
with Sf.Config;            use Sf.Config;
with Sf.System.Sleep;      use Sf.System.Sleep;
with Sf.Audio.Types;       use Sf.Audio.Types;
with Sf.Audio.Music;       use Sf.Audio.Music;
with Sf.Audio.SoundStatus; use Sf.Audio.SoundStatus;

procedure Main is

   Music    : sfMusic_Ptr;
   Duration : Float;
   ChCount  : sfUint32;
   SampRate : sfUint32;

begin

   Music := sfMusic_CreateFromFile ("music.ogg");
   if Music = null then
      Put_Line ("Music file not found!");
      return;
   end if;

   sfMusic_SetLoop (Music, sfFalse);
   sfMusic_SetPitch (Music, 1.0);
   sfMusic_SetVolume (Music, 100.0);

   Duration := sfMusic_GetDuration (Music);
   ChCount  := sfMusic_GetChannelsCount (Music);
   SampRate := sfMusic_GetSampleRate (Music);

   Put ("Duration       : ");
   Put (Duration, 0, 3, 0);
   Put (" seconds");
   New_Line;
   Put ("Channels count : ");
   Put (Integer (ChCount), 0);
   Put (" channels");
   New_Line;
   Put ("Sample rate    : ");
   Put (Integer (SampRate), 0);
   Put (" channels/second");
   New_Line;

   sfMusic_Play (Music);
   while sfMusic_GetStatus (Music) = sfPlaying loop
      sfSleep (0.001);
   end loop;

   sfMusic_Destroy (Music);

end Main;
