--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2023 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.System.Vector2;

package Sf.Graphics.Rect is

   --//////////////////////////////////////////////////////////
   --/ sfFloatRect and sfIntRect are utility classes for
   --/ manipulating rectangles.
   --//////////////////////////////////////////////////////////
   type sfFloatRect is record
      left   : aliased Float;
      top    : aliased Float;
      width  : aliased Float;
      height : aliased Float;
   end record;

   type sfIntRect is record
      left   : aliased Integer;
      top    : aliased Integer;
      width  : aliased Integer;
      height : aliased Integer;
   end record;

   sfNullRectangle : aliased constant sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a point is inside a rectangle's area
   --/
   --/ @param rect Rectangle to test
   --/ @param x    X coordinate of the point to test
   --/ @param y    Y coordinate of the point to test
   --/
   --/ @return sfTrue if the point is inside
   --/
   --//////////////////////////////////////////////////////////
   function contains
     (rect : access constant sfFloatRect;
      x : Float;
      y : Float) return sfBool
     with Import, Convention => C, External_Name => "sfFloatRect_contains";

   function contains
     (rect : access constant sfIntRect;
      x : Integer;
      y : Integer) return sfBool
     with Import, Convention => C, External_Name => "sfIntRect_contains";

   --//////////////////////////////////////////////////////////
   --/ @brief Check intersection between two rectangles
   --/
   --/ @param rect1        First rectangle to test
   --/ @param rect2        Second rectangle to test
   --/ @param intersection Rectangle to be filled with overlapping rect (can be null)
   --/
   --/ @return sfTrue if rectangles overlap
   --/
   --//////////////////////////////////////////////////////////
   function intersects
     (rect1 : access constant sfFloatRect;
      rect2 : access constant sfFloatRect;
      intersection : access sfFloatRect) return sfBool
     with Import, Convention => C, External_Name => "sfFloatRect_intersects";

   function intersects
     (rect1 : access constant sfIntRect;
      rect2 : access constant sfIntRect;
      intersection : access sfIntRect) return sfBool
     with Import, Convention => C, External_Name => "sfIntRect_intersects";

  --//////////////////////////////////////////////////////////
  --/ @brief Get the position of the rectangle's top-left corner
  --/
  --/ @return Position of rectangle
  --/
  --/ @see getSize
  --/
  --//////////////////////////////////////////////////////////
   function getPosition (rect : access constant sfFloatRect) return Sf.System.Vector2.sfVector2f
   with Import => True,
        Convention => C,
        External_Name => "sfFloatRect_getPosition";

   function getPosition (rect : access constant sfIntRect) return Sf.System.Vector2.sfVector2i
   with Import => True,
        Convention => C,
        External_Name => "sfIntRect_getPosition";

  --//////////////////////////////////////////////////////////
  --/ @brief Get the size of the rectangle
  --/
  --/ @return Size of rectangle
  --/
  --/ @see getPosition
  --/
  --//////////////////////////////////////////////////////////
   function getSize (rect : access constant sfFloatRect) return Sf.System.Vector2.sfVector2f
   with Import => True,
        Convention => C,
        External_Name => "sfFloatRect_getSize";

   function getSize (rect : access constant sfIntRect) return Sf.System.Vector2.sfVector2i
   with Import => True,
        Convention => C,
        External_Name => "sfIntRect_getSize";

private
   
   pragma Convention (C_Pass_By_Copy, sfFloatRect);
   pragma Convention (C_Pass_By_Copy, sfIntRect);

   sfNullRectangle : aliased constant sfIntRect := (0, 0, 0, 0);

end Sf.Graphics.Rect;
