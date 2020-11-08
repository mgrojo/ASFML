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


with Sf.System.Vector2;
with Sf.Graphics.Transform;

with Sf.Graphics.Rect;
with Sf.Graphics.Color;

package Sf.Graphics.Sprite is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new sprite
   --/
   --/ @return A new sfSprite object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function create return sfSprite_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing sprite
   --/
   --/ @param sprite Sprite to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (sprite : sfSprite_Ptr) return sfSprite_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing sprite
   --/
   --/ @param sprite Sprite to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (sprite : sfSprite_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a sprite
   --/
   --/ This function completely overwrites the previous position.
   --/ See sfSprite_move to apply an offset based on the previous position instead.
   --/ The default position of a sprite Sprite object is (0, 0).
   --/
   --/ @param sprite   Sprite object
   --/ @param position New position
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (sprite : sfSprite_Ptr; position : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a sprite
   --/
   --/ This function completely overwrites the previous rotation.
   --/ See sfSprite_rotate to add an angle based on the previous rotation instead.
   --/ The default rotation of a sprite Sprite object is 0.
   --/
   --/ @param sprite Sprite object
   --/ @param angle  New rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure setRotation (sprite : sfSprite_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the scale factors of a sprite
   --/
   --/ This function completely overwrites the previous scale.
   --/ See sfSprite_scale to add a factor based on the previous scale instead.
   --/ The default scale of a sprite Sprite object is (1, 1).
   --/
   --/ @param sprite Sprite object
   --/ @param scale  New scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure setScale (sprite : sfSprite_Ptr; scale : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the local origin of a sprite
   --/
   --/ The origin of an object defines the center point for
   --/ all transformations (position, scale, rotation).
   --/ The coordinates of this point must be relative to the
   --/ top-left corner of the object, and ignore all
   --/ transformations (position, scale, rotation).
   --/ The default origin of a sprite Sprite object is (0, 0).
   --/
   --/ @param sprite Sprite object
   --/ @param origin New origin
   --/
   --//////////////////////////////////////////////////////////
   procedure setOrigin (sprite : sfSprite_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (sprite : sfSprite_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the orientation of a sprite
   --/
   --/ The rotation is always in the range [0, 360].
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Current rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function getRotation (sprite : sfSprite_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function getScale (sprite : sfSprite_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function getOrigin (sprite : sfSprite_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a sprite by a given offset
   --/
   --/ This function adds to the current position of the object,
   --/ unlike sfSprite_setPosition which overwrites it.
   --/
   --/ @param sprite Sprite object
   --/ @param offset Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure move (sprite : sfSprite_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a sprite
   --/
   --/ This function adds to the current rotation of the object,
   --/ unlike sfSprite_setRotation which overwrites it.
   --/
   --/ @param sprite Sprite object
   --/ @param angle  Angle of rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure rotate (sprite : sfSprite_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Scale a sprite
   --/
   --/ This function multiplies the current scale of the object,
   --/ unlike sfSprite_setScale which overwrites it.
   --/
   --/ @param sprite  Sprite object
   --/ @param factors Scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure scale (sprite : sfSprite_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function getTransform (sprite : sfSprite_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function getInverseTransform (sprite : sfSprite_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the source texture of a sprite
   --/
   --/ The @a texture argument refers to a texture that must
   --/ exist as long as the sprite uses it. Indeed, the sprite
   --/ doesn't store its own copy of the texture, but rather keeps
   --/ a pointer to the one that you passed to this function.
   --/ If the source texture is destroyed and the sprite tries to
   --/ use it, the behaviour is undefined.
   --/ If @a resetRect is true, the TextureRect property of
   --/ the sprite is automatically adjusted to the size of the new
   --/ texture. If it is false, the texture rect is left unchanged.
   --/
   --/ @param sprite    Sprite object
   --/ @param texture   New texture
   --/ @param resetRect Should the texture rect be reset to the size of the new texture?
   --/
   --//////////////////////////////////////////////////////////
   procedure setTexture
     (sprite : sfSprite_Ptr;
      texture : sfTexture_Ptr;
      resetRect : sfBool := sfFalse);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the sub-rectangle of the texture that a sprite will display
   --/
   --/ The texture rect is useful when you don't want to display
   --/ the whole texture, but rather a part of it.
   --/ By default, the texture rect covers the entire texture.
   --/
   --/ @param sprite    Sprite object
   --/ @param rectangle Rectangle defining the region of the texture to display
   --/
   --//////////////////////////////////////////////////////////
   procedure setTextureRect (sprite : sfSprite_Ptr; rectangle : Sf.Graphics.Rect.sfIntRect);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the global color of a sprite
   --/
   --/ This color is modulated (multiplied) with the sprite's
   --/ texture. It can be used to colorize the sprite, or change
   --/ its global opacity.
   --/ By default, the sprite's color is opaque white.
   --/
   --/ @param sprite Sprite object
   --/ @param color  New color of the sprite
   --/
   --//////////////////////////////////////////////////////////
   procedure setColor (sprite : sfSprite_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the source texture of a sprite
   --/
   --/ If the sprite has no source texture, a NULL pointer is returned.
   --/ The returned pointer is const, which means that you can't
   --/ modify the texture when you retrieve it with this function.
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Pointer to the sprite's texture
   --/
   --//////////////////////////////////////////////////////////
   function getTexture (sprite : sfSprite_Ptr) return sfTexture_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Get the sub-rectangle of the texture displayed by a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Texture rectangle of the sprite
   --/
   --//////////////////////////////////////////////////////////
   function getTextureRect (sprite : sfSprite_Ptr) return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the global color of a sprite
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Global color of the sprite
   --/
   --//////////////////////////////////////////////////////////
   function getColor (sprite : sfSprite_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local bounding rectangle of a sprite
   --/
   --/ The returned rectangle is in local coordinates, which means
   --/ that it ignores the transformations (translation, rotation,
   --/ scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ entity in the entity's coordinate system.
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Local bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function getLocalBounds (sprite : sfSprite_Ptr) return Sf.Graphics.Rect.sfFloatRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the global bounding rectangle of a sprite
   --/
   --/ The returned rectangle is in global coordinates, which means
   --/ that it takes in account the transformations (translation,
   --/ rotation, scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ sprite in the global 2D world's coordinate system.
   --/
   --/ @param sprite Sprite object
   --/
   --/ @return Global bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function getGlobalBounds (sprite : sfSprite_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, create, "sfSprite_create");
   pragma Import (C, copy, "sfSprite_copy");
   pragma Import (C, destroy, "sfSprite_destroy");
   pragma Import (C, setPosition, "sfSprite_setPosition");
   pragma Import (C, setRotation, "sfSprite_setRotation");
   pragma Import (C, setScale, "sfSprite_setScale");
   pragma Import (C, setOrigin, "sfSprite_setOrigin");
   pragma Import (C, getPosition, "sfSprite_getPosition");
   pragma Import (C, getRotation, "sfSprite_getRotation");
   pragma Import (C, getScale, "sfSprite_getScale");
   pragma Import (C, getOrigin, "sfSprite_getOrigin");
   pragma Import (C, move, "sfSprite_move");
   pragma Import (C, rotate, "sfSprite_rotate");
   pragma Import (C, scale, "sfSprite_scale");
   pragma Import (C, getTransform, "sfSprite_getTransform");
   pragma Import (C, getInverseTransform, "sfSprite_getInverseTransform");
   pragma Import (C, setTexture, "sfSprite_setTexture");
   pragma Import (C, setTextureRect, "sfSprite_setTextureRect");
   pragma Import (C, setColor, "sfSprite_setColor");
   pragma Import (C, getTexture, "sfSprite_getTexture");
   pragma Import (C, getTextureRect, "sfSprite_getTextureRect");
   pragma Import (C, getColor, "sfSprite_getColor");
   pragma Import (C, getLocalBounds, "sfSprite_getLocalBounds");
   pragma Import (C, getGlobalBounds, "sfSprite_getGlobalBounds");

end Sf.Graphics.Sprite;
