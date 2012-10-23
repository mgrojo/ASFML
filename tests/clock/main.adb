with Ada.Text_IO;		use Ada.Text_IO;
with Ada.Float_Text_IO;	use Ada.Float_Text_IO;
with Sf.System.Clock; 	use Sf.System.Clock;
with Sf.System.Sleep;	use Sf.System.Sleep;
with Sf.System.Types;	use Sf.System.Types;

procedure Main is

	My_Clock : sfClock_Ptr;
	
begin

	My_Clock := sfClock_Create;
	sfSleep(0.05);
	Put("Time elapsed(s): ");
	Put(sfClock_GetTime(My_Clock), 0, 3, 0);
	New_Line;
	sfClock_Reset(My_Clock);
	sfClock_Destroy(My_Clock);

end Main;