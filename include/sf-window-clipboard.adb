with Interfaces.C.Strings;

package body Sf.Window.Clipboard is
   use Interfaces.C.Strings;

   function getString return String
   is
      function Internal
         return chars_ptr;
      pragma Import (C, Internal, "sfClipboard_getString");
      Result : constant chars_ptr := Internal;
   begin
      return Value(Result);
   end getString;

   procedure setString (text : String) is
      procedure Internal (text : Interfaces.C.char_array);
      pragma Import (C, Internal, "sfClipboard_setString");
   begin
      Internal (C.To_C(text));
   end setString;

   function sfClipboard_getUnicodeString
     return access C.char32_t;
   pragma Import (C, sfClipboard_getUnicodeString, "sfClipboard_getUnicodeString");

   function getUnicodeString return Wide_Wide_String
   is
   begin
      return C.To_Ada (Char32_Ptrs.Value (sfClipboard_getUnicodeString));
   end getUnicodeString;

   procedure setUnicodeString (text : Wide_Wide_String) is
      procedure Internal (text : Interfaces.C.char32_array);
      pragma Import (C, Internal, "sfClipboard_setUnicodeString");
   begin
      Internal (Interfaces.C.To_C (text));
   end setUnicodeString;

end Sf.Window.Clipboard;
