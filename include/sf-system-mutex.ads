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


package Sf.System.Mutex is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new mutex
   --/
   --/ @return A new sfMutex object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfMutex_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a mutex
   --/
   --/ @param mutex Mutex to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (mutex : sfMutex_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Lock a mutex
   --/
   --/ @param mutex Mutex object
   --/
   --//////////////////////////////////////////////////////////
   procedure lock (mutex : sfMutex_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Unlock a mutex
   --/
   --/ @param mutex Mutex object
   --/
   --//////////////////////////////////////////////////////////
   procedure unlock (mutex : sfMutex_Ptr);

private

   pragma Import (C, create, "sfMutex_create");
   pragma Import (C, destroy, "sfMutex_destroy");
   pragma Import (C, lock, "sfMutex_lock");
   pragma Import (C, unlock, "sfMutex_unlock");


end Sf.System.Mutex;
