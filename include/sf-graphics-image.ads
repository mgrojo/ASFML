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

with Sf.Graphics.Color;
with Sf.System.InputStream;
with Sf.System.Vector2;
with Sf.Graphics.Rect;

package Sf.Graphics.Image is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create an image
   --/
   --/ This image is filled with black pixels.
   --/
   --/ @param width  Width of the image
   --/ @param height Height of the image
   --/
   --/ @return A new sfImage object
   --/
   --//////////////////////////////////////////////////////////
   function create (width : sfUint32; height : sfUint32) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create an image and fill it with a unique color
   --/
   --/ @param width  Width of the image
   --/ @param height Height of the image
   --/ @param color  Fill color
   --/
   --/ @return A new sfImage object
   --/
   --//////////////////////////////////////////////////////////
   function createFromColor
     (width : sfUint32;
      height : sfUint32;
      color : Sf.Graphics.Color.sfColor) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create an image from an array of pixels
   --/
   --/ The @a pixel array is assumed to contain 32-bits RGBA pixels,
   --/ and have the given @a width and @a height. If not, this is
   --/ an undefined behaviour.
   --/ If @a pixels is null, an empty image is created.
   --/
   --/ @param width  Width of the image
   --/ @param height Height of the image
   --/ @param pixels Array of pixels to copy to the image
   --/
   --/ @return A new sfImage object
   --/
   --//////////////////////////////////////////////////////////
   function createFromPixels
     (width : sfUint32;
      height : sfUint32;
      pixels : access sfUint8) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create an image from a file on disk
   --/
   --/ The supported image formats are bmp, png, tga, jpg, gif,
   --/ psd, hdr and pic. Some format options are not supported,
   --/ like progressive jpeg.
   --/ If this function fails, the image is left unchanged.
   --/
   --/ @param filename Path of the image file to load
   --/
   --/ @return A new sfImage object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromFile (filename : String) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create an image from a file in memory
   --/
   --/ The supported image formats are bmp, png, tga, jpg, gif,
   --/ psd, hdr and pic. Some format options are not supported,
   --/ like progressive jpeg.
   --/ If this function fails, the image is left unchanged.
   --/
   --/ @param data Pointer to the file data in memory
   --/ @param size Size of the data to load, in bytes
   --/
   --/ @return A new sfImage object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromMemory (data : Standard.System.Address; size : sfSize_t) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create an image from a custom stream
   --/
   --/ The supported image formats are bmp, png, tga, jpg, gif,
   --/ psd, hdr and pic. Some format options are not supported,
   --/ like progressive jpeg.
   --/ If this function fails, the image is left unchanged.
   --/
   --/ @param stream Source stream to read from
   --/
   --/ @return A new sfImage object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromStream (stream : access Sf.System.InputStream.sfInputStream) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing image
   --/
   --/ @param image Image to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (image : sfImage_Ptr) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing image
   --/
   --/ @param image Image to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (image : sfImage_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Save an image to a file on disk
   --/
   --/ The format of the image is automatically deduced from
   --/ the extension. The supported image formats are bmp, png,
   --/ tga and jpg. The destination file is overwritten
   --/ if it already exists. This function fails if the image is empty.
   --/
   --/ @param image    Image object
   --/ @param filename Path of the file to save
   --/
   --/ @return sfTrue if saving was successful
   --/
   --//////////////////////////////////////////////////////////
   function saveToFile (image : sfImage_Ptr; filename : String) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Return the size of an image
   --/
   --/ @param image Image object
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getSize (image : sfImage_Ptr) return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a transparency mask from a specified color-key
   --/
   --/ This function sets the alpha value of every pixel matching
   --/ the given color to @a alpha (0 by default), so that they
   --/ become transparent.
   --/
   --/ @param image Image object
   --/ @param color Color to make transparent
   --/ @param alpha Alpha value to assign to transparent pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure createMaskFromColor
     (image : sfImage_Ptr;
      color : Sf.Graphics.Color.sfColor;
      alpha : sfUint8);

   --//////////////////////////////////////////////////////////
   --/ @brief Copy pixels from an image onto another
   --/
   --/ This function does a slow pixel copy and should not be
   --/ used intensively. It can be used to prepare a complex
   --/ static image from several others, but if you need this
   --/ kind of feature in real-time you'd better use sfRenderTexture.
   --/
   --/ If @a sourceRect is empty, the whole image is copied.
   --/ If @a applyAlpha is set to true, the transparency of
   --/ source pixels is applied. If it is false, the pixels are
   --/ copied unchanged with their alpha value.
   --/
   --/ @param image      Image object
   --/ @param source     Source image to copy
   --/ @param destX      X coordinate of the destination position
   --/ @param destY      Y coordinate of the destination position
   --/ @param sourceRect Sub-rectangle of the source image to copy
   --/ @param applyAlpha Should the copy take in account the source transparency?
   --/
   --//////////////////////////////////////////////////////////
   procedure copyImage
     (image      : sfImage_Ptr;
      source     : sfImage_Ptr;
      destX      : sfUint32;
      destY      : sfUint32;
      sourceRect : Sf.Graphics.Rect.sfIntRect;
      applyAlpha : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the color of a pixel in an image
   --/
   --/ This function doesn't check the validity of the pixel
   --/ coordinates, using out-of-range values will result in
   --/ an undefined behaviour.
   --/
   --/ @param image Image object
   --/ @param x     X coordinate of pixel to change
   --/ @param y     Y coordinate of pixel to change
   --/ @param color New color of the pixel
   --/
   --//////////////////////////////////////////////////////////
   procedure setPixel
     (image : sfImage_Ptr;
      x : sfUint32;
      y : sfUint32;
      color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the color of a pixel in an image
   --/
   --/ This function doesn't check the validity of the pixel
   --/ coordinates, using out-of-range values will result in
   --/ an undefined behaviour.
   --/
   --/ @param image Image object
   --/ @param x     X coordinate of pixel to get
   --/ @param y     Y coordinate of pixel to get
   --/
   --/ @return Color of the pixel at coordinates (x, y)
   --/
   --//////////////////////////////////////////////////////////
   function getPixel
     (image : sfImage_Ptr;
      x : sfUint32;
      y : sfUint32) return Sf.Graphics.Color.sfColor;

   --//////////////////////////////////////////////////////////
   --/ @brief Get a read-only pointer to the array of pixels of an image
   --/
   --/ The returned value points to an array of RGBA pixels made of
   --/ 8 bits integers components. The size of the array is
   --/ getWidth() * getHeight() * 4.
   --/ Warning: the returned pointer may become invalid if you
   --/ modify the image, so you should never store it for too long.
   --/ If the image is empty, a null pointer is returned.
   --/
   --/ @param image Image object
   --/
   --/ @return Read-only pointer to the array of pixels
   --/
   --//////////////////////////////////////////////////////////
   function getPixelsPtr (image : sfImage_Ptr) return access sfUint8;

   --//////////////////////////////////////////////////////////
   --/ @brief Flip an image horizontally (left <-> right)
   --/
   --/ @param image Image object
   --/
   --//////////////////////////////////////////////////////////
   procedure flipHorizontally (image : sfImage_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Flip an image vertically (top <-> bottom)
   --/
   --/ @param image Image object
   --/
   --//////////////////////////////////////////////////////////
   procedure flipVertically (image : sfImage_Ptr);

private

   pragma Import (C, create, "sfImage_create");
   pragma Import (C, createFromColor, "sfImage_createFromColor");
   pragma Import (C, createFromPixels, "sfImage_createFromPixels");
   pragma Import (C, createFromMemory, "sfImage_createFromMemory");
   pragma Import (C, createFromStream, "sfImage_createFromStream");
   pragma Import (C, copy, "sfImage_copy");
   pragma Import (C, destroy, "sfImage_destroy");
   pragma Import (C, getSize, "sfImage_getSize");
   pragma Import (C, createMaskFromColor, "sfImage_createMaskFromColor");
   pragma Import (C, copyImage, "sfImage_copyImage");
   pragma Import (C, setPixel, "sfImage_setPixel");
   pragma Import (C, getPixel, "sfImage_getPixel");
   pragma Import (C, getPixelsPtr, "sfImage_getPixelsPtr");
   pragma Import (C, flipHorizontally, "sfImage_flipHorizontally");
   pragma Import (C, flipVertically, "sfImage_flipVertically");

end Sf.Graphics.Image;
