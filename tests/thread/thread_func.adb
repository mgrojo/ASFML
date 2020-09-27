with Ada.Text_IO; use Ada.Text_IO;

with Sf.System.Sleep;  use Sf.System.Sleep;

procedure Thread_Func (Arg : sfVoid_Ptr) is
begin
   for I in 1 .. 10 loop
      Put_Line ("I'm thread 1");
      sfDelay (0.001);
   end loop;
end Thread_Func;
