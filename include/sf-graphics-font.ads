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
with Sf.System.InputStream;

with Interfaces.C; use Interfaces.C;

package Sf.Graphics.Font is
   use Sf.Config;
   use Sf.Graphics.Glyph;
   use Sf.Graphics.Types;

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



  --//////////////////////////////////////////////////////////
  --/ \brief Create a new image font a custom stream
  --/
  --/ \param stream Source stream to read from
  --/
  --/ \return A new sfFont object, or NULL if it failed
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_createFromStream (stream : access Sf.System.InputStream.sfInputStream) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
  --/ \brief Copy an existing font
  --/
  --/ \param font Font to copy
  --/
  --/ \return Copied object
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_copy (font : sfFont_Ptr) return sfFont_Ptr;

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
     (font : sfFont_Ptr;
      codePoint : Sf.Config.sfUint32;
      characterSize : unsigned;
      bold : Sf.Config.sfBool;
      outlineThickness : float) return Sf.Graphics.Glyph.sfGlyph;

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
     (font : sfFont_Ptr;
      first : Sf.Config.sfUint32;
      second : Sf.Config.sfUint32;
      characterSize : unsigned) return float;

  --//////////////////////////////////////////////////////////
  --/ \brief Get the line spacing value
  --/
  --/ \param font          Source font
  --/ \param characterSize Character size, in pixels
  --/
  --/ \return Line spacing, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getLineSpacing (font : sfFont_Ptr; characterSize : unsigned) return float;

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
   function sfFont_getUnderlinePosition (font : sfFont_Ptr; characterSize : unsigned) return float;

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
   function sfFont_getUnderlineThickness (font : sfFont_Ptr; characterSize : unsigned) return float;

  --//////////////////////////////////////////////////////////
  --/ \brief Get the texture containing the glyphs of a given size in a font
  --/
  --/ \param font          Source font
  --/ \param characterSize Character size, in pixels
  --/
  --/ \return Read-only pointer to the texture
  --/
  --//////////////////////////////////////////////////////////
   function sfFont_getTexture (font : sfFont_Ptr; characterSize : unsigned) return sfFont_Ptr;

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
   function sfFont_getInfo (font : sfFont_Ptr) return Sf.Graphics.FontInfo.sfFontInfo;

private

   pragma Import (C, sfFont_createFromMemory, "sfFont_createFromMemory");
   pragma Import (C, sfFont_createFromStream, "sfFont_createFromStream");
   pragma Import (C, sfFont_copy, "sfFont_copy");
   pragma Import (C, sfFont_destroy, "sfFont_destroy");
   pragma Import (C, sfFont_getGlyph, "sfFont_getGlyph");
   pragma Import (C, sfFont_getKerning, "sfFont_getKerning");
   pragma Import (C, sfFont_getLineSpacing, "sfFont_getLineSpacing");
   pragma Import (C, sfFont_getUnderlinePosition, "sfFont_getUnderlinePosition");
   pragma Import (C, sfFont_getUnderlineThickness, "sfFont_getUnderlineThickness");
   pragma Import (C, sfFont_getTexture, "sfFont_getTexture");
   pragma Import (C, sfFont_getInfo, "sfFont_getInfo");

end Sf.Graphics.Font;
