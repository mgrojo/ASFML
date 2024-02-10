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

--/ @summary
--/ Window module
--/
--/ @description
--/ Provides OpenGL-based windows, and abstractions for
--/ events and input handling.
package Sf.Window is


   --//////////////////////////////////////////////////////////
   --/ @brief Enumeration of window creation styles
   --/
   --//////////////////////////////////////////////////////////

   type sfWindowStyle is new sfUint32;
   sfNone : constant sfWindowStyle := 0;
   --/< No border / title bar (this flag and all others are mutually exclusive)
   sfTitlebar : constant sfWindowStyle := 1;
   --/< Title bar + fixed border
   sfResize : constant sfWindowStyle := 2;
   --/< Titlebar + resizable border + maximize button
   sfClose : constant sfWindowStyle := 4;
   --/< Titlebar + close button
   sfFullscreen : constant sfWindowStyle := 8;
   --/< Fullscreen mode (this flag and all others are mutually exclusive)
   sfDefaultStyle : constant sfWindowStyle := 7;
   --/< Default window style

   type sfContext is null record;
   type sfContext_Ptr is access all sfContext;

   type sfInput is null record;
   type sfInput_Ptr is access all sfInput;

   type sfWindow is null record;
   type sfWindow_Ptr is access all sfWindow;

   type sfWindowBase is null record;
   type sfWindowBase_Ptr is access all sfWindowBase;

   type sfCursor is null record;
   type sfCursor_Ptr is access all sfCursor;

private

   pragma Convention (C, sfContext);
   pragma Convention (C, sfContext_Ptr);
   pragma Convention (C, sfInput);
   pragma Convention (C, sfInput_Ptr);
   pragma Convention (C, sfWindowBase);
   pragma Convention (C, sfWindowBase_Ptr);
   pragma Convention (C, sfWindow);
   pragma Convention (C, sfWindow_Ptr);
   pragma Convention (C, sfCursor);
   pragma Convention (C, sfCursor_Ptr);

end Sf.Window;
