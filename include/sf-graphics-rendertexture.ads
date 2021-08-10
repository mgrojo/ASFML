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

with Sf.Window.Window;
with Sf.System.Vector2;
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.RenderStates;
with Sf.Graphics.Vertex;
with Sf.Graphics.PrimitiveType;

package Sf.Graphics.RenderTexture is

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new render texture
   --/
   --/ @param width       Width of the render texture
   --/ @param height      Height of the render texture
   --/ @param depthBuffer Do you want a depth-buffer attached? (useful only if you're doing 3D OpenGL on the rendertexture)
   --/
   --/ @return A new sfRenderTexture object, or null if it failed
   --/
   --/ @deprecated
   --/ Use sfRenderTexture_createWithSettings instead.
   --/
   --//////////////////////////////////////////////////////////
   function create
     (width       : sfUint32;
      height      : sfUint32;
      depthBuffer : sfBool) return sfRenderTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new render texture
   --/
   --/ @param width    Width of the render texture
   --/ @param height   Height of the render texture
   --/ @param settings Settings of the render texture
   --/
   --/ @return A new sfRenderTexture object, or null if it failed
   --/
   --//////////////////////////////////////////////////////////
   function createWithSettings
     (width : sfUint32;
      height : sfUint32;
      settings : Sf.Window.Window.sfContextSettings) return sfRenderTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing render texture
   --/
   --/ @param renderTexture Render texture to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the rendering region of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getSize (renderTexture : sfRenderTexture_Ptr)
                                    return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Activate or deactivate a render texture as the current target for rendering
   --/
   --/ @param renderTexture Render texture object
   --/ @param active        sfTrue to activate, sfFalse to deactivate
   --/
   --/ @return True if operation was successful, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function setActive (renderTexture : sfRenderTexture_Ptr;
                                       active        : sfBool) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Update the contents of the target texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure display (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Clear the rendertexture with the given color
   --/
   --/ @param renderTexture Render texture object
   --/ @param color         Fill color
   --/
   --//////////////////////////////////////////////////////////
   procedure clear (renderTexture : sfRenderTexture_Ptr;
                                    color         : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current active view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param view          Pointer to the new view
   --/
   --//////////////////////////////////////////////////////////
   procedure setView (renderTexture : sfRenderTexture_Ptr;
                                      view          : sfView_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current active view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Current active view
   --/
   --//////////////////////////////////////////////////////////
   function getView (renderTexture : sfRenderTexture_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the default view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Default view of the rendertexture
   --/
   --//////////////////////////////////////////////////////////
   function getDefaultView (renderTexture : sfRenderTexture_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the viewport of a view applied to this target
   --/
   --/ @param renderTexture Render texture object
   --/ @param view          Target view
   --/
   --/ @return Viewport rectangle, expressed in pixels in the current target
   --/
   --//////////////////////////////////////////////////////////
   function getViewport (renderTexture : sfRenderTexture_Ptr; view : sfView_Ptr)
                                        return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Convert a point from texture coordinates to world coordinates
   --/
   --/ This function finds the 2D position that matches the
   --/ given pixel of the render-texture. In other words, it does
   --/ the inverse of what the graphics card does, to find the
   --/ initial position of a rendered pixel.
   --/
   --/ Initially, both coordinate systems (world units and target pixels)
   --/ match perfectly. But if you define a custom view or resize your
   --/ render-texture, this assertion is not true anymore, ie. a point
   --/ located at (10, 50) in your render-texture may map to the point
   --/ (150, 75) in your 2D world -- if the view is translated by (140, 25).
   --/
   --/ This version uses a custom view for calculations, see the other
   --/ overload of the function if you want to use the current view of the
   --/ render-texture.
   --/
   --/ @param renderTexture Render texture object
   --/ @param point Pixel to convert
   --/ @param view The view to use for converting the point
   --/
   --/ @return The converted point, in "world" units
   --/
   --//////////////////////////////////////////////////////////
   function mapPixelToCoords
     (renderTexture : sfRenderTexture_Ptr;
      point         : Sf.System.Vector2.sfVector2i;
      view          : sfView_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Convert a point from world coordinates to texture coordinates
   --/
   --/ This function finds the pixel of the render-texture that matches
   --/ the given 2D point. In other words, it goes through the same process
   --/ as the graphics card, to compute the final position of a rendered point.
   --/
   --/ Initially, both coordinate systems (world units and target pixels)
   --/ match perfectly. But if you define a custom view or resize your
   --/ render-texture, this assertion is not true anymore, ie. a point
   --/ located at (150, 75) in your 2D world may map to the pixel
   --/ (10, 50) of your render-texture -- if the view is translated by (140, 25).
   --/
   --/ This version uses a custom view for calculations, see the other
   --/ overload of the function if you want to use the current view of the
   --/ render-texture.
   --/
   --/ @param renderTexture Render texture object
   --/ @param point Point to convert
   --/ @param view The view to use for converting the point
   --/
   --/ @return The converted point, in target coordinates (pixels)
   --/
   --//////////////////////////////////////////////////////////
   function mapCoordsToPixel
     (renderTexture : sfRenderTexture_Ptr;
      point         : Sf.System.Vector2.sfVector2f;
      view          : sfView_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Draw a drawable object to the render-target
   --/
   --/ @param renderTexture Render texture object
   --/ @param object        Object to draw
   --/ @param states        Render states to use for drawing (null to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure drawSprite
     (renderTexture : sfRenderTexture_Ptr;
      object : sfSprite_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawText
     (renderTexture : sfRenderTexture_Ptr;
      object : sfText_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawCircleShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfCircleShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawConvexShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfConvexShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawRectangleShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfRectangleShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawVertexArray
     (renderTexture : sfRenderTexture_Ptr;
      object : sfVertexArray_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   procedure drawVertexBuffer
     (renderTexture : sfRenderTexture_Ptr;
      object : sfVertexBuffer_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates := null);

   --//////////////////////////////////////////////////////////
   --/ @brief Draw primitives defined by an array of vertices to a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param vertices      Pointer to the vertices
   --/ @param vertexCount   Number of vertices in the array
   --/ @param primitiveType Type of primitives to draw
   --/ @param states        Render states to use for drawing (null to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure drawPrimitives
     (renderTexture : sfRenderTexture_Ptr;
      vertices      : access constant Sf.Graphics.Vertex.sfVertex;
      vertexCount   : sfSize_t;
      primitiveType : Sf.Graphics.PrimitiveType.sfPrimitiveType;
      states        : access constant Sf.Graphics.RenderStates.sfRenderStates);

   --//////////////////////////////////////////////////////////
   --/ @brief Save the current OpenGL render states and matrices
   --/
   --/ This function can be used when you mix SFML drawing
   --/ and direct OpenGL rendering. Combined with popGLStates,
   --/ it ensures that:
   --/ @li SFML's internal states are not messed up by your OpenGL code
   --/ @li your OpenGL states are not modified by a call to a SFML function
   --/
   --/ Note that this function is quite expensive: it saves all the
   --/ possible OpenGL states and matrices, even the ones you
   --/ don't care about. Therefore it should be used wisely.
   --/ It is provided for convenience, but the best results will
   --/ be achieved if you handle OpenGL states yourself (because
   --/ you know which states have really changed, and need to be
   --/ saved and restored). Take a look at the resetGLStates
   --/ function if you do so.
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure pushGLStates (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Restore the previously saved OpenGL render states and matrices
   --/
   --/ See the description of pushGLStates to get a detailed
   --/ description of these functions.
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure popGLStates (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Reset the internal OpenGL states so that the target is ready for drawing
   --/
   --/ This function can be used when you mix SFML drawing
   --/ and direct OpenGL rendering, if you choose not to use
   --/ pushGLStates/popGLStates. It makes sure that all OpenGL
   --/ states needed by SFML are set, so that subsequent sfRenderTexture_draw*()
   --/ calls will work as expected.
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure resetGLStates (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the target texture of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Pointer to the target texture
   --/
   --//////////////////////////////////////////////////////////
   function getTexture (renderTexture : sfRenderTexture_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the maximum anti-aliasing level supported by the system
   --/
   --/ @return The maximum anti-aliasing level supported by the system
   --/
   --//////////////////////////////////////////////////////////
   function getMaximumAntialiasingLevel return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable the smooth filter on a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param smooth        sfTrue to enable smoothing, sfFalse to disable it
   --/
   --//////////////////////////////////////////////////////////
   procedure setSmooth (renderTexture : sfRenderTexture_Ptr; smooth : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the smooth filter is enabled or not for a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return sfTrue if smoothing is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function isSmooth (renderTexture : sfRenderTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable texture repeating
   --/
   --/ @param renderTexture Render texture object
   --/ @param repeated      sfTrue to enable repeating, sfFalse to disable it
   --/
   --//////////////////////////////////////////////////////////
   procedure setRepeated (renderTexture : sfRenderTexture_Ptr; repeated : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the texture is repeated or not
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return sfTrue if repeat mode is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function isRepeated (renderTexture : sfRenderTexture_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Generate a mipmap using the current texture data
   --/
   --/ This function is similar to sfTexture_generateMipmap and operates
   --/ on the texture used as the target for drawing.
   --/ Be aware that any draw operation may modify the base level image data.
   --/ For this reason, calling this function only makes sense after all
   --/ drawing is completed and display has been called. Not calling display
   --/ after subsequent drawing will lead to undefined behavior if a mipmap
   --/ had been previously generated.
   --/
   --/ @return sfTrue if mipmap generation was successful, sfFalse if unsuccessful
   --/
   --//////////////////////////////////////////////////////////
   function generateMipmap (renderTexture : sfRenderTexture_Ptr) return sfBool;

private

   pragma Import (C, create, "sfRenderTexture_create");
   pragma Import (C, createWithSettings, "sfRenderTexture_createWithSettings");
   pragma Import (C, destroy, "sfRenderTexture_destroy");
   pragma Import (C, getSize, "sfRenderTexture_getSize");
   pragma Import (C, setActive, "sfRenderTexture_setActive");
   pragma Import (C, display, "sfRenderTexture_display");
   pragma Import (C, clear, "sfRenderTexture_clear");
   pragma Import (C, setView, "sfRenderTexture_setView");
   pragma Import (C, getView, "sfRenderTexture_getView");
   pragma Import (C, getDefaultView, "sfRenderTexture_getDefaultView");
   pragma Import (C, getViewport, "sfRenderTexture_getViewport");
   pragma Import (C, mapPixelToCoords, "sfRenderTexture_mapPixelToCoords");
   pragma Import (C, mapCoordsToPixel, "sfRenderTexture_mapCoordsToPixel");
   pragma Import (C, drawSprite, "sfRenderTexture_drawSprite");
   pragma Import (C, drawText, "sfRenderTexture_drawText");
   pragma Import (C, drawShape, "sfRenderTexture_drawShape");
   pragma Import (C, drawCircleShape, "sfRenderTexture_drawCircleShape");
   pragma Import (C, drawConvexShape, "sfRenderTexture_drawConvexShape");
   pragma Import (C, drawRectangleShape, "sfRenderTexture_drawRectangleShape");
   pragma Import (C, drawVertexArray, "sfRenderTexture_drawVertexArray");
   pragma Import (C, drawVertexBuffer, "sfRenderTexture_drawVertexBuffer");
   pragma Import (C, drawPrimitives, "sfRenderTexture_drawPrimitives");
   pragma Import (C, pushGLStates, "sfRenderTexture_pushGLStates");
   pragma Import (C, popGLStates, "sfRenderTexture_popGLStates");
   pragma Import (C, resetGLStates, "sfRenderTexture_resetGLStates");
   pragma Import (C, getTexture, "sfRenderTexture_getTexture");
   pragma Import (C, getMaximumAntialiasingLevel, "sfRenderTexture_getMaximumAntialiasingLevel");
   pragma Import (C, setSmooth, "sfRenderTexture_setSmooth");
   pragma Import (C, isSmooth, "sfRenderTexture_isSmooth");
   pragma Import (C, setRepeated, "sfRenderTexture_setRepeated");
   pragma Import (C, isRepeated, "sfRenderTexture_isRepeated");
   pragma Import (C, generateMipmap, "sfRenderTexture_generateMipmap");

end Sf.Graphics.RenderTexture;
