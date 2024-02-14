with System;
with Interfaces.C.Strings;

package body Sf.Window.Vulkan is
   
   function getGraphicsRequiredInstanceExtensions return sfArrayOfStrings is
      use Interfaces.C;

      function Internal (count : access sfSize_t) return Standard.System.Address;
      pragma Import (C, Internal, "sfVulkan_getGraphicsRequiredInstanceExtensions");

      count : aliased sfSize_t;
      result : constant Standard.System.Address := Internal (count'access);

   begin
      declare
         subtype Array_Of_Strings_Type is Strings.Chars_Ptr_Array (0 .. size_t (count) - 1);
         cArray_Of_Strings : Array_Of_Strings_Type;
         pragma Import (Ada, cArray_Of_Strings);
         for cArray_Of_Strings'Address use result;

         AdaArray_Of_Strings : sfArrayOfStrings (0 .. count - 1);

      begin
         for i in Array_Of_Strings_Type'Range loop
            AdaArray_Of_Strings(sfSize_t(i)) := Ada.Strings.Unbounded.To_Unbounded_String
              (Interfaces.C.Strings.Value (cArray_Of_Strings(i)));
         end loop;

         return AdaArray_Of_Strings;
      end;
   end getGraphicsRequiredInstanceExtensions;
   
end Sf.Window.Vulkan;
