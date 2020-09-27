with Ada.Text_IO;      use Ada.Text_IO;
with Sf.Config;        use Sf.Config;
with Sf.System.Thread; use Sf.System.Thread;
with Sf.System.Sleep;  use Sf.System.Sleep;
with Sf.System.Types;  use Sf.System.Types;

with Thread_Func;

procedure Main is

   Thread : sfThread_Ptr;
   TFunc  : sfThreadFunc_Ptr := Thread_Func'Access;
   UData  : sfVoid_Ptr;

begin

   Thread := sfThread_Create (TFunc, UData);
   sfThread_Launch (Thread);

   for I in 1 .. 10 loop
      Put_Line ("I'm main thread");
      sfDelay (0.001);
   end loop;

   sfThread_Destroy (Thread);

end Main;
