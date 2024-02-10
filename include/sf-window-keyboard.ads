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



package Sf.Window.Keyboard is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Key codes
   --/
   --/ The enumerators refer to the "localized" key; i.e. depending
   --/ on the layout set by the operating system, a key can be mapped
   --/ to `Y` or `Z`.
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
   sfKeyLSystem   : constant sfKeyCode := 40;  --/< The left OS specific key: window (Windows and Linux), apple (macOS), ...
   sfKeyRControl  : constant sfKeyCode := 41;  --/< The right Control key
   sfKeyRShift    : constant sfKeyCode := 42;  --/< The right Shift key
   sfKeyRAlt      : constant sfKeyCode := 43;  --/< The right Alt key
   sfKeyRSystem   : constant sfKeyCode := 44;  --/< The right OS specific key: window (Windows and Linux), apple (macOS), ...
   sfKeyMenu      : constant sfKeyCode := 45;  --/< The Menu key
   sfKeyLBracket  : constant sfKeyCode := 46;  --/< The [ key
   sfKeyRBracket  : constant sfKeyCode := 47;  --/< The ] key
   sfKeySemicolon : constant sfKeyCode := 48;  --/< The ; key
   sfKeyComma     : constant sfKeyCode := 49;  --/< The , key
   sfKeyPeriod    : constant sfKeyCode := 50;  --/< The . key
   sfKeyApostrophe: constant sfKeyCode := 51;  --/< The ' key
   sfKeySlash     : constant sfKeyCode := 52;  --/< The / key
   sfKeyBackslash : constant sfKeyCode := 53;  --/< The \ key
   sfKeyGrave     : constant sfKeyCode := 54;  --/< The ` key
   sfKeyEqual     : constant sfKeyCode := 55;  --/< The = key
   sfKeyHyphen    : constant sfKeyCode := 56;  --/< The - key (minus, usually from numpad)
   sfKeySpace     : constant sfKeyCode := 57;  --/< The Space key
   sfKeyEnter     : constant sfKeyCode := 58;  --/< The Enter/Return key
   sfKeyBackspace : constant sfKeyCode := 59;  --/< The Backspace key
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

   sfKeyTilde    : sfKeyCode renames sfKeyGrave;     --/< @deprecated Use Grave instead
   sfKeyDash     : sfKeyCode renames sfKeyHyphen;    --/< @deprecated Use Hyphen instead
   sfKeyBack     : sfKeyCode renames sfKeyBackspace; --/< @deprecated Use Backspace instead
   sfKeyReturn   : sfKeyCode renames sfKeyEnter;     --/< @deprecated Use Enter instead
   sfKeyQuote    : sfKeyCode renames sfKeyApostrophe;--/< @deprecated Use Apostrophe instead


   --//////////////////////////////////////////////////////////
   --/ @brief Scancodes
   --/
   --/ The enumerators are bound to a physical key and do not depend on
   --/ the keyboard layout used by the operating system. Usually, the AT-101
   --/ keyboard can be used as reference for the physical position of the keys.
   --/
   --//////////////////////////////////////////////////////////
    type sfScancode is new sfInt32;
    sfScanUnknown : constant sfScancode := -1;     --!< Represents any scancode not present in this enum
    sfScanA : constant sfScancode := 0;            --!< Keyboard a and A key
    sfScanB : constant sfScancode := 1;            --!< Keyboard b and B key
    sfScanC : constant sfScancode := 2;            --!< Keyboard c and C key
    sfScanD : constant sfScancode := 3;            --!< Keyboard d and D key
    sfScanE : constant sfScancode := 4;            --!< Keyboard e and E key
    sfScanF : constant sfScancode := 5;            --!< Keyboard f and F key
    sfScanG : constant sfScancode := 6;            --!< Keyboard g and G key
    sfScanH : constant sfScancode := 7;            --!< Keyboard h and H key
    sfScanI : constant sfScancode := 8;            --!< Keyboard i and I key
    sfScanJ : constant sfScancode := 9;            --!< Keyboard j and J key
    sfScanK : constant sfScancode := 10;           --!< Keyboard k and K key
    sfScanL : constant sfScancode := 11;           --!< Keyboard l and L key
    sfScanM : constant sfScancode := 12;           --!< Keyboard m and M key
    sfScanN : constant sfScancode := 13;           --!< Keyboard n and N key
    sfScanO : constant sfScancode := 14;           --!< Keyboard o and O key
    sfScanP : constant sfScancode := 15;           --!< Keyboard p and P key
    sfScanQ : constant sfScancode := 16;           --!< Keyboard q and Q key
    sfScanR : constant sfScancode := 17;           --!< Keyboard r and R key
    sfScanS : constant sfScancode := 18;           --!< Keyboard s and S key
    sfScanT : constant sfScancode := 19;           --!< Keyboard t and T key
    sfScanU : constant sfScancode := 20;           --!< Keyboard u and U key
    sfScanV : constant sfScancode := 21;           --!< Keyboard v and V key
    sfScanW : constant sfScancode := 22;           --!< Keyboard w and W key
    sfScanX : constant sfScancode := 23;           --!< Keyboard x and X key
    sfScanY : constant sfScancode := 24;           --!< Keyboard y and Y key
    sfScanZ : constant sfScancode := 25;           --!< Keyboard z and Z key
    sfScanNum1 : constant sfScancode := 26;        --!< Keyboard 1 and ! key
    sfScanNum2 : constant sfScancode := 27;        --!< Keyboard 2 and @ key
    sfScanNum3 : constant sfScancode := 28;        --!< Keyboard 3 and # key
    sfScanNum4 : constant sfScancode := 29;        --!< Keyboard 4 and $ key
    sfScanNum5 : constant sfScancode := 30;        --!< Keyboard 5 and % key
    sfScanNum6 : constant sfScancode := 31;        --!< Keyboard 6 and ^ key
    sfScanNum7 : constant sfScancode := 32;        --!< Keyboard 7 and & key
    sfScanNum8 : constant sfScancode := 33;        --!< Keyboard 8 and * key
    sfScanNum9 : constant sfScancode := 34;        --!< Keyboard 9 and ) key
    sfScanNum0 : constant sfScancode := 35;        --!< Keyboard 0 and ) key
    sfScanEnter : constant sfScancode := 36;       --!< Keyboard Enter/Return key
    sfScanEscape : constant sfScancode := 37;      --!< Keyboard Escape key
    sfScanBackspace : constant sfScancode := 38;   --!< Keyboard Backspace key
    sfScanTab : constant sfScancode := 39;         --!< Keyboard Tab key
    sfScanSpace : constant sfScancode := 40;       --!< Keyboard Space key
    sfScanHyphen : constant sfScancode := 41;      --!< Keyboard - and _ key
    sfScanEqual : constant sfScancode := 42;       --!< Keyboard = and +
    sfScanLBracket : constant sfScancode := 43;    --!< Keyboard [ and { key
    sfScanRBracket : constant sfScancode := 44;    --!< Keyboard ] and } key
    -- For US keyboards mapped to key 29 (Microsoft Keyboard Scan Code Specification)
    -- For Non-US keyboards mapped to key 42 (Microsoft Keyboard Scan Code Specification)
    -- Typical language mappings: Belg:£µ` FrCa:<>} Dan:*' Dutch:`´ Fren:µ* Ger:'# Ital:§ù LatAm:[}` Nor:*@ Span:ç} Swed:*' Swiss:$£} UK:~# Brazil:}]
    sfScanBackslash : constant sfScanCode := 45;              --!< Keyboard \ and | key OR various keys for Non-US keyboards
    sfScanSemicolon : constant sfScanCode := 46;              --!< Keyboard ; and : key
    sfScanApostrophe : constant sfScancode := 47;             --!< Keyboard ' and " key
    sfScanGrave : constant sfScancode := 48;       --!< Keyboard ` and ~ key
    sfScanComma : constant sfScancode := 49;       --!< Keyboard , and < key
    sfScanPeriod : constant sfScancode := 50;      --!< Keyboard . and > key
    sfScanSlash : constant sfScancode := 51;       --!< Keyboard / and ? key
    sfScanF1 : constant sfScancode := 52;          --!< Keyboard F1 key
    sfScanF2 : constant sfScancode := 53;          --!< Keyboard F2 key
    sfScanF3 : constant sfScancode := 54;          --!< Keyboard F3 key
    sfScanF4 : constant sfScancode := 55;          --!< Keyboard F4 key
    sfScanF5 : constant sfScancode := 56;          --!< Keyboard F5 key
    sfScanF6 : constant sfScancode := 57;          --!< Keyboard F6 key
    sfScanF7 : constant sfScancode := 58;          --!< Keyboard F7 key
    sfScanF8 : constant sfScancode := 59;          --!< Keyboard F8 key
    sfScanF9 : constant sfScancode := 60;          --!< Keyboard F9 key
    sfScanF10 : constant sfScancode := 61;         --!< Keyboard F10 key
    sfScanF11 : constant sfScancode := 62;         --!< Keyboard F11 key
    sfScanF12 : constant sfScancode := 63;         --!< Keyboard F12 key
    sfScanF13 : constant sfScancode := 64;         --!< Keyboard F13 key
    sfScanF14 : constant sfScancode := 65;         --!< Keyboard F14 key
    sfScanF15 : constant sfScancode := 66;         --!< Keyboard F15 key
    sfScanF16 : constant sfScancode := 67;         --!< Keyboard F16 key
    sfScanF17 : constant sfScancode := 68;         --!< Keyboard F17 key
    sfScanF18 : constant sfScancode := 69;         --!< Keyboard F18 key
    sfScanF19 : constant sfScancode := 70;         --!< Keyboard F19 key
    sfScanF20 : constant sfScancode := 71;         --!< Keyboard F20 key
    sfScanF21 : constant sfScancode := 72;         --!< Keyboard F21 key
    sfScanF22 : constant sfScancode := 73;          --!< Keyboard F22 key
    sfScanF23 : constant sfScancode := 74;         --!< Keyboard F23 key
    sfScanF24 : constant sfScancode := 75;        --!< Keyboard F24 key
    sfScanCapsLock : constant sfScancode := 76;    --!< Keyboard Caps %Lock key
    sfScanPrintScreen : constant sfScancode := 77; --!< Keyboard Print Screen key
    sfScanScrollLock : constant sfScancode := 78;  --!< Keyboard Scroll %Lock key
    sfScanPause : constant sfScancode := 79;       --!< Keyboard Pause key
    sfScanInsert : constant sfScancode := 80;      --!< Keyboard Insert key
    sfScanHome : constant sfScancode := 81;        --!< Keyboard Home key
    sfScanPageUp : constant sfScancode := 82;      --!< Keyboard Page Up key
    sfScanDelete : constant sfScancode := 83;      --!< Keyboard Delete Forward key
    sfScanEnd : constant sfScancode := 84;         --!< Keyboard End key
    sfScanPageDown : constant sfScancode := 85;    --!< Keyboard Page Down key
    sfScanRight : constant sfScancode := 86;       --!< Keyboard Right Arrow key
    sfScanLeft : constant sfScancode := 87;        --!< Keyboard Left Arrow key
    sfScanDown : constant sfScancode := 88;        --!< Keyboard Down Arrow key
    sfScanUp : constant sfScancode := 89;          --!< Keyboard Up Arrow key
    sfScanNumLock : constant sfScancode := 90;     --!< Keypad Num %Lock and Clear key
    sfScanNumpadDivide : constant sfScancode := 91;--!< Keypad / key
    sfScanNumpadMultiply : constant sfScancode := 92;--!< Keypad * key
    sfScanNumpadMinus : constant sfScancode := 93; --!< Keypad - key
    sfScanNumpadPlus : constant sfScancode := 94;  --!< Keypad + key
    sfScanNumpadEqual : constant sfScancode := 95; --!< keypad = key
    sfScanNumpadEnter : constant sfScancode := 96; --!< Keypad Enter/Return key
    sfScanNumpadDecimal : constant sfScancode := 97;--!< Keypad . and Delete key
    sfScanNumpad1 : constant sfScancode := 98;     --!< Keypad 1 and End key
    sfScanNumpad2 : constant sfScancode := 99;     --!< Keypad 2 and Down Arrow key
    sfScanNumpad3 : constant sfScancode := 100;    --!< Keypad 3 and Page Down key
    sfScanNumpad4 : constant sfScancode := 101;    --!< Keypad 4 and Left Arrow key
    sfScanNumpad5 : constant sfScancode := 102;    --!< Keypad 5 key
    sfScanNumpad6 : constant sfScancode := 103;    --!< Keypad 6 and Right Arrow key
    sfScanNumpad7 : constant sfScancode := 104;    --!< Keypad 7 and Home key
    sfScanNumpad8 : constant sfScancode := 105;    --!< Keypad 8 and Up Arrow key
    sfScanNumpad9 : constant sfScancode := 106;    --!< Keypad 9 and Page Up key
    sfScanNumpad0 : constant sfScancode := 107;    --!< Keypad 0 and Insert key
    -- For US keyboards doesn't exist
    -- For Non-US keyboards mapped to key 45 (Microsoft Keyboard Scan Code Specification)
    -- Typical language mappings: Belg:<\> FrCa:«°» Dan:<\> Dutch:]|[ Fren:<> Ger:<|> Ital:<> LatAm:<> Nor:<> Span:<> Swed:<|> Swiss:<\> UK:\| Brazil: \|.
    sfScanNonUsBackslash : constant sfScancode := 108; --!< Keyboard Non-US \ and | key
    sfScanApplication : constant sfScancode := 109; --!< Keyboard Application key
    sfScanExecute : constant sfScancode := 110;     --!< Keyboard Execute key
    sfScanModeChange : constant sfScancode := 111;  --!< Keyboard Mode Change key
    sfScanHelp : constant sfScancode := 112;        --!< Keyboard Help key
    sfScanMenu : constant sfScancode := 113;        --!< Keyboard Menu key
    sfScanSelect : constant sfScancode := 114;      --!< Keyboard Select key
    sfScanRedo : constant sfScancode := 115;        --!< Keyboard Redo key
    sfScanUndo : constant sfScancode := 116;        --!< Keyboard Undo key
    sfScanCut : constant sfScancode := 117;         --!< Keyboard Cut key
    sfScanCopy : constant sfScancode := 118;        --!< Keyboard Copy key
    sfScanPaste : constant sfScancode := 119;       --!< Keyboard Paste key
    sfScanVolumeMute : constant sfScancode := 120;  --!< Keyboard Volume Mute key
    sfScanVolumeUp : constant sfScancode := 121;    --!< Keyboard Volume Up key
    sfScanVolumeDown : constant sfScancode := 122;  --!< Keyboard Volume Down key
    sfScanMediaPlayPause : constant sfScancode := 123; --!< Keyboard Media Play Pause key
    sfScanMediaStop : constant sfScancode := 124;   --!< Keyboard Media Stop key
    sfScanMediaNextTrack : constant sfScancode := 125; --!< Keyboard Media Next Track key
    sfScanMediaPreviousTrack : constant sfScancode := 126; --!< Keyboard Media Previous Track key
    sfScanLControl : constant sfScancode := 127;    --!< Keyboard Left Control key
    sfScanLShift : constant sfScancode := 128;      --!< Keyboard Left Shift key
    sfScanLAlt : constant sfScancode := 129;        --!< Keyboard Left Alt key
    sfScanLSystem : constant sfScancode := 130;     --!< Keyboard Left System key
    sfScanRControl : constant sfScancode := 131;    --!< Keyboard Right Control key
    sfScanRShift : constant sfScancode := 132;      --!< Keyboard Right Shift key
    sfScanRAlt : constant sfScancode := 133;        --!< Keyboard Right Alt key
    sfScanRSystem : constant sfScancode := 134;     --!< Keyboard Right System key
    sfScanBack : constant sfScancode := 135;        --!< Keyboard Back key
    sfScanForward : constant sfScancode := 136;     --!< Keyboard Forward key
    sfScanRefresh : constant sfScancode := 137;     --!< Keyboard Refresh key
    sfScanStop : constant sfScancode := 138;        --!< Keyboard Stop key
    sfScanSearch : constant sfScancode := 139;      --!< Keyboard Search key
    sfScanFavorites : constant sfScancode := 140;   --!< Keyboard Favorites key
    sfScanHomePage : constant sfScancode := 141;    --!< Keyboard Home Page key
    sfScanLaunchApplication1 : constant sfScancode := 142; --!< Keyboard Launch Application 1 key
    sfScanLaunchApplication2 : constant sfScancode := 143; --!< Keyboard Launch Application 2 key
    sfScanLaunchMail : constant sfScancode := 144;  --!< Keyboard Launch Mail key
    sfScanLaunchMediaSelect : constant sfScancode := 145; --!< Keyboard Launch Media Select key
    sfScancodeCount : constant sfScancode := 146;   --!< Keep last -- the total number of scancodes

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a key is pressed
   --/
   --/ @param key Key to check
   --/
   --/ @return sfTrue if the key is pressed, sfFalse otherwise
   --/
   --/ @see isScancodePressed
   --/
   --//////////////////////////////////////////////////////////
   function isKeyPressed (key : sfKeyCode) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Check if a key is pressed
   --/
   --/ @param code Scancode to check
   --/
   --/ @return sfTrue if the physical key is pressed, sfFalse otherwise
   --/
   --/ @see isKeyPressed
   --/
   --//////////////////////////////////////////////////////////
    function isScancodePressed (code : sfScancode) return sfBool;
 
   --//////////////////////////////////////////////////////////
   --/ @brief Localize a physical key to a logical one
   --/
   --/ @param code Scancode to localize
   --/
   --/ @return The key corresponding to the scancode under the current
   --/         keyboard layout used by the operating system, or
   --/         sfKeyUnknown when the scancode cannot be mapped
   --/         to a Key.
   --/
   --/ @see delocalize
   --/
   --//////////////////////////////////////////////////////////
    function localize (code : sfScancode) return sfKeyCode;
 
   --//////////////////////////////////////////////////////////
   --/ @brief Identify the physical key corresponding to a logical one
   --/
   --/ @param key Key to "delocalize"
   --/
   --/ @return The scancode corresponding to the key under the current
   --/         keyboard layout used by the operating system, or
   --/         sfScanUnknown when the key cannot be mapped
   --/         to a sfScancode.
   --/
   --/ @see localize
   --/
   --//////////////////////////////////////////////////////////
    function delocalize (key : sfKeyCode) return sfScancode;
 
   --//////////////////////////////////////////////////////////
   --/ @brief Provide a string representation for a given scancode
   --/
   --/ The returned string is a short, non-technical description of
   --/ the key represented with the given scancode. Most effectively
   --/ used in user interfaces, as the description for the key takes
   --/ the users keyboard layout into consideration.
   --/
   --/ @warning The result is OS-dependent: for example, sfScanLSystem
   --/          is "Left Meta" on Linux, "Left Windows" on Windows and
   --/          "Left Command" on macOS.
   --/
   --/ The current keyboard layout set by the operating system is used to
   --/ interpret the scancode: for example, sfKeySemicolon is
   --/ mapped to ";" for layout and to "é" for others.
   --/
   --/ @param code Scancode to describe
   --/
   --/ @return The localized description of the code
   --/
   --//////////////////////////////////////////////////////////
    function getDescription (code : sfScancode) return String;
 
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
   pragma Import (C, isScancodePressed, "sfKeyboard_isScancodePressed");
   pragma Import (C, localize, "sfKeyboard_localize");
   pragma Import (C, delocalize, "sfKeyboard_delocalize");
   pragma Import (C, setVirtualKeyboardVisible, "sfKeyboard_setVirtualKeyboardVisible");

end Sf.Window.Keyboard;
