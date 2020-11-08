with Ada.Text_IO;      use Ada.Text_IO;

with Sf.System.Thread; use Sf, Sf.System, Sf.System.Thread;
with Sf.System.Sleep;  use Sf.System.Sleep;

with Thread_Func;

procedure Main is

   Thread : sfThread_Ptr;
   TFunc  : sfThreadFunc_Ptr := Thread_Func'Access;
   UData  : String := "Hello";

begin

   Thread := Create (TFunc, UData'Address);
   Launch (Thread);

   for I in 1 .. 10 loop
      Put_Line ("I'm main thread");
      sfDelay (0.001);
   end loop;

   Destroy (Thread);

end Main;
