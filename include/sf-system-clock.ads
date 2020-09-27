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
with Sf.System.Time;

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
   -- /// \brief Create a new clock by copying an existing one
   -- ///
   -- /// \param clock Clock to copy
   -- ///
   -- /// \return A new sfClock object which is a copy of \a clock
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfClock_Copy(Clock : sfClock_Ptr) return sfClock_Ptr;
   
   -- ////////////////////////////////////////////////////////////
   -- /// Get the time elapsed for a clock
   -- ///
   -- /// \param Clock : Clock to get time from
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfClock_GetElapsedTime (Clock : sfClock_Ptr) return Time.sfTime;

   -- ////////////////////////////////////////////////////////////
   -- /// Restart a clock
   -- ///
   -- /// \param Clock : Clock to restart
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfClock_Restart (Clock : sfClock_Ptr);

private

   pragma Import (C, sfClock_Create, "sfClock_create");
   pragma Import (C, sfClock_Destroy, "sfClock_destroy");
   pragma Import (C, sfClock_copy, "sfClock_copy");
   pragma Import (C, sfClock_GetElapsedTime, "sfClock_getElapsedTime");
   pragma Import (C, sfClock_Restart, "sfClock_restart");

end Sf.System.Clock;
