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


with Sf.Window.JoystickIdentification;

package Sf.Window.Joystick is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Global joysticks capabilities
   --/
   --//////////////////////////////////////////////////////////
   --/< Maximum number of supported joysticks
   --/< Maximum number of supported buttons
   --/< Maximum number of supported axes
   --//////////////////////////////////////////////////////////
   --/ @brief Axes supported by SFML joysticks
   --/
   --//////////////////////////////////////////////////////////
   --/< The X axis
   --/< The Y axis
   --/< The Z axis
   --/< The R axis
   --/< The U axis
   --/< The V axis
   --/< The X axis of the point-of-view hat
   --/< The Y axis of the point-of-view hat
   type sfJoystickAxis is
     (sfJoystickX,
      sfJoystickY,
      sfJoystickZ,
      sfJoystickR,
      sfJoystickU,
      sfJoystickV,
      sfJoystickPovX,
      sfJoystickPovY);

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a joystick is connected
   --/
   --/ @param joystick Index of the joystick to check
   --/
   --/ @return sfTrue if the joystick is connected, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isConnected (joystick : sfUint32) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Return the number of buttons supported by a joystick
   --/
   --/ If the joystick is not connected, this function returns 0.
   --/
   --/ @param joystick Index of the joystick
   --/
   --/ @return Number of buttons supported by the joystick
   --/
   --//////////////////////////////////////////////////////////
   function getButtonCount (joystick : sfUint32) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a joystick supports a given axis
   --/
   --/ If the joystick is not connected, this function returns false.
   --/
   --/ @param joystick Index of the joystick
   --/ @param axis     Axis to check
   --/
   --/ @return sfTrue if the joystick supports the axis, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function hasAxis (joystick : sfUint32; axis : sfJoystickAxis) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a joystick button is pressed
   --/
   --/ If the joystick is not connected, this function returns false.
   --/
   --/ @param joystick Index of the joystick
   --/ @param button   Button to check
   --/
   --/ @return sfTrue if the button is pressed, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isButtonPressed (joystick : sfUint32; button : sfUint32) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current position of a joystick axis
   --/
   --/ If the joystick is not connected, this function returns 0.
   --/
   --/ @param joystick Index of the joystick
   --/ @param axis     Axis to check
   --/
   --/ @return Current position of the axis, in range [-100 .. 100]
   --/
   --//////////////////////////////////////////////////////////
   function getAxisPosition (joystick : sfUint32; axis : sfJoystickAxis) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the joystick information
   --/
   --/ The result of this function will only remain valid until
   --/ the next time the function is called.
   --/
   --/ @param joystick Index of the joystick
   --/
   --/ @return Structure containing joystick information.
   --/
   --//////////////////////////////////////////////////////////
   function getIdentification (joystick : sfUint32) return Sf.Window.JoystickIdentification.sfJoystickIdentification;

   --//////////////////////////////////////////////////////////
   --/ @brief Update the states of all joysticks
   --/
   --/ This function is used internally by SFML, so you normally
   --/ don't have to call it explicitely. However, you may need to
   --/ call it if you have no window yet (or no window at all):
   --/ in this case the joysticks states are not updated automatically.
   --/
   --//////////////////////////////////////////////////////////
   procedure update;

private

   pragma Convention (C, sfJoystickAxis);
   pragma Import (C, isConnected, "sfJoystick_isConnected");
   pragma Import (C, getButtonCount, "sfJoystick_getButtonCount");
   pragma Import (C, hasAxis, "sfJoystick_hasAxis");
   pragma Import (C, isButtonPressed, "sfJoystick_isButtonPressed");
   pragma Import (C, getAxisPosition, "sfJoystick_getAxisPosition");
   pragma Import (C, getIdentification, "sfJoystick_getIdentification");
   pragma Import (C, update, "sfJoystick_update");

end Sf.Window.Joystick;
