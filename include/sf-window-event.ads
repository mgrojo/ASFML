--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2023 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.Window.Keyboard;

with Sf.Window.Mouse;
with Sf.Window.Joystick;
with Sf.Window.Sensor;

package Sf.Window.Event is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Definition of all the event types
   --/
   --//////////////////////////////////////////////////////////
   type sfEventType is
     (sfEvtClosed,                  --/< The window requested to be closed (no data)
      sfEvtResized,                 --/< The window was resized (data in event.size)
      sfEvtLostFocus,               --/< The window lost the focus (no data)
      sfEvtGainedFocus,             --/< The window gained the focus (no data)
      sfEvtTextEntered,             --/< A character was entered (data in event.text)
      sfEvtKeyPressed,              --/< A key was pressed (data in event.key)
      sfEvtKeyReleased,             --/< A key was released (data in event.key)
      sfEvtMouseWheelMoved,         --/< The mouse wheel was scrolled (data in event.mouseWheel) (deprecated)
      sfEvtMouseWheelScrolled,      --/< The mouse wheel was scrolled (data in event.mouseWheelScroll)
      sfEvtMouseButtonPressed,      --/< A mouse button was pressed (data in event.mouseButton)
      sfEvtMouseButtonReleased,     --/< A mouse button was released (data in event.mouseButton)
      sfEvtMouseMoved,              --/< The mouse cursor moved (data in event.mouseMove)
      sfEvtMouseEntered,            --/< The mouse cursor entered the area of the window (no data)
      sfEvtMouseLeft,               --/< The mouse cursor left the area of the window (no data)
      sfEvtJoystickButtonPressed,   --/< A joystick button was pressed (data in event.joystickButton)
      sfEvtJoystickButtonReleased,  --/< A joystick button was released (data in event.joystickButton)
      sfEvtJoystickMoved,           --/< The joystick moved along an axis (data in event.joystickMove)
      sfEvtJoystickConnected,       --/< A joystick was connected (data in event.joystickConnect)
      sfEvtJoystickDisconnected,    --/< A joystick was disconnected (data in event.joystickConnect)
      sfEvtTouchBegan,              --/< A touch event began (data in event.touch)
      sfEvtTouchMoved,              --/< A touch moved (data in event.touch)
      sfEvtTouchEnded,              --/< A touch event ended (data in event.touch)
      sfEvtSensorChanged,           --/< A sensor value changed (data in event.sensor)
      sfEvtCount                    --/< Keep last -- the total number of event types
     );

   --//////////////////////////////////////////////////////////
   --/ @brief Keyboard event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfKeyEvent is record
      eventType : aliased sfEventType;
      code : aliased Sf.Window.Keyboard.sfKeyCode;
      scancode : aliased Sf.Window.Keyboard.sfScancode;
      alt : aliased sfBool;
      control : aliased sfBool;
      shift : aliased sfBool;
      system : aliased sfBool;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Text event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfTextEvent is record
      eventType : aliased sfEventType;
      unicode : aliased sfUint32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse move event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseMoveEvent is record
      eventType : aliased sfEventType;
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse buttons events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseButtonEvent is record
      eventType : aliased sfEventType;
      button : aliased Sf.Window.Mouse.sfMouseButton;
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse wheel events parameters
   --/
   --/ @deprecated
   --/ Use sfMouseWheelScrollEvent instead.
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseWheelEvent is record
      eventType : aliased sfEventType;
      eventDelta : aliased sfInt32;
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse wheel events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseWheelScrollEvent is record
      eventType : aliased sfEventType;
      wheel : aliased Sf.Window.Mouse.sfMouseWheel;
      eventDelta : aliased float;
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick axis move event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickMoveEvent is record
      eventType : aliased sfEventType;
      joystickId : aliased sfUint32;
      axis : aliased Sf.Window.Joystick.sfJoystickAxis;
      position : aliased float;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick buttons events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickButtonEvent is record
      eventType : aliased sfEventType;
      joystickId : aliased sfUint32;
      button : aliased sfUint32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick connection/disconnection event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickConnectEvent is record
      eventType : aliased sfEventType;
      joystickId : aliased sfUint32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Size events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfSizeEvent is record
      eventType : aliased sfEventType;
      width : aliased sfUint32;
      height : aliased sfUint32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Touch events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfTouchEvent is record
      eventType : aliased sfEventType;
      finger : aliased sfUint32;
      x : aliased sfInt32;
      y : aliased sfInt32;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Sensor event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfSensorEvent is record
      eventType : aliased sfEventType;
      sensorType : aliased Sf.Window.Sensor.sfSensorType;
      x : aliased float;
      y : aliased float;
      z : aliased float;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief sfEvent defines a system event and its parameters
   --/
   --//////////////////////////////////////////////////////////
   --/ @field eventType Type of the event
   --/ @field size Size event parameters
   --/ @field key Key event parameters
   --/ @field text Text event parameters
   --/ @field mouseMove Mouse move event parameters
   --/ @field mouseButton Mouse button event parameters
   --/ @field mouseWheel Mouse wheel event parameters (deprecated)
   --/ @field mouseWheelScroll Mouse wheel event parameters
   --/ @field joystickMove Joystick move event parameters
   --/ @field joystickButton Joystick button event parameters
   --/ @field joystickConnect Joystick (dis)connect event parameters
   --/ @field touch Touch events parameters
   --/ @field sensor Sensor event parameters
   type sfEvent (discr : sfUint32 := 0) is record
      case discr is
         when 0 =>
            eventType : aliased sfEventType;
         when 1 =>
            size : aliased sfSizeEvent;
         when 2 =>
            key : aliased sfKeyEvent;
         when 3 =>
            text : aliased sfTextEvent;
         when 4 =>
            mouseMove : aliased sfMouseMoveEvent;
         when 5 =>
            mouseButton : aliased sfMouseButtonEvent;
         when 6 =>
            mouseWheel : aliased sfMouseWheelEvent;
         when 7 =>
            mouseWheelScroll : aliased sfMouseWheelScrollEvent;
         when 8 =>
            joystickMove : aliased sfJoystickMoveEvent;
         when 9 =>
            joystickButton : aliased sfJoystickButtonEvent;
         when 10 =>
            joystickConnect : aliased sfJoystickConnectEvent;
         when 11 =>
            touch : aliased sfTouchEvent;
         when others =>
            sensor : aliased sfSensorEvent;
      end case;
   end record;

private

   pragma Convention (C_Pass_By_Copy, sfSensorEvent);
   pragma Convention (C_Pass_By_Copy, sfTouchEvent);
   pragma Convention (C_Pass_By_Copy, sfSizeEvent);
   pragma Convention (C_Pass_By_Copy, sfJoystickConnectEvent);
   pragma Convention (C_Pass_By_Copy, sfJoystickButtonEvent);
   pragma Convention (C_Pass_By_Copy, sfJoystickMoveEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseWheelScrollEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseWheelEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseButtonEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseMoveEvent);
   pragma Convention (C_Pass_By_Copy, sfTextEvent);
   pragma Convention (C_Pass_By_Copy, sfKeyEvent);
   pragma Convention (C, sfEventType);
   pragma Convention (C_Pass_By_Copy, sfEvent);
   pragma Unchecked_Union (sfEvent);

end Sf.Window.Event;
