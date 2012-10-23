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

package body Sf.Graphics.Font is

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new font from a file
   -- ///
   -- /// \param Filename : Path of the font file to load
   -- /// \param CharSize : Size of characters in bitmap - the bigger, the higher quality
   -- /// \param Charset :  Characters set to generate (just pass NULL to get the default charset)
   -- ///
   -- /// \return A new sfFont object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_CreateFromFile
     (Filename : String;
      CharSize : sfUint32;
      Charset  : access constant sfUint32)
      return     sfFont_Ptr
   is
      function Internal
        (Filename : Interfaces.C.Strings.chars_ptr;
         CharSize : sfUint32;
         Charset  : access constant sfUint32)
         return     sfFont_Ptr;
      pragma Import (C, Internal, "sfFont_CreateFromFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfFont_Ptr do
         R := Internal (Temp, CharSize, Charset);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfFont_CreateFromFile;

end Sf.Graphics.Font;
