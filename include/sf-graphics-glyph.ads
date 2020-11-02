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

--//////////////////////////////////////////////////////////

with Sf.Graphics.Rect;

package Sf.Graphics.Glyph is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief sfGlyph describes a glyph (a visual character)
   --/
   --//////////////////////////////////////////////////////////
   --/< Offset to move horizontically to the next character
   --/< Bounding rectangle of the glyph, in coordinates relative to the baseline
   --/< Texture coordinates of the glyph inside the font's image
   type sfGlyph is record
      advance : aliased float;
      bounds : aliased Sf.Graphics.Rect.sfFloatRect;
      textureRect : aliased Sf.Graphics.Rect.sfIntRect;
   end record;
   pragma Convention (C_Pass_By_Copy, sfGlyph);

private



end Sf.Graphics.Glyph;
