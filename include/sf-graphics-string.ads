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

package Sf.Graphics.String is
   use Sf.Config;
   use Sf.Graphics.BlendMode;
   use Sf.Graphics.Color;
   use Sf.Graphics.Rect;
   use Sf.Graphics.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// sfString styles
   -- ////////////////////////////////////////////////////////////
   subtype sfStringStyle is sfUint32;
   sfStringRegular    : constant sfStringStyle := 0;
   sfStringBold       : constant sfStringStyle := 1;
   sfStringItalic     : constant sfStringStyle := 2;
   sfStringUnderlined : constant sfStringStyle := 4;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new string
   -- ///
   -- /// \return A new sfString object, or NULL if it failed
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_Create return sfString_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing string
   -- ///
   -- /// \param String : String to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_Destroy (Str : sfString_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the X position of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param X :      New X coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetX (Str : sfString_Ptr; X : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the Y position of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Y :      New Y coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetY (Str : sfString_Ptr; Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the position of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Left :   New left coordinate
   -- /// \param Top :    New top coordinate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetPosition (Str : sfString_Ptr; Left, Top : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the horizontal scale of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Scale :  New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetScaleX (Str : sfString_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the vertical scale of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Scale :  New scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetScaleY (Str : sfString_Ptr; Scale : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the scale of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param ScaleX : New horizontal scale (must be strictly positive)
   -- /// \param ScaleY : New vertical scale (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetScale (Str : sfString_Ptr; ScaleX, ScaleY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the orientation of a string
   -- ///
   -- /// \param String :   String to modify
   -- /// \param Rotation : Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetRotation (Str : sfString_Ptr; Rotation : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the center of a string, in coordinates
   -- /// relative to its left-top corner
   -- ///
   -- /// \param String : String to modify
   -- /// \param X :      X coordinate of the center
   -- /// \param Y :      Y coordinate of the center
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetCenter (Str : sfString_Ptr; X, Y : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the color of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Color :  New color
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetColor (Str : sfString_Ptr; Color : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the blending mode for a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Mode :   New blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetBlendMode (Str : sfString_Ptr; Mode : sfBlendMode);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current X position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetX (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the top Y of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current Y position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetY (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the horizontal scale of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current X scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetScaleX (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the vertical scale of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current Y scale factor (always positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetScaleY (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the orientation of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetRotation (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the X position of the center a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current X center position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetCenterX (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the top Y of the center of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current Y center position
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetCenterY (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the color of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current color
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetColor (Str : sfString_Ptr) return sfColor;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current blending mode of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current blending mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetBlendMode (Str : sfString_Ptr) return sfBlendMode;

   -- ////////////////////////////////////////////////////////////
   -- /// Move a string
   -- ///
   -- /// \param String :  String to modify
   -- /// \param OffsetX : Offset on the X axis
   -- /// \param OffsetY : Offset on the Y axis
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_Move (Str : sfString_Ptr; OffsetX, OffsetY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Scale a string
   -- ///
   -- /// \param String :  String to modify
   -- /// \param FactorX : Horizontal scaling factor (must be strictly positive)
   -- /// \param FactorY : Vertical scaling factor (must be strictly positive)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_Scale (Str : sfString_Ptr; FactorX, FactorY : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Rotate a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Angle :  Angle of rotation, in degrees
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_Rotate (Str : sfString_Ptr; Angle : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from global coordinates into the string's local coordinates
   -- /// (ie it applies the inverse of object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param String : String object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_TransformToLocal (Str : sfString_Ptr; PointX, PointY : Float; X, Y : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Transform a point from the string's local coordinates into global coordinates
   -- /// (ie it applies the object's center, translation, rotation and scale to the point)
   -- ///
   -- /// \param String : String object
   -- /// \param PointX : X coordinate of the point to transform
   -- /// \param PointY : Y coordinate of the point to transform
   -- /// \param X :      Value to fill with the X coordinate of the converted point
   -- /// \param Y :      Value to fill with the y coordinate of the converted point
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_TransformToGlobal (Str : sfString_Ptr; PointX, PointY : Float; X, Y : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the text of a string (from a multibyte string)
   -- ///
   -- /// \param String : String to modify
   -- /// \param Text :   New text
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetText (Str : sfString_Ptr; Text : Standard.String);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the text of a string (from a unicode string)
   -- ///
   -- /// \param String : String to modify
   -- /// \param Text :   New text
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetUnicodeText (Str : sfString_Ptr; Text : access constant sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the font of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Font :   Font to use
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetFont (Str : sfString_Ptr; Font : sfFont_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the size of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Size :   New size, in pixels
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetSize (Str : sfString_Ptr; Size : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Set the style of a string
   -- ///
   -- /// \param String : String to modify
   -- /// \param Size :   New style (see sfStringStyle enum)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_SetStyle (Str : sfString_Ptr; Style : sfStringStyle);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the text of a string (returns a unicode string)
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Text as UTF-32
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetUnicodeText (Str : sfString_Ptr) return access sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the text of a string (returns an ANSI string)
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Text an a locale-dependant ANSI string
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetText (Str : sfString_Ptr) return Standard.String;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the font used by a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Pointer to the font
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetFont (Str : sfString_Ptr) return sfFont_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the size of the characters of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Size of the characters
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetSize (Str : sfString_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the style of a string
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Current string style (see sfStringStyle enum)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetStyle (Str : sfString_Ptr) return sfStringStyle;

   -- ////////////////////////////////////////////////////////////
   -- /// Return the visual position of the Index-th character of the string,
   -- /// in coordinates relative to the string
   -- /// (note : translation, center, rotation and scale are not applied)
   -- ///
   -- /// \param String : String to read
   -- /// \param Index :  Index of the character
   -- /// \param X :      Value to fill with the X coordinate of the position
   -- /// \param Y :      Value to fill with the y coordinate of the position
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfString_GetCharacterPos (Str : sfString_Ptr; Index : sfSize_t; X, Y : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the bounding rectangle of a string on screen
   -- ///
   -- /// \param String : String to read
   -- ///
   -- /// \return Rectangle contaning the string in screen coordinates
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfString_GetRect (Str : sfString_Ptr) return sfFloatRect;

private

   pragma Import (C, sfString_Create, "sfString_Create");
   pragma Import (C, sfString_Destroy, "sfString_Destroy");
   pragma Import (C, sfString_SetX, "sfString_SetX");
   pragma Import (C, sfString_SetY, "sfString_SetY");
   pragma Import (C, sfString_SetPosition, "sfString_SetPosition");
   pragma Import (C, sfString_SetScaleX, "sfString_SetScaleX");
   pragma Import (C, sfString_SetScaleY, "sfString_SetScaleY");
   pragma Import (C, sfString_SetScale, "sfString_SetScale");
   pragma Import (C, sfString_SetRotation, "sfString_SetRotation");
   pragma Import (C, sfString_SetCenter, "sfString_SetCenter");
   pragma Import (C, sfString_SetColor, "sfString_SetColor");
   pragma Import (C, sfString_SetBlendMode, "sfString_SetBlendMode");
   pragma Import (C, sfString_GetX, "sfString_GetX");
   pragma Import (C, sfString_GetY, "sfString_GetY");
   pragma Import (C, sfString_GetScaleX, "sfString_GetScaleX");
   pragma Import (C, sfString_GetScaleY, "sfString_GetScaleY");
   pragma Import (C, sfString_GetRotation, "sfString_GetRotation");
   pragma Import (C, sfString_GetCenterX, "sfString_GetCenterX");
   pragma Import (C, sfString_GetCenterY, "sfString_GetCenterY");
   pragma Import (C, sfString_GetColor, "sfString_GetColor");
   pragma Import (C, sfString_GetBlendMode, "sfString_GetBlendMode");
   pragma Import (C, sfString_Move, "sfString_Move");
   pragma Import (C, sfString_Scale, "sfString_Scale");
   pragma Import (C, sfString_Rotate, "sfString_Rotate");
   pragma Import (C, sfString_TransformToLocal, "sfString_TransformToLocal");
   pragma Import (C, sfString_TransformToGlobal, "sfString_TransformToGlobal");
   pragma Import (C, sfString_SetUnicodeText, "sfString_SetUnicodeText");
   pragma Import (C, sfString_SetFont, "sfString_SetFont");
   pragma Import (C, sfString_SetSize, "sfString_SetSize");
   pragma Import (C, sfString_SetStyle, "sfString_SetStyle");
   pragma Import (C, sfString_GetUnicodeText, "sfString_GetUnicodeText");
   pragma Import (C, sfString_GetFont, "sfString_GetFont");
   pragma Import (C, sfString_GetSize, "sfString_GetSize");
   pragma Import (C, sfString_GetStyle, "sfString_GetStyle");
   pragma Import (C, sfString_GetCharacterPos, "sfString_GetCharacterPos");
   pragma Import (C, sfString_GetRect, "sfString_GetRect");

end Sf.Graphics.String;
