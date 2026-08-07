package body Sf.System.Thread is

   Removed_Feature_Message : constant String :=
     "sfThread_* was removed from CSFML 3.0; use Ada tasking or another threading library.";

   function create (func     : sfThreadFunc_Ptr;
                    userData : Standard.System.Address) return sfThread_Ptr is
      pragma Unreferenced (func, userData);
   begin
      raise Program_Error with Removed_Feature_Message;
      return null;
   end create;

   procedure destroy (thread : sfThread_Ptr) is
      pragma Unreferenced (thread);
   begin
      raise Program_Error with Removed_Feature_Message;
   end destroy;

   procedure launch (thread : sfThread_Ptr) is
      pragma Unreferenced (thread);
   begin
      raise Program_Error with Removed_Feature_Message;
   end launch;

   procedure wait (thread : sfThread_Ptr) is
      pragma Unreferenced (thread);
   begin
      raise Program_Error with Removed_Feature_Message;
   end wait;

   procedure sfThread_terminate (thread : sfThread_Ptr) is
      pragma Unreferenced (thread);
   begin
      raise Program_Error with Removed_Feature_Message;
   end sfThread_terminate;

end Sf.System.Thread;
