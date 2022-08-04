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

--//////////////////////////////////////////////////////////
with System;

with Sf.Graphics.Rect;
with Sf.System.InputStream;
with Sf.System.Vector2;
with Sf.Window;

package Sf.Graphics.Texture is

   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new texture
   --/
   --/ @param width  Texture width
   --/ @param height Texture height
   --/
   --/ @return A new sfTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function create (width : sfUint32; height : sfUint32) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new texture from a file
   --/
   --/ @param filename Path of the image file to load
   --/ @param area     Area of the source image to load (NULL to load the entire image)
   --/
   --/ @return A new sfTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromFile
     (filename : String;
      area     : access constant Sf.Graphics.Rect.sfIntRect := Sf.Graphics.Rect.sfNullRectangle'Access)
     return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new texture from a file in memory
   --/
   --/ @param data        Pointer to the file data in memory
   --/ @param sizeInBytes Size of the data to load, in bytes
   --/ @param area        Area of the source image to load (NULL to load the entire image)
   --/
   --/ @return A new sfTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromMemory
     (data : Standard.System.Address;
      sizeInBytes : sfSize_t;
      area : access constant Sf.Graphics.Rect.sfIntRect := Sf.Graphics.Rect.sfNullRectangle'Access)
     return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new texture from a custom stream
   --/
   --/ @param stream Source stream to read from
   --/ @param area   Area of the source image to load (NULL to load the entire image)
   --/
   --/ @return A new sfTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromStream
     (stream : access Sf.System.InputStream.sfInputStream;
      area : access constant Sf.Graphics.Rect.sfIntRect := Sf.Graphics.Rect.sfNullRectangle'Access)
     return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new texture from an image
   --/
   --/ @param image Image to upload to the texture
   --/ @param area  Area of the source image to load (NULL to load the entire image)
   --/
   --/ @return A new sfTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createFromImage
     (image : sfImage_Ptr;
      area : access constant Sf.Graphics.Rect.sfIntRect := Sf.Graphics.Rect.sfNullRectangle'Access)
     return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing texture
   --/
   --/ @param texture Texture to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (texture : sfTexture_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing texture
   --/
   --/ @param texture Texture to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (texture : sfTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Return the size of the texture
   --/
   --/ @param texture Texture to read
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getSize (texture : sfTexture_Ptr) return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy a texture's pixels to an image
   --/
   --/ @param texture Texture to copy
   --/
   --/ @return Image containing the texture's pixels
   --/
   --//////////////////////////////////////////////////////////
   function copyToImage (texture : sfTexture_Ptr) return sfImage_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Update a texture from an array of pixels
   --/
   --/ @param texture Texture to update
   --/ @param pixels  Array of pixels to copy to the texture
   --/ @param width   Width of the pixel region contained in @a pixels
   --/ @param height  Height of the pixel region contained in @a pixels
   --/ @param x       X offset in the texture where to copy the source pixels
   --/ @param y       Y offset in the texture where to copy the source pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure updateFromPixels
     (texture : sfTexture_Ptr;
      pixels : access sfUint8;
      width : sfUint32;
      height : sfUint32;
      x : sfUint32;
      y : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Update a texture from an image
   --/
   --/ @param texture Texture to update
   --/ @param image   Image to copy to the texture
   --/ @param x       X offset in the texture where to copy the source pixels
   --/ @param y       Y offset in the texture where to copy the source pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure updateFromImage
     (texture : sfTexture_Ptr;
      image : sfImage_Ptr;
      x : sfUint32;
      y : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Update a texture from the contents of a window
   --/
   --/ @param texture Texture to update
   --/ @param window  Window to copy to the texture
   --/ @param x       X offset in the texture where to copy the source pixels
   --/ @param y       Y offset in the texture where to copy the source pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure updateFromWindow
     (texture : sfTexture_Ptr;
      window  : sf.Window.sfWindow_Ptr;
      x       : sfUint32;
      y       : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Update a texture from the contents of a render-window
   --/
   --/ @param texture      Texture to update
   --/ @param renderWindow Render-window to copy to the texture
   --/ @param x            X offset in the texture where to copy the source pixels
   --/ @param y            Y offset in the texture where to copy the source pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure updateFromRenderWindow
     (texture : sfTexture_Ptr;
      renderWindow : sfRenderWindow_Ptr;
      x : sfUint32;
      y : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable the smooth filter on a texture
   --/
   --/ @param texture The texture object
   --/ @param smooth  sfTrue to enable smoothing, sfFalse to disable it
   --/
   --//////////////////////////////////////////////////////////
   procedure setSmooth (texture : sfTexture_Ptr; smooth : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the smooth filter is enabled or not for a texture
   --/
   --/ @param texture The texture object
   --/
   --/ @return sfTrue if smoothing is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function isSmooth (texture : sfTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable conversion from sRGB
   --/
   --/ When providing texture data from an image file or memory, it can
   --/ either be stored in a linear color space or an sRGB color space.
   --/ Most digital images account for gamma correction already, so they
   --/ would need to be "uncorrected" back to linear color space before
   --/ being processed by the hardware. The hardware can automatically
   --/ convert it from the sRGB color space to a linear color space when
   --/ it gets sampled. When the rendered image gets output to the final
   --/ framebuffer, it gets converted back to sRGB.
   --/
   --/ After enabling or disabling sRGB conversion, make sure to reload
   --/ the texture data in order for the setting to take effect.
   --/
   --/ This option is only useful in conjunction with an sRGB capable
   --/ framebuffer. This can be requested during window creation.
   --/
   --/ @param sRgb True to enable sRGB conversion, false to disable it
   --/
   --/ @see sfTexture_isSrgb
   --/
   --//////////////////////////////////////////////////////////
   procedure setSrgb (texture : sfTexture_Ptr; sRgb : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the texture source is converted from sRGB or not
   --/
   --/ @return True if the texture source is converted from sRGB, false if not
   --/
   --/ @see sfTexture_setSrgb
   --/
   --//////////////////////////////////////////////////////////
   function isSrgb (texture : sfTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable repeating for a texture
   --/
   --/ Repeating is involved when using texture coordinates
   --/ outside the texture rectangle [0, 0, width, height].
   --/ In this case, if repeat mode is enabled, the whole texture
   --/ will be repeated as many times as needed to reach the
   --/ coordinate (for example, if the X texture coordinate is
   --/ 3 * width, the texture will be repeated 3 times).
   --/ If repeat mode is disabled, the "extra space" will instead
   --/ be filled with border pixels.
   --/ Warning: on very old graphics cards, white pixels may appear
   --/ when the texture is repeated. With such cards, repeat mode
   --/ can be used reliably only if the texture has power-of-two
   --/ dimensions (such as 256x128).
   --/ Repeating is disabled by default.
   --/
   --/ @param texture  The texture object
   --/ @param repeated True to repeat the texture, false to disable repeating
   --/
   --//////////////////////////////////////////////////////////
   procedure setRepeated (texture : sfTexture_Ptr; repeated : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a texture is repeated or not
   --/
   --/ @param texture The texture object
   --/
   --/ @return sfTrue if repeat mode is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function isRepeated (texture : sfTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Generate a mipmap using the current texture data
   --/
   --/ Mipmaps are pre-computed chains of optimized textures. Each
   --/ level of texture in a mipmap is generated by halving each of
   --/ the previous level's dimensions. This is done until the final
   --/ level has the size of 1x1. The textures generated in this process may
   --/ make use of more advanced filters which might improve the visual quality
   --/ of textures when they are applied to objects much smaller than they are.
   --/ This is known as minification. Because fewer texels (texture elements)
   --/ have to be sampled from when heavily minified, usage of mipmaps
   --/ can also improve rendering performance in certain scenarios.
   --/
   --/ Mipmap generation relies on the necessary OpenGL extension being
   --/ available. If it is unavailable or generation fails due to another
   --/ reason, this function will return false. Mipmap data is only valid from
   --/ the time it is generated until the next time the base level image is
   --/ modified, at which point this function will have to be called again to
   --/ regenerate it.
   --/
   --/ @return sfTrue if mipmap generation was successful, sfFalse if unsuccessful
   --/
   --//////////////////////////////////////////////////////////
   function generateMipmap (texture : sfTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Swap the contents of a texture with those of another
   --/
   --/ @param left  Instance to swap from
   --/ @param right Instance to swap with
   --/
   --//////////////////////////////////////////////////////////
   procedure swap (left : sfTexture_Ptr; right : sfTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the underlying OpenGL handle of the texture.
   --/
   --/ You shouldn't need to use this function, unless you have
   --/ very specific stuff to implement that SFML doesn't support,
   --/ or implement a temporary workaround until a bug is fixed.
   --/
   --/ @param texture The texture object
   --/
   --/ @return OpenGL handle of the texture or 0 if not yet created
   --/
   --//////////////////////////////////////////////////////////
   function getNativeHandle (texture : sfTexture_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Bind a texture for rendering
   --/
   --/ This function is not part of the graphics API, it mustn't be
   --/ used when drawing SFML entities. It must be used only if you
   --/ mix sfTexture with OpenGL code.
   --/
   --/ @code
   --/ sfTexture *t1, *t2;
   --/ ...
   --/ sfTexture_bind(t1);
   --/ // draw OpenGL stuff that use t1...
   --/ sfTexture_bind(t2);
   --/ // draw OpenGL stuff that use t2...
   --/ sfTexture_bind(NULL);
   --/ // draw OpenGL stuff that use no texture...
   --/ @endcode
   --/
   --/ @param texture Pointer to the texture to bind, can be null to use no texture
   --/
   --//////////////////////////////////////////////////////////
   procedure bind (texture : sfTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum texture size allowed
   --/
   --/ @return Maximum size allowed for textures, in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getMaximumSize return sfUint32;

private

   pragma Import (C, create, "sfTexture_create");
   pragma Import (C, createFromMemory, "sfTexture_createFromMemory");
   pragma Import (C, createFromStream, "sfTexture_createFromStream");
   pragma Import (C, createFromImage, "sfTexture_createFromImage");
   pragma Import (C, copy, "sfTexture_copy");
   pragma Import (C, destroy, "sfTexture_destroy");
   pragma Import (C, getSize, "sfTexture_getSize");
   pragma Import (C, copyToImage, "sfTexture_copyToImage");
   pragma Import (C, updateFromPixels, "sfTexture_updateFromPixels");
   pragma Import (C, updateFromImage, "sfTexture_updateFromImage");
   pragma Import (C, updateFromWindow, "sfTexture_updateFromWindow");
   pragma Import (C, updateFromRenderWindow, "sfTexture_updateFromRenderWindow");
   pragma Import (C, setSmooth, "sfTexture_setSmooth");
   pragma Import (C, isSmooth, "sfTexture_isSmooth");
   pragma Import (C, setSrgb, "sfTexture_setSrgb");
   pragma Import (C, isSrgb, "sfTexture_isSrgb");
   pragma Import (C, setRepeated, "sfTexture_setRepeated");
   pragma Import (C, isRepeated, "sfTexture_isRepeated");
   pragma Import (C, generateMipmap, "sfTexture_generateMipmap");
   pragma Import (C, swap, "sfTexture_swap");
   pragma Import (C, getNativeHandle, "sfTexture_getNativeHandle");
   pragma Import (C, bind, "sfTexture_bind");
   pragma Import (C, getMaximumSize, "sfTexture_getMaximumSize");

end Sf.Graphics.Texture;
