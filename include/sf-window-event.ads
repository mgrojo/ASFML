pragma Ada_2005;
pragma Style_Checks (Off);

with Interfaces.C; use Interfaces.C;
with Sf.Window.Keyboard;
with Sf.Config;
with Sf.Window.Mouse;
with Sf.Window.Joystick;
with Sf.Window.Sensor;

package Sf.Window.Event is

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

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Definition of all the event types
   --/
   --//////////////////////////////////////////////////////////
   --/< The window requested to be closed (no data)
   --/< The window was resized (data in event.size)
   --/< The window lost the focus (no data)
   --/< The window gained the focus (no data)
   --/< A character was entered (data in event.text)
   --/< A key was pressed (data in event.key)
   --/< A key was released (data in event.key)
   --/< The mouse wheel was scrolled (data in event.mouseWheel) (deprecated)
   --/< The mouse wheel was scrolled (data in event.mouseWheelScroll)
   --/< A mouse button was pressed (data in event.mouseButton)
   --/< A mouse button was released (data in event.mouseButton)
   --/< The mouse cursor moved (data in event.mouseMove)
   --/< The mouse cursor entered the area of the window (no data)
   --/< The mouse cursor left the area of the window (no data)
   --/< A joystick button was pressed (data in event.joystickButton)
   --/< A joystick button was released (data in event.joystickButton)
   --/< The joystick moved along an axis (data in event.joystickMove)
   --/< A joystick was connected (data in event.joystickConnect)
   --/< A joystick was disconnected (data in event.joystickConnect)
   --/< A touch event began (data in event.touch)
   --/< A touch moved (data in event.touch)
   --/< A touch event ended (data in event.touch)
   --/< A sensor value changed (data in event.sensor)
   --/< Keep last -- the total number of event types
   type sfEventType is
     (sfEvtClosed,
      sfEvtResized,
      sfEvtLostFocus,
      sfEvtGainedFocus,
      sfEvtTextEntered,
      sfEvtKeyPressed,
      sfEvtKeyReleased,
      sfEvtMouseWheelMoved,
      sfEvtMouseWheelScrolled,
      sfEvtMouseButtonPressed,
      sfEvtMouseButtonReleased,
      sfEvtMouseMoved,
      sfEvtMouseEntered,
      sfEvtMouseLeft,
      sfEvtJoystickButtonPressed,
      sfEvtJoystickButtonReleased,
      sfEvtJoystickMoved,
      sfEvtJoystickConnected,
      sfEvtJoystickDisconnected,
      sfEvtTouchBegan,
      sfEvtTouchMoved,
      sfEvtTouchEnded,
      sfEvtSensorChanged,
      sfEvtCount);
   pragma Convention (C, sfEventType);

   --//////////////////////////////////////////////////////////
   --/ @brief Keyboard event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfKeyEvent is record
      Event_Type : aliased sfEventType;
      code : aliased Sf.Window.Keyboard.sfKeyCode;
      alt : aliased Sf.Config.sfBool;
      control : aliased Sf.Config.sfBool;
      shift : aliased Sf.Config.sfBool;
      c_system : aliased Sf.Config.sfBool;
   end record;
   pragma Convention (C_Pass_By_Copy, sfKeyEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Text event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfTextEvent is record
      Event_Type : aliased sfEventType;
      unicode : aliased Sf.Config.sfUint32;
   end record;
   pragma Convention (C_Pass_By_Copy, sfTextEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse move event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseMoveEvent is record
      Event_Type : aliased sfEventType;
      x : aliased int;
      y : aliased int;
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseMoveEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse buttons events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseButtonEvent is record
      Event_Type : aliased sfEventType;
      button : aliased Sf.Window.Mouse.sfMouseButton;
      x : aliased int;
      y : aliased int;
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseButtonEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse wheel events parameters
   --/
   --/ @deprecated
   --/ Use sfMouseWheelScrollEvent instead.
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseWheelEvent is record
      Event_Type : aliased sfEventType;
      c_delta : aliased int;
      x : aliased int;
      y : aliased int;
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseWheelEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Mouse wheel events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfMouseWheelScrollEvent is record
      Event_Type : aliased sfEventType;
      wheel : aliased Sf.Window.Mouse.sfMouseWheel;
      c_delta : aliased float;
      x : aliased int;
      y : aliased int;
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseWheelScrollEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick axis move event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickMoveEvent is record
      Event_Type : aliased sfEventType;
      joystickId : aliased unsigned;
      axis : aliased Sf.Window.Joystick.sfJoystickAxis;
      position : aliased float;
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickMoveEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick buttons events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickButtonEvent is record
      Event_Type : aliased sfEventType;
      joystickId : aliased unsigned;
      button : aliased unsigned;
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickButtonEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Joystick connection/disconnection event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfJoystickConnectEvent is record
      Event_Type : aliased sfEventType;
      joystickId : aliased unsigned;
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickConnectEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Size events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfSizeEvent is record
      Event_Type : aliased sfEventType;
      width : aliased unsigned;
      height : aliased unsigned;
   end record;
   pragma Convention (C_Pass_By_Copy, sfSizeEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Touch events parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfTouchEvent is record
      Event_Type : aliased sfEventType;
      finger : aliased unsigned;
      x : aliased int;
      y : aliased int;
   end record;
   pragma Convention (C_Pass_By_Copy, sfTouchEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief Sensor event parameters
   --/
   --//////////////////////////////////////////////////////////
   type sfSensorEvent is record
      Event_Type : aliased sfEventType;
      sensorType : aliased Sf.Window.Sensor.sfSensorType;
      x : aliased float;
      y : aliased float;
      z : aliased float;
   end record;
   pragma Convention (C_Pass_By_Copy, sfSensorEvent);

   --//////////////////////////////////////////////////////////
   --/ @brief sfEvent defines a system event and its parameters
   --/
   --//////////////////////////////////////////////////////////
   --/< Type of the event
   --/< Size event parameters
   --/< Key event parameters
   --/< Text event parameters
   --/< Mouse move event parameters
   --/< Mouse button event parameters
   --/< Mouse wheel event parameters (deprecated)
   --/< Mouse wheel event parameters
   --/< Joystick move event parameters
   --/< Joystick button event parameters
   --/< Joystick (dis)connect event parameters
   --/< Touch events parameters
   --/< Sensor event parameters
   type sfEvent (discr : unsigned := 0) is record
      case discr is
         when 0 =>
            Event_Type : aliased sfEventType;
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
   pragma Convention (C_Pass_By_Copy, sfEvent);
   pragma Unchecked_Union (sfEvent);

end Sf.Window.Event;
