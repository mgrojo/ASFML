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


package Sf.System.Vector2 is

   --//////////////////////////////////////////////////////////
   --/ @brief 2-component vector of integers
   --/
   --//////////////////////////////////////////////////////////
   type sfVector2i is record
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief 2-component vector of unsigned integers
   --/
   --//////////////////////////////////////////////////////////
   type sfVector2u is record
      x : aliased sfUint32;
      y : aliased sfUint32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief 2-component vector of floats
   --/
   --//////////////////////////////////////////////////////////
   type sfVector2f is record
      x : aliased Float;
      y : aliased Float;
   end record;

private

   pragma Convention (C_Pass_By_Copy, sfVector2i);
   pragma Convention (C_Pass_By_Copy, sfVector2u);
   pragma Convention (C_Pass_By_Copy, sfVector2f);

end Sf.System.Vector2;
