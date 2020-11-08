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

--//////////////////////////////////////////////////////////

with Sf.System.Vector2;
with Sf.Graphics.Transform;
with Sf.Graphics.Rect;
with Sf.Graphics.Color;

package Sf.Graphics.ConvexShape is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new convex shape
   --/
   --/ @return A new sfConvexShape object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function create return sfConvexShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing convex shape
   --/
   --/ @param shape Shape to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (shape : sfConvexShape_Ptr) return sfConvexShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing convex Shape
   --/
   --/ @param shape Shape to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (shape : sfConvexShape_Ptr);

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
   procedure setPosition (shape : sfConvexShape_Ptr; position : Sf.System.Vector2.sfVector2f);

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
   procedure setRotation (shape : sfConvexShape_Ptr; angle : float);

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
   procedure setScale (shape : sfConvexShape_Ptr; scale : Sf.System.Vector2.sfVector2f);

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
   procedure setOrigin (shape : sfConvexShape_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

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
   function getRotation (shape : sfConvexShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function getScale (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function getOrigin (shape : sfConvexShape_Ptr) return Sf.System.Vector2.sfVector2f;

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
   procedure move (shape : sfConvexShape_Ptr; offset : Sf.System.Vector2.sfVector2f);

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
   procedure rotate (shape : sfConvexShape_Ptr; angle : float);

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
   procedure scale (shape : sfConvexShape_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a convex shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function getTransform (shape : sfConvexShape_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a convex shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function getInverseTransform (shape : sfConvexShape_Ptr) return Sf.Graphics.Transform.sfTransform;

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
   procedure setTexture
     (shape : sfConvexShape_Ptr;
      texture : sfConvexShape_Ptr;
      resetRect : sfBool);

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
   procedure setTextureRect (shape : sfConvexShape_Ptr; rect : Sf.Graphics.Rect.sfIntRect);

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
   procedure setFillColor (shape : sfConvexShape_Ptr; color : Sf.Graphics.Color.sfColor);

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
   procedure setOutlineColor (shape : sfConvexShape_Ptr; color : Sf.Graphics.Color.sfColor);

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
   procedure setOutlineThickness (shape : sfConvexShape_Ptr; thickness : float);

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
   function getTexture (shape : sfConvexShape_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sub-rectangle of the texture displayed by a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Texture rectangle of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getTextureRect (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the fill color of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Fill color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getFillColor (shape : sfConvexShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline color of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineColor (shape : sfConvexShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline thickness of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline thickness of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineThickness (shape : sfConvexShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the total number of points of a convex shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Number of points of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getPointCount (shape : sfConvexShape_Ptr) return sfSize_t;

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
   function getPoint (shape : sfConvexShape_Ptr; index : sfSize_t) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the number of points of a convex shap
   --/
   --/ @a count must be greater than 2 to define a valid shape.
   --/
   --/ @param shape Shape object
   --/ @param count New number of points of the shape
   --/
   --//////////////////////////////////////////////////////////
   procedure setPointCount (shape : sfConvexShape_Ptr; count : sfSize_t);

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
   procedure setPoint
     (shape : sfConvexShape_Ptr;
      index : sfSize_t;
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
   function getLocalBounds (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

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
   function getGlobalBounds (shape : sfConvexShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, create, "sfConvexShape_create");
   pragma Import (C, copy, "sfConvexShape_copy");
   pragma Import (C, destroy, "sfConvexShape_destroy");
   pragma Import (C, setPosition, "sfConvexShape_setPosition");
   pragma Import (C, setRotation, "sfConvexShape_setRotation");
   pragma Import (C, setScale, "sfConvexShape_setScale");
   pragma Import (C, setOrigin, "sfConvexShape_setOrigin");
   pragma Import (C, getPosition, "sfConvexShape_getPosition");
   pragma Import (C, getRotation, "sfConvexShape_getRotation");
   pragma Import (C, getScale, "sfConvexShape_getScale");
   pragma Import (C, getOrigin, "sfConvexShape_getOrigin");
   pragma Import (C, move, "sfConvexShape_move");
   pragma Import (C, rotate, "sfConvexShape_rotate");
   pragma Import (C, scale, "sfConvexShape_scale");
   pragma Import (C, getTransform, "sfConvexShape_getTransform");
   pragma Import (C, getInverseTransform, "sfConvexShape_getInverseTransform");
   pragma Import (C, setTexture, "sfConvexShape_setTexture");
   pragma Import (C, setTextureRect, "sfConvexShape_setTextureRect");
   pragma Import (C, setFillColor, "sfConvexShape_setFillColor");
   pragma Import (C, setOutlineColor, "sfConvexShape_setOutlineColor");
   pragma Import (C, setOutlineThickness, "sfConvexShape_setOutlineThickness");
   pragma Import (C, getTexture, "sfConvexShape_getTexture");
   pragma Import (C, getTextureRect, "sfConvexShape_getTextureRect");
   pragma Import (C, getFillColor, "sfConvexShape_getFillColor");
   pragma Import (C, getOutlineColor, "sfConvexShape_getOutlineColor");
   pragma Import (C, getOutlineThickness, "sfConvexShape_getOutlineThickness");
   pragma Import (C, getPointCount, "sfConvexShape_getPointCount");
   pragma Import (C, getPoint, "sfConvexShape_getPoint");
   pragma Import (C, setPointCount, "sfConvexShape_setPointCount");
   pragma Import (C, setPoint, "sfConvexShape_setPoint");
   pragma Import (C, getLocalBounds, "sfConvexShape_getLocalBounds");
   pragma Import (C, getGlobalBounds, "sfConvexShape_getGlobalBounds");

end Sf.Graphics.ConvexShape;
