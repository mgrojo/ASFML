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
   function create
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Standard.String;
      style    : Sf.Window.Window.sfWindowStyle :=
        Sf.Window.Window.sfResize or Sf.Window.Window.sfClose;
      settings : Sf.Window.Window.sfContextSettings := Sf.Window.Window.sfDefaultContextSettings)
     return   sfRenderWindow_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : chars_ptr;
         style  : Sf.Window.Window.sfWindowStyle;
         settings : Sf.Window.Window.sfContextSettings)
         return   sfRenderWindow_Ptr;
      pragma Import (C, Internal, "sfRenderWindow_create");
      Temp : chars_ptr := New_String (Title);
      R    : constant sfRenderWindow_Ptr := Internal (mode, Temp, style, settings);
   begin
      Free (Temp);
      return R;
   end create;

   function createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Wide_Wide_String;
      style    : Sf.Window.Window.sfWindowStyle :=
        Sf.Window.Window.sfResize or Sf.Window.Window.sfClose;
      settings : Sf.Window.Window.sfContextSettings := Sf.Window.Window.sfDefaultContextSettings)
     return   sfRenderWindow_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : C.char32_array;
         style  : Sf.Window.Window.sfWindowStyle;
         settings : Sf.Window.Window.sfContextSettings)
         return   sfRenderWindow_Ptr;
      pragma Import (C, Internal, "sfRenderWindow_createUnicode");
   begin
      return Internal (mode, C.To_C (title), style, settings);
   end createUnicode;

  --//////////////////////////////////////////////////////////
  --/ @brief Change the title of a render window
  --/
  --/ @param renderWindow Render window object
  --/ @param title        New title
  --/
  --//////////////////////////////////////////////////////////
   procedure setTitle (renderWindow : sfRenderWindow_Ptr; title : Standard.String)
   is
      procedure Internal
        (renderWindow : sfRenderWindow_Ptr;
        Title  : chars_ptr);
      pragma Import (C, Internal, "sfRenderWindow_setTitle");
      Temp : chars_ptr          := New_String (Title);
   begin
      Internal (renderWindow, Temp);
      Free (Temp);
   end setTitle;

   procedure setUnicodeTitle (renderWindow : sfRenderWindow_Ptr; title : Wide_Wide_String) is

      procedure Internal (renderWindow : sfRenderWindow_Ptr; title : C.char32_array);
      pragma Import (C, Internal, "sfRenderWindow_setUnicodeTitle");
   begin
      Internal (renderWindow, C.To_C (title));
   end setUnicodeTitle;

end Sf.Graphics.RenderWindow;
