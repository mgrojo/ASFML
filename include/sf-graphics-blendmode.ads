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


package Sf.Graphics.BlendMode is

   --//////////////////////////////////////////////////////////
   --/ @brief Enumeration of the blending factors
   --/
   --//////////////////////////////////////////////////////////
   --/< (0, 0, 0, 0)
   --/< (1, 1, 1, 1)
   --/< (src.r, src.g, src.b, src.a)
   --/< (1, 1, 1, 1) - (src.r, src.g, src.b, src.a)
   --/< (dst.r, dst.g, dst.b, dst.a)
   --/< (1, 1, 1, 1) - (dst.r, dst.g, dst.b, dst.a)
   --/< (src.a, src.a, src.a, src.a)
   --/< (1, 1, 1, 1) - (src.a, src.a, src.a, src.a)
   --/< (dst.a, dst.a, dst.a, dst.a)
   --/< (1, 1, 1, 1) - (dst.a, dst.a, dst.a, dst.a)
   type sfBlendFactor is
     (sfBlendFactorZero,
      sfBlendFactorOne,
      sfBlendFactorSrcColor,
      sfBlendFactorOneMinusSrcColor,
      sfBlendFactorDstColor,
      sfBlendFactorOneMinusDstColor,
      sfBlendFactorSrcAlpha,
      sfBlendFactorOneMinusSrcAlpha,
      sfBlendFactorDstAlpha,
      sfBlendFactorOneMinusDstAlpha);
   pragma Convention (C, sfBlendFactor);

   --//////////////////////////////////////////////////////////
   --/ @brief Enumeration of the blending equations
   --/
   --//////////////////////////////////////////////////////////
   --/< Pixel = Src * SrcFactor + Dst * DstFactor
   --/< Pixel = Src * SrcFactor - Dst * DstFactor
   --/< Pixel = Dst * DstFactor - Src * SrcFactor
   type sfBlendEquation is
     (sfBlendEquationAdd,
      sfBlendEquationSubtract,
      sfBlendEquationReverseSubtract);
   pragma Convention (C, sfBlendEquation);

   --//////////////////////////////////////////////////////////
   --/ @brief Blending mode for drawing
   --/
   --//////////////////////////////////////////////////////////
   --/< Source blending factor for the color channels
   --/< Destination blending factor for the color channels
   --/< Blending equation for the color channels
   --/< Source blending factor for the alpha channel
   --/< Destination blending factor for the alpha channel
   --/< Blending equation for the alpha channel
   type sfBlendMode is record
      colorSrcFactor : aliased sfBlendFactor;
      colorDstFactor : aliased sfBlendFactor;
      colorEquation : aliased sfBlendEquation;
      alphaSrcFactor : aliased sfBlendFactor;
      alphaDstFactor : aliased sfBlendFactor;
      alphaEquation : aliased sfBlendEquation;
   end record;
   pragma Convention (C_Pass_By_Copy, sfBlendMode);

   --/< Blend source and dest according to dest alpha
   sfBlendAlpha : aliased sfBlendMode;

   --/< Add source to dest
   sfBlendAdd : aliased sfBlendMode;

   --/< Multiply source and dest
   sfBlendMultiply : aliased sfBlendMode;

   --/< Overwrite dest with source
   sfBlendNone : aliased sfBlendMode;

private

   pragma Import (C, sfBlendAlpha, "sfBlendAlpha");
   pragma Import (C, sfBlendAdd, "sfBlendAdd");
   pragma Import (C, sfBlendMultiply, "sfBlendMultiply");
   pragma Import (C, sfBlendNone, "sfBlendNone");



end Sf.Graphics.BlendMode;
