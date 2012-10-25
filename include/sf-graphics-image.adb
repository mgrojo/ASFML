-- ////////////////////////////////////////////////////////////
-- //
-- // SFML - Simple and Fast Multimedia Library
-- // Copyright (C) 2007-2009 Laurent Gomila (laurent.gom@gmail.com)
-- //
-- // This software is provided 'as-is', without any express or implied warranty.
-- // In no event will the authors be held liable for any damages arising from the use of this software.
-- //
-- // Permission is granted to anyone to use this software for any purpose,
-- // including commercial applications, and to alter it and redistribute it freely,
-- // subject to the following restrictions:
-- //
-- // 1. The origin of this software must not be misrepresented;
-- //    you must not claim that you wrote the original software.
-- //    If you use this software in a product, an acknowledgment
-- //    in the product documentation would be appreciated but is not required.
-- //
-- // 2. Altered source versions must be plainly marked as such,
-- //    and must not be misrepresented as being the original software.
-- //
-- // 3. This notice may not be removed or altered from any source distribution.
-- //
-- ////////////////////////////////////////////////////////////

-- ////////////////////////////////////////////////////////////
-- // Headers
-- ////////////////////////////////////////////////////////////
with Interfaces.C.Strings;

package body Sf.Graphics.Image is

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new image from a file
   -- ///
   -- /// \param Filename : Path of the image file to load
   -- ///
   -- /// \return A new sfImage object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfImage_CreateFromFile (Filename : Standard.String) return sfImage_Ptr is
      function Internal (Filename : Interfaces.C.Strings.chars_ptr) return sfImage_Ptr;
      pragma Import (C, Internal, "sfImage_CreateFromFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfImage_Ptr do
         R := Internal (Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfImage_CreateFromFile;

   -- ////////////////////////////////////////////////////////////
   -- /// Save the content of an image to a file
   -- ///
   -- /// \param Image :    Image to save
   -- /// \param Filename : Path of the file to save (overwritten if already exist)
   -- ///
   -- /// \return sfTrue if saving was successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfImage_SaveToFile (Image : sfImage_Ptr; Filename : Standard.String) return sfBool is
      function Internal (Image : sfImage_Ptr; Filename : Interfaces.C.Strings.chars_ptr) return sfBool;
      pragma Import (C, Internal, "sfImage_SaveToFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfBool do
         R := Internal (Image, Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfImage_SaveToFile;

end Sf.Graphics.Image;
