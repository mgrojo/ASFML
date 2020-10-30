--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2015 Laurent Gomila (laurent@sfml-dev.org)
-- This software is provided 'as-is', without any express or implied warranty.
-- In no event will the authors be held liable for any damages arising from the use of this software.
-- Permission is granted to anyone to use this software for any purpose,
-- including commercial applications, and to alter it and redistribute it freely,
-- subject to the following restrictions:
-- 1. The origin of this software must not be misrepresented;
--    you must not claim that you wrote the original software.
--    If you use this software in a product, an acknowledgment
--    in the product documentation would be appreciated but is not required.
-- 2. Altered source versions must be plainly marked as such,
--    and must not be misrepresented as being the original software.
-- 3. This notice may not be removed or altered from any source distribution.
--//////////////////////////////////////////////////////////

pragma Ada_2005;
pragma Style_Checks (Off);

with Interfaces.C; use Interfaces.C;
with System;
with Sf.System.Vector2;
with Sf.Graphics.Transform;
with Sf.Config;
with Sf.Graphics.Rect;
with Sf.Graphics.Color;
with Sf.Graphics.Types;

package Sf.Graphics.ConvexShape is
   use Types, Config;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new convex shape
   --/
   --/ @return A new sfConvexShape object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_create return sfConvexShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing convex shape
   --/
   --/ @param shape Shape to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_copy (shape : sfConvexShape_Ptr) return sfConvexShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing convex Shape
   --/
   --/ @param shape Shape to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_destroy (shape : sfConvexShape_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a convex shape
   --/
   --/ This function completely overwrites the previous position.
   --/ See sfConvexShape_move to apply an offset based on the previous position instead.
   --/ The default position of a circle Shape object is (0, 0).
   --/
   --/ @param shape    Shape object
   --/ @param position New position
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setPosition (shape : sfConvexShape_Ptr; position : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a convex shape
   --/
   --/ This function completely overwrites the previous rotation.
   --/ See sfConvexShape_rotate to add an angle based on the previous rotation instead.
   --/ The default rotation of a circle Shape object is 0.
   --/
   --/ @param shape Shape object
   --/ @param angle New rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setRotation (shape : sfConvexShape_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the scale factors of a convex shape
   --/
   --/ This function completely overwrites the previous scale.
   --/ See sfConvexShape_scale to add a factor based on the previous scale instead.
   --/ The default scale of a circle Shape object is (1, 1).
   --/
   --/ @param shape Shape object
   --/ @param scale New scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setScale (shape : sfConvexShape_Ptr; scale : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the local origin of a convex shape
   --/
   --/ The origin of an object defines the center point for
   --/ all transformations (position, scale, rotation).
   --/ The coordinates of this point must be relative to the
   --/ top-left corner of the object, and ignore all
   --/ transformations (position, scale, rotation).
   --/ The default origin of a circle Shape object is (0, 0).
   --/
   --/ @param shape  Shape object
   --/ @param origin New origin
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setOrigin (shape : sfConvexShape_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getPosition (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the orientation of a convex shape
   --/
   --/ The rotation is always in the range [0, 360].
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getRotation (shape : sfConvexShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getScale (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getOrigin (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a convex shape by a given offset
   --/
   --/ This function adds to the current position of the object,
   --/ unlike sfConvexShape_setPosition which overwrites it.
   --/
   --/ @param shape  Shape object
   --/ @param offset Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_move (shape : sfConvexShape_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a convex shape
   --/
   --/ This function adds to the current rotation of the object,
   --/ unlike sfConvexShape_setRotation which overwrites it.
   --/
   --/ @param shape Shape object
   --/ @param angle Angle of rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_rotate (shape : sfConvexShape_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Scale a convex shape
   --/
   --/ This function multiplies the current scale of the object,
   --/ unlike sfConvexShape_setScale which overwrites it.
   --/
   --/ @param shape   Shape object
   --/ @param factors Scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_scale (shape : sfConvexShape_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a convex shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getTransform (shape : sfConvexShape_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a convex shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getInverseTransform (shape : sfConvexShape_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the source texture of a convex shape
   --/
   --/ The @a texture argument refers to a texture that must
   --/ exist as long as the shape uses it. Indeed, the shape
   --/ doesn't store its own copy of the texture, but rather keeps
   --/ a pointer to the one that you passed to this function.
   --/ If the source texture is destroyed and the shape tries to
   --/ use it, the behaviour is undefined.
   --/ @a texture can be NULL to disable texturing.
   --/ If @a resetRect is true, the TextureRect property of
   --/ the shape is automatically adjusted to the size of the new
   --/ texture. If it is false, the texture rect is left unchanged.
   --/
   --/ @param shape     Shape object
   --/ @param texture   New texture
   --/ @param resetRect Should the texture rect be reset to the size of the new texture?
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setTexture
     (shape : sfConvexShape_Ptr;
      texture : sfConvexShape_Ptr;
      resetRect : Sf.Config.sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the sub-rectangle of the texture that a convex shape will display
   --/
   --/ The texture rect is useful when you don't want to display
   --/ the whole texture, but rather a part of it.
   --/ By default, the texture rect covers the entire texture.
   --/
   --/ @param shape Shape object
   --/ @param rect  Rectangle defining the region of the texture to display
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setTextureRect (shape : sfConvexShape_Ptr; rect : Sf.Graphics.Rect.sfIntRect);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the fill color of a convex shape
   --/
   --/ This color is modulated (multiplied) with the shape's
   --/ texture if any. It can be used to colorize the shape,
   --/ or change its global opacity.
   --/ You can use sfTransparent to make the inside of
   --/ the shape transparent, and have the outline alone.
   --/ By default, the shape's fill color is opaque white.
   --/
   --/ @param shape Shape object
   --/ @param color New color of the shape
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setFillColor (shape : sfConvexShape_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the outline color of a convex shape
   --/
   --/ You can use sfTransparent to disable the outline.
   --/ By default, the shape's outline color is opaque white.
   --/
   --/ @param shape Shape object
   --/ @param color New outline color of the shape
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setOutlineColor (shape : sfConvexShape_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the thickness of a convex shape's outline
   --/
   --/ This number cannot be negative. Using zero disables
   --/ the outline.
   --/ By default, the outline thickness is 0.
   --/
   --/ @param shape     Shape object
   --/ @param thickness New outline thickness
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setOutlineThickness (shape : sfConvexShape_Ptr; thickness : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the source texture of a convex shape
   --/
   --/ If the shape has no source texture, a NULL pointer is returned.
   --/ The returned pointer is const, which means that you can't
   --/ modify the texture when you retrieve it with this function.
   --/
   --/ @param shape Shape object
   --/
   --/ @return Pointer to the shape's texture
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getTexture (shape : sfConvexShape_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sub-rectangle of the texture displayed by a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Texture rectangle of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getTextureRect (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the fill color of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Fill color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getFillColor (shape : sfConvexShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline color of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getOutlineColor (shape : sfConvexShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline thickness of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline thickness of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getOutlineThickness (shape : sfConvexShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the total number of points of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Number of points of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getPointCount (shape : sfConvexShape_Ptr) return size_t;

   --//////////////////////////////////////////////////////////
   --/ @brief Get a point of a convex shape
   --/
   --/ The result is undefined if @a index is out of the valid range.
   --/
   --/ @param shape Shape object
   --/ @param index Index of the point to get, in range [0 .. getPointCount() - 1]
   --/
   --/ @return Index-th point of the shape
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getPoint (shape : sfConvexShape_Ptr; index : size_t) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the number of points of a convex shap
   --/
   --/ @a count must be greater than 2 to define a valid shape.
   --/
   --/ @param shape Shape object
   --/ @param count New number of points of the shape
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setPointCount (shape : sfConvexShape_Ptr; count : size_t);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a point in a convex shape
   --/
   --/ Don't forget that the polygon must remain convex, and
   --/ the points need to stay ordered!
   --/ setPointCount must be called first in order to set the total
   --/ number of points. The result is undefined if @a index is out
   --/ of the valid range.
   --/
   --/ @param shape Shape object
   --/ @param index Index of the point to change, in range [0 .. GetPointCount() - 1]
   --/ @param point New point
   --/
   --//////////////////////////////////////////////////////////
   procedure sfConvexShape_setPoint
     (shape : sfConvexShape_Ptr;
      index : size_t;
      point : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local bounding rectangle of a convex shape
   --/
   --/ The returned rectangle is in local coordinates, which means
   --/ that it ignores the transformations (translation, rotation,
   --/ scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ entity in the entity's coordinate system.
   --/
   --/ @param shape Shape object
   --/
   --/ @return Local bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getLocalBounds (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the global bounding rectangle of a convex shape
   --/
   --/ The returned rectangle is in global coordinates, which means
   --/ that it takes in account the transformations (translation,
   --/ rotation, scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ sprite in the global 2D world's coordinate system.
   --/
   --/ @param shape Shape object
   --/
   --/ @return Global bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function sfConvexShape_getGlobalBounds (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, sfConvexShape_create, "sfConvexShape_create");
   pragma Import (C, sfConvexShape_copy, "sfConvexShape_copy");
   pragma Import (C, sfConvexShape_destroy, "sfConvexShape_destroy");
   pragma Import (C, sfConvexShape_setPosition, "sfConvexShape_setPosition");
   pragma Import (C, sfConvexShape_setRotation, "sfConvexShape_setRotation");
   pragma Import (C, sfConvexShape_setScale, "sfConvexShape_setScale");
   pragma Import (C, sfConvexShape_setOrigin, "sfConvexShape_setOrigin");
   pragma Import (C, sfConvexShape_getPosition, "sfConvexShape_getPosition");
   pragma Import (C, sfConvexShape_getRotation, "sfConvexShape_getRotation");
   pragma Import (C, sfConvexShape_getScale, "sfConvexShape_getScale");
   pragma Import (C, sfConvexShape_getOrigin, "sfConvexShape_getOrigin");
   pragma Import (C, sfConvexShape_move, "sfConvexShape_move");
   pragma Import (C, sfConvexShape_rotate, "sfConvexShape_rotate");
   pragma Import (C, sfConvexShape_scale, "sfConvexShape_scale");
   pragma Import (C, sfConvexShape_getTransform, "sfConvexShape_getTransform");
   pragma Import (C, sfConvexShape_getInverseTransform, "sfConvexShape_getInverseTransform");
   pragma Import (C, sfConvexShape_setTexture, "sfConvexShape_setTexture");
   pragma Import (C, sfConvexShape_setTextureRect, "sfConvexShape_setTextureRect");
   pragma Import (C, sfConvexShape_setFillColor, "sfConvexShape_setFillColor");
   pragma Import (C, sfConvexShape_setOutlineColor, "sfConvexShape_setOutlineColor");
   pragma Import (C, sfConvexShape_setOutlineThickness, "sfConvexShape_setOutlineThickness");
   pragma Import (C, sfConvexShape_getTexture, "sfConvexShape_getTexture");
   pragma Import (C, sfConvexShape_getTextureRect, "sfConvexShape_getTextureRect");
   pragma Import (C, sfConvexShape_getFillColor, "sfConvexShape_getFillColor");
   pragma Import (C, sfConvexShape_getOutlineColor, "sfConvexShape_getOutlineColor");
   pragma Import (C, sfConvexShape_getOutlineThickness, "sfConvexShape_getOutlineThickness");
   pragma Import (C, sfConvexShape_getPointCount, "sfConvexShape_getPointCount");
   pragma Import (C, sfConvexShape_getPoint, "sfConvexShape_getPoint");
   pragma Import (C, sfConvexShape_setPointCount, "sfConvexShape_setPointCount");
   pragma Import (C, sfConvexShape_setPoint, "sfConvexShape_setPoint");
   pragma Import (C, sfConvexShape_getLocalBounds, "sfConvexShape_getLocalBounds");
   pragma Import (C, sfConvexShape_getGlobalBounds, "sfConvexShape_getGlobalBounds");

end Sf.Graphics.ConvexShape;
