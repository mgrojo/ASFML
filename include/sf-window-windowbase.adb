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

   function create
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : String;
      style    : sfWindowStyle := sfResize or sfClose)
      return   sfWindowBase_Ptr
   is
      function Internal
        (Mode   : Sf.Window.VideoMode.sfVideoMode;
         Title  : Interfaces.C.char_array;
         Style  : sfWindowStyle)
         return   sfWindowBase_Ptr;
      pragma Import (C, Internal, "sfWindowBase_create");
      R : constant sfWindowBase_Ptr := Internal (mode, Interfaces.C.To_C (Title), style);
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
      style    : sfWindowStyle := sfResize or sfClose)
      return   sfWindowBase_Ptr
   is
      function Internal
        (mode   : Sf.Window.VideoMode.sfVideoMode;
         title  : C.char32_array;
         style  : sfWindowStyle)
         return   sfWindowBase_Ptr;
      pragma Import (C, Internal, "sfWindowBase_createUnicode");
      R : constant sfWindowBase_Ptr := Internal (mode, C.To_C (title), style);
   begin
      return R;
   end createUnicode;

   procedure setUnicodeTitle (windowBase : sfWindowBase_Ptr; title : Wide_Wide_String) is

      procedure Internal (windowBase : sfWindowBase_Ptr; title : C.char32_array);
      pragma Import (C, Internal, "sfWindowBase_setUnicodeTitle");
   begin
      Internal (windowBase, C.To_C (title));
   end setUnicodeTitle;

end Sf.Window.Windowbase;
