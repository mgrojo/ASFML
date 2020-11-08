
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


with Sf.System.Vector2;

package Sf.Window.Mouse is

   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Mouse buttons
   --/
   --//////////////////////////////////////////////////////////
   --/< The left mouse button
   --/< The right mouse button
   --/< The middle (wheel) mouse button
   --/< The first extra mouse button
   --/< The second extra mouse button
   --/< Keep last -- the total number of mouse buttons
   type sfMouseButton is
     (sfMouseLeft,
      sfMouseRight,
      sfMouseMiddle,
      sfMouseXButton1,
      sfMouseXButton2,
      sfMouseButtonCount);

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse wheels
   --/
   --//////////////////////////////////////////////////////////
   --/< The vertical mouse wheel
   --/< The horizontal mouse wheel
   type sfMouseWheel is
     (sfMouseVerticalWheel,
      sfMouseHorizontalWheel);

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a mouse button is pressed
   --/
   --/ @param button Button to check
   --/
   --/ @return sfTrue if the button is pressed, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isButtonPressed (button : sfMouseButton) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current position of the mouse
   --/
   --/ This function returns the current position of the mouse
   --/ cursor relative to the given window, or desktop if NULL is passed.
   --/
   --/ @param relativeTo Reference window
   --/
   --/ @return Position of the mouse cursor, relative to the given window
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (relativeTo : sfWindow_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the current position of the mouse
   --/
   --/ This function sets the current position of the mouse
   --/ cursor relative to the given window, or desktop if NULL is passed.
   --/
   --/ @param position   New position of the mouse
   --/ @param relativeTo Reference window
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (position : Sf.System.Vector2.sfVector2i; relativeTo : sfWindow_Ptr);

private

   pragma Convention (C, sfMouseButton);
   pragma Convention (C, sfMouseWheel);

   pragma Import (C, isButtonPressed, "sfMouse_isButtonPressed");
   pragma Import (C, getPosition, "sfMouse_getPosition");
   pragma Import (C, setPosition, "sfMouse_setPosition");

end Sf.Window.Mouse;
