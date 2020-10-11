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
  -- Headers
  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////
  --/ \brief Definition of all the event types
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
   pragma Convention (C, sfEventType);  -- /usr/include/SFML/Window/Event.h:69

  --//////////////////////////////////////////////////////////
  --/ \brief Keyboard event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfKeyEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:78
      code : aliased Sf.Window.Keyboard.sfKeyCode;  -- /usr/include/SFML/Window/Event.h:79
      alt : aliased Sf.Config.sfBool;  -- /usr/include/SFML/Window/Event.h:80
      control : aliased Sf.Config.sfBool;  -- /usr/include/SFML/Window/Event.h:81
      shift : aliased Sf.Config.sfBool;  -- /usr/include/SFML/Window/Event.h:82
      c_system : aliased Sf.Config.sfBool;  -- /usr/include/SFML/Window/Event.h:83
   end record;
   pragma Convention (C_Pass_By_Copy, sfKeyEvent);  -- /usr/include/SFML/Window/Event.h:84

  --//////////////////////////////////////////////////////////
  --/ \brief Text event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfTextEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:92
      unicode : aliased Sf.Config.sfUint32;  -- /usr/include/SFML/Window/Event.h:93
   end record;
   pragma Convention (C_Pass_By_Copy, sfTextEvent);  -- /usr/include/SFML/Window/Event.h:94

  --//////////////////////////////////////////////////////////
  --/ \brief Mouse move event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfMouseMoveEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:102
      x : aliased int;  -- /usr/include/SFML/Window/Event.h:103
      y : aliased int;  -- /usr/include/SFML/Window/Event.h:104
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseMoveEvent);  -- /usr/include/SFML/Window/Event.h:105

  --//////////////////////////////////////////////////////////
  --/ \brief Mouse buttons events parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfMouseButtonEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:113
      button : aliased Sf.Window.Mouse.sfMouseButton;  -- /usr/include/SFML/Window/Event.h:114
      x : aliased int;  -- /usr/include/SFML/Window/Event.h:115
      y : aliased int;  -- /usr/include/SFML/Window/Event.h:116
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseButtonEvent);  -- /usr/include/SFML/Window/Event.h:117

  --//////////////////////////////////////////////////////////
  --/ \brief Mouse wheel events parameters
  --/
  --/ \deprecated
  --/ Use sfMouseWheelScrollEvent instead.
  --/
  --//////////////////////////////////////////////////////////
   type sfMouseWheelEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:128
      c_delta : aliased int;  -- /usr/include/SFML/Window/Event.h:129
      x : aliased int;  -- /usr/include/SFML/Window/Event.h:130
      y : aliased int;  -- /usr/include/SFML/Window/Event.h:131
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseWheelEvent);  -- /usr/include/SFML/Window/Event.h:132

  --//////////////////////////////////////////////////////////
  --/ \brief Mouse wheel events parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfMouseWheelScrollEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:140
      wheel : aliased Sf.Window.Mouse.sfMouseWheel;  -- /usr/include/SFML/Window/Event.h:141
      c_delta : aliased float;  -- /usr/include/SFML/Window/Event.h:142
      x : aliased int;  -- /usr/include/SFML/Window/Event.h:143
      y : aliased int;  -- /usr/include/SFML/Window/Event.h:144
   end record;
   pragma Convention (C_Pass_By_Copy, sfMouseWheelScrollEvent);  -- /usr/include/SFML/Window/Event.h:145

  --//////////////////////////////////////////////////////////
  --/ \brief Joystick axis move event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfJoystickMoveEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:153
      joystickId : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:154
      axis : aliased Sf.Window.Joystick.sfJoystickAxis;  -- /usr/include/SFML/Window/Event.h:155
      position : aliased float;  -- /usr/include/SFML/Window/Event.h:156
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickMoveEvent);  -- /usr/include/SFML/Window/Event.h:157

  --//////////////////////////////////////////////////////////
  --/ \brief Joystick buttons events parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfJoystickButtonEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:165
      joystickId : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:166
      button : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:167
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickButtonEvent);  -- /usr/include/SFML/Window/Event.h:168

  --//////////////////////////////////////////////////////////
  --/ \brief Joystick connection/disconnection event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfJoystickConnectEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:176
      joystickId : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:177
   end record;
   pragma Convention (C_Pass_By_Copy, sfJoystickConnectEvent);  -- /usr/include/SFML/Window/Event.h:178

  --//////////////////////////////////////////////////////////
  --/ \brief Size events parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfSizeEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:186
      width : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:187
      height : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:188
   end record;
   pragma Convention (C_Pass_By_Copy, sfSizeEvent);  -- /usr/include/SFML/Window/Event.h:189

  --//////////////////////////////////////////////////////////
  --/ \brief Touch events parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfTouchEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:197
      finger : aliased unsigned;  -- /usr/include/SFML/Window/Event.h:198
      x : aliased int;  -- /usr/include/SFML/Window/Event.h:199
      y : aliased int;  -- /usr/include/SFML/Window/Event.h:200
   end record;
   pragma Convention (C_Pass_By_Copy, sfTouchEvent);  -- /usr/include/SFML/Window/Event.h:201

  --//////////////////////////////////////////////////////////
  --/ \brief Sensor event parameters
  --/
  --//////////////////////////////////////////////////////////
   type sfSensorEvent is record
      Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:209
      sensorType : aliased Sf.Window.Sensor.sfSensorType;  -- /usr/include/SFML/Window/Event.h:210
      x : aliased float;  -- /usr/include/SFML/Window/Event.h:211
      y : aliased float;  -- /usr/include/SFML/Window/Event.h:212
      z : aliased float;  -- /usr/include/SFML/Window/Event.h:213
   end record;
   pragma Convention (C_Pass_By_Copy, sfSensorEvent);  -- /usr/include/SFML/Window/Event.h:214

  --//////////////////////////////////////////////////////////
  --/ \brief sfEvent defines a system event and its parameters
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
            Event_Type : aliased sfEventType;  -- /usr/include/SFML/Window/Event.h:222
         when 1 =>
            size : aliased sfSizeEvent;  -- /usr/include/SFML/Window/Event.h:223
         when 2 =>
            key : aliased sfKeyEvent;  -- /usr/include/SFML/Window/Event.h:224
         when 3 =>
            text : aliased sfTextEvent;  -- /usr/include/SFML/Window/Event.h:225
         when 4 =>
            mouseMove : aliased sfMouseMoveEvent;  -- /usr/include/SFML/Window/Event.h:226
         when 5 =>
            mouseButton : aliased sfMouseButtonEvent;  -- /usr/include/SFML/Window/Event.h:227
         when 6 =>
            mouseWheel : aliased sfMouseWheelEvent;  -- /usr/include/SFML/Window/Event.h:228
         when 7 =>
            mouseWheelScroll : aliased sfMouseWheelScrollEvent;  -- /usr/include/SFML/Window/Event.h:229
         when 8 =>
            joystickMove : aliased sfJoystickMoveEvent;  -- /usr/include/SFML/Window/Event.h:230
         when 9 =>
            joystickButton : aliased sfJoystickButtonEvent;  -- /usr/include/SFML/Window/Event.h:231
         when 10 =>
            joystickConnect : aliased sfJoystickConnectEvent;  -- /usr/include/SFML/Window/Event.h:232
         when 11 =>
            touch : aliased sfTouchEvent;  -- /usr/include/SFML/Window/Event.h:233
         when others =>
            sensor : aliased sfSensorEvent;  -- /usr/include/SFML/Window/Event.h:234
      end case;
   end record;
   pragma Convention (C_Pass_By_Copy, sfEvent);
   pragma Unchecked_Union (sfEvent);  -- /usr/include/SFML/Window/Event.h:235

end Sf.Window.Event;
