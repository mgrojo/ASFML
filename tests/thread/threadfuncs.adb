package body ThreadFuncs is

   procedure Thread_Func (Arg : sfVoid_Ptr) is
   begin
      for I in 1 .. 10 loop
         Put_Line ("I'm thread 1");
         sfSleep (0.001);
      end loop;
   end Thread_Func;

end ThreadFuncs;
