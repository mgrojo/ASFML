with Interfaces.C.Strings;

package body Sf.Window.Clipboard is
   use Interfaces.C.Strings;

   function getString return String
   is
      function Internal
         return chars_ptr;
      pragma Import (C, Internal, "sfClipboard_getString");
      Result : chars_ptr    := Internal;
   begin
      return Value(Result);
   end getString;

   procedure setString (text : String) is
      procedure Internal (text : Interfaces.C.char_array);
      pragma Import (C, Internal, "sfClipboard_setString");
   begin
      Internal (Interfaces.C.To_C(text));
   end setString;

end Sf.Window.Clipboard;
