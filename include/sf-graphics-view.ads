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

with Sf.Graphics.Rect;
with Sf.System.Vector2;

package Sf.Graphics.View is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a default view
   --/
   --/ This function creates a default view of (0, 0, 1000, 1000)
   --/
   --/ @return A new sfView object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a view from a rectangle
   --/
   --/ @param rectangle Rectangle defining the zone to display
   --/
   --/ @return A new sfView object
   --/
   --//////////////////////////////////////////////////////////
   function createFromRect (rectangle : Sf.Graphics.Rect.sfFloatRect) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing view
   --/
   --/ @param view View to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (view : sfView_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing view
   --/
   --/ @param view View to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (view : sfView_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the center of a view
   --/
   --/ @param view   View object
   --/ @param center New center
   --/
   --//////////////////////////////////////////////////////////
   procedure setCenter (view : sfView_Ptr; center : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the size of a view
   --/
   --/ @param view View object
   --/ @param size New size of the view
   --/
   --//////////////////////////////////////////////////////////
   procedure setSize (view : sfView_Ptr; size : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a view
   --/
   --/ The default rotation of a view is 0 degree.
   --/
   --/ @param view  View object
   --/ @param angle New angle, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure setRotation (view : sfView_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the target viewport of a view
   --/
   --/ The viewport is the rectangle into which the contents of the
   --/ view are displayed, expressed as a factor (between 0 and 1)
   --/ of the size of the render target to which the view is applied.
   --/ For example, a view which takes the left side of the target would
   --/ be defined by a rect of (0, 0, 0.5, 1).
   --/ By default, a view has a viewport which covers the entire target.
   --/
   --/ @param view     View object
   --/ @param viewport New viewport rectangle
   --/
   --//////////////////////////////////////////////////////////
   procedure setViewport (view : sfView_Ptr; viewport : Sf.Graphics.Rect.sfFloatRect);

   --//////////////////////////////////////////////////////////
   --/ @brief Reset a view to the given rectangle
   --/
   --/ Note that this function resets the rotation angle to 0.
   --/
   --/ @param view      View object
   --/ @param rectangle Rectangle defining the zone to display
   --/
   --//////////////////////////////////////////////////////////
   procedure reset (view : sfView_Ptr; rectangle : Sf.Graphics.Rect.sfFloatRect);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the center of a view
   --/
   --/ @param view View object
   --/
   --/ @return Center of the view
   --/
   --//////////////////////////////////////////////////////////
   function getCenter (view : sfView_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of a view
   --/
   --/ @param view View object
   --/
   --/ @return Size of the view
   --/
   --//////////////////////////////////////////////////////////
   function getSize (view : sfView_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current orientation of a view
   --/
   --/ @param view View object
   --/
   --/ @return Rotation angle of the view, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function getRotation (view : sfView_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the target viewport rectangle of a view
   --/
   --/ @param view View object
   --/
   --/ @return Viewport rectangle, expressed as a factor of the target size
   --/
   --//////////////////////////////////////////////////////////
   function getViewport (view : sfView_Ptr) return Sf.Graphics.Rect.sfFloatRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a view relatively to its current position
   --/
   --/ @param view   View object
   --/ @param offset Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure move (view : sfView_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a view relatively to its current orientation
   --/
   --/ @param view  View object
   --/ @param angle Angle to rotate, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure rotate (view : sfView_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Resize a view rectangle relatively to its current size
   --/
   --/ Resizing the view simulates a zoom, as the zone displayed on
   --/ screen grows or shrinks.
   --/ @a factor is a multiplier:
   --/ @li 1 keeps the size unchanged
   --/ @li > 1 makes the view bigger (objects appear smaller)
   --/ @li < 1 makes the view smaller (objects appear bigger)
   --/
   --/ @param view   View object
   --/ @param factor Zoom factor to apply
   --/
   --//////////////////////////////////////////////////////////
   procedure zoom (view : sfView_Ptr; factor : float);

private

   pragma Import (C, create, "sfView_create");
   pragma Import (C, createFromRect, "sfView_createFromRect");
   pragma Import (C, copy, "sfView_copy");
   pragma Import (C, destroy, "sfView_destroy");
   pragma Import (C, setCenter, "sfView_setCenter");
   pragma Import (C, setSize, "sfView_setSize");
   pragma Import (C, setRotation, "sfView_setRotation");
   pragma Import (C, setViewport, "sfView_setViewport");
   pragma Import (C, reset, "sfView_reset");
   pragma Import (C, getCenter, "sfView_getCenter");
   pragma Import (C, getSize, "sfView_getSize");
   pragma Import (C, getRotation, "sfView_getRotation");
   pragma Import (C, getViewport, "sfView_getViewport");
   pragma Import (C, move, "sfView_move");
   pragma Import (C, rotate, "sfView_rotate");
   pragma Import (C, zoom, "sfView_zoom");

end Sf.Graphics.View;
