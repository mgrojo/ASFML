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
with Sf.Graphics.Types;

package Sf.Graphics.Shape is
   use Sf.Config;
   use Sf.Graphics.BlendMode;
   use Sf.Graphics.Color;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new shape
   -- ///
   -- /// \return A new sfShape object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_Create return sfShape_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new shape made of a single line
   -- ///
   -- /// \param P1X, P1Y :   Position of the first point
   -- /// \param P2X, P2Y :   Position second point
   -- /// \param Thickness :  Line thickness
   -- /// \param Col :        Color used to draw the line
   -- /// \param Outline :    Outline width
   -- /// \param OutlineCol : Color used to draw the outline
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_CreateLine
     (P1X        : Float;
      P1Y        : Float;
      P2X        : Float;
      P2Y        : Float;
      Thickness  : Float;
      Col        : sfColor;
      Outline    : Float;
      OutlineCol : sfColor)
      return       sfShape_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new shape made of a single rectangle
   -- ///
   -- /// \param P1X, P1Y :   Position of the first point
   -- /// \param P2X, P2Y :   Position second point
   -- /// \param Col :        Color used to fill the rectangle
   -- /// \param Outline :    Outline width
   -- /// \param OutlineCol : Color used to draw the outline
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_CreateRectangle
     (P1X        : Float;
      P1Y        : Float;
      P2X        : Float;
      P2Y        : Float;
      Col        : sfColor;
      Outline    : Float;
      OutlineCol : sfColor)
      return       sfShape_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new shape made of a single circle
   -- ///
   -- /// \param X, Y :       Position of the center
   -- /// \param Radius :     Radius
   -- /// \param Col :        Color used to fill the circle
   -- /// \param Outline :    Outline width
   -- /// \param OutlineCol : Color used to draw the outline
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_CreateCircle
     (X          : Float;
      Y          : Float;
      Radius     : Float;
      Col        : sfColor;
      Outline    : Float;
      OutlineCol : sfColor)
      return       sfShape_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing Shape
   -- ///
   -- /// \param Shape : Shape to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_Destroy (Shape : sfShape_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the X position of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param X :     New X coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetX (Shape : sfShape_Ptr; X : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the Y position of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Y :     New Y coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetY (Shape : sfShape_Ptr; Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the position of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param X :     New X coordinate
   -- /// \param Y :     New Y coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetPosition (Shape : sfShape_Ptr; X : Float; Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the horizontal scale of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Scale : New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetScaleX (Shape : sfShape_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the vertical scale of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Scale : New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetScaleY (Shape : sfShape_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the scale of a shape
   -- ///
   -- /// \param Shape :  Shape to modify
   -- /// \param ScaleX : New horizontal scale (must be strictly positive)
   -- /// \param ScaleY : New vertical scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetScale (Shape : sfShape_Ptr; ScaleX : Float; ScaleY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the orientation of a shape
   -- ///
   -- /// \param Shape :    Shape to modify
   -- /// \param Rotation : Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetRotation (Shape : sfShape_Ptr; Rotation : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the center of a shape, in coordinates relative to
   -- /// its left-top corner
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param X :     X coordinate of the center
   -- /// \param Y :     Y coordinate of the center
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetCenter (Shape : sfShape_Ptr; X : Float; Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the color of a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Color : New color
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetColor (Shape : sfShape_Ptr; Color : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the blending mode for a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Mode :  New blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetBlendMode (Shape : sfShape_Ptr; Mode : sfBlendMode);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current X position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetX (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Y position of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current Y position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetY (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the horizontal scale of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current X scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetScaleX (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the vertical scale of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current Y scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetScaleY (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the orientation of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetRotation (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of the center a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current X center
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetCenterX (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Y position of the center a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current Y center
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetCenterY (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the color of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current color
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetColor (Shape : sfShape_Ptr) return sfColor;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current blending mode of a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Current blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetBlendMode (Shape : sfShape_Ptr) return sfBlendMode;

   -- ////////////////////////////////////////////////////////////
   -- /// Move a shape
   -- ///
   -- /// \param Shape :   Shape to modify
   -- /// \param OffsetX : Offset on the X axis
   -- /// \param OffsetY : Offset on the Y axis
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_Move (Shape : sfShape_Ptr; OffsetX : Float; OffsetY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Scale a shape
   -- ///
   -- /// \param Shape :   Shape to modify
   -- /// \param FactorX : Horizontal scaling factor (must be strictly positive)
   -- /// \param FactorY : Vertical scaling factor (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_Scale (Shape : sfShape_Ptr; FactorX : Float; FactorY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Rotate a shape
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Angle : Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_Rotate (Shape : sfShape_Ptr; Angle : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from global coordinates into the shape's local coordinates
   -- /// (ie it applies the inverse of object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param Shape :  Shape object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_TransformToLocal
     (Shape  : sfShape_Ptr;
      PointX : Float;
      PointY : Float;
      X      : access Float;
      Y      : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from the shape's local coordinates into global coordinates
   -- /// (ie it applies the object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param Shape :  Shape object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_TransformToGlobal
     (Shape  : sfShape_Ptr;
      PointX : Float;
      PointY : Float;
      X      : access Float;
      Y      : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Add a point to a shape
   -- ///
   -- /// \param Shape :      Shape to modify
   -- /// \param X, Y :       Position of the point
   -- /// \param Col :        Color of the point
   -- /// \param OutlineCol : Outline color of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_AddPoint
     (Shape      : sfShape_Ptr;
      X          : Float;
      Y          : Float;
      Col        : sfColor;
      OutlineCol : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Enable or disable filling a shape.
   -- /// Fill is enabled by default
   -- ///
   -- /// \param Enable : True to enable, false to disable
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_EnableFill (Shape : sfShape_Ptr; Enable : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Enable or disable drawing a shape outline.
   -- /// Outline is enabled by default
   -- ///
   -- /// \param Shape :  Shape to modify
   -- /// \param Enable : True to enable, false to disable
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_EnableOutline (Shape : sfShape_Ptr; Enable : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the width of a shape outline
   -- ///
   -- /// \param Shape : Shape to modify
   -- /// \param Width : New width
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetOutlineWidth (Shape : sfShape_Ptr; Width : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the width of a shape outline
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \param return Current outline width
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetOutlineWidth (Shape : sfShape_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the number of points composing a shape
   -- ///
   -- /// \param Shape : Shape to read
   -- ///
   -- /// \return Total number of points
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetNbPoints (Shape : sfShape_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a the position of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- /// \param X :     Variable to fill with the X coordinate of the point
   -- /// \param Y :     Variable to fill with the Y coordinate of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_GetPointPosition
     (Shape : sfShape_Ptr;
      Index : sfUint32;
      X     : access Float;
      Y     : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get a the color of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- ///
   -- /// \return Color of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetPointColor (Shape : sfShape_Ptr; Index : sfUint32) return sfColor;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a the outline color of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- ///
   -- /// \return Outline color of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfShape_GetPointOutlineColor (Shape : sfShape_Ptr; Index : sfUint32) return sfColor;  -- Shape.h:419

   -- ////////////////////////////////////////////////////////////
   -- /// Set a the position of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- /// \param X :     X coordinate of the point
   -- /// \param Y :     Y coordinate of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetPointPosition
     (Shape : sfShape_Ptr;
      Index : sfUint32;
      X     : Float;
      Y     : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set a the color of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- /// \param Color : Color of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetPointColor (Shape : sfShape_Ptr; Index : sfUint32; Color : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Set a the outline color of a shape's point
   -- ///
   -- /// \param Shape : Shape to read
   -- /// \param Index : Index of the point to get
   -- /// \param Color : Outline color of the point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfShape_SetPointOutlineColor (Shape : sfShape_Ptr; Index : sfUint32; Color : sfColor);

private

   pragma Import (C, sfShape_Create, "sfShape_Create");
   pragma Import (C, sfShape_CreateLine, "sfShape_CreateLine");
   pragma Import (C, sfShape_CreateRectangle, "sfShape_CreateRectangle");
   pragma Import (C, sfShape_CreateCircle, "sfShape_CreateCircle");
   pragma Import (C, sfShape_Destroy, "sfShape_Destroy");
   pragma Import (C, sfShape_SetX, "sfShape_SetX");
   pragma Import (C, sfShape_SetY, "sfShape_SetY");
   pragma Import (C, sfShape_SetPosition, "sfShape_SetPosition");
   pragma Import (C, sfShape_SetScaleX, "sfShape_SetScaleX");
   pragma Import (C, sfShape_SetScaleY, "sfShape_SetScaleY");
   pragma Import (C, sfShape_SetScale, "sfShape_SetScale");
   pragma Import (C, sfShape_SetRotation, "sfShape_SetRotation");
   pragma Import (C, sfShape_SetCenter, "sfShape_SetCenter");
   pragma Import (C, sfShape_SetColor, "sfShape_SetColor");
   pragma Import (C, sfShape_SetBlendMode, "sfShape_SetBlendMode");
   pragma Import (C, sfShape_GetX, "sfShape_GetX");
   pragma Import (C, sfShape_GetY, "sfShape_GetY");
   pragma Import (C, sfShape_GetScaleX, "sfShape_GetScaleX");
   pragma Import (C, sfShape_GetScaleY, "sfShape_GetScaleY");
   pragma Import (C, sfShape_GetRotation, "sfShape_GetRotation");
   pragma Import (C, sfShape_GetCenterX, "sfShape_GetCenterX");
   pragma Import (C, sfShape_GetCenterY, "sfShape_GetCenterY");
   pragma Import (C, sfShape_GetColor, "sfShape_GetColor");
   pragma Import (C, sfShape_GetBlendMode, "sfShape_GetBlendMode");
   pragma Import (C, sfShape_Move, "sfShape_Move");
   pragma Import (C, sfShape_Scale, "sfShape_Scale");
   pragma Import (C, sfShape_Rotate, "sfShape_Rotate");
   pragma Import (C, sfShape_TransformToLocal, "sfShape_TransformToLocal");
   pragma Import (C, sfShape_TransformToGlobal, "sfShape_TransformToGlobal");
   pragma Import (C, sfShape_AddPoint, "sfShape_AddPoint");
   pragma Import (C, sfShape_EnableFill, "sfShape_EnableFill");
   pragma Import (C, sfShape_EnableOutline, "sfShape_EnableOutline");
   pragma Import (C, sfShape_SetOutlineWidth, "sfShape_SetOutlineWidth");
   pragma Import (C, sfShape_GetOutlineWidth, "sfShape_GetOutlineWidth");
   pragma Import (C, sfShape_GetNbPoints, "sfShape_GetNbPoints");
   pragma Import (C, sfShape_GetPointPosition, "sfShape_GetPointPosition");
   pragma Import (C, sfShape_GetPointColor, "sfShape_GetPointColor");
   pragma Import (C, sfShape_GetPointOutlineColor, "sfShape_GetPointOutlineColor");
   pragma Import (C, sfShape_SetPointPosition, "sfShape_SetPointPosition");
   pragma Import (C, sfShape_SetPointColor, "sfShape_SetPointColor");
   pragma Import (C, sfShape_SetPointOutlineColor, "sfShape_SetPointOutlineColor");

end Sf.Graphics.Shape;
