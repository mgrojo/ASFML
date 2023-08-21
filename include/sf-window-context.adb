with Interfaces.C.Strings; use Interfaces.C.Strings;

package body Sf.Window.Context is



  --//////////////////////////////////////////////////////////
  --/ @brief Check whether a given OpenGL extension is available.
  --/
  --/ @param Name of the extension to check for
  --/
  --/ @return True if available, false if unavailable
  --/
  --//////////////////////////////////////////////////////////
   function isExtensionAvailable (name : String) return sfBool is
      function Internal (name : Interfaces.C.Strings.chars_ptr) return sfBool;
      pragma Import (C, Internal, "sfContext_isExtensionAvailable");
      Temp : chars_ptr := New_String (name);
      R    : constant sfBool := Internal (Temp);
   begin
      Free (Temp);
      return R;
   end isExtensionAvailable;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the address of an OpenGL function.
  --/
  --/ @param name	Name of the function to get the address of
  --/
  --/ @return Address of the OpenGL function, 0 on failure
  --/
  --//////////////////////////////////////////////////////////
   function getFunction (name : String) return GlFunctionPointer is
      function Internal (name : Interfaces.C.Strings.chars_ptr) return GlFunctionPointer;
      pragma Import (C, Internal, "sfContext_getFunction");
      Temp : chars_ptr := New_String (name);
      R    : constant GlFunctionPointer := Internal (Temp);
   begin
      Free (Temp);
      return R;
   end getFunction;

end Sf.Window.Context;
