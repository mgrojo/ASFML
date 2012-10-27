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
with Sf.Config;
with Sf.Graphics.Glyph;
with Sf.Graphics.Types;

package Sf.Graphics.Font is
   use Sf.Config;
   use Sf.Graphics.Glyph;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new empty font
   -- ///
   -- /// \return A new sfFont object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_Create return sfFont_Ptr;

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
      Charset  : sfUint32_Ptr)
      return     sfFont_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new image font a file in memory
   -- ///
   -- /// \param Data :        Pointer to the file data in memory
   -- /// \param SizeInBytes : Size of the data to load, in bytes
   -- /// \param CharSize :    Size of characters in bitmap - the bigger, the higher quality
   -- /// \param Charset :     Characters set to generate (just pass NULL to get the default charset)
   -- ///
   -- /// \return A new sfFont object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_CreateFromMemory
     (Data        : sfInt8_Ptr;
      SizeInBytes : sfSize_t;
      CharSize    : sfUint32;
      Charset     : sfUint32_Ptr)
      return        sfFont_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing font
   -- ///
   -- /// \param Font : Font to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfFont_Destroy (Font : sfFont_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the base size of characters in a font;
   -- /// All glyphs dimensions are based on this value
   -- ///
   -- /// \param Font : Font object
   -- ///
   -- /// \return Base size of characters
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_GetCharacterSize (Font : sfFont_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the built-in default font (Arial)
   -- ///
   -- /// \return Pointer to the default font
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_GetDefaultFont return sfFont_Ptr;

private

   pragma Import (C, sfFont_Create, "sfFont_Create");
   pragma Import (C, sfFont_CreateFromMemory, "sfFont_CreateFromMemory");
   pragma Import (C, sfFont_Destroy, "sfFont_Destroy");
   pragma Import (C, sfFont_GetCharacterSize, "sfFont_GetCharacterSize");
   pragma Import (C, sfFont_GetDefaultFont, "sfFont_GetDefaultFont");

end Sf.Graphics.Font;
