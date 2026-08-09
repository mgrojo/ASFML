--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2026 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.System.Time;

package Sf.System.Clock is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new clock and start it
   --/
   --/ @return A new sfClock object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfClock_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new clock by copying an existing one
   --/
   --/ @param clock Clock to copy
   --/
   --/ @return A new sfClock object which is a copy of @a clock
   --/
   --//////////////////////////////////////////////////////////
   function copy (clock : sfClock_Ptr) return sfClock_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a clock
   --/
   --/ @param clock Clock to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (clock : sfClock_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the time elapsed in a clock
   --/
   --/ This function returns the time elapsed since the last call
   --/ to sfClock_restart (or the construction of the object if
   --/ sfClock_restart has not been called).
   --/
   --/ @param clock Clock object
   --/
   --/ @return Time elapsed
   --/
   --//////////////////////////////////////////////////////////
   function getElapsedTime (clock : sfClock_Ptr) return Sf.System.Time.sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Check whether the clock is running
   --/
   --/ @param clock Clock object
   --/
   --/ @return sfTrue if the clock is running, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isRunning (clock : sfClock_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Start the clock
   --/
   --/ @param clock Clock object
   --/
   --/ @see stop
   --/
   --//////////////////////////////////////////////////////////
   procedure start (clock : sfClock_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Stop (pause) the clock
   --/
   --/ @param clock Clock object
   --/
   --/ @see start
   --/
   --//////////////////////////////////////////////////////////
   procedure stop (clock : sfClock_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Restart a clock
   --/
   --/ This function puts the time counter back to zero.
   --/ It also returns the time elapsed since the clock was started.
   --/ The clock keeps running after the restart.
   --/
   --/ @param clock Clock object
   --/
   --/ @return Time elapsed
   --/
   --//////////////////////////////////////////////////////////
   function restart (clock : sfClock_Ptr) return Sf.System.Time.sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Reset the clock
   --/
   --/ This function puts the time counter back to zero, returns the
   --/ elapsed time, and leaves the clock stopped. Call start to resume.
   --/
   --/ @param clock Clock object
   --/
   --/ @return Time elapsed
   --/
   --/ @see `restart`
   --//////////////////////////////////////////////////////////
   function reset (clock : sfClock_Ptr) return Sf.System.Time.sfTime;

private

   pragma Import (C, create, "sfClock_create");
   pragma Import (C, copy, "sfClock_copy");
   pragma Import (C, destroy, "sfClock_destroy");
   pragma Import (C, getElapsedTime, "sfClock_getElapsedTime");
   pragma Import (C, isRunning, "sfClock_isRunning");
   pragma Import (C, start, "sfClock_start");
   pragma Import (C, stop, "sfClock_stop");
   pragma Import (C, restart, "sfClock_restart");
   pragma Import (C, reset, "sfClock_reset");


end Sf.System.Clock;
