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
with Sf.Graphics.Rect;

package Sf.Graphics.Glyph is
   use Sf.Graphics.Rect;

   -- ////////////////////////////////////////////////////////////
   -- /// sfGlyph describes a glyph (a visual character)
   -- ////////////////////////////////////////////////////////////
   type sfGlyph is record
      Advance   : aliased Integer;   -- ///< Offset to move horizontically to the next character
      Rectangle : aliased sfIntRect; -- ///< Bounding rectangle of the glyph, in relative coordinates
      TexCoords : aliased sfFloatRect; -- ///< Texture coordinates of the glyph inside the bitmap font
   end record;

private

   pragma Convention (C_Pass_By_Copy, sfGlyph);

end Sf.Graphics.Glyph;
