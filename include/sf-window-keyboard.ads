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



package Sf.Window.Keyboard is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Key codes
   --/
   --//////////////////////////////////////////////////////////
   --/< Unhandled key
   --/< The A key
   --/< The B key
   --/< The C key
   --/< The D key
   --/< The E key
   --/< The F key
   --/< The G key
   --/< The H key
   --/< The I key
   --/< The J key
   --/< The K key
   --/< The L key
   --/< The M key
   --/< The N key
   --/< The O key
   --/< The P key
   --/< The Q key
   --/< The R key
   --/< The S key
   --/< The T key
   --/< The U key
   --/< The V key
   --/< The W key
   --/< The X key
   --/< The Y key
   --/< The Z key
   --/< The 0 key
   --/< The 1 key
   --/< The 2 key
   --/< The 3 key
   --/< The 4 key
   --/< The 5 key
   --/< The 6 key
   --/< The 7 key
   --/< The 8 key
   --/< The 9 key
   --/< The Escape key
   --/< The left Control key
   --/< The left Shift key
   --/< The left Alt key
   --/< The left OS specific key: window (Windows and Linux), apple (MacOS X), ...
   --/< The right Control key
   --/< The right Shift key
   --/< The right Alt key
   --/< The right OS specific key: window (Windows and Linux), apple (MacOS X), ...
   --/< The Menu key
   --/< The [ key
   --/< The ] key
   --/< The ; key
   --/< The , key
   --/< The . key
   --/< The ' key
   --/< The / key
   --/< The @ key
   --/< The ~ key
   --/< The = key
   --/< The - key (minus, usually from numpad)
   --/< The Space key
   --/< The Enter/Return key
   --/< The Backspace key
   --/< The Tabulation key
   --/< The Page up key
   --/< The Page down key
   --/< The End key
   --/< The Home key
   --/< The Insert key
   --/< The Delete key
   --/< +
   --/< -
   --/< *
   --/< /
   --/< Left arrow
   --/< Right arrow
   --/< Up arrow
   --/< Down arrow
   --/< The numpad 0 key
   --/< The numpad 1 key
   --/< The numpad 2 key
   --/< The numpad 3 key
   --/< The numpad 4 key
   --/< The numpad 5 key
   --/< The numpad 6 key
   --/< The numpad 7 key
   --/< The numpad 8 key
   --/< The numpad 9 key
   --/< The F1 key
   --/< The F2 key
   --/< The F3 key
   --/< The F4 key
   --/< The F5 key
   --/< The F6 key
   --/< The F7 key
   --/< The F8 key
   --/< The F8 key
   --/< The F10 key
   --/< The F11 key
   --/< The F12 key
   --/< The F13 key
   --/< The F14 key
   --/< The F15 key
   --/< The Pause key
   --/< Keep last -- the total number of keyboard keys
   type sfKeyCode is new sfUint32;
   sfKeyUnknown : constant sfKeyCode := -1;
   sfKeyA : constant sfKeyCode := 0;
   sfKeyB : constant sfKeyCode := 1;
   sfKeyC : constant sfKeyCode := 2;
   sfKeyD : constant sfKeyCode := 3;
   sfKeyE : constant sfKeyCode := 4;
   sfKeyF : constant sfKeyCode := 5;
   sfKeyG : constant sfKeyCode := 6;
   sfKeyH : constant sfKeyCode := 7;
   sfKeyI : constant sfKeyCode := 8;
   sfKeyJ : constant sfKeyCode := 9;
   sfKeyK : constant sfKeyCode := 10;
   sfKeyL : constant sfKeyCode := 11;
   sfKeyM : constant sfKeyCode := 12;
   sfKeyN : constant sfKeyCode := 13;
   sfKeyO : constant sfKeyCode := 14;
   sfKeyP : constant sfKeyCode := 15;
   sfKeyQ : constant sfKeyCode := 16;
   sfKeyR : constant sfKeyCode := 17;
   sfKeyS : constant sfKeyCode := 18;
   sfKeyT : constant sfKeyCode := 19;
   sfKeyU : constant sfKeyCode := 20;
   sfKeyV : constant sfKeyCode := 21;
   sfKeyW : constant sfKeyCode := 22;
   sfKeyX : constant sfKeyCode := 23;
   sfKeyY : constant sfKeyCode := 24;
   sfKeyZ : constant sfKeyCode := 25;
   sfKeyNum0 : constant sfKeyCode := 26;
   sfKeyNum1 : constant sfKeyCode := 27;
   sfKeyNum2 : constant sfKeyCode := 28;
   sfKeyNum3 : constant sfKeyCode := 29;
   sfKeyNum4 : constant sfKeyCode := 30;
   sfKeyNum5 : constant sfKeyCode := 31;
   sfKeyNum6 : constant sfKeyCode := 32;
   sfKeyNum7 : constant sfKeyCode := 33;
   sfKeyNum8 : constant sfKeyCode := 34;
   sfKeyNum9 : constant sfKeyCode := 35;
   sfKeyEscape : constant sfKeyCode := 36;
   sfKeyLControl : constant sfKeyCode := 37;
   sfKeyLShift : constant sfKeyCode := 38;
   sfKeyLAlt : constant sfKeyCode := 39;
   sfKeyLSystem : constant sfKeyCode := 40;
   sfKeyRControl : constant sfKeyCode := 41;
   sfKeyRShift : constant sfKeyCode := 42;
   sfKeyRAlt : constant sfKeyCode := 43;
   sfKeyRSystem : constant sfKeyCode := 44;
   sfKeyMenu : constant sfKeyCode := 45;
   sfKeyLBracket : constant sfKeyCode := 46;
   sfKeyRBracket : constant sfKeyCode := 47;
   sfKeySemicolon : constant sfKeyCode := 48;
   sfKeyComma : constant sfKeyCode := 49;
   sfKeyPeriod : constant sfKeyCode := 50;
   sfKeyQuote : constant sfKeyCode := 51;
   sfKeySlash : constant sfKeyCode := 52;
   sfKeyBackslash : constant sfKeyCode := 53;
   sfKeyTilde : constant sfKeyCode := 54;
   sfKeyEqual : constant sfKeyCode := 55;
   sfKeyHyphen : constant sfKeyCode := 56;
   sfKeySpace : constant sfKeyCode := 57;
   sfKeyEnter : constant sfKeyCode := 58;
   sfKeyBack : constant sfKeyCode := 59;
   sfKeyTab : constant sfKeyCode := 60;
   sfKeyPageUp : constant sfKeyCode := 61;
   sfKeyPageDown : constant sfKeyCode := 62;
   sfKeyEnd : constant sfKeyCode := 63;
   sfKeyHome : constant sfKeyCode := 64;
   sfKeyInsert : constant sfKeyCode := 65;
   sfKeyDelete : constant sfKeyCode := 66;
   sfKeyAdd : constant sfKeyCode := 67;
   sfKeySubtract : constant sfKeyCode := 68;
   sfKeyMultiply : constant sfKeyCode := 69;
   sfKeyDivide : constant sfKeyCode := 70;
   sfKeyLeft : constant sfKeyCode := 71;
   sfKeyRight : constant sfKeyCode := 72;
   sfKeyUp : constant sfKeyCode := 73;
   sfKeyDown : constant sfKeyCode := 74;
   sfKeyNumpad0 : constant sfKeyCode := 75;
   sfKeyNumpad1 : constant sfKeyCode := 76;
   sfKeyNumpad2 : constant sfKeyCode := 77;
   sfKeyNumpad3 : constant sfKeyCode := 78;
   sfKeyNumpad4 : constant sfKeyCode := 79;
   sfKeyNumpad5 : constant sfKeyCode := 80;
   sfKeyNumpad6 : constant sfKeyCode := 81;
   sfKeyNumpad7 : constant sfKeyCode := 82;
   sfKeyNumpad8 : constant sfKeyCode := 83;
   sfKeyNumpad9 : constant sfKeyCode := 84;
   sfKeyF1 : constant sfKeyCode := 85;
   sfKeyF2 : constant sfKeyCode := 86;
   sfKeyF3 : constant sfKeyCode := 87;
   sfKeyF4 : constant sfKeyCode := 88;
   sfKeyF5 : constant sfKeyCode := 89;
   sfKeyF6 : constant sfKeyCode := 90;
   sfKeyF7 : constant sfKeyCode := 91;
   sfKeyF8 : constant sfKeyCode := 92;
   sfKeyF9 : constant sfKeyCode := 93;
   sfKeyF10 : constant sfKeyCode := 94;
   sfKeyF11 : constant sfKeyCode := 95;
   sfKeyF12 : constant sfKeyCode := 96;
   sfKeyF13 : constant sfKeyCode := 97;
   sfKeyF14 : constant sfKeyCode := 98;
   sfKeyF15 : constant sfKeyCode := 99;
   sfKeyPause : constant sfKeyCode := 100;
   sfKeyCount : constant sfKeyCode := 101;


   -- Deprecated values:

   sfKeyDash : sfKeyCode renames sfKeyHyphen;     --< \deprecated Use Hyphen instead
   sfKeyReturn : sfKeyCode renames sfKeyEnter;    --< \deprecated Use Enter instead

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a key is pressed
   --/
   --/ @param key Key to check
   --/
   --/ @return sfTrue if the key is pressed, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isKeyPressed (key : sfKeyCode) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Show or hide the virtual keyboard.
   --/
   --/ Warning: the virtual keyboard is not supported on all systems.
   --/ It will typically be implemented on mobile OSes (Android, iOS)
   --/ but not on desktop OSes (Windows, Linux, ...).
   --/
   --/ If the virtual keyboard is not available, this function does nothing.
   --/
   --/ @param visible True to show, false to hide
   --/
   --//////////////////////////////////////////////////////////
   procedure setVirtualKeyboardVisible (visible : sfBool);

private

   pragma Import (C, isKeyPressed, "sfKeyboard_isKeyPressed");
   pragma Import (C, setVirtualKeyboardVisible, "sfKeyboard_setVirtualKeyboardVisible");


end Sf.Window.Keyboard;
