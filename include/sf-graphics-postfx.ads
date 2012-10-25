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
with Sf.Config;
with Sf.Graphics.Types;

package Sf.Graphics.PostFX is
   use Sf.Config;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new post-fx from a file
   -- ///
   -- /// \param Filename : File to load
   -- ///
   -- /// \return A new sfPostFX object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPostFX_CreateFromFile (Filename : String) return sfPostFX_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new post-fx from an effect source code
   -- ///
   -- /// \param Effect : Source code of the effect
   -- ///
   -- /// \return A new sfPostFX object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPostFX_CreateFromMemory (Effect : String) return sfPostFX_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing post-fx
   -- ///
   -- /// \param PostFX : PostFX to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_Destroy (PostFX : sfPostFX_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (1 float)
   -- ///
   -- /// \param PostFX : Post-effect to modify
   -- /// \param Name :   Parameter name in the effect
   -- /// \param X :      Value to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter1 (PostFX : sfPostFX_Ptr; Name : String; X : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (2 floats)
   -- ///
   -- /// \param PostFX : Post-effect to modify
   -- /// \param Name :   Parameter name in the effect
   -- /// \param X, Y :   Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter2 (PostFX : sfPostFX_Ptr; Name : String; X, Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (3 floats)
   -- ///
   -- /// \param PostFX :  Post-effect to modify
   -- /// \param Name :    Parameter name in the effect
   -- /// \param X, Y, Z : Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter3 (PostFX : sfPostFX_Ptr; Name : String; X, Y, Z : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change a parameter of a post-fx (4 floats)
   -- ///
   -- /// \param PostFX :     Post-effect to modify
   -- /// \param Name :       Parameter name in the effect
   -- /// \param X, Y, Z, W : Values to assign
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetParameter4 (PostFX : sfPostFX_Ptr; Name : String; X, Y, Z, W : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set a texture parameter in a post-fx
   -- ///
   -- /// \param PostFX :  Post-effect to modify
   -- /// \param Name :    Texture name in the effect
   -- /// \param Texture : Image to set (pass NULL to use content of current framebuffer)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPostFX_SetTexture (PostFX : sfPostFX_Ptr; Name : String; Texture : sfImage_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Tell whether or not the system supports post-effects
   -- ///
   -- /// \return sfTrue if the system can use post-effects
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPostFX_CanUsePostFX return sfBool;

private

   pragma Import (C, sfPostFX_Destroy, "sfPostFX_Destroy");
   pragma Import (C, sfPostFX_CanUsePostFX, "sfPostFX_CanUsePostFX");

end Sf.Graphics.PostFX;
