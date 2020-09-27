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

with Sf.Config;
with Sf.Graphics.Glyph;
with Sf.Graphics.Types;
with Sf.Graphics.FontInfo;

with Interfaces.C; use Interfaces.C;

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
   -- ///
   -- /// \return A new sfFont object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFont_CreateFromFile
     (Filename : String) return sfFont_Ptr;

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


  --//////////////////////////////////////////////////////////
  --/ \brief Get a glyph in a font
  --/
  --/ \param font             Source font
  --/ \param codePoint        Unicode code point of the character to get
  --/ \param characterSize    Character size, in pixels
  --/ \param bold             Retrieve the bold version or the regular one?
  --/ \param outlineThickness Thickness of outline (when != 0 the glyph will not be filled)
  --/
  --/ \return The corresponding glyph
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getGlyph
     (Font : sfFont_Ptr;
      arg2 : Sf.Config.sfUint32;
      arg3 : unsigned;
      arg4 : Sf.Config.sfBool;
      arg5 : float) return Sf.Graphics.Glyph.sfGlyph;  -- /usr/include/SFML/Graphics/Font.h:100
   pragma Import (C, sfFont_getGlyph, "sfFont_getGlyph");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the kerning value corresponding to a given pair of characters in a font
  --/
  --/ \param font          Source font
  --/ \param first         Unicode code point of the first character
  --/ \param second        Unicode code point of the second character
  --/ \param characterSize Character size, in pixels
  --/
  --/ \return Kerning offset, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getKerning
     (Font : sfFont_Ptr;
      arg2 : Sf.Config.sfUint32;
      arg3 : Sf.Config.sfUint32;
      arg4 : unsigned) return float;  -- /usr/include/SFML/Graphics/Font.h:113
   pragma Import (C, sfFont_getKerning, "sfFont_getKerning");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the line spacing value
  --/
  --/ \param font          Source font
  --/ \param characterSize Character size, in pixels
  --/
  --/ \return Line spacing, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getLineSpacing (Font : sfFont_Ptr; arg2 : unsigned) return float;  -- /usr/include/SFML/Graphics/Font.h:124
   pragma Import (C, sfFont_getLineSpacing, "sfFont_getLineSpacing");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the position of the underline
  --/
  --/ Underline position is the vertical offset to apply between the
  --/ baseline and the underline.
  --/
  --/ \param font          Source font
  --/ \param characterSize Reference character size
  --/
  --/ \return Underline position, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getUnderlinePosition (Font : sfFont_Ptr; arg2 : unsigned) return float;  -- /usr/include/SFML/Graphics/Font.h:138
   pragma Import (C, sfFont_getUnderlinePosition, "sfFont_getUnderlinePosition");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the thickness of the underline
  --/
  --/ Underline thickness is the vertical size of the underline.
  --/
  --/ \param font          Source font
  --/ \param characterSize Reference character size
  --/
  --/ \return Underline thickness, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getUnderlineThickness (Font : sfFont_Ptr; arg2 : unsigned) return float;  -- /usr/include/SFML/Graphics/Font.h:151
   pragma Import (C, sfFont_getUnderlineThickness, "sfFont_getUnderlineThickness");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the texture containing the glyphs of a given size in a font
  --/
  --/ \param font          Source font
  --/ \param characterSize Character size, in pixels
  --/
  --/ \return Read-only pointer to the texture
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getTexture (Font : sfFont_Ptr; arg2 : unsigned) return sfTexture_Ptr;  -- /usr/include/SFML/Graphics/Font.h:162
   pragma Import (C, sfFont_getTexture, "sfFont_getTexture");

  --//////////////////////////////////////////////////////////
  --/ \brief Get the font information
  --/
  --/ The returned structure will remain valid only if the font
  --/ is still valid. If the font is invalid an invalid structure
  --/ is returned.
  --/
  --/ \param font Source font
  --/
  --/ \return A structure that holds the font information
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getInfo (Font : sfFont_Ptr) return Sf.Graphics.FontInfo.sfFontInfo;  -- /usr/include/SFML/Graphics/Font.h:176
   pragma Import (C, sfFont_getInfo, "sfFont_getInfo");

private

   pragma Import (C, sfFont_Create, "sfFont_create");
   pragma Import (C, sfFont_CreateFromMemory, "sfFont_createFromMemory");
   pragma Import (C, sfFont_Destroy, "sfFont_destroy");


end Sf.Graphics.Font;
