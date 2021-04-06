--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2018 Laurent Gomila (laurent@sfml-dev.org)
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
with Sf.Graphics.Color;
with Sf.Graphics.Rect;

package Sf.Graphics.Text is

   --//////////////////////////////////////////////////////////
   --/ sfText styles
   --//////////////////////////////////////////////////////////
   --/< Regular characters, no style
   --/< Bold characters
   --/< Italic characters
   --/< Underlined characters
   --/< Strike through characters
   subtype sfTextStyle is sfUint32;
   sfTextRegular : constant sfTextStyle := 0;
   sfTextBold : constant sfTextStyle := 1;
   sfTextItalic : constant sfTextStyle := 2;
   sfTextUnderlined : constant sfTextStyle := 4;
   sfTextStrikeThrough : constant sfTextStyle := 8;


   --//////////////////////////////////////////////////////////
   --/ @brief Create a new text
   --/
   --/ @return A new sfText object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function create return sfText_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing text
   --/
   --/ @param text Text to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (text : sfText_Ptr) return sfText_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing text
   --/
   --/ @param text Text to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (text : sfText_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of a text
   --/
   --/ This function completely overwrites the previous position.
   --/ See sfText_move to apply an offset based on the previous position instead.
   --/ The default position of a text Text object is (0, 0).
   --/
   --/ @param text     Text object
   --/ @param position New position
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (text : sfText_Ptr; position : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of a text
   --/
   --/ This function completely overwrites the previous rotation.
   --/ See sfText_rotate to add an angle based on the previous rotation instead.
   --/ The default rotation of a text Text object is 0.
   --/
   --/ @param text  Text object
   --/ @param angle New rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure setRotation (text : sfText_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the scale factors of a text
   --/
   --/ This function completely overwrites the previous scale.
   --/ See sfText_scale to add a factor based on the previous scale instead.
   --/ The default scale of a text Text object is (1, 1).
   --/
   --/ @param text  Text object
   --/ @param scale New scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure setScale (text : sfText_Ptr; scale : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the local origin of a text
   --/
   --/ The origin of an object defines the center point for
   --/ all transformations (position, scale, rotation).
   --/ The coordinates of this point must be relative to the
   --/ top-left corner of the object, and ignore all
   --/ transformations (position, scale, rotation).
   --/ The default origin of a text object is (0, 0).
   --/
   --/ @param text   Text object
   --/ @param origin New origin
   --/
   --//////////////////////////////////////////////////////////
   procedure setOrigin (text : sfText_Ptr; origin : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Current position
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (text : sfText_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the orientation of a text
   --/
   --/ The rotation is always in the range [0, 360].
   --/
   --/ @param text Text object
   --/
   --/ @return Current rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   function getRotation (text : sfText_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current scale of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Current scale factors
   --/
   --//////////////////////////////////////////////////////////
   function getScale (text : sfText_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local origin of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Current origin
   --/
   --//////////////////////////////////////////////////////////
   function getOrigin (text : sfText_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Move a text by a given offset
   --/
   --/ This function adds to the current position of the object,
   --/ unlike sfText_setPosition which overwrites it.
   --/
   --/ @param text   Text object
   --/ @param offset Offset
   --/
   --//////////////////////////////////////////////////////////
   procedure move (text : sfText_Ptr; offset : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Rotate a text
   --/
   --/ This function adds to the current rotation of the object,
   --/ unlike sfText_setRotation which overwrites it.
   --/
   --/ @param text  Text object
   --/ @param angle Angle of rotation, in degrees
   --/
   --//////////////////////////////////////////////////////////
   procedure rotate (text : sfText_Ptr; angle : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Scale a text
   --/
   --/ This function multiplies the current scale of the object,
   --/ unlike sfText_setScale which overwrites it.
   --/
   --/ @param text    Text object
   --/ @param factors Scale factors
   --/
   --//////////////////////////////////////////////////////////
   procedure scale (text : sfText_Ptr; factors : Sf.System.Vector2.sfVector2f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the combined transform of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Transform combining the position/rotation/scale/origin of the object
   --/
   --//////////////////////////////////////////////////////////
   function getTransform (text : sfText_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the inverse of the combined transform of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Inverse of the combined transformations applied to the object
   --/
   --//////////////////////////////////////////////////////////
   function getInverseTransform (text : sfText_Ptr) return Sf.Graphics.Transform.sfTransform;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the string of a text (from an ANSI string)
   --/
   --/ A text's string is empty by default.
   --/
   --/ @param text   Text object
   --/ @param str    New string
   --/
   --//////////////////////////////////////////////////////////
   procedure setString (text : sfText_Ptr; str : String);


   --//////////////////////////////////////////////////////////
   --/ @brief Set the string of a text (from a unicode string)
   --/
   --/ @param text   Text object
   --/ @param str New string
   --/
   --//////////////////////////////////////////////////////////
   procedure setUnicodeString (text : sfText_Ptr; str : access sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the font of a text
   --/
   --/ The @a font argument refers to a texture that must
   --/ exist as long as the text uses it. Indeed, the text
   --/ doesn't store its own copy of the font, but rather keeps
   --/ a pointer to the one that you passed to this function.
   --/ If the font is destroyed and the text tries to
   --/ use it, the behaviour is undefined.
   --/
   --/ @param text Text object
   --/ @param font New font
   --/
   --//////////////////////////////////////////////////////////
   procedure setFont (text : sfText_Ptr; font : sfFont_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the character size of a text
   --/
   --/ The default size is 30.
   --/
   --/ @param text Text object
   --/ @param size New character size, in pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure setCharacterSize (text : sfText_Ptr; size : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the line spacing factor
   --/
   --/ The default spacing between lines is defined by the font.
   --/ This method enables you to set a factor for the spacing
   --/ between lines. By default the line spacing factor is 1.
   --/
   --/ @param text Text object
   --/ @param spacingFactor New line spacing factor
   --/
   --/ @see sfText_getLineSpacing
   --/
   --//////////////////////////////////////////////////////////
   procedure setLineSpacing (text : sfText_Ptr; spacingFactor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the letter spacing factor
   --/
   --/ The default spacing between letters is defined by the font.
   --/ This factor doesn't directly apply to the existing
   --/ spacing between each character, it rather adds a fixed
   --/ space between them which is calculated from the font
   --/ metrics and the character size.
   --/ Note that factors below 1 (including negative numbers) bring
   --/ characters closer to each other.
   --/ By default the letter spacing factor is 1.
   --/
   --/ @param text Text object
   --/ @param spacingFactor New letter spacing factor
   --/
   --/ @see sfText_getLetterSpacing
   --/
   --//////////////////////////////////////////////////////////
   procedure setLetterSpacing (text : sfText_Ptr; spacingFactor : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the style of a text
   --/
   --/ You can pass a combination of one or more styles, for
   --/ example sfTextBold | sfTextItalic.
   --/ The default style is sfTextRegular.
   --/
   --/ @param text  Text object
   --/ @param style New style
   --/
   --//////////////////////////////////////////////////////////
   procedure setStyle (text : sfText_Ptr; style : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the fill color of a text
   --/
   --/ By default, the text's fill color is opaque white.
   --/ Setting the fill color to a transparent color with an outline
   --/ will cause the outline to be displayed in the fill area of the text.
   --/
   --/ @param text  Text object
   --/ @param color New fill color of the text
   --/
   --/ @deprecated This function is deprecated and may be removed in future releases.
   --/ Use sfText_setFillColor instead.
   --/
   --//////////////////////////////////////////////////////////
   procedure setColor (text : sfText_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the fill color of a text
   --/
   --/ By default, the text's fill color is opaque white.
   --/ Setting the fill color to a transparent color with an outline
   --/ will cause the outline to be displayed in the fill area of the text.
   --/
   --/ @param text  Text object
   --/ @param color New fill color of the text
   --/
   --//////////////////////////////////////////////////////////
   procedure setFillColor (text : sfText_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the outline color of the text
   --/
   --/ By default, the text's outline color is opaque black.
   --/
   --/ @param text  Text object
   --/ @param color New outline color of the text
   --/
   --//////////////////////////////////////////////////////////
   procedure setOutlineColor (text : sfText_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the thickness of the text's outline
   --/
   --/ By default, the outline thickness is 0.
   --/
   --/ Be aware that using a negative value for the outline
   --/ thickness will cause distorted rendering.
   --/
   --/ @param thickness New outline thickness, in pixels
   --/
   --/ @see getOutlineThickness
   --/
   --//////////////////////////////////////////////////////////
   procedure setOutlineThickness (text : sfText_Ptr; thickness : float);


   --//////////////////////////////////////////////////////////
   --/ @brief Get the string of a text (returns an ANSI string)
   --/
   --/ @param text Text object
   --/
   --/ @return String as a locale-dependant ANSI string
   --/
   --//////////////////////////////////////////////////////////
   function getString (text : sfText_Ptr) return String;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the string of a text (returns a unicode string)
   --/
   --/ @param text Text object
   --/
   --/ @return String as UTF-32
   --/
   --//////////////////////////////////////////////////////////
   function getUnicodeString (text : sfText_Ptr) return access sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the font used by a text
   --/
   --/ If the text has no font attached, a NULL pointer is returned.
   --/ The returned pointer is const, which means that you can't
   --/ modify the font when you retrieve it with this function.
   --/
   --/ @param text Text object
   --/
   --/ @return Pointer to the font
   --/
   --//////////////////////////////////////////////////////////
   function getFont (text : sfText_Ptr) return sfFont_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the characters of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Size of the characters
   --/
   --//////////////////////////////////////////////////////////
   function getCharacterSize (text : sfText_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the letter spacing factor
   --/
   --/ @param text Text object
   --/
   --/ @return Size of the letter spacing factor
   --/
   --/ @see sfText_setLetterSpacing
   --/
   --//////////////////////////////////////////////////////////
   function getLetterSpacing (text : sfText_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the line spacing factor
   --/
   --/ @param text Text object
   --/
   --/ @return Size of the line spacing factor
   --/
   --/ @see sfText_setLineSpacing
   --/
   --//////////////////////////////////////////////////////////
   function getLineSpacing (text : sfText_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the style of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Current string style (see sfTextStyle enum)
   --/
   --//////////////////////////////////////////////////////////
   function getStyle (text : sfText_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the fill color of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Fill color of the text
   --/
   --/ @deprecated This function is deprecated and may be removed in future releases.
   --/ Use sfText_getFillColor instead.
   --/
   --//////////////////////////////////////////////////////////
   function getColor (text : sfText_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the fill color of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Fill color of the text
   --/
   --//////////////////////////////////////////////////////////
   function getFillColor (text : sfText_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline color of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Outline color of the text
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineColor (text : sfText_Ptr) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the outline thickness of a text
   --/
   --/ @param text Text object
   --/
   --/ @return Outline thickness of a text, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getOutlineThickness (text : sfText_Ptr) return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Return the position of the @a index-th character in a text
   --/
   --/ This function computes the visual position of a character
   --/ from its index in the string. The returned position is
   --/ in global coordinates (translation, rotation, scale and
   --/ origin are applied).
   --/ If @a index is out of range, the position of the end of
   --/ the string is returned.
   --/
   --/ @param text  Text object
   --/ @param index Index of the character
   --/
   --/ @return Position of the character
   --/
   --//////////////////////////////////////////////////////////
   function findCharacterPos (text : sfText_Ptr; index : sfSize_t) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the local bounding rectangle of a text
   --/
   --/ The returned rectangle is in local coordinates, which means
   --/ that it ignores the transformations (translation, rotation,
   --/ scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ entity in the entity's coordinate system.
   --/
   --/ @param text Text object
   --/
   --/ @return Local bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function getLocalBounds (text : sfText_Ptr) return Sf.Graphics.Rect.sfFloatRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the global bounding rectangle of a text
   --/
   --/ The returned rectangle is in global coordinates, which means
   --/ that it takes in account the transformations (translation,
   --/ rotation, scale, ...) that are applied to the entity.
   --/ In other words, this function returns the bounds of the
   --/ text in the global 2D world's coordinate system.
   --/
   --/ @param text Text object
   --/
   --/ @return Global bounding rectangle of the entity
   --/
   --//////////////////////////////////////////////////////////
   function getGlobalBounds (text : sfText_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, create, "sfText_create");
   pragma Import (C, copy, "sfText_copy");
   pragma Import (C, destroy, "sfText_destroy");
   pragma Import (C, setPosition, "sfText_setPosition");
   pragma Import (C, setRotation, "sfText_setRotation");
   pragma Import (C, setScale, "sfText_setScale");
   pragma Import (C, setOrigin, "sfText_setOrigin");
   pragma Import (C, getPosition, "sfText_getPosition");
   pragma Import (C, getRotation, "sfText_getRotation");
   pragma Import (C, getScale, "sfText_getScale");
   pragma Import (C, getOrigin, "sfText_getOrigin");
   pragma Import (C, move, "sfText_move");
   pragma Import (C, rotate, "sfText_rotate");
   pragma Import (C, scale, "sfText_scale");
   pragma Import (C, getTransform, "sfText_getTransform");
   pragma Import (C, getInverseTransform, "sfText_getInverseTransform");
   pragma Import (C, setUnicodeString, "sfText_setUnicodeString");
   pragma Import (C, setFont, "sfText_setFont");
   pragma Import (C, setCharacterSize, "sfText_setCharacterSize");
   pragma Import (C, setLineSpacing, "sfText_setLineSpacing");
   pragma Import (C, setLetterSpacing, "sfText_setLetterSpacing");
   pragma Import (C, setStyle, "sfText_setStyle");
   pragma Import (C, setColor, "sfText_setColor");
   pragma Import (C, setFillColor, "sfText_setFillColor");
   pragma Import (C, setOutlineColor, "sfText_setOutlineColor");
   pragma Import (C, setOutlineThickness, "sfText_setOutlineThickness");
   pragma Import (C, getUnicodeString, "sfText_getUnicodeString");
   pragma Import (C, getFont, "sfText_getFont");
   pragma Import (C, getCharacterSize, "sfText_getCharacterSize");
   pragma Import (C, getLetterSpacing, "sfText_getLetterSpacing");
   pragma Import (C, getLineSpacing, "getLineSpacing");
   pragma Import (C, getStyle, "sfText_getStyle");
   pragma Import (C, getColor, "sfText_getColor");
   pragma Import (C, getFillColor, "sfText_getFillColor");
   pragma Import (C, getOutlineColor, "sfText_getOutlineColor");
   pragma Import (C, getOutlineThickness, "sfText_getOutlineThickness");
   pragma Import (C, findCharacterPos, "sfText_findCharacterPos");
   pragma Import (C, getLocalBounds, "sfText_getLocalBounds");
   pragma Import (C, getGlobalBounds, "sfText_getGlobalBounds");

end Sf.Graphics.Text;
