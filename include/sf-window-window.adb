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

with Interfaces.C.Strings;

package body Sf.Window.Window is
   use Interfaces.C.Strings;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new window
   --/
   --/ This function creates the window with the size and pixel
   --/ depth defined in @a mode. An optional style can be passed to
   --/ customize the look and behaviour of the window (borders,
   --/ title bar, resizable, closable, ...). If @a style contains
   --/ sfFullscreen, then @a mode must be a valid video mode.
   --/
   --/ The fourth parameter is a pointer to a structure specifying
   --/ advanced OpenGL context settings such as antialiasing,
   --/ depth-buffer bits, etc.
   --/
   --/ @param mode     Video mode to use (defines the width, height and depth of the rendering area of the window)
   --/ @param title    Title of the window
   --/ @param style    Window style
   --/ @param settings Additional settings for the underlying OpenGL context
   --/
   --/ @return A new sfWindow object
   --/
   --//////////////////////////////////////////////////////////
   function create
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : String;
      style    : sfWindowStyle := sfResize or sfClose;
      settings : sfContextSettings := sfDefaultContextSettings)
      return   sfWindow_Ptr
   is
      function Internal
        (Mode   : Sf.Window.VideoMode.sfVideoMode;
         Title  : Interfaces.C.char_array;
         Style  : sfWindowStyle;
         Params : sfContextSettings)
         return   sfWindow_Ptr;
      pragma Import (C, Internal, "sfWindow_create");
      R    : constant sfWindow_Ptr := Internal (mode, Interfaces.C.To_C (Title), style, settings);
   begin
      return R;
   end Create;


   --//////////////////////////////////////////////////////////
   --/ @brief Change the title of a window
   --/
   --/ @param window Window object
   --/ @param title  New title
   --/
   --//////////////////////////////////////////////////////////
   procedure setTitle (window : sfWindow_Ptr; title : Standard.String) is

      procedure Internal (window : sfWindow_Ptr; title : Interfaces.C.Strings.chars_ptr);
      pragma Import (C, Internal, "sfWindow_setTitle");
      Temp : chars_ptr    := New_String (Title);
   begin
      Internal (window, Temp);
      Free (Temp);
   end setTitle;

   function createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Wide_Wide_String;
      style    : sfWindowStyle := sfResize or sfClose;
      settings : sfContextSettings := sfDefaultContextSettings)
      return   sfWindow_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : C.char32_array;
         style  : sfWindowStyle;
         params : sfContextSettings)
         return   sfWindow_Ptr;
      pragma Import (C, Internal, "sfWindow_createUnicode");
      R : constant sfWindow_Ptr := Internal (mode, C.To_C (title), style, settings);
   begin
      return R;
   end createUnicode;

   procedure setUnicodeTitle (window : sfWindow_Ptr; title : Wide_Wide_String) is

      procedure Internal (window : sfWindow_Ptr; title : C.char32_array);
      pragma Import (C, Internal, "sfWindow_setUnicodeTitle");
   begin
      Internal (window, C.To_C (title));
   end setUnicodeTitle;

end Sf.Window.Window;
