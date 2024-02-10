with Interfaces.C.Strings;

package body Sf.Window.Keyboard is
   
   function getDescription (code : sfScancode) return String is
      use Interfaces.C; use Interfaces.C.Strings;
      function Internal (code : sfScancode) return chars_ptr;
      pragma Import (C, Internal, "sfKeyboard_getDescription");
      C_Result : chars_ptr := Internal (code);
      Result : constant String := Value (C_Result);
   begin
      Free (C_Result);
      return Result;
   end getDescription;
   
end sf.Window.Keyboard;
