with Ada.Text_IO; use Ada.Text_IO;

with Sf.System.Sleep;  use Sf.System.Sleep;

procedure Thread_Func (Arg : System.Address) is
   User_Data : String (1..5);
   for User_Data'Address use Arg;
   pragma Import (Ada, User_Data);
begin
   for I in 1 .. 10 loop
      Put (User_Data);
      Put_Line (", I'm thread 1");
      sfDelay (0.001);
   end loop;
end Thread_Func;
