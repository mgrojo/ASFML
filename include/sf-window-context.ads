--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2018 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.Window.Window;

package Sf.Window.Context is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new context
   --/
   --/ This function activates the new context.
   --/
   --/ @return New sfContext object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfContext_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a context
   --/
   --/ @param context Context to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (context : sfContext_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Activate or deactivate explicitely a context
   --/
   --/ @param context Context object
   --/ @param active  sfTrue to activate, sfFalse to deactivate
   --/
   --/ @return sfTrue on success, sfFalse on failure
   --/
   --//////////////////////////////////////////////////////////
   function setActive (context : sfContext_Ptr; active : sfBool) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the settings of the context.
   --/
   --/ Note that these settings may be different than the ones passed to the
   --/ constructor; they are indeed adjusted if the original settings are not
   --/ directly supported by the system.
   --/
   --/ @return Structure containing the settings
   --/
   --//////////////////////////////////////////////////////////
   function getSettings (context : sfContext_Ptr) return Sf.Window.Window.sfContextSettings;

private

   pragma Import (C, create, "sfContext_create");
   pragma Import (C, destroy, "sfContext_destroy");
   pragma Import (C, setActive, "sfContext_setActive");
   pragma Import (C, getSettings, "sfContext_getSettings");


end Sf.Window.Context;
