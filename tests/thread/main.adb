with Ada.Text_IO;      use Ada.Text_IO;
with Sf.Config;        use Sf.Config;
with Sf.System.Thread; use Sf.System.Thread;
with Sf.System.Sleep;  use Sf.System.Sleep;
with Sf.System.Types;  use Sf.System.Types;

procedure Main is

   procedure Thread_Func (Arg : sfVoid_Ptr) is
   begin
      for I in 1 .. 10 loop
         Put_Line ("I'm thread 1");
         sfSleep (0.001);
      end loop;
   end Thread_Func;

   Thread : sfThread_Ptr;
   TFunc  : sfThreadFunc_Ptr := Thread_Func'UNRESTRICTED_ACCESS;
   UData  : sfVoid_Ptr;

begin

   Thread := sfThread_Create (TFunc, UData);
   sfThread_Launch (Thread);

   for I in 1 .. 10 loop
      Put_Line ("I'm main thread");
      sfSleep (0.001);
   end loop;

   sfThread_Destroy (Thread);

end Main;
