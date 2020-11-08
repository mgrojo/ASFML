--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2015 Laurent Gomila (laurent@sfml-dev.org)
-- This software is provided 'as-is', without any express or implied warranty.
-- In no event will the authors be held liable for any damages arising from the use of this software.
-- Permission is granted to anyone to use this software for any purpose,
-- including commercial applications, and to alter it and redistribute it freely,
-- subject to the following restrictions:
-- 1. The origin of this software must not be misrepresented;
--    you must not claim that you wrote the original software.
--    If you use this software in a product, an acknowledgment
--    in the product documentation would be appreciated but is not required.
-- 2. Altered source versions must be plainly marked as such,
--    and must not be misrepresented as being the original software.
-- 3. This notice may not be removed or altered from any source distribution.
--//////////////////////////////////////////////////////////


with Sf.System.InputStream;

with Sf.Graphics.Glyph;
with Sf.Graphics.FontInfo;


package Sf.Graphics.Font is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new font from a file
   --/
   --/ @param filename Path of the font file to load
   --/
   --/ @return A new sfFont object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromFile (filename : String) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new image font a file in memory
   --/
   --/ @param data        Pointer to the file data in memory
   --/ @param sizeInBytes Size of the data to load, in bytes
   --/
   --/ @return A new sfFont object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromMemory (data : Standard.System.Address; sizeInBytes : sfSize_t) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new image font a custom stream
   --/
   --/ @param stream Source stream to read from
   --/
   --/ @return A new sfFont object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromStream (stream : access Sf.System.InputStream.sfInputStream) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing font
   --/
   --/ @param font Font to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (font : sfFont_Ptr) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing font
   --/
   --/ @param font Font to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (font : sfFont_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get a glyph in a font
   --/
   --/ @param font             Source font
   --/ @param codePoint        Unicode code point of the character to get
   --/ @param characterSize    Character size, in pixels
   --/ @param bold             Retrieve the bold version or the regular one?
   --/ @param outlineThickness Thickness of outline (when != 0 the glyph will not be filled)
   --/
   --/ @return The corresponding glyph
   --/
   --//////////////////////////////////////////////////////////
   function getGlyph
     (font : sfFont_Ptr;
      codePoint : sfUint32;
      characterSize : sfUint32;
      bold : sfBool;
      outlineThickness : float) return Sf.Graphics.Glyph.sfGlyph;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the kerning value corresponding to a given pair of characters in a font
   --/
   --/ @param font          Source font
   --/ @param first         Unicode code point of the first character
   --/ @param second        Unicode code point of the second character
   --/ @param characterSize Character size, in pixels
   --/
   --/ @return Kerning offset, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getKerning
     (font : sfFont_Ptr;
      first : sfUint32;
      second : sfUint32;
      characterSize : sfUint32) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the line spacing value
   --/
   --/ @param font          Source font
   --/ @param characterSize Character size, in pixels
   --/
   --/ @return Line spacing, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getLineSpacing (font : sfFont_Ptr; characterSize : sfUint32) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of the underline
   --/
   --/ Underline position is the vertical offset to apply between the
   --/ baseline and the underline.
   --/
   --/ @param font          Source font
   --/ @param characterSize Reference character size
   --/
   --/ @return Underline position, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getUnderlinePosition (font : sfFont_Ptr; characterSize : sfUint32) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the thickness of the underline
   --/
   --/ Underline thickness is the vertical size of the underline.
   --/
   --/ @param font          Source font
   --/ @param characterSize Reference character size
   --/
   --/ @return Underline thickness, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getUnderlineThickness (font : sfFont_Ptr; characterSize : sfUint32) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the texture containing the glyphs of a given size in a font
   --/
   --/ @param font          Source font
   --/ @param characterSize Character size, in pixels
   --/
   --/ @return Read-only pointer to the texture
   --/
   --//////////////////////////////////////////////////////////
   function getTexture (font : sfFont_Ptr; characterSize : sfUint32) return sfFont_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the font information
   --/
   --/ The returned structure will remain valid only if the font
   --/ is still valid. If the font is invalid an invalid structure
   --/ is returned.
   --/
   --/ @param font Source font
   --/
   --/ @return A structure that holds the font information
   --/
   --//////////////////////////////////////////////////////////
   function getInfo (font : sfFont_Ptr) return Sf.Graphics.FontInfo.sfFontInfo;

private

   pragma Import (C, createFromMemory, "sfFont_createFromMemory");
   pragma Import (C, createFromStream, "sfFont_createFromStream");
   pragma Import (C, copy, "sfFont_copy");
   pragma Import (C, destroy, "sfFont_destroy");
   pragma Import (C, getGlyph, "sfFont_getGlyph");
   pragma Import (C, getKerning, "sfFont_getKerning");
   pragma Import (C, getLineSpacing, "sfFont_getLineSpacing");
   pragma Import (C, getUnderlinePosition, "sfFont_getUnderlinePosition");
   pragma Import (C, getUnderlineThickness, "sfFont_getUnderlineThickness");
   pragma Import (C, getTexture, "sfFont_getTexture");
   pragma Import (C, getInfo, "sfFont_getInfo");

end Sf.Graphics.Font;
