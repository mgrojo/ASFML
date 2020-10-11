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


with Interfaces.C;

with Sf.System.Vector2;
with Sf.Config;
with Sf.Graphics.Transform;
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.Types;

package Sf.Graphics.Text is
   use Sf.Config;
   use Sf.Graphics.Types;
   use Sf.Graphics.Color;
   use Interfaces.C;

  --//////////////////////////////////////////////////////////
  --/ sfText styles
  --//////////////////////////////////////////////////////////
  --/< Regular characters, no style
  --/< Bold characters
  --/< Italic characters
  --/< Underlined characters
  --/< Strike through characters
   subtype sfTextStyle is unsigned;
   sfTextRegular : constant sfTextStyle := 0;
   sfTextBold : constant sfTextStyle := 1;
   sfTextItalic : constant sfTextStyle := 2;
   sfTextUnderlined : constant sfTextStyle := 4;
   sfTextStrikeThrough : constant sfTextStyle := 8;


  --//////////////////////////////////////////////////////////
  --/ \brief Create a new text
  --/
  --/ \return A new sfText object, or NULL if it failed
  --/
  --//////////////////////////////////////////////////////////
   function sfText_Create return sfText_Ptr;


  --//////////////////////////////////////////////////////////
  --/ \brief Copy an existing text
  --/
  --/ \param text Text to copy
  --/
  --/ \return Copied object
  --/
  --//////////////////////////////////////////////////////////
   function sfText_Copy (Text : sfText_Ptr) return sfText_Ptr;


  --//////////////////////////////////////////////////////////
  --/ \brief Destroy an existing text
  --/
  --/ \param text Text to delete
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_Destroy (Text : sfText_Ptr);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the position of a text
  --/
  --/ This function completely overwrites the previous position.
  --/ See sfText_move to apply an offset based on the previous position instead.
  --/ The default position of a text Text object is (0, 0).
  --/
  --/ \param text     Text object
  --/ \param position New position
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_SetPosition (Text : sfText_Ptr; Position : System.Vector2.sfVector2f);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the orientation of a text
  --/
  --/ This function completely overwrites the previous rotation.
  --/ See sfText_rotate to add an angle based on the previous rotation instead.
  --/ The default rotation of a text Text object is 0.
  --/
  --/ \param text  Text object
  --/ \param angle New rotation, in degrees
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_SetRotation (Text : sfText_Ptr; Angle : float);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the scale factors of a text
  --/
  --/ This function completely overwrites the previous scale.
  --/ See sfText_scale to add a factor based on the previous scale instead.
  --/ The default scale of a text Text object is (1, 1).
  --/
  --/ \param text  Text object
  --/ \param scale New scale factors
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_SetScale (Text : sfText_Ptr; Scale : System.Vector2.sfVector2f);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the local origin of a text
  --/
  --/ The origin of an object defines the center point for
  --/ all transformations (position, scale, rotation).
  --/ The coordinates of this point must be relative to the
  --/ top-left corner of the object, and ignore all
  --/ transformations (position, scale, rotation).
  --/ The default origin of a text object is (0, 0).
  --/
  --/ \param text   Text object
  --/ \param origin New origin
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_SetOrigin (Text : sfText_Ptr; Origin : System.Vector2.sfVector2f);


  --//////////////////////////////////////////////////////////
  --/ \brief Get the position of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Current position
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetPosition (Text : sfText_Ptr) return System.Vector2.sfVector2f;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the orientation of a text
  --/
  --/ The rotation is always in the range [0, 360].
  --/
  --/ \param text Text object
  --/
  --/ \return Current rotation, in degrees
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetRotation (Text : sfText_Ptr) return float;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the current scale of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Current scale factors
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetScale (Text : sfText_Ptr) return System.Vector2.sfVector2f;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the local origin of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Current origin
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetOrigin (Text : sfText_Ptr) return System.Vector2.sfVector2f;


  --//////////////////////////////////////////////////////////
  --/ \brief Move a text by a given offset
  --/
  --/ This function adds to the current position of the object,
  --/ unlike sfText_setPosition which overwrites it.
  --/
  --/ \param text   Text object
  --/ \param offset Offset
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_Move (Text : sfText_Ptr; Offset : System.Vector2.sfVector2f);


  --//////////////////////////////////////////////////////////
  --/ \brief Rotate a text
  --/
  --/ This function adds to the current rotation of the object,
  --/ unlike sfText_setRotation which overwrites it.
  --/
  --/ \param text  Text object
  --/ \param angle Angle of rotation, in degrees
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_Rotate (Text : sfText_Ptr; Angle : float);


  --//////////////////////////////////////////////////////////
  --/ \brief Scale a text
  --/
  --/ This function multiplies the current scale of the object,
  --/ unlike sfText_setScale which overwrites it.
  --/
  --/ \param text    Text object
  --/ \param factors Scale factors
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_Scale (Text : sfText_Ptr; Factors : System.Vector2.sfVector2f);


  --//////////////////////////////////////////////////////////
  --/ \brief Get the combined transform of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Transform combining the position/rotation/scale/origin of the object
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetTransform (Text : sfText_Ptr) return Transform.sfTransform;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the inverse of the combined transform of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Inverse of the combined transformations applied to the object
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetInverseTransform (Text : sfText_Ptr) return Transform.sfTransform;


  --//////////////////////////////////////////////////////////
  --/ \brief Set the string of a text (from an ANSI string)
  --/
  --/ A text's string is empty by default.
  --/
  --/ \param text   Text object
  --/ \param string New string
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setString (Text : sfText_Ptr; String : Standard.String);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the string of a text (from a unicode string)
  --/
  --/ \param text   Text object
  --/ \param string New string
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setUnicodeString (Text : sfText_Ptr; String : access Config.sfUint32);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the font of a text
  --/
  --/ The \a font argument refers to a texture that must
  --/ exist as long as the text uses it. Indeed, the text
  --/ doesn't store its own copy of the font, but rather keeps
  --/ a pointer to the one that you passed to this function.
  --/ If the font is destroyed and the text tries to
  --/ use it, the behaviour is undefined.
  --/
  --/ \param text Text object
  --/ \param font New font
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setFont (Text : sfText_Ptr; Font : sfFont_Ptr);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the character size of a text
  --/
  --/ The default size is 30.
  --/
  --/ \param text Text object
  --/ \param size New character size, in pixels
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setCharacterSize (Text : sfText_Ptr; Size : unsigned);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the style of a text
  --/
  --/ You can pass a combination of one or more styles, for
  --/ example sfTextBold | sfTextItalic.
  --/ The default style is sfTextRegular.
  --/
  --/ \param text  Text object
  --/ \param style New style
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setStyle (Text : sfText_Ptr; Style : Config.sfUint32);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the fill color of a text
  --/
  --/ By default, the text's fill color is opaque white.
  --/ Setting the fill color to a transparent color with an outline
  --/ will cause the outline to be displayed in the fill area of the text.
  --/
  --/ \param text  Text object
  --/ \param color New fill color of the text
  --/
  --/ \deprecated This function is deprecated and may be removed in future releases.
  --/ Use sfText_setFillColor instead.
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setColor (Text : sfText_Ptr; Color : sfColor);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the fill color of a text
  --/
  --/ By default, the text's fill color is opaque white.
  --/ Setting the fill color to a transparent color with an outline
  --/ will cause the outline to be displayed in the fill area of the text.
  --/
  --/ \param text  Text object
  --/ \param color New fill color of the text
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setFillColor (Text : sfText_Ptr; Color : sfColor);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the outline color of the text
  --/
  --/ By default, the text's outline color is opaque black.
  --/
  --/ \param text  Text object
  --/ \param color New outline color of the text
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setOutlineColor (Text : sfText_Ptr; Color : sfColor);


  --//////////////////////////////////////////////////////////
  --/ \brief Set the thickness of the text's outline
  --/
  --/ By default, the outline thickness is 0.
  --/
  --/ Be aware that using a negative value for the outline
  --/ thickness will cause distorted rendering.
  --/
  --/ \param thickness New outline thickness, in pixels
  --/
  --/ \see GetOutlineThickness
  --/
  --//////////////////////////////////////////////////////////
   procedure sfText_setOutlineThickness (Text : sfText_Ptr; Thickness : float);


  --//////////////////////////////////////////////////////////
  --/ \brief Get the string of a text (returns an ANSI string)
  --/
  --/ \param text Text object
  --/
  --/ \return String as a locale-dependant ANSI string
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetString (Text : sfText_Ptr) return Standard.String;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the string of a text (returns a unicode string)
  --/
  --/ \param text Text object
  --/
  --/ \return String as UTF-32
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetUnicodeString (Text : sfText_Ptr) return access Config.sfUint32;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the font used by a text
  --/
  --/ If the text has no font attached, a NULL pointer is returned.
  --/ The returned pointer is const, which means that you can't
  --/ modify the font when you retrieve it with this function.
  --/
  --/ \param text Text object
  --/
  --/ \return Pointer to the font
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetFont (Text : sfText_Ptr) return sfFont_Ptr;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the size of the characters of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Size of the characters
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetCharacterSize (Text : sfText_Ptr) return unsigned;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the style of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Current string style (see sfTextStyle enum)
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetStyle (Text : sfText_Ptr) return Config.sfUint32;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the fill color of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Fill color of the text
  --/
  --/ \deprecated This function is deprecated and may be removed in future releases.
  --/ Use sfText_getFillColor instead.
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetColor (Text : sfText_Ptr) return Color.sfColor;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the fill color of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Fill color of the text
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetFillColor (Text : sfText_Ptr) return Color.sfColor;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the outline color of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Outline color of the text
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetOutlineColor (Text : sfText_Ptr) return Color.sfColor;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the outline thickness of a text
  --/
  --/ \param text Text object
  --/
  --/ \return Outline thickness of a text, in pixels
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetOutlineThickness (Text : sfText_Ptr) return float;


  --//////////////////////////////////////////////////////////
  --/ \brief Return the position of the \a index-th character in a text
  --/
  --/ This function computes the visual position of a character
  --/ from its index in the string. The returned position is
  --/ in global coordinates (translation, rotation, scale and
  --/ origin are applied).
  --/ If \a index is out of range, the position of the end of
  --/ the string is returned.
  --/
  --/ \param text  Text object
  --/ \param index Index of the character
  --/
  --/ \return Position of the character
  --/
  --//////////////////////////////////////////////////////////
   function sfText_findCharacterPos (Text : sfText_Ptr; Index : size_t) return System.Vector2.sfVector2f;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the local bounding rectangle of a text
  --/
  --/ The returned rectangle is in local coordinates, which means
  --/ that it ignores the transformations (translation, rotation,
  --/ scale, ...) that are applied to the entity.
  --/ In other words, this function returns the bounds of the
  --/ entity in the entity's coordinate system.
  --/
  --/ \param text Text object
  --/
  --/ \return Local bounding rectangle of the entity
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetLocalBounds (Text : sfText_Ptr) return Rect.sfFloatRect;


  --//////////////////////////////////////////////////////////
  --/ \brief Get the global bounding rectangle of a text
  --/
  --/ The returned rectangle is in global coordinates, which means
  --/ that it takes in account the transformations (translation,
  --/ rotation, scale, ...) that are applied to the entity.
  --/ In other words, this function returns the bounds of the
  --/ text in the global 2D world's coordinate system.
  --/
  --/ \param text Text object
  --/
  --/ \return Global bounding rectangle of the entity
  --/
  --//////////////////////////////////////////////////////////
   function sfText_GetGlobalBounds (Text : sfText_Ptr) return Rect.sfFloatRect;


private
   pragma Import (C, sfText_Create, "sfText_create");
   pragma Import (C, sfText_Copy, "sfText_copy");
   pragma Import (C, sfText_Destroy, "sfText_destroy");
   pragma Import (C, sfText_setPosition, "sfText_setPosition");
   pragma Import (C, sfText_setRotation, "sfText_setRotation");
   pragma Import (C, sfText_setScale, "sfText_setScale");
   pragma Import (C, sfText_setOrigin, "sfText_setOrigin");
   pragma Import (C, sfText_getPosition, "sfText_getPosition");
   pragma Import (C, sfText_getRotation, "sfText_getRotation");
   pragma Import (C, sfText_getScale, "sfText_getScale");
   pragma Import (C, sfText_getOrigin, "sfText_getOrigin");
   pragma Import (C, sfText_move, "sfText_move");
   pragma Import (C, sfText_rotate, "sfText_rotate");
   pragma Import (C, sfText_scale, "sfText_scale");
   pragma Import (C, sfText_getTransform, "sfText_getTransform");
   pragma Import (C, sfText_getInverseTransform, "sfText_getInverseTransform");
   pragma Import (C, sfText_setUnicodeString, "sfText_setUnicodeString");
   pragma Import (C, sfText_setFont, "sfText_setFont");
   pragma Import (C, sfText_setCharacterSize, "sfText_setCharacterSize");
   pragma Import (C, sfText_setStyle, "sfText_setStyle");
   pragma Import (C, sfText_setColor, "sfText_setColor");
   pragma Import (C, sfText_setFillColor, "sfText_setFillColor");
   pragma Import (C, sfText_setOutlineColor, "sfText_setOutlineColor");
   pragma Import (C, sfText_setOutlineThickness, "sfText_setOutlineThickness");
   pragma Import (C, sfText_getUnicodeString, "sfText_getUnicodeString");
   pragma Import (C, sfText_getFont, "sfText_getFont");
   pragma Import (C, sfText_getCharacterSize, "sfText_getCharacterSize");
   pragma Import (C, sfText_getStyle, "sfText_getStyle");
   pragma Import (C, sfText_getColor, "sfText_getColor");
   pragma Import (C, sfText_getFillColor, "sfText_getFillColor");
   pragma Import (C, sfText_getOutlineColor, "sfText_getOutlineColor");
   pragma Import (C, sfText_getOutlineThickness, "sfText_getOutlineThickness");
   pragma Import (C, sfText_findCharacterPos, "sfText_findCharacterPos");
   pragma Import (C, sfText_getLocalBounds, "sfText_getLocalBounds");
   pragma Import (C, sfText_getGlobalBounds, "sfText_getGlobalBounds");

end Sf.Graphics.Text;
