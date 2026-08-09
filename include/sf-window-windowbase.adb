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

package body Sf.Window.Windowbase is
   use Interfaces.C.Strings;


   function waitEvent_raw
     (windowBase : sfWindowBase_Ptr;
      timeout    : Sf.System.Time.sfTime;
      event      : access Sf.Window.Event.sfEvent) return sfBool;
   pragma Import (C, waitEvent_raw, "sfWindowBase_waitEvent");

   procedure setMinimumSize_raw
     (windowBase  : sfWindowBase_Ptr;
      minimumSize : access constant Sf.System.Vector2.sfVector2u);
   pragma Import (C, setMinimumSize_raw, "sfWindowBase_setMinimumSize");
   procedure setMaximumSize_raw
     (windowBase  : sfWindowBase_Ptr;
      maximumSize : access constant Sf.System.Vector2.sfVector2u);
   pragma Import (C, setMaximumSize_raw, "sfWindowBase_setMaximumSize");
   procedure setIcon_raw
     (windowBase : sfWindowBase_Ptr;
      width      : sfUint32;
      height     : sfUint32;
      pixels     : access sfUint8);
   pragma Import (C, setIcon_raw, "sfWindowBase_setIcon");

   function create
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : String;
      style    : sfWindowStyle := sfResize or sfClose;
      state    : sfWindowState := sfWindowed)
      return   sfWindowBase_Ptr
   is
      function Internal
        (Mode   : Sf.Window.VideoMode.sfVideoMode;
         Title  : Interfaces.C.char_array;
         Style  : sfWindowStyle;
         State  : sfWindowState)
         return   sfWindowBase_Ptr;
      pragma Import (C, Internal, "sfWindowBase_create");
      R : constant sfWindowBase_Ptr := Internal (mode, Interfaces.C.To_C (Title), style, state);
   begin
      return R;
   end Create;

   procedure setTitle (windowBase : sfWindowBase_Ptr; title : Standard.String) is

      procedure Internal (windowBase : sfWindowBase_Ptr; title : Interfaces.C.Strings.chars_ptr);
      pragma Import (C, Internal, "sfWindowBase_setTitle");
      Temp : chars_ptr := New_String (Title);
   begin
      Internal (windowBase, Temp);
      Free (Temp);
   end setTitle;

   function createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Wide_Wide_String;
      style    : sfWindowStyle := sfResize or sfClose;
      state    : sfWindowState := sfWindowed)
      return   sfWindowBase_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : C.char32_array;
         style  : sfWindowStyle;
         state  : sfWindowState)
         return   sfWindowBase_Ptr;
      pragma Import (C, Internal, "sfWindowBase_createUnicode");
      R : constant sfWindowBase_Ptr := Internal (mode, C.To_C (title), style, state);
   begin
      return R;
   end createUnicode;

   procedure setUnicodeTitle (windowBase : sfWindowBase_Ptr; title : Wide_Wide_String) is

      procedure Internal (windowBase : sfWindowBase_Ptr; title : C.char32_array);
      pragma Import (C, Internal, "sfWindowBase_setUnicodeTitle");
   begin
      Internal (windowBase, C.To_C (title));
   end setUnicodeTitle;

   procedure setIcon
     (windowBase : sfWindowBase_Ptr;
      size : Sf.System.Vector2.sfVector2u;
      pixels : access sfUint8) is
   begin
      setIcon_raw (windowBase, size.x, size.y, pixels);
   end setIcon;

   procedure setMinimumSize (windowBase : sfWindowBase_Ptr;
                             minimumSize : Sf.System.Vector2.sfVector2u) is
      Min : aliased Sf.System.Vector2.sfVector2u := minimumSize;
   begin
      setMinimumSize_raw (windowBase, Min'Access);
   end setMinimumSize;

   procedure clearMinimumSize (windowBase : sfWindowBase_Ptr) is
   begin
      setMinimumSize_raw (windowBase, null);
   end clearMinimumSize;

   procedure setMaximumSize (windowBase : sfWindowBase_Ptr;
                             maximumSize : Sf.System.Vector2.sfVector2u) is
      Max : aliased Sf.System.Vector2.sfVector2u := maximumSize;
   begin
      setMaximumSize_raw (windowBase, Max'Access);
   end setMaximumSize;

   procedure clearMaximumSize (windowBase : sfWindowBase_Ptr) is
   begin
      setMaximumSize_raw (windowBase, null);
   end clearMaximumSize;

   function waitEvent
     (windowBase : sfWindowBase_Ptr;
      event : access Sf.Window.Event.sfEvent;
      timeout : Sf.System.Time.sfTime := Sf.System.Time.Zero) return sfBool is
   begin
      return waitEvent_raw (windowBase, timeout, event);
   end waitEvent;

end Sf.Window.Windowbase;
