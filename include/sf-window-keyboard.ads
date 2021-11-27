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
   --/  * sfKeyUnknown:  Unhandled key
   --/  * sfKeyA:        The A key
   --/  * sfKeyB:        The B key
   --/  * sfKeyC:        The C key
   --/  * sfKeyD:        The D key
   --/  * sfKeyE:        The E key
   --/  * sfKeyF:        The F key
   --/  * sfKeyG:        The G key
   --/  * sfKeyH:        The H key
   --/  * sfKeyI:        The I key
   --/  * sfKeyJ:        The J key
   --/  * sfKeyK:        The K key
   --/  * sfKeyL:        The L key
   --/  * sfKeyM:        The M key
   --/  * sfKeyN:        The N key
   --/  * sfKeyO:        The O key
   --/  * sfKeyP:        The P key
   --/  * sfKeyQ:        The Q key
   --/  * sfKeyR:        The R key
   --/  * sfKeyS:        The S key
   --/  * sfKeyT:        The T key
   --/  * sfKeyU:        The U key
   --/  * sfKeyV:        The V key
   --/  * sfKeyW:        The W key
   --/  * sfKeyX:        The X key
   --/  * sfKeyY:        The Y key
   --/  * sfKeyZ:        The Z key
   --/  * sfKeyNum0:     The 0 key
   --/  * sfKeyNum1:     The 1 key
   --/  * sfKeyNum2:     The 2 key
   --/  * sfKeyNum3:     The 3 key
   --/  * sfKeyNum4:     The 4 key
   --/  * sfKeyNum5:     The 5 key
   --/  * sfKeyNum6:     The 6 key
   --/  * sfKeyNum7:     The 7 key
   --/  * sfKeyNum8:     The 8 key
   --/  * sfKeyNum9:     The 9 key
   --/  * sfKeyEscape:   The Escape key
   --/  * sfKeyLControl: The left Control key
   --/  * sfKeyLShift:   The left Shift key
   --/  * sfKeyLAlt:     The left Alt key
   --/  * sfKeyLSystem:  The left OS specific key: window (Windows and Linux), apple (MacOS X), ...
   --/  * sfKeyRControl: The right Control key
   --/  * sfKeyRShift:   The right Shift key
   --/  * sfKeyRAlt:     The right Alt key
   --/  * sfKeyRSystem:  The right OS specific key: window (Windows and Linux), apple (MacOS X), ...
   --/  * sfKeyMenu:     The Menu key
   --/  * sfKeyLBracket: The [ key
   --/  * sfKeyRBracket: The ] key
   --/  * sfKeySemicolon: The ; key
   --/  * sfKeyComma:    The , key
   --/  * sfKeyPeriod:   The . key
   --/  * sfKeyQuote:    The ' key
   --/  * sfKeySlash:    The / key
   --/  * sfKeyBackslash: The \ key
   --/  * sfKeyTilde:    The ~ key
   --/  * sfKeyEqual:    The = key
   --/  * sfKeyHyphen:   The - key (minus, usually from numpad)
   --/  * sfKeySpace:    The Space key
   --/  * sfKeyEnter:    The Enter/Return key
   --/  * sfKeyBack:     The Backspace key
   --/  * sfKeyTab:      The Tabulation key
   --/  * sfKeyPageUp:   The Page up key
   --/  * sfKeyPageDown: The Page down key
   --/  * sfKeyEnd:      The End key
   --/  * sfKeyHome:     The Home key
   --/  * sfKeyInsert:   The Insert key
   --/  * sfKeyDelete:   The Delete key
   --/  * sfKeyAdd:      +
   --/  * sfKeySubtract: -
   --/  * sfKeyMultiply: *
   --/  * sfKeyDivide:   /
   --/  * sfKeyLeft:     Left arrow
   --/  * sfKeyRight:    Right arrow
   --/  * sfKeyUp:       Up arrow
   --/  * sfKeyDown:     Down arrow
   --/  * sfKeyNumpad0:  The numpad 0 key
   --/  * sfKeyNumpad1:  The numpad 1 key
   --/  * sfKeyNumpad2:  The numpad 2 key
   --/  * sfKeyNumpad3:  The numpad 3 key
   --/  * sfKeyNumpad4:  The numpad 4 key
   --/  * sfKeyNumpad5:  The numpad 5 key
   --/  * sfKeyNumpad6:  The numpad 6 key
   --/  * sfKeyNumpad7:  The numpad 7 key
   --/  * sfKeyNumpad8:  The numpad 8 key
   --/  * sfKeyNumpad9:  The numpad 9 key
   --/  * sfKeyF1:       The F1 key
   --/  * sfKeyF2:       The F2 key
   --/  * sfKeyF3:       The F3 key
   --/  * sfKeyF4:       The F4 key
   --/  * sfKeyF5:       The F5 key
   --/  * sfKeyF6:       The F6 key
   --/  * sfKeyF7:       The F7 key
   --/  * sfKeyF8:       The F8 key
   --/  * sfKeyF9:       The F8 key
   --/  * sfKeyF10:      The F10 key
   --/  * sfKeyF11:      The F11 key
   --/  * sfKeyF12:      The F12 key
   --/  * sfKeyF13:      The F13 key
   --/  * sfKeyF14:      The F14 key
   --/  * sfKeyF15:      The F15 key
   --/  * sfKeyPause:    The Pause key
   --/  * sfKeyCount:    Keep last -- the total number of keyboard keys
   type sfKeyCode is new sfUint32;
   sfKeyUnknown   : constant sfKeyCode := -1;
   sfKeyA         : constant sfKeyCode := 0;
   sfKeyB         : constant sfKeyCode := 1;
   sfKeyC         : constant sfKeyCode := 2;
   sfKeyD         : constant sfKeyCode := 3;
   sfKeyE         : constant sfKeyCode := 4;
   sfKeyF         : constant sfKeyCode := 5;
   sfKeyG         : constant sfKeyCode := 6;
   sfKeyH         : constant sfKeyCode := 7;
   sfKeyI         : constant sfKeyCode := 8;
   sfKeyJ         : constant sfKeyCode := 9;
   sfKeyK         : constant sfKeyCode := 10;
   sfKeyL         : constant sfKeyCode := 11;
   sfKeyM         : constant sfKeyCode := 12;
   sfKeyN         : constant sfKeyCode := 13;
   sfKeyO         : constant sfKeyCode := 14;
   sfKeyP         : constant sfKeyCode := 15;
   sfKeyQ         : constant sfKeyCode := 16;
   sfKeyR         : constant sfKeyCode := 17;
   sfKeyS         : constant sfKeyCode := 18;
   sfKeyT         : constant sfKeyCode := 19;
   sfKeyU         : constant sfKeyCode := 20;
   sfKeyV         : constant sfKeyCode := 21;
   sfKeyW         : constant sfKeyCode := 22;
   sfKeyX         : constant sfKeyCode := 23;
   sfKeyY         : constant sfKeyCode := 24;
   sfKeyZ         : constant sfKeyCode := 25;
   sfKeyNum0      : constant sfKeyCode := 26;
   sfKeyNum1      : constant sfKeyCode := 27;
   sfKeyNum2      : constant sfKeyCode := 28;
   sfKeyNum3      : constant sfKeyCode := 29;
   sfKeyNum4      : constant sfKeyCode := 30;
   sfKeyNum5      : constant sfKeyCode := 31;
   sfKeyNum6      : constant sfKeyCode := 32;
   sfKeyNum7      : constant sfKeyCode := 33;
   sfKeyNum8      : constant sfKeyCode := 34;
   sfKeyNum9      : constant sfKeyCode := 35;
   sfKeyEscape    : constant sfKeyCode := 36;
   sfKeyLControl  : constant sfKeyCode := 37;
   sfKeyLShift    : constant sfKeyCode := 38;
   sfKeyLAlt      : constant sfKeyCode := 39;
   sfKeyLSystem   : constant sfKeyCode := 40;
   sfKeyRControl  : constant sfKeyCode := 41;
   sfKeyRShift    : constant sfKeyCode := 42;
   sfKeyRAlt      : constant sfKeyCode := 43;
   sfKeyRSystem   : constant sfKeyCode := 44;
   sfKeyMenu      : constant sfKeyCode := 45;
   sfKeyLBracket  : constant sfKeyCode := 46;
   sfKeyRBracket  : constant sfKeyCode := 47;
   sfKeySemicolon : constant sfKeyCode := 48;
   sfKeyComma     : constant sfKeyCode := 49;
   sfKeyPeriod    : constant sfKeyCode := 50;
   sfKeyQuote     : constant sfKeyCode := 51;
   sfKeySlash     : constant sfKeyCode := 52;
   sfKeyBackslash : constant sfKeyCode := 53;
   sfKeyTilde     : constant sfKeyCode := 54;
   sfKeyEqual     : constant sfKeyCode := 55;
   sfKeyHyphen    : constant sfKeyCode := 56;
   sfKeySpace     : constant sfKeyCode := 57;
   sfKeyEnter     : constant sfKeyCode := 58;
   sfKeyBack      : constant sfKeyCode := 59;
   sfKeyTab       : constant sfKeyCode := 60;
   sfKeyPageUp    : constant sfKeyCode := 61;
   sfKeyPageDown  : constant sfKeyCode := 62;
   sfKeyEnd       : constant sfKeyCode := 63;
   sfKeyHome      : constant sfKeyCode := 64;
   sfKeyInsert    : constant sfKeyCode := 65;
   sfKeyDelete    : constant sfKeyCode := 66;
   sfKeyAdd       : constant sfKeyCode := 67;
   sfKeySubtract  : constant sfKeyCode := 68;
   sfKeyMultiply  : constant sfKeyCode := 69;
   sfKeyDivide    : constant sfKeyCode := 70;
   sfKeyLeft      : constant sfKeyCode := 71;
   sfKeyRight     : constant sfKeyCode := 72;
   sfKeyUp        : constant sfKeyCode := 73;
   sfKeyDown      : constant sfKeyCode := 74;
   sfKeyNumpad0   : constant sfKeyCode := 75;
   sfKeyNumpad1   : constant sfKeyCode := 76;
   sfKeyNumpad2   : constant sfKeyCode := 77;
   sfKeyNumpad3   : constant sfKeyCode := 78;
   sfKeyNumpad4   : constant sfKeyCode := 79;
   sfKeyNumpad5   : constant sfKeyCode := 80;
   sfKeyNumpad6   : constant sfKeyCode := 81;
   sfKeyNumpad7   : constant sfKeyCode := 82;
   sfKeyNumpad8   : constant sfKeyCode := 83;
   sfKeyNumpad9   : constant sfKeyCode := 84;
   sfKeyF1        : constant sfKeyCode := 85;
   sfKeyF2        : constant sfKeyCode := 86;
   sfKeyF3        : constant sfKeyCode := 87;
   sfKeyF4        : constant sfKeyCode := 88;
   sfKeyF5        : constant sfKeyCode := 89;
   sfKeyF6        : constant sfKeyCode := 90;
   sfKeyF7        : constant sfKeyCode := 91;
   sfKeyF8        : constant sfKeyCode := 92;
   sfKeyF9        : constant sfKeyCode := 93;
   sfKeyF10       : constant sfKeyCode := 94;
   sfKeyF11       : constant sfKeyCode := 95;
   sfKeyF12       : constant sfKeyCode := 96;
   sfKeyF13       : constant sfKeyCode := 97;
   sfKeyF14       : constant sfKeyCode := 98;
   sfKeyF15       : constant sfKeyCode := 99;
   sfKeyPause     : constant sfKeyCode := 100;
   sfKeyCount     : constant sfKeyCode := 101;


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
