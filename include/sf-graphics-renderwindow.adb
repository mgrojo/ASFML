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
      style    : Sf.Window.sfWindowStyle :=
        Sf.Window.sfResize or Sf.Window.sfClose;
      state    : Sf.Window.sfWindowState := Sf.Window.sfWindowed;
      settings : Sf.Window.Window.sfContextSettings := Sf.Window.Window.sfDefaultContextSettings)
     return   sfRenderWindow_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : chars_ptr;
         style  : Sf.Window.sfWindowStyle;
         state  : Sf.Window.sfWindowState;
         settings : access constant Sf.Window.Window.sfContextSettings)
         return   sfRenderWindow_Ptr;
      pragma Import (C, Internal, "sfRenderWindow_create");
      Temp : chars_ptr := New_String (Title);
      Params : aliased constant Sf.Window.Window.sfContextSettings := settings;
      R    : constant sfRenderWindow_Ptr := Internal (mode, Temp, style, state, Params'Access);
   begin
      Free (Temp);
      return R;
   end create;

   function createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Wide_Wide_String;
         style    : Sf.Window.sfWindowStyle :=
            Sf.Window.sfResize or Sf.Window.sfClose;
         state    : Sf.Window.sfWindowState := Sf.Window.sfWindowed;
      settings : Sf.Window.Window.sfContextSettings := Sf.Window.Window.sfDefaultContextSettings)
     return   sfRenderWindow_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : C.char32_array;
         style  : Sf.Window.sfWindowStyle;
         state  : Sf.Window.sfWindowState;
         settings : access constant Sf.Window.Window.sfContextSettings)
         return   sfRenderWindow_Ptr;
      pragma Import (C, Internal, "sfRenderWindow_createUnicode");
      Params : aliased constant Sf.Window.Window.sfContextSettings := settings;
   begin
      return Internal (mode, C.To_C (title), style, state, Params'Access);
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

   procedure setMinimumSize_raw
     (renderWindow : sfRenderWindow_Ptr;
      minimumSize  : access constant Sf.System.Vector2.sfVector2u);
   pragma Import (C, setMinimumSize_raw, "sfRenderWindow_setMinimumSize");

   procedure setMinimumSize (renderWindow : sfRenderWindow_Ptr;
                             minimumSize : Sf.System.Vector2.sfVector2u)
   is
      Min : aliased Sf.System.Vector2.sfVector2u := minimumSize;
   begin
      setMinimumSize_raw (renderWindow, Min'Access);
   end setMinimumSize;

   procedure clearMinimumSize (renderWindow : sfRenderWindow_Ptr) is
   begin
      setMinimumSize_raw (renderWindow, null);
   end clearMinimumSize;

   procedure setMaximumSize_raw
     (renderWindow : sfRenderWindow_Ptr;
      maximumSize  : access constant Sf.System.Vector2.sfVector2u);
   pragma Import (C, setMaximumSize_raw, "sfRenderWindow_setMaximumSize");

   procedure setMaximumSize (renderWindow : sfRenderWindow_Ptr;
                             maximumSize : Sf.System.Vector2.sfVector2u)
   is
      Max : aliased Sf.System.Vector2.sfVector2u := maximumSize;
   begin
      setMaximumSize_raw (renderWindow, Max'Access);
   end setMaximumSize;

   procedure clearMaximumSize (renderWindow : sfRenderWindow_Ptr) is
   begin
      setMaximumSize_raw (renderWindow, null);
   end clearMaximumSize;

   function waitEvent
     (renderWindow : sfRenderWindow_Ptr;
      event : in out Sf.Window.Event.sfEvent;
      timeout : Sf.System.Time.sfTime := Sf.System.Time.Zero) return sfBool
   is
      function waitEvent_raw
        (renderWindow : sfRenderWindow_Ptr;
         timeout      : Sf.System.Time.sfTime;
         event        : access Sf.Window.Event.sfEvent) return sfBool;
      pragma Import (C, waitEvent_raw, "sfRenderWindow_waitEvent");

      Event_Buffer : aliased Sf.Window.Event.sfEvent := event;
   begin
      declare
         Result : constant sfBool := waitEvent_raw (renderWindow, timeout, Event_Buffer'Access);
      begin
         event := Event_Buffer;
         return Result;
      end;
   end waitEvent;

end Sf.Graphics.RenderWindow;
