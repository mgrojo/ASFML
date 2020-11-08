with Ada.Text_IO;         use Ada.Text_IO;
with Ada.Float_Text_IO;   use Ada.Float_Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;

with Sf.System.Clock;     use Sf.System, Sf.System.Clock;
with Sf.System.Sleep;     use Sf.System.Sleep;
with Sf.System.Time;      use Sf.System.Time;

procedure Main is

   My_Clock : sfClock_Ptr;

begin

   My_Clock := Create;
   sfDelay(0.05);
   Put ("Time elapsed(s): ");
   Put (asSeconds (GetElapsedTime (My_Clock)), Fore => 0, Aft => 3, Exp => 0);
   New_Line;
   Put ("Time elapsed(ms) since start: ");
   Put (Integer (asMilliseconds (Restart (My_Clock))));
   New_Line;
   sfSleep(sfMilliseconds(1050));
   Put ("Time elapsed(ms): ");
   Put (Integer (asMilliseconds (GetElapsedTime (My_Clock))));
   New_Line;
   Destroy (My_Clock);

end Main;
