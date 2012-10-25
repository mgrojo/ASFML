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
with Sf.Graphics.BlendMode;
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.Types;

package Sf.Graphics.Sprite is
   use Sf.Config;
   use Sf.Graphics.BlendMode;
   use Sf.Graphics.Color;
   use Sf.Graphics.Rect;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new sprite
   -- ///
   -- /// \return A new sfSprite object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_Create return sfSprite_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing sprite
   -- ///
   -- /// \param Sprite : Sprite to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_Destroy (Sprite : sfSprite_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the X position of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param X :      New X coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetX (Sprite : sfSprite_Ptr; X : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the T position of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Y :      New Y coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetY (Sprite : sfSprite_Ptr; Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the position of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param X :      New X coordinate
   -- /// \param Y :      New Y coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetPosition (Sprite : sfSprite_Ptr; X, Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the horizontal scale of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Scale :  New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetScaleX (Sprite : sfSprite_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the vertical scale of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Scale :  New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetScaleY (Sprite : sfSprite_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the scale of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param ScaleX : New horizontal scale (must be strictly positive)
   -- /// \param ScaleY : New vertical scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetScale (Sprite : sfSprite_Ptr; ScaleX, ScaleY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the orientation of a sprite
   -- ///
   -- /// \param Sprite :   Sprite to modify
   -- /// \param Rotation : Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetRotation (Sprite : sfSprite_Ptr; Rotation : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the center of a sprite, in coordinates relative to
   -- /// its left-top corner
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param X :      X coordinate of the center
   -- /// \param Y :      Y coordinate of the center
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetCenter (Sprite : sfSprite_Ptr; X, Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the color of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Color :  New color
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetColor (Sprite : sfSprite_Ptr; Color : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the blending mode for a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Mode :   New blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetBlendMode (Sprite : sfSprite_Ptr; Mode : sfBlendMode);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current X position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetX (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Y position of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current Y position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetY (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the horizontal scale of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current X scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetScaleX (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the vertical scale of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current Y scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetScaleY (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the orientation of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetRotation (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of the center a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current X center
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetCenterX (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Y position of the center a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current Y center
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetCenterY (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the color of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current color
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetColor (Sprite : sfSprite_Ptr) return sfColor;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current blending mode of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Current blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetBlendMode (Sprite : sfSprite_Ptr) return sfBlendMode;

   -- ////////////////////////////////////////////////////////////
   -- /// Move a sprite
   -- ///
   -- /// \param Sprite :  Sprite to modify
   -- /// \param OffsetX : Offset on the X axis
   -- /// \param OffsetY : Offset on the Y axis
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_Move (Sprite : sfSprite_Ptr; OffsetX, OffsetY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Scale a sprite
   -- ///
   -- /// \param Sprite :  Sprite to modify
   -- /// \param FactorX : Horizontal scaling factor (must be strictly positive)
   -- /// \param FactorY : Vertical scaling factor (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_Scale (Sprite : sfSprite_Ptr; FactorX, FactorY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Rotate a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Angle :  Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_Rotate (Sprite : sfSprite_Ptr; Angle : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from global coordinates into the sprite's local coordinates
   -- /// (ie it applies the inverse of object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param Sprite : Sprite object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_TransformToLocal (Sprite : sfSprite_Ptr; PointX, PointY : Float; X, Y : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from the sprite's local coordinates into global coordinates
   -- /// (ie it applies the object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param Sprite : Sprite object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_TransformToGlobal (Sprite : sfSprite_Ptr; PointX, PointY : Float; X, Y : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the image of a sprite
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Image :  New image
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetImage (Sprite : sfSprite_Ptr; Image : sfImage_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the sub-rectangle of a sprite inside the source image
   -- ///
   -- /// \param Sprite :  Sprite to modify
   -- /// \param SubRect : New sub-rectangle
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_SetSubRect (Sprite : sfSprite_Ptr; SubRect : sfIntRect);

   -- ////////////////////////////////////////////////////////////
   -- /// Resize a sprite (by changing its scale factors)
   -- ///
   -- /// \param Sprite : Sprite to modify
   -- /// \param Width :  New width (must be strictly positive)
   -- /// \param Height : New height (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_Resize (Sprite : sfSprite_Ptr; Width, Height : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Flip a sprite horizontally
   -- ///
   -- /// \param Sprite :  Sprite to modify
   -- /// \param Flipped : sfTrue to flip the sprite
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_FlipX (Sprite : sfSprite_Ptr; Flipped : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Flip a sprite vertically
   -- ///
   -- /// \param Sprite :  Sprite to modify
   -- /// \param Flipped : sfTrue to flip the sprite
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSprite_FlipY (Sprite : sfSprite_Ptr; Flipped : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the source image of a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Pointer to the image (can be NULL)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetImage (Sprite : sfSprite_Ptr) return sfImage_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the sub-rectangle of a sprite inside the source image
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Sub-rectangle
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetSubRect (Sprite : sfSprite_Ptr) return sfIntRect;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a sprite width
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Width of the sprite
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetWidth (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a sprite height
   -- ///
   -- /// \param Sprite : Sprite to read
   -- ///
   -- /// \return Height of the sprite
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetHeight (Sprite : sfSprite_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the color of a given pixel in a sprite
   -- ///
   -- /// \param Sprite : Sprite to read
   -- /// \param X :      X coordinate of the pixel to get
   -- /// \param Y :      Y coordinate of the pixel to get
   -- ///
   -- /// \return Color of pixel (X, Y)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSprite_GetPixel (Sprite : sfSprite_Ptr; X, Y : sfUint32) return sfColor;

private

   pragma Import (C, sfSprite_Create, "sfSprite_Create");
   pragma Import (C, sfSprite_Destroy, "sfSprite_Destroy");
   pragma Import (C, sfSprite_SetX, "sfSprite_SetX");
   pragma Import (C, sfSprite_SetY, "sfSprite_SetY");
   pragma Import (C, sfSprite_SetPosition, "sfSprite_SetPosition");
   pragma Import (C, sfSprite_SetScaleX, "sfSprite_SetScaleX");
   pragma Import (C, sfSprite_SetScaleY, "sfSprite_SetScaleY");
   pragma Import (C, sfSprite_SetScale, "sfSprite_SetScale");
   pragma Import (C, sfSprite_SetRotation, "sfSprite_SetRotation");
   pragma Import (C, sfSprite_SetCenter, "sfSprite_SetCenter");
   pragma Import (C, sfSprite_SetColor, "sfSprite_SetColor");
   pragma Import (C, sfSprite_SetBlendMode, "sfSprite_SetBlendMode");
   pragma Import (C, sfSprite_GetX, "sfSprite_GetX");
   pragma Import (C, sfSprite_GetY, "sfSprite_GetY");
   pragma Import (C, sfSprite_GetScaleX, "sfSprite_GetScaleX");
   pragma Import (C, sfSprite_GetScaleY, "sfSprite_GetScaleY");
   pragma Import (C, sfSprite_GetRotation, "sfSprite_GetRotation");
   pragma Import (C, sfSprite_GetCenterX, "sfSprite_GetCenterX");
   pragma Import (C, sfSprite_GetCenterY, "sfSprite_GetCenterY");
   pragma Import (C, sfSprite_GetColor, "sfSprite_GetColor");
   pragma Import (C, sfSprite_GetBlendMode, "sfSprite_GetBlendMode");
   pragma Import (C, sfSprite_Move, "sfSprite_Move");
   pragma Import (C, sfSprite_Scale, "sfSprite_Scale");
   pragma Import (C, sfSprite_Rotate, "sfSprite_Rotate");
   pragma Import (C, sfSprite_TransformToLocal, "sfSprite_TransformToLocal");
   pragma Import (C, sfSprite_TransformToGlobal, "sfSprite_TransformToGlobal");
   pragma Import (C, sfSprite_SetImage, "sfSprite_SetImage");
   pragma Import (C, sfSprite_SetSubRect, "sfSprite_SetSubRect");
   pragma Import (C, sfSprite_Resize, "sfSprite_Resize");
   pragma Import (C, sfSprite_FlipX, "sfSprite_FlipX");
   pragma Import (C, sfSprite_FlipY, "sfSprite_FlipY");
   pragma Import (C, sfSprite_GetImage, "sfSprite_GetImage");
   pragma Import (C, sfSprite_GetSubRect, "sfSprite_GetSubRect");
   pragma Import (C, sfSprite_GetWidth, "sfSprite_GetWidth");
   pragma Import (C, sfSprite_GetHeight, "sfSprite_GetHeight");
   pragma Import (C, sfSprite_GetPixel, "sfSprite_GetPixel");

end Sf.Graphics.Sprite;
