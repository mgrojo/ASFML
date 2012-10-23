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

package Sf.Window.Event is
   use Sf.Config;

   -- ////////////////////////////////////////////////////////////
   -- /// Definition of key codes for keyboard events
   -- ////////////////////////////////////////////////////////////
   subtype sfKeyCode is sfUint32;

   sfKeyA         : constant sfKeyCode := 97;
   sfKeyB         : constant sfKeyCode := 98;
   sfKeyC         : constant sfKeyCode := 99;
   sfKeyD         : constant sfKeyCode := 100;
   sfKeyE         : constant sfKeyCode := 101;
   sfKeyF         : constant sfKeyCode := 102;
   sfKeyG         : constant sfKeyCode := 103;
   sfKeyH         : constant sfKeyCode := 104;
   sfKeyI         : constant sfKeyCode := 105;
   sfKeyJ         : constant sfKeyCode := 106;
   sfKeyK         : constant sfKeyCode := 107;
   sfKeyL         : constant sfKeyCode := 108;
   sfKeyM         : constant sfKeyCode := 109;
   sfKeyN         : constant sfKeyCode := 110;
   sfKeyO         : constant sfKeyCode := 111;
   sfKeyP         : constant sfKeyCode := 112;
   sfKeyQ         : constant sfKeyCode := 113;
   sfKeyR         : constant sfKeyCode := 114;
   sfKeyS         : constant sfKeyCode := 115;
   sfKeyT         : constant sfKeyCode := 116;
   sfKeyU         : constant sfKeyCode := 117;
   sfKeyV         : constant sfKeyCode := 118;
   sfKeyW         : constant sfKeyCode := 119;
   sfKeyX         : constant sfKeyCode := 120;
   sfKeyY         : constant sfKeyCode := 121;
   sfKeyZ         : constant sfKeyCode := 122;
   sfKeyNum0      : constant sfKeyCode := 48;
   sfKeyNum1      : constant sfKeyCode := 49;
   sfKeyNum2      : constant sfKeyCode := 50;
   sfKeyNum3      : constant sfKeyCode := 51;
   sfKeyNum4      : constant sfKeyCode := 52;
   sfKeyNum5      : constant sfKeyCode := 53;
   sfKeyNum6      : constant sfKeyCode := 54;
   sfKeyNum7      : constant sfKeyCode := 55;
   sfKeyNum8      : constant sfKeyCode := 56;
   sfKeyNum9      : constant sfKeyCode := 57;
   sfKeyEscape    : constant sfKeyCode := 256;
   sfKeyLControl  : constant sfKeyCode := 257;
   sfKeyLShift    : constant sfKeyCode := 258;
   sfKeyLAlt      : constant sfKeyCode := 259;
   sfKeyLSystem   : constant sfKeyCode := 260;
   sfKeyRControl  : constant sfKeyCode := 261;
   sfKeyRShift    : constant sfKeyCode := 262;
   sfKeyRAlt      : constant sfKeyCode := 263;
   sfKeyRSystem   : constant sfKeyCode := 264;
   sfKeyMenu      : constant sfKeyCode := 265;
   sfKeyLBracket  : constant sfKeyCode := 266;
   sfKeyRBracket  : constant sfKeyCode := 267;
   sfKeySemiColon : constant sfKeyCode := 268;
   sfKeyComma     : constant sfKeyCode := 269;
   sfKeyPeriod    : constant sfKeyCode := 270;
   sfKeyQuote     : constant sfKeyCode := 271;
   sfKeySlash     : constant sfKeyCode := 272;
   sfKeyBackSlash : constant sfKeyCode := 273;
   sfKeyTilde     : constant sfKeyCode := 274;
   sfKeyEqual     : constant sfKeyCode := 275;
   sfKeyDash      : constant sfKeyCode := 276;
   sfKeySpace     : constant sfKeyCode := 277;
   sfKeyReturn    : constant sfKeyCode := 278;
   sfKeyBack      : constant sfKeyCode := 279;
   sfKeyTab       : constant sfKeyCode := 280;
   sfKeyPageUp    : constant sfKeyCode := 281;
   sfKeyPageDown  : constant sfKeyCode := 282;
   sfKeyEnd       : constant sfKeyCode := 283;
   sfKeyHome      : constant sfKeyCode := 284;
   sfKeyInsert    : constant sfKeyCode := 285;
   sfKeyDelete    : constant sfKeyCode := 286;
   sfKeyAdd       : constant sfKeyCode := 287;
   sfKeySubtract  : constant sfKeyCode := 288;
   sfKeyMultiply  : constant sfKeyCode := 289;
   sfKeyDivide    : constant sfKeyCode := 290;
   sfKeyLeft      : constant sfKeyCode := 291;
   sfKeyRight     : constant sfKeyCode := 292;
   sfKeyUp        : constant sfKeyCode := 293;
   sfKeyDown      : constant sfKeyCode := 294;
   sfKeyNumpad0   : constant sfKeyCode := 295;
   sfKeyNumpad1   : constant sfKeyCode := 296;
   sfKeyNumpad2   : constant sfKeyCode := 297;
   sfKeyNumpad3   : constant sfKeyCode := 298;
   sfKeyNumpad4   : constant sfKeyCode := 299;
   sfKeyNumpad5   : constant sfKeyCode := 300;
   sfKeyNumpad6   : constant sfKeyCode := 301;
   sfKeyNumpad7   : constant sfKeyCode := 302;
   sfKeyNumpad8   : constant sfKeyCode := 303;
   sfKeyNumpad9   : constant sfKeyCode := 304;
   sfKeyF1        : constant sfKeyCode := 305;
   sfKeyF2        : constant sfKeyCode := 306;
   sfKeyF3        : constant sfKeyCode := 307;
   sfKeyF4        : constant sfKeyCode := 308;
   sfKeyF5        : constant sfKeyCode := 309;
   sfKeyF6        : constant sfKeyCode := 310;
   sfKeyF7        : constant sfKeyCode := 311;
   sfKeyF8        : constant sfKeyCode := 312;
   sfKeyF9        : constant sfKeyCode := 313;
   sfKeyF10       : constant sfKeyCode := 314;
   sfKeyF11       : constant sfKeyCode := 315;
   sfKeyF12       : constant sfKeyCode := 316;
   sfKeyF13       : constant sfKeyCode := 317;
   sfKeyF14       : constant sfKeyCode := 318;
   sfKeyF15       : constant sfKeyCode := 319;
   sfKeyPause     : constant sfKeyCode := 320;
   sfKeyCount     : constant sfKeyCode := 321;

   -- ////////////////////////////////////////////////////////////
   -- /// Definition of button codes for mouse events
   -- ////////////////////////////////////////////////////////////
   type sfMouseButton is (sfButtonLeft, sfButtonRight, sfButtonMiddle, sfButtonX1, sfButtonX2);

   -- ////////////////////////////////////////////////////////////
   -- /// Definition of joystick axis for joystick events
   -- ////////////////////////////////////////////////////////////
   type sfJoyAxis is (
     sfJoyAxisX,
     sfJoyAxisY,
     sfJoyAxisZ,
     sfJoyAxisR,
     sfJoyAxisU,
     sfJoyAxisV,
     sfJoyAxisPOV);

   -- ////////////////////////////////////////////////////////////
   -- /// Definition of all the event types
   -- ////////////////////////////////////////////////////////////
   type sfEventType is (
     sfEvtClosed,
     sfEvtResized,
     sfEvtLostFocus,
     sfEvtGainedFocus,
     sfEvtTextEntered,
     sfEvtKeyPressed,
     sfEvtKeyReleased,
     sfEvtMouseWheelMoved,
     sfEvtMouseButtonPressed,
     sfEvtMouseButtonReleased,
     sfEvtMouseMoved,
     sfEvtMouseEntered,
     sfEvtMouseLeft,
     sfEvtJoyButtonPressed,
     sfEvtJoyButtonReleased,
     sfEvtJoyMoved);

   -- ////////////////////////////////////////////////////////////
   -- /// Keyboard event parameters
   -- ////////////////////////////////////////////////////////////
   type sfKeyEvent is record
      Event_Type : aliased sfEventType;
      Code       : aliased sfKeyCode;
      Alt        : aliased sfBool;
      Control    : aliased sfBool;
      Shift      : aliased sfBool;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Text event parameters
   -- ////////////////////////////////////////////////////////////
   type sfTextEvent is record
      Event_Type : aliased sfEventType;
      Unicode    : aliased sfUint32;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Mouse move event parameters
   -- ////////////////////////////////////////////////////////////
   type sfMouseMoveEvent is record
      Event_Type : aliased sfEventType;
      X          : aliased Integer;
      Y          : aliased Integer;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Mouse buttons events parameters
   -- ////////////////////////////////////////////////////////////
   type sfMouseButtonEvent is record
      Event_Type : aliased sfEventType;
      Button     : aliased sfMouseButton;
      X          : aliased Integer;
      Y          : aliased Integer;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Mouse wheel events parameters
   -- ////////////////////////////////////////////////////////////
   type sfMouseWheelEvent is record
      Event_Type  : aliased sfEventType;
      Delta_Value : aliased Integer;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Joystick axis move event parameters
   -- ////////////////////////////////////////////////////////////
   type sfJoyMoveEvent is record
      Event_Type : aliased sfEventType;
      JoystickId : aliased sfUint32;
      Axis       : aliased sfJoyAxis;
      Position   : aliased Float;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Joystick buttons events parameters
   -- ////////////////////////////////////////////////////////////
   type sfJoyButtonEvent is record
      Event_Type : aliased sfEventType;
      JoystickId : aliased sfUint32;
      Button     : aliased sfUint32;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Size events parameters
   -- ////////////////////////////////////////////////////////////
   type sfSizeEvent is record
      Event_Type : aliased sfEventType;
      Width      : aliased sfUint32;
      Height     : aliased sfUint32;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// sfEvent defines a system event and its parameters
   -- ////////////////////////////////////////////////////////////
   type sfEvent (Discr : sfUint32 := 0) is record
      case Discr is
         when 0 =>
            Event_Type : aliased sfEventType;
         when 1 =>
            Key : aliased sfKeyEvent;
         when 2 =>
            Text : aliased sfTextEvent;
         when 3 =>
            MouseMove : aliased sfMouseMoveEvent;
         when 4 =>
            MouseButton : aliased sfMouseButtonEvent;
         when 5 =>
            MouseWheel : aliased sfMouseWheelEvent;
         when 6 =>
            JoyMove : aliased sfJoyMoveEvent;
         when 7 =>
            JoyButton : aliased sfJoyButtonEvent;
         when others =>
            Size : aliased sfSizeEvent;
      end case;
   end record;

private

   pragma Convention (C, sfMouseButton);
   pragma Convention (C, sfJoyAxis);
   pragma Convention (C, sfEventType);

   pragma Convention (C_Pass_By_Copy, sfKeyEvent);
   pragma Convention (C_Pass_By_Copy, sfTextEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseMoveEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseButtonEvent);
   pragma Convention (C_Pass_By_Copy, sfMouseWheelEvent);
   pragma Convention (C_Pass_By_Copy, sfJoyMoveEvent);
   pragma Convention (C_Pass_By_Copy, sfJoyButtonEvent);
   pragma Convention (C_Pass_By_Copy, sfSizeEvent);

   pragma Convention (C_Pass_By_Copy, sfEvent);
   pragma Unchecked_Union (sfEvent);

end Sf.Window.Event;
