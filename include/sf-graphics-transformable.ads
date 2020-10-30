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

with Interfaces.C; use Interfaces.C;
with System;
with Sf.System.Vector2;
with Sf.Graphics.Transform;
with Sf.Graphics.Types;

package Sf.Graphics.Transformable is
   use Types;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new transformable
   --/
   --/ @return A new sfTransformable object
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_create return sfTransformable_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing transformable
   --/
   --/ @param transformable Transformable to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_copy (transformable : sfTransformable_Ptr) return sfTransformable_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing transformable
   --/
   --/ @param transformable Transformable to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_destroy (transformable : sfTransformable_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a transformable
   --/
   --/ This function completely overwrites the previous position.
   --/ See sfTransformable_move to apply an offset based on the previous position instead.
   --/ The default position of a transformable Transformable object is (0, 0).
   --/
   --/ @param transformable Transformable object
   --/ @param position      New position
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_setPosition (transformable : sfTransformable_Ptr; position : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a transformable
   --/
   --/ This function completely overwrites the previous rotation.
   --/ See sfTransformable_rotate to add an angle based on the previous rotation instead.
   --/ The default rotation of a transformable Transformable object is 0.
   --/
   --/ @param transformable Transformable object
   --/ @param angle         New rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_setRotation (transformable : sfTransformable_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the scale factors of a transformable
   --/
   --/ This function completely overwrites the previous scale.
   --/ See sfTransformable_scale to add a factor based on the previous scale instead.
   --/ The default scale of a transformable Transformable object is (1, 1).
   --/
   --/ @param transformable Transformable object
   --/ @param scale         New scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_setScale (transformable : sfTransformable_Ptr; scale : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the local origin of a transformable
   --/
   --/ The origin of an object defines the center point for
   --/ all transformations (position, scale, rotation).
   --/ The coordinates of this point must be relative to the
   --/ top-left corner of the object, and ignore all
   --/ transformations (position, scale, rotation).
   --/ The default origin of a transformable Transformable object is (0, 0).
   --/
   --/ @param transformable Transformable object
   --/ @param origin        New origin
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_setOrigin (transformable : sfTransformable_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a transformable
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getPosition (transformable : sfTransformable_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the orientation of a transformable
   --/
   --/ The rotation is always in the range [0, 360].
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Current rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getRotation (transformable : sfTransformable_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a transformable
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getScale (transformable : sfTransformable_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a transformable
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getOrigin (transformable : sfTransformable_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a transformable by a given offset
   --/
   --/ This function adds to the current position of the object,
   --/ unlike sfTransformable_setPosition which overwrites it.
   --/
   --/ @param transformable Transformable object
   --/ @param offset        Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_move (transformable : sfTransformable_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a transformable
   --/
   --/ This function adds to the current rotation of the object,
   --/ unlike sfTransformable_setRotation which overwrites it.
   --/
   --/ @param transformable Transformable object
   --/ @param angle         Angle of rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_rotate (transformable : sfTransformable_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Scale a transformable
   --/
   --/ This function multiplies the current scale of the object,
   --/ unlike sfTransformable_setScale which overwrites it.
   --/
   --/ @param transformable Transformable object
   --/ @param factors       Scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTransformable_scale (transformable : sfTransformable_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a transformable
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getTransform (transformable : sfTransformable_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a transformable
   --/
   --/ @param transformable Transformable object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function sfTransformable_getInverseTransform (transformable : sfTransformable_Ptr) return Sf.Graphics.Transform.sfTransform;

private

   pragma Import (C, sfTransformable_create, "sfTransformable_create");
   pragma Import (C, sfTransformable_copy, "sfTransformable_copy");
   pragma Import (C, sfTransformable_destroy, "sfTransformable_destroy");
   pragma Import (C, sfTransformable_setPosition, "sfTransformable_setPosition");
   pragma Import (C, sfTransformable_setRotation, "sfTransformable_setRotation");
   pragma Import (C, sfTransformable_setScale, "sfTransformable_setScale");
   pragma Import (C, sfTransformable_setOrigin, "sfTransformable_setOrigin");
   pragma Import (C, sfTransformable_getPosition, "sfTransformable_getPosition");
   pragma Import (C, sfTransformable_getRotation, "sfTransformable_getRotation");
   pragma Import (C, sfTransformable_getScale, "sfTransformable_getScale");
   pragma Import (C, sfTransformable_getOrigin, "sfTransformable_getOrigin");
   pragma Import (C, sfTransformable_move, "sfTransformable_move");
   pragma Import (C, sfTransformable_rotate, "sfTransformable_rotate");
   pragma Import (C, sfTransformable_scale, "sfTransformable_scale");
   pragma Import (C, sfTransformable_getTransform, "sfTransformable_getTransform");
   pragma Import (C, sfTransformable_getInverseTransform, "sfTransformable_getInverseTransform");

end Sf.Graphics.Transformable;
