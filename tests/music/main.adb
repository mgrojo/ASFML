with Ada.Text_IO;          use Ada.Text_IO;
with Ada.Float_Text_IO;    use Ada.Float_Text_IO;
with Ada.Integer_Text_IO;  use Ada.Integer_Text_IO;
with Ada.Float_Text_IO;    use Ada.Float_Text_IO;

with Sf.System.Sleep;      use Sf, Sf.System, Sf.System.Sleep;
with Sf.System.Time;       use Sf.System.Time;
with Sf.Audio.Music;       use Sf.Audio, Sf.Audio.Music;
with Sf.Audio.SoundStatus; use Sf.Audio.SoundStatus;

with Ada.Command_Line;

procedure Main is

   Music    : sfMusic_Ptr;
   Duration : sfTime;
   ChCount  : sfUint32;
   SampRate : sfUint32;

begin

   Music := createFromFile (Ada.Command_Line.Argument (1));
   if Music = null then
      Put_Line ("Music file not found!");
      return;
   end if;

   setLoop (Music, sfFalse);
   setPitch (Music, 1.0);
   setVolume (Music, 100.0);

   Duration := getDuration (Music);
   ChCount  := getChannelCount (Music);
   SampRate := getSampleRate (Music);

   Put ("Duration       : ");
   Put (Integer (asMilliseconds (Duration)));
   Put (" milliseconds");
   New_Line;
   Put ("Channels count : ");
   Put (Integer (ChCount), 0);
   Put (" channels");
   New_Line;
   Put ("Sample rate    : ");
   Put (Integer (SampRate), 0);
   Put (" channels/second");
   New_Line;

   play (Music);

   Put ("Playing... ");
   while getStatus (Music) = sfPlaying loop

      -- Display the playing position
      Put (Integer (asMilliseconds (getPlayingOffset(Music))));
      Put (" ");
      delay 0.1;

   end loop;

   destroy (Music);

end Main;
