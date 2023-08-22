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
   type sfRenderStates is record
      blendMode : aliased Sf.Graphics.BlendMode.sfBlendMode := Sf.Graphics.BlendMode.sfBlendAlpha;
      --/< Blending mode
      transform : aliased Sf.Graphics.Transform.sfTransform := Sf.Graphics.Transform.Identity;
      --/< Transform
      texture : sfTexture_Ptr := null;
      --/< Texture
      shader : sfShader_Ptr := null;
      --/< Shader
   end record;
   type sfRenderStates_Ptr is access all sfRenderStates;


   --//////////////////////////////////////////////////////////
   --/ @brief Construct a set of render states with all its attributes.
   --/
   --/ If you want to use a single specific render state,
   --/ for example a shader, you can call create with only one of the parameters,
   --/ and then pass the result to the draw subprogram.
   --/
   --/ @param blendMode Blend mode to use
   --/ @param transform Transform to use
   --/ @param texture   Texture to use
   --/ @param shader    Shader to use
   --/
   --//////////////////////////////////////////////////////////
   function create
     (blendMode : Sf.Graphics.BlendMode.sfBlendMode := Sf.Graphics.BlendMode.sfBlendAlpha;
      transform : Sf.Graphics.Transform.sfTransform := Sf.Graphics.Transform.Identity;
      texture : sfTexture_Ptr := null;
      shader : sfShader_Ptr := null) return sfRenderStates
     is (blendMode => blendMode,
         transform => transform,
         texture => texture,
         shader => shader);

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a default set of render states
   --/
   --/ Constructing a default set of render states is equivalent
   --/ to calling create without parameters.
   --/ The default set defines:
   --/
   --/  - the BlendAlpha blend mode
   --/  - the identity transform
   --/  - a null texture
   --/  - a null shader
   --/
   --//////////////////////////////////////////////////////////
   function default return sfRenderStates is (create);

private
   pragma Convention (C_Pass_By_Copy, sfRenderStates);
   pragma Convention (C, sfRenderStates_Ptr);

end Sf.Graphics.RenderStates;
