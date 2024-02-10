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


package Sf.Graphics.BlendMode is

   --//////////////////////////////////////////////////////////
   --/ @brief Enumeration of the blending factors
   --/
   --//////////////////////////////////////////////////////////
   type sfBlendFactor is
     (sfBlendFactorZero,                 --/< (0, 0, 0, 0)
      sfBlendFactorOne,                  --/< (1, 1, 1, 1)
      sfBlendFactorSrcColor,             --/< (src.r, src.g, src.b, src.a)
      sfBlendFactorOneMinusSrcColor,     --/< (1, 1, 1, 1) - (src.r, src.g, src.b, src.a)
      sfBlendFactorDstColor,             --/< (dst.r, dst.g, dst.b, dst.a)
      sfBlendFactorOneMinusDstColor,     --/< (1, 1, 1, 1) - (dst.r, dst.g, dst.b, dst.a)
      sfBlendFactorSrcAlpha,             --/< (src.a, src.a, src.a, src.a)
      sfBlendFactorOneMinusSrcAlpha,     --/< (1, 1, 1, 1) - (src.a, src.a, src.a, src.a)
      sfBlendFactorDstAlpha,             --/< (dst.a, dst.a, dst.a, dst.a)
      sfBlendFactorOneMinusDstAlpha      --/< (1, 1, 1, 1) - (dst.a, dst.a, dst.a, dst.a)
     );
   pragma Convention (C, sfBlendFactor);

   --//////////////////////////////////////////////////////////
   --/ @brief Enumeration of the blending equations
   --/
   --//////////////////////////////////////////////////////////
   type sfBlendEquation is
     (sfBlendEquationAdd,               --/< Pixel = Src * SrcFactor + Dst * DstFactor
      sfBlendEquationSubtract,          --/< Pixel = Src * SrcFactor - Dst * DstFactor
      sfBlendEquationReverseSubtract,   --/< Pixel = Dst * DstFactor - Src * SrcFactor
      sfBlendEquationMin,               --/< Pixel = min(Dst, Src)
      sfBlendEquationMax                --/< Pixel = max(Dst, Src)
     );

   --//////////////////////////////////////////////////////////
   --/ @brief Blending mode for drawing
   --/
   --//////////////////////////////////////////////////////////
   type sfBlendMode is record
      colorSrcFactor : aliased sfBlendFactor;    --/< Source blending factor for the color channels
      colorDstFactor : aliased sfBlendFactor;    --/< Destination blending factor for the color channels
      colorEquation : aliased sfBlendEquation;   --/< Blending equation for the color channels
      alphaSrcFactor : aliased sfBlendFactor;    --/< Source blending factor for the alpha channel
      alphaDstFactor : aliased sfBlendFactor;    --/< Destination blending factor for the alpha channel
      alphaEquation : aliased sfBlendEquation;   --/< Blending equation for the alpha channel
   end record;

   --/< Blend source and dest according to dest alpha
   sfBlendAlpha : aliased constant sfBlendMode;

   --/< Add source to dest
   sfBlendAdd : aliased constant sfBlendMode;

   --/< Multiply source and dest
   sfBlendMultiply : aliased constant sfBlendMode;

   --/< Take minimum between source and dest
   sfBlendMin : aliased constant sfBlendMode;

  --/< Take maximum between source and dest
   sfBlendMax : aliased constant sfBlendMode;

   --/< Overwrite dest with source
   sfBlendNone : aliased constant sfBlendMode;

private
   pragma Convention (C, sfBlendEquation);
   pragma Convention (C_Pass_By_Copy, sfBlendMode);

   pragma Import (C, sfBlendAlpha, "sfBlendAlpha");
   pragma Import (C, sfBlendAdd, "sfBlendAdd");
   pragma Import (C, sfBlendMultiply, "sfBlendMultiply");
   pragma Import (C, sfBlendMin, "sfBlendMin");
   pragma Import (C, sfBlendMax, "sfBlendMax");
   pragma Import (C, sfBlendNone, "sfBlendNone");



end Sf.Graphics.BlendMode;
