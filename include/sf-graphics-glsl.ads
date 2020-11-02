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

with Sf.System.Vector2;

with Sf.System.Vector3;

package Sf.Graphics.Glsl is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   -- 2D vectors
   subtype sfGlslVec2 is Sf.System.Vector2.sfVector2f;

   subtype sfGlslIvec2 is Sf.System.Vector2.sfVector2i;

   type sfGlslBvec2 is record
      x : aliased sfBool;
      y : aliased sfBool;
   end record;


   -- 3D vectors
   subtype sfGlslVec3 is Sf.System.Vector3.sfVector3f;

   type sfGlslIvec3 is record
      x : aliased sfInt32;
      y : aliased sfInt32;
      z : aliased sfInt32;
   end record;


   type sfGlslBvec3 is record
      x : aliased sfBool;
      y : aliased sfBool;
      z : aliased sfBool;
   end record;


   -- 4D vectors
   type sfGlslVec4 is record
      x : aliased float;
      y : aliased float;
      z : aliased float;
      w : aliased float;
   end record;


   type sfGlslIvec4 is record
      x : aliased sfInt32;
      y : aliased sfInt32;
      z : aliased sfInt32;
      w : aliased sfInt32;
   end record;


   type sfGlslBvec4 is record
      x : aliased sfBool;
      y : aliased sfBool;
      z : aliased sfBool;
      w : aliased sfBool;
   end record;


   -- matrices
   type sfGlslMat3_c_array_array is array (0 .. 8) of aliased float;
   type sfGlslMat3 is record
      c_array : aliased sfGlslMat3_c_array_array;
   end record;

   type sfGlslMat4_c_array_array is array (0 .. 15) of aliased float;
   type sfGlslMat4 is record
      c_array : aliased sfGlslMat4_c_array_array;
   end record;

private

   pragma Convention (C_Pass_By_Copy, sfGlslBvec2);
   pragma Convention (C_Pass_By_Copy, sfGlslIvec3);
   pragma Convention (C_Pass_By_Copy, sfGlslBvec3);
   pragma Convention (C_Pass_By_Copy, sfGlslVec4);
   pragma Convention (C_Pass_By_Copy, sfGlslIvec4);
   pragma Convention (C_Pass_By_Copy, sfGlslBvec4);
   pragma Convention (C_Pass_By_Copy, sfGlslMat3);
   pragma Convention (C_Pass_By_Copy, sfGlslMat4);


end Sf.Graphics.Glsl;
