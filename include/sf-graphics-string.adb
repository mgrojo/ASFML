-- ////////////////////////////////////////////////////////////
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
-- ////////////////////////////////////////////////////////////

-- ////////////////////////////////////////////////////////////
-- // Headers
-- ////////////////////////////////////////////////////////////
with Interfaces.C.Strings;

package body Sf.Graphics.String is
   use Interfaces.C.Strings;

   -- ////////////////////////////////////////////////////////////
   -- /// Set the text of a string (from a multibyte string)
   -- ///
   -- /// \param String : String to modify
   -- /// \param Text :   New text
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetText (Str : sfString_Ptr; Text : Standard.String) is
      procedure Internal (Str : sfString_Ptr; Text : chars_ptr);
      pragma Import (C, Internal, "sfString_SetText");
      Temp : chars_ptr := New_String (Text);
   begin
      Internal (Str, Temp);
      Free (Temp);
   end sfString_SetText;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the text of a string (returns an ANSI string)
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Text an a locale-dependant ANSI string
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetText (Str : sfString_Ptr) return Standard.String is
      function Internal (Str : sfString_Ptr) return chars_ptr;
      pragma Import (C, Internal, "sfString_GetText");
      Temp : chars_ptr       := Internal (Str);
      Res  : Standard.String := Value (Temp);
   begin
      return Res;
   end sfString_GetText;

end Sf.Graphics.String;
