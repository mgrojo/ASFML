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
   type sfKeyCode is new sfUint32;
   sfKeyUnknown   : constant sfKeyCode := -1;  --/< Unhandled key
   sfKeyA         : constant sfKeyCode := 0;   --/< The A key
   sfKeyB         : constant sfKeyCode := 1;   --/< The B key
   sfKeyC         : constant sfKeyCode := 2;   --/< The C key
   sfKeyD         : constant sfKeyCode := 3;   --/< The D key
   sfKeyE         : constant sfKeyCode := 4;   --/< The E key
   sfKeyF         : constant sfKeyCode := 5;   --/< The F key
   sfKeyG         : constant sfKeyCode := 6;   --/< The G key
   sfKeyH         : constant sfKeyCode := 7;   --/< The H key
   sfKeyI         : constant sfKeyCode := 8;   --/< The I key
   sfKeyJ         : constant sfKeyCode := 9;   --/< The J key
   sfKeyK         : constant sfKeyCode := 10;  --/< The K key
   sfKeyL         : constant sfKeyCode := 11;  --/< The L key
   sfKeyM         : constant sfKeyCode := 12;  --/< The M key
   sfKeyN         : constant sfKeyCode := 13;  --/< The N key
   sfKeyO         : constant sfKeyCode := 14;  --/< The O key
   sfKeyP         : constant sfKeyCode := 15;  --/< The P key
   sfKeyQ         : constant sfKeyCode := 16;  --/< The Q key
   sfKeyR         : constant sfKeyCode := 17;  --/< The R key
   sfKeyS         : constant sfKeyCode := 18;  --/< The S key
   sfKeyT         : constant sfKeyCode := 19;  --/< The T key
   sfKeyU         : constant sfKeyCode := 20;  --/< The U key
   sfKeyV         : constant sfKeyCode := 21;  --/< The V key
   sfKeyW         : constant sfKeyCode := 22;  --/< The W key
   sfKeyX         : constant sfKeyCode := 23;  --/< The X key
   sfKeyY         : constant sfKeyCode := 24;  --/< The Y key
   sfKeyZ         : constant sfKeyCode := 25;  --/< The Z key
   sfKeyNum0      : constant sfKeyCode := 26;  --/< The 0 key
   sfKeyNum1      : constant sfKeyCode := 27;  --/< The 1 key
   sfKeyNum2      : constant sfKeyCode := 28;  --/< The 2 key
   sfKeyNum3      : constant sfKeyCode := 29;  --/< The 3 key
   sfKeyNum4      : constant sfKeyCode := 30;  --/< The 4 key
   sfKeyNum5      : constant sfKeyCode := 31;  --/< The 5 key
   sfKeyNum6      : constant sfKeyCode := 32;  --/< The 6 key
   sfKeyNum7      : constant sfKeyCode := 33;  --/< The 7 key
   sfKeyNum8      : constant sfKeyCode := 34;  --/< The 8 key
   sfKeyNum9      : constant sfKeyCode := 35;  --/< The 9 key
   sfKeyEscape    : constant sfKeyCode := 36;  --/< The Escape key
   sfKeyLControl  : constant sfKeyCode := 37;  --/< The left Control key
   sfKeyLShift    : constant sfKeyCode := 38;  --/< The left Shift key
   sfKeyLAlt      : constant sfKeyCode := 39;  --/< The left Alt key
   sfKeyLSystem   : constant sfKeyCode := 40;  --/< The left OS specific key: window (Windows and Linux), apple (MacOS X), ...
   sfKeyRControl  : constant sfKeyCode := 41;  --/< The right Control key
   sfKeyRShift    : constant sfKeyCode := 42;  --/< The right Shift key
   sfKeyRAlt      : constant sfKeyCode := 43;  --/< The right Alt key
   sfKeyRSystem   : constant sfKeyCode := 44;  --/< The right OS specific key: window (Windows and Linux), apple (MacOS X), ...
   sfKeyMenu      : constant sfKeyCode := 45;  --/< The Menu key
   sfKeyLBracket  : constant sfKeyCode := 46;  --/< The [ key
   sfKeyRBracket  : constant sfKeyCode := 47;  --/< The ] key
   sfKeySemicolon : constant sfKeyCode := 48;  --/< The ; key
   sfKeyComma     : constant sfKeyCode := 49;  --/< The , key
   sfKeyPeriod    : constant sfKeyCode := 50;  --/< The . key
   sfKeyQuote     : constant sfKeyCode := 51;  --/< The ' key
   sfKeySlash     : constant sfKeyCode := 52;  --/< The / key
   sfKeyBackslash : constant sfKeyCode := 53;  --/< The \ key
   sfKeyTilde     : constant sfKeyCode := 54;  --/< The ~ key
   sfKeyEqual     : constant sfKeyCode := 55;  --/< The = key
   sfKeyHyphen    : constant sfKeyCode := 56;  --/< The - key (minus, usually from numpad)
   sfKeySpace     : constant sfKeyCode := 57;  --/< The Space key
   sfKeyEnter     : constant sfKeyCode := 58;  --/< The Enter/Return key
   sfKeyBack      : constant sfKeyCode := 59;  --/< The Backspace key
   sfKeyTab       : constant sfKeyCode := 60;  --/< The Tabulation key
   sfKeyPageUp    : constant sfKeyCode := 61;  --/< The Page up key
   sfKeyPageDown  : constant sfKeyCode := 62;  --/< The Page down key
   sfKeyEnd       : constant sfKeyCode := 63;  --/< The End key
   sfKeyHome      : constant sfKeyCode := 64;  --/< The Home key
   sfKeyInsert    : constant sfKeyCode := 65;  --/< The Insert key
   sfKeyDelete    : constant sfKeyCode := 66;  --/< The Delete key
   sfKeyAdd       : constant sfKeyCode := 67;  --/< The + key
   sfKeySubtract  : constant sfKeyCode := 68;  --/< The - key (minus, usually from numpad)
   sfKeyMultiply  : constant sfKeyCode := 69;  --/< The * key
   sfKeyDivide    : constant sfKeyCode := 70;  --/< The / key
   sfKeyLeft      : constant sfKeyCode := 71;  --/< Left arrow
   sfKeyRight     : constant sfKeyCode := 72;  --/< Right arrow
   sfKeyUp        : constant sfKeyCode := 73;  --/< Up arrow
   sfKeyDown      : constant sfKeyCode := 74;  --/< Down arrow
   sfKeyNumpad0   : constant sfKeyCode := 75;  --/< The numpad 0 key
   sfKeyNumpad1   : constant sfKeyCode := 76;  --/< The numpad 1 key
   sfKeyNumpad2   : constant sfKeyCode := 77;  --/< The numpad 2 key
   sfKeyNumpad3   : constant sfKeyCode := 78;  --/< The numpad 3 key
   sfKeyNumpad4   : constant sfKeyCode := 79;  --/< The numpad 4 key
   sfKeyNumpad5   : constant sfKeyCode := 80;  --/< The numpad 5 key
   sfKeyNumpad6   : constant sfKeyCode := 81;  --/< The numpad 6 key
   sfKeyNumpad7   : constant sfKeyCode := 82;  --/< The numpad 7 key
   sfKeyNumpad8   : constant sfKeyCode := 83;  --/< The numpad 8 key
   sfKeyNumpad9   : constant sfKeyCode := 84;  --/< The numpad 9 key
   sfKeyF1        : constant sfKeyCode := 85;  --/< The F1 key
   sfKeyF2        : constant sfKeyCode := 86;  --/< The F2 key
   sfKeyF3        : constant sfKeyCode := 87;  --/< The F3 key
   sfKeyF4        : constant sfKeyCode := 88;  --/< The F4 key
   sfKeyF5        : constant sfKeyCode := 89;  --/< The F5 key
   sfKeyF6        : constant sfKeyCode := 90;  --/< The F6 key
   sfKeyF7        : constant sfKeyCode := 91;  --/< The F7 key
   sfKeyF8        : constant sfKeyCode := 92;  --/< The F8 key
   sfKeyF9        : constant sfKeyCode := 93;  --/< The F8 key
   sfKeyF10       : constant sfKeyCode := 94;  --/< The F10 key
   sfKeyF11       : constant sfKeyCode := 95;  --/< The F11 key
   sfKeyF12       : constant sfKeyCode := 96;  --/< The F12 key
   sfKeyF13       : constant sfKeyCode := 97;  --/< The F13 key
   sfKeyF14       : constant sfKeyCode := 98;  --/< The F14 key
   sfKeyF15       : constant sfKeyCode := 99;  --/< The F15 key
   sfKeyPause     : constant sfKeyCode := 100; --/< The Pause key
   sfKeyCount     : constant sfKeyCode := 101; --/< Keep last -- the total number of keyboard keys


   -- Deprecated values:

   sfKeyDash : sfKeyCode renames sfKeyHyphen;     --/< @deprecated Use Hyphen instead
   sfKeyReturn : sfKeyCode renames sfKeyEnter;    --/< @deprecated Use Enter instead

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
