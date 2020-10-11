--//////////////////////////////////////////////////////////
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
--//////////////////////////////////////////////////////////

--//////////////////////////////////////////////////////////

--//////////////////////////////////////////////////////////
with Interfaces.C.Strings;

package body Sf.Graphics.RenderWindow is
   use Interfaces.C.Strings;

   --//////////////////////////////////////////////////////////
   --/ Construct a new renderwindow
   --/
   --/ @param Mode     Video mode to use
   --/ @param Title    Title of the window
   --/ @param Style    Window style
   --/ @param Params   Creation settings
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_Create
     (Mode   : sfVideoMode;
      Title  : Standard.String;
      Style  : sfUint32         := sfResize or sfClose;
      Params : sfContextSettings := sfDefaultContextSettings)
      return   sfRenderWindow_Ptr
   is
      function Internal
        (Mode   : sfVideoMode;
         Title  : chars_ptr;
         Style  : sfUint32;
         Params : sfContextSettings)
         return   sfRenderWindow_Ptr;
      pragma Import (C, Internal, "sfRenderWindow_create");
      Temp : chars_ptr          := New_String (Title);
      R    : sfRenderWindow_Ptr := Internal (Mode, Temp, Style, Params);
   begin
      Free (Temp);
      return R;
   end sfRenderWindow_Create;


  --//////////////////////////////////////////////////////////
  --/ @brief Change the title of a render window
  --/
  --/ @param renderWindow Render window object
  --/ @param title        New title
  --/
  --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setTitle (renderWindow : sfRenderWindow_Ptr; title : Standard.String)
   is
      procedure Internal
        (renderWindow : sfRenderWindow_Ptr;
        Title  : chars_ptr);
      pragma Import (C, Internal, "sfRenderWindow_setTitle");
      Temp : chars_ptr          := New_String (Title);
   begin
      Internal (renderWindow, Temp);
      Free (Temp);
   end sfRenderWindow_setTitle;

end Sf.Graphics.RenderWindow;
