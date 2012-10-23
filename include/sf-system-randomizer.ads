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
with Sf.Config;

package Sf.System.Randomizer is
   use Sf.Config;

   -- ////////////////////////////////////////////////////////////
   -- /// Set the seed for the random numbers generator. Using a known seed
   -- /// allows you to reproduce the same sequence of random numbers
   -- ///
   -- /// \param Seed : Number to use as the seed
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRandom_SetSeed (Seed : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the seed used to generate random numbers the generator
   -- ///
   -- /// \return Current seed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRandom_GetSeed return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a random float number in a given range
   -- ///
   -- /// \param B : Start of the range
   -- /// \param E : End of the range
   -- ///
   -- /// \return Random number in [B, E]
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRandom_Float (B, E : Float) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a random integer number in a given range
   -- ///
   -- /// \param B : Start of the range
   -- /// \param E : End of the range
   -- ///
   -- /// \return Random number in [Begin, End]
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRandom_Int (B, E : Integer) return Integer;

private

   pragma Import (C, sfRandom_SetSeed, "sfRandom_SetSeed");
   pragma Import (C, sfRandom_GetSeed, "sfRandom_GetSeed");
   pragma Import (C, sfRandom_Float, "sfRandom_Float");
   pragma Import (C, sfRandom_Int, "sfRandom_Int");

end Sf.System.Randomizer;
