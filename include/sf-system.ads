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

--/ @summary
--/ System module
--/
--/ @description
--/ Base module of SFML, defining various utilities. It provides
--/ vector classes, Unicode strings and conversion functions,
--/ threads and mutexes, timing classes.
--/
package Sf.System is

   type sfClock is null record;
   type sfClock_Ptr is access all sfClock;
   type sfMutex is null record;
   type sfMutex_Ptr is access all sfMutex;
   type sfThread is null record;
   type sfThread_Ptr is access all sfThread;

private

   pragma Convention (C, sfClock);
   pragma Convention (C, sfClock_Ptr);
   pragma Convention (C, sfMutex);
   pragma Convention (C, sfMutex_Ptr);
   pragma Convention (C, sfThread);
   pragma Convention (C, sfThread_Ptr);

end Sf.System;
