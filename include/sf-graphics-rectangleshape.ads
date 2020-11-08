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


package Sf.Graphics.RectangleShape is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new rectangle shape
   --/
   --/ @return A new sfRectangleShape object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function create return sfRectangleShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing rectangle shape
   --/
   --/ @param shape Shape to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (shape : sfRectangleShape_Ptr) return sfRectangleShape_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing rectangle shape
   --/
   --/ @param shape Shape to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (shape : sfRectangleShape_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a rectangle shape
   --/
   --/ This function completely overwrites the previous position.
   --/ See sfRectangleShape_move to apply an offset based on the previous position instead.
   --/ The default position of a circle Shape object is (0, 0).
   --/
   --/ @param shape    Shape object
   --/ @param position New position
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (shape : sfRectangleShape_Ptr; position : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a rectangle shape
   --/
   --/ This function completely overwrites the previous rotation.
   --/ See sfRectangleShape_rotate to add an angle based on the previous rotation instead.
   --/ The default rotation of a circle Shape object is 0.
   --/
   --/ @param shape Shape object
   --/ @param angle New rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure setRotation (shape : sfRectangleShape_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the scale factors of a rectangle shape
   --/
   --/ This function completely overwrites the previous scale.
   --/ See sfRectangleShape_scale to add a factor based on the previous scale instead.
   --/ The default scale of a circle Shape object is (1, 1).
   --/
   --/ @param shape Shape object
   --/ @param scale New scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure setScale (shape : sfRectangleShape_Ptr; scale : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the local origin of a rectangle shape
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
   procedure setOrigin (shape : sfRectangleShape_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (shape : sfRectangleShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the orientation of a rectangle shape
   --/
   --/ The rotation is always in the range [0, 360].
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function getRotation (shape : sfRectangleShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function getScale (shape : sfRectangleShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function getOrigin (shape : sfRectangleShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a rectangle shape by a given offset
   --/
   --/ This function adds to the current position of the object,
   --/ unlike sfRectangleShape_setPosition which overwrites it.
   --/
   --/ @param shape  Shape object
   --/ @param offset Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure move (shape : sfRectangleShape_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a rectangle shape
   --/
   --/ This function adds to the current rotation of the object,
   --/ unlike sfRectangleShape_setRotation which overwrites it.
   --/
   --/ @param shape Shape object
   --/ @param angle Angle of rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure rotate (shape : sfRectangleShape_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Scale a rectangle shape
   --/
   --/ This function multiplies the current scale of the object,
   --/ unlike sfRectangleShape_setScale which overwrites it.
   --/
   --/ @param shape   Shape object
   --/ @param factors Scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure scale (shape : sfRectangleShape_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a rectangle shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function getTransform (shape : sfRectangleShape_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a rectangle shape
   --/
   --/ @param shape shape object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function getInverseTransform (shape : sfRectangleShape_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the source texture of a rectangle shape
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
     (shape : sfRectangleShape_Ptr;
      texture : sfTexture_Ptr;
      resetRect : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the sub-rectangle of the texture that a rectangle shape will display
   --/
   --/ The texture rect is useful when you don't want to display
   --/ the whole texture, but rather a part of it.
   --/ By default, the texture rect covers the entire texture.
   --/
   --/ @param shape Shape object
   --/ @param rect  Rectangle defining the region of the texture to display
   --/
   --//////////////////////////////////////////////////////////
   procedure setTextureRect (shape : sfRectangleShape_Ptr; rect : Sf.Graphics.Rect.sfIntRect);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the fill color of a rectangle shape
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
   procedure setFillColor (shape : sfRectangleShape_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the outline color of a rectangle shape
   --/
   --/ You can use sfTransparent to disable the outline.
   --/ By default, the shape's outline color is opaque white.
   --/
   --/ @param shape Shape object
   --/ @param color New outline color of the shape
   --/
   --//////////////////////////////////////////////////////////
   procedure setOutlineColor (shape : sfRectangleShape_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the thickness of a rectangle shape's outline
   --/
   --/ This number cannot be negative. Using zero disables
   --/ the outline.
   --/ By default, the outline thickness is 0.
   --/
   --/ @param shape     Shape object
   --/ @param thickness New outline thickness
   --/
   --//////////////////////////////////////////////////////////
   procedure setOutlineThickness (shape : sfRectangleShape_Ptr; thickness : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the source texture of a rectangle shape
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
   function getTexture (shape : sfRectangleShape_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the sub-rectangle of the texture displayed by a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Texture rectangle of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getTextureRect (shape : sfRectangleShape_Ptr) return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the fill color of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Fill color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getFillColor (shape : sfRectangleShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline color of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline color of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineColor (shape : sfRectangleShape_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline thickness of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Outline thickness of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineThickness (shape : sfRectangleShape_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the total number of points of a rectangle shape
   --/
   --/ @param shape Shape object
   --/
   --/ @return Number of points of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getPointCount (shape : sfRectangleShape_Ptr) return sfSize_t;

   --//////////////////////////////////////////////////////////
   --/ @brief Get a point of a rectangle shape
   --/
   --/ The result is undefined if @a index is out of the valid range.
   --/
   --/ @param shape Shape object
   --/ @param index Index of the point to get, in range [0 .. getPointCount() - 1]
   --/
   --/ @return Index-th point of the shape
   --/
   --//////////////////////////////////////////////////////////
   function getPoint (shape : sfRectangleShape_Ptr; index : sfSize_t) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the size of a rectangle shape
   --/
   --/ @param shape Shape object
   --/ @param size  New size of the rectangle
   --/
   --//////////////////////////////////////////////////////////
   procedure setSize (shape : sfRectangleShape_Ptr; size : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of a rectangle shape
   --/
   --/ @param shape Shape object
   --/ @return height Size of the rectangle
   --/
   --//////////////////////////////////////////////////////////
   function getSize (shape : sfRectangleShape_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local bounding rectangle of a rectangle shape
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
   function getLocalBounds (shape : sfRectangleShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the global bounding rectangle of a rectangle shape
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
   function getGlobalBounds (shape : sfRectangleShape_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, create, "sfRectangleShape_create");
   pragma Import (C, copy, "sfRectangleShape_copy");
   pragma Import (C, destroy, "sfRectangleShape_destroy");
   pragma Import (C, setPosition, "sfRectangleShape_setPosition");
   pragma Import (C, setRotation, "sfRectangleShape_setRotation");
   pragma Import (C, setScale, "sfRectangleShape_setScale");
   pragma Import (C, setOrigin, "sfRectangleShape_setOrigin");
   pragma Import (C, getPosition, "sfRectangleShape_getPosition");
   pragma Import (C, getRotation, "sfRectangleShape_getRotation");
   pragma Import (C, getScale, "sfRectangleShape_getScale");
   pragma Import (C, getOrigin, "sfRectangleShape_getOrigin");
   pragma Import (C, move, "sfRectangleShape_move");
   pragma Import (C, rotate, "sfRectangleShape_rotate");
   pragma Import (C, scale, "sfRectangleShape_scale");
   pragma Import (C, getTransform, "sfRectangleShape_getTransform");
   pragma Import (C, getInverseTransform, "sfRectangleShape_getInverseTransform");
   pragma Import (C, setTexture, "sfRectangleShape_setTexture");
   pragma Import (C, setTextureRect, "sfRectangleShape_setTextureRect");
   pragma Import (C, setFillColor, "sfRectangleShape_setFillColor");
   pragma Import (C, setOutlineColor, "sfRectangleShape_setOutlineColor");
   pragma Import (C, setOutlineThickness, "sfRectangleShape_setOutlineThickness");
   pragma Import (C, getTexture, "sfRectangleShape_getTexture");
   pragma Import (C, getTextureRect, "sfRectangleShape_getTextureRect");
   pragma Import (C, getFillColor, "sfRectangleShape_getFillColor");
   pragma Import (C, getOutlineColor, "sfRectangleShape_getOutlineColor");
   pragma Import (C, getOutlineThickness, "sfRectangleShape_getOutlineThickness");
   pragma Import (C, getPointCount, "sfRectangleShape_getPointCount");
   pragma Import (C, getPoint, "sfRectangleShape_getPoint");
   pragma Import (C, setSize, "sfRectangleShape_setSize");
   pragma Import (C, getSize, "sfRectangleShape_getSize");
   pragma Import (C, getLocalBounds, "sfRectangleShape_getLocalBounds");
   pragma Import (C, getGlobalBounds, "sfRectangleShape_getGlobalBounds");

end Sf.Graphics.RectangleShape;
