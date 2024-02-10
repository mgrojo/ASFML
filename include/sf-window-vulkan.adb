with System;
with Interfaces.C.Strings;

package body Sf.Window.Vulkan is
   
   function getGraphicsRequiredInstanceExtensions return sfArrayOfStrings is
      use Interfaces.C;
      use Interfaces.C.Strings;

      function Internal return Standard.System.Address;
      pragma Import (C, Internal, "sfVulkan_getGraphicsRequiredInstanceExtensions");
      
      -- Arbitrary maximum
      Maximum : constant := 256;
      result : constant Standard.System.Address := Internal;
      Last : sfSize_t;
      subtype Sf_Chars_Ptr_Array is Strings.Chars_Ptr_Array (0 .. Maximum - 1);
      cGraphicsRequiredInstanceExtensions : Sf_Chars_Ptr_Array;
      pragma Import (Ada, cGraphicsRequiredInstanceExtensions);
      for cGraphicsRequiredInstanceExtensions'Address use result;

      AdaGraphicsRequiredInstanceExtensions : sfArrayOfStrings (0 .. Maximum - 1);
      
   begin
      -- Empty case
      if cGraphicsRequiredInstanceExtensions (0) = Null_Ptr then
         return AdaGraphicsRequiredInstanceExtensions (1 .. 0);
      end if;

      for i in Sf_Chars_Ptr_Array'Range loop
         exit when cGraphicsRequiredInstanceExtensions (i) = Null_Ptr;
         Last := sfSize_t (i);
         AdaGraphicsRequiredInstanceExtensions (Last) := 
           Ada.Strings.Unbounded.To_Unbounded_String
             (Interfaces.C.Strings.Value (cGraphicsRequiredInstanceExtensions (i)));
      end loop;

      return AdaGraphicsRequiredInstanceExtensions (0 .. Last);
   end getGraphicsRequiredInstanceExtensions;

   
end Sf.Window.Vulkan;
