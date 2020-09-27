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
with Sf.Graphics.Rect;
with Sf.Graphics.Types;

package Sf.Graphics.View is
   use Sf.Graphics.Rect;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a default view (1000x1000)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_Create return sfView_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a view from a rectangle
   -- ///
   -- /// \param Rect : Rectangle defining the bounds of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_CreateFromRect (Rect : sfFloatRect) return sfView_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing view
   -- ///
   -- /// \param View : View to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_Destroy (View : sfView_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the center of a view
   -- ///
   -- /// \param View : View to modify
   -- /// \param X :    X coordinate of the new center
   -- /// \param Y :    Y coordinate of the new center
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_SetCenter (View : sfView_Ptr; X, Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the half-size of a view
   -- ///
   -- /// \param View :       View to modify
   -- /// \param HalfWidth :  New half-width
   -- /// \param HalfHeight : New half-height
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_SetHalfSize (View : sfView_Ptr; HalfWidth, HalfHeight : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Rebuild a view from a rectangle
   -- ///
   -- /// \param View :     View to modify
   -- /// \param ViewRect : Rectangle defining the position and size of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_SetFromRect (View : sfView_Ptr; ViewRect : sfFloatRect);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X coordinate of the center of a view
   -- ///
   -- /// \param View : View to read
   -- ///
   -- /// \return X coordinate of the center of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_GetCenterX (View : sfView_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Y coordinate of the center of a view
   -- ///
   -- /// \param View : View to read
   -- ///
   -- /// \return Y coordinate of the center of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_GetCenterY (View : sfView_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the half-width of the view
   -- ///
   -- /// \param View : View to read
   -- ///
   -- /// \return Half-width of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_GetHalfSizeX (View : sfView_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the half-height of the view
   -- ///
   -- /// \param View : View to read
   -- ///
   -- /// \return Half-height of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_GetHalfSizeY (View : sfView_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the bounding rectangle of a view
   -- ///
   -- /// \param View : View to read
   -- ///
   -- /// \return Bounding rectangle of the view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfView_GetRect (View : sfView_Ptr) return sfFloatRect;

   -- ////////////////////////////////////////////////////////////
   -- /// Move a view
   -- ///
   -- /// \param View :    View to move
   -- /// \param OffsetX : Offset to move the view, on X axis
   -- /// \param OffsetY : Offset to move the view, on Y axis
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_Move (View : sfView_Ptr; OffsetX, OffsetY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Resize a view rectangle to simulate a zoom / unzoom effect
   -- ///
   -- /// \param View :   View to zoom
   -- /// \param Factor : Zoom factor to apply, relative to the current zoom
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfView_Zoom (View : sfView_Ptr; Factor : Float);

private

   pragma Import (C, sfView_Create, "sfView_create");
   pragma Import (C, sfView_CreateFromRect, "sfView_createFromRect");
   pragma Import (C, sfView_Destroy, "sfView_destroy");
   pragma Import (C, sfView_SetCenter, "sfView_setCenter");
   pragma Import (C, sfView_SetHalfSize, "sfView_setHalfSize");
   pragma Import (C, sfView_SetFromRect, "sfView_setFromRect");
   pragma Import (C, sfView_GetCenterX, "sfView_getCenterX");
   pragma Import (C, sfView_GetCenterY, "sfView_getCenterY");
   pragma Import (C, sfView_GetHalfSizeX, "sfView_getHalfSizeX");
   pragma Import (C, sfView_GetHalfSizeY, "sfView_getHalfSizeY");
   pragma Import (C, sfView_GetRect, "sfView_getRect");
   pragma Import (C, sfView_Move, "sfView_move");
   pragma Import (C, sfView_Zoom, "sfView_zoom");

end Sf.Graphics.View;
