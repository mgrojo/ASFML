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

package body Sf.Graphics.PostFX is

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new post-fx from a file
   -- ///
   -- /// \param Filename : File to load
   -- ///
   -- /// \return A new sfPostFX object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPostFX_CreateFromFile (Filename : String) return sfPostFX_Ptr is
      function Internal (Filename : Interfaces.C.Strings.chars_ptr) return sfPostFX_Ptr;
      pragma Import (C, Internal, "sfPostFX_CreateFromFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfPostFX_Ptr do
         R := Internal (Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfPostFX_CreateFromFile;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new post-fx from an effect source code
   -- ///
   -- /// \param Effect : Source code of the effect
   -- ///
   -- /// \return A new sfPostFX object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPostFX_CreateFromMemory (Effect : String) return sfPostFX_Ptr is
      function Internal (Effect : Interfaces.C.Strings.chars_ptr) return sfPostFX_Ptr;
      pragma Import (C, Internal, "sfPostFX_CreateFromMemory");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Effect);
   begin
      return R : sfPostFX_Ptr do
         R := Internal (Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfPostFX_CreateFromMemory;

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (1 float)
   -- ///
   -- /// \param PostFX : Post-effect to modify
   -- /// \param Name :   Parameter name in the effect
   -- /// \param X :      Value to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter1 (PostFX : sfPostFX_Ptr; Name : String; X : Float) is
      procedure Internal (PostFX : sfPostFX_Ptr; Name : Interfaces.C.Strings.chars_ptr; X : Float);
      pragma Import (C, Internal, "sfPostFX_SetParameter1");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Name);
   begin
      Internal (PostFX, Temp, X);
      Interfaces.C.Strings.Free (Temp);
   end sfPostFX_SetParameter1;

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (2 floats)
   -- ///
   -- /// \param PostFX : Post-effect to modify
   -- /// \param Name :   Parameter name in the effect
   -- /// \param X, Y :   Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter2 (PostFX : sfPostFX_Ptr; Name : String; X, Y : Float) is
      procedure Internal (PostFX : sfPostFX_Ptr; Name : Interfaces.C.Strings.chars_ptr; X, Y : Float);
      pragma Import (C, Internal, "sfPostFX_SetParameter2");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Name);
   begin
      Internal (PostFX, Temp, X, Y);
      Interfaces.C.Strings.Free (Temp);
   end sfPostFX_SetParameter2;

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (3 floats)
   -- ///
   -- /// \param PostFX :  Post-effect to modify
   -- /// \param Name :    Parameter name in the effect
   -- /// \param X, Y, Z : Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter3 (PostFX : sfPostFX_Ptr; Name : String; X, Y, Z : Float) is
      procedure Internal (PostFX : sfPostFX_Ptr; Name : Interfaces.C.Strings.chars_ptr; X, Y, Z : Float);
      pragma Import (C, Internal, "sfPostFX_SetParameter3");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Name);
   begin
      Internal (PostFX, Temp, X, Y, Z);
      Interfaces.C.Strings.Free (Temp);
   end sfPostFX_SetParameter3;

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (4 floats)
   -- ///
   -- /// \param PostFX :     Post-effect to modify
   -- /// \param Name :       Parameter name in the effect
   -- /// \param X, Y, Z, W : Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter4 (PostFX : sfPostFX_Ptr; Name : String; X, Y, Z, W : Float) is
      procedure Internal (PostFX : sfPostFX_Ptr; Name : Interfaces.C.Strings.chars_ptr; X, Y, Z, W : Float);
      pragma Import (C, Internal, "sfPostFX_SetParameter4");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Name);
   begin
      Internal (PostFX, Temp, X, Y, Z, W);
      Interfaces.C.Strings.Free (Temp);
   end sfPostFX_SetParameter4;

   -- ////////////////////////////////////////////////////////////
   -- /// Set a texture parameter in a post-fx
   -- ///
   -- /// \param PostFX :  Post-effect to modify
   -- /// \param Name :    Texture name in the effect
   -- /// \param Texture : Image to set (pass NULL to use content of current framebuffer)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetTexture (PostFX : sfPostFX_Ptr; Name : String; Texture : sfImage_Ptr) is
      procedure Internal (PostFX : sfPostFX_Ptr; Name : Interfaces.C.Strings.chars_ptr; Texture : sfImage_Ptr);
      pragma Import (C, Internal, "sfPostFX_SetTexture");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Name);
   begin
      Internal (PostFX, Temp, Texture);
      Interfaces.C.Strings.Free (Temp);
   end sfPostFX_SetTexture;

end Sf.Graphics.PostFX;
