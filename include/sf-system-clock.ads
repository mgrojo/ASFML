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
with Sf.System.Types;

package Sf.System.Clock is
   use Sf.System.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new clock and start it
   -- ///
   -- /// \return A new sfClock object
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfClock_Create return sfClock_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing clock
   -- ///
   -- /// \param Clock : Clock to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfClock_Destroy (Clock : sfClock_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the time elapsed for a clock
   -- ///
   -- /// \param Clock : Clock to get time from
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfClock_GetTime (Clock : sfClock_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Restart a clock
   -- ///
   -- /// \param Clock : Clock to restart
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfClock_Reset (Clock : sfClock_Ptr);

private

   pragma Import (C, sfClock_Create, "sfClock_Create");
   pragma Import (C, sfClock_Destroy, "sfClock_Destroy");
   pragma Import (C, sfClock_GetTime, "sfClock_GetTime");
   pragma Import (C, sfClock_Reset, "sfClock_Reset");

end Sf.System.Clock;
