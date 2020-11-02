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

with Sf.Graphics.BlendMode;
with Sf.Graphics.Transform;

package Sf.Graphics.RenderStates is

   --//////////////////////////////////////////////////////////
   --/ @brief Define the states used for drawing to a RenderTarget
   --/
   --//////////////////////////////////////////////////////////
   --/< Blending mode
   --/< Transform
   --/< Texture
   --/< Shader
   type sfRenderStates is record
      blendMode : aliased Sf.Graphics.BlendMode.sfBlendMode;
      transform : aliased Sf.Graphics.Transform.sfTransform;
      texture : sfTexture_Ptr;
      shader : sfShader_Ptr;
   end record;
   type sfRenderStates_Ptr is access all sfRenderStates;

private
   pragma Convention (C_Pass_By_Copy, sfRenderStates);
   pragma Convention (C, sfRenderStates_Ptr);

end Sf.Graphics.RenderStates;
