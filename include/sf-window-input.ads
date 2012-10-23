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
with Sf.Window.Types;
with Sf.Window.Event;

package Sf.Window.Input is
   use Sf.Config;
   use Sf.Window.Types;
   use Sf.Window.Event;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the state of a key
   -- ///
   -- /// \param Input :   Input object
   -- /// \param KeyCode : Key to check
   -- ///
   -- /// \return sfTrue if key is down, sfFalse if key is up
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_IsKeyDown (Input : sfInput_Ptr; KeyCode : sfKeyCode) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the state of a mouse button
   -- ///
   -- /// \param Input :  Input object
   -- /// \param Button : Button to check
   -- ///
   -- /// \return sfTrue if button is down, sfFalse if button is up
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_IsMouseButtonDown (Input : sfInput_Ptr; Button : sfMouseButton) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the state of a joystick button
   -- ///
   -- /// \param Input :  Input object
   -- /// \param JoyId :  Identifier of the joystick to check (0 or 1)
   -- /// \param Button : Button to check
   -- ///
   -- /// \return sfTrue if button is down, sfFalse if button is up
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_IsJoystickButtonDown
     (Input  : sfInput_Ptr;
      JoyId  : sfUint32;
      Button : sfUint32)
      return   sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the mouse X position
   -- ///
   -- /// \param Input : Input object
   -- ///
   -- /// \return Current mouse left position, relative to owner window
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_GetMouseX (Input : sfInput_Ptr) return Integer;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the mouse Y position
   -- ///
   -- /// \param Input : Input object
   -- ///
   -- /// \return Current mouse top position, relative to owner window
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_GetMouseY (Input : sfInput_Ptr) return Integer;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the joystick position on a given axis
   -- ///
   -- /// \param Input : Input object
   -- /// \param JoyId : Identifier of the joystick to check (0 or 1)
   -- /// \param Axis :  Identifier of the axis to read
   -- ///
   -- /// \return Current joystick position, in the range [-100, 100]
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfInput_GetJoystickAxis
     (Input : sfInput_Ptr;
      JoyId : sfUint32;
      Axis  : sfJoyAxis)
      return  Float;

private

   pragma Import (C, sfInput_IsKeyDown, "sfInput_IsKeyDown");
   pragma Import (C, sfInput_IsMouseButtonDown, "sfInput_IsMouseButtonDown");
   pragma Import (C, sfInput_IsJoystickButtonDown, "sfInput_IsMouseButtonDown");
   pragma Import (C, sfInput_GetMouseX, "sfInput_GetMouseX");
   pragma Import (C, sfInput_GetMouseY, "sfInput_GetMouseY");
   pragma Import (C, sfInput_GetJoystickAxis, "sfInput_GetJoystickAxis");

end Sf.Window.Input;
