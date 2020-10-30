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
with Sf.Config;
with System;
with Sf.System.Vector2;
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.RenderStates;
with Sf.Graphics.Vertex;
with Sf.Graphics.PrimitiveType;
with Sf.Graphics.Types;

package Sf.Graphics.RenderTexture is
   use Types;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new render texture
   --/
   --/ @param width       Width of the render texture
   --/ @param height      Height of the render texture
   --/ @param depthBuffer Do you want a depth-buffer attached? (useful only if you're doing 3D OpenGL on the rendertexture)
   --/
   --/ @return A new sfRenderTexture object, or NULL if it failed
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_create
     (width : unsigned;
      height : unsigned;
      depthBuffer : Sf.Config.sfBool) return sfRenderTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing render texture
   --/
   --/ @param renderTexture Render texture to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_destroy (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the rendering region of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_getSize (renderTexture : sfRenderTexture_Ptr) return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Activate or deactivate a render texture as the current target for rendering
   --/
   --/ @param renderTexture Render texture object
   --/ @param active        sfTrue to activate, sfFalse to deactivate
   --/
   --/ @return True if operation was successful, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_setActive (renderTexture : sfRenderTexture_Ptr; active : Sf.Config.sfBool) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Update the contents of the target texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_display (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Clear the rendertexture with the given color
   --/
   --/ @param renderTexture Render texture object
   --/ @param color         Fill color
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_clear (renderTexture : sfRenderTexture_Ptr; color : Sf.Graphics.Color.sfColor);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current active view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param view          Pointer to the new view
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_setView (renderTexture : sfRenderTexture_Ptr; view : sfView_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current active view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Current active view
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_getView (renderTexture : sfRenderTexture_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the default view of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Default view of the rendertexture
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_getDefaultView (renderTexture : sfRenderTexture_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the viewport of a view applied to this target
   --/
   --/ @param renderTexture Render texture object
   --/ @param view          Target view
   --/
   --/ @return Viewport rectangle, expressed in pixels in the current target
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_getViewport (renderTexture : sfRenderTexture_Ptr; view : sfView_Ptr)
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
   function sfRenderTexture_mapPixelToCoords
     (renderTexture : sfRenderTexture_Ptr;
      point : Sf.System.Vector2.sfVector2i;
      view : sfView_Ptr) return Sf.System.Vector2.sfVector2f;

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
   function sfRenderTexture_mapCoordsToPixel
     (renderTexture : sfRenderTexture_Ptr;
      point : Sf.System.Vector2.sfVector2f;
      view : sfView_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Draw a drawable object to the render-target
   --/
   --/ @param renderTexture Render texture object
   --/ @param object        Object to draw
   --/ @param states        Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_drawSprite
     (renderTexture : sfRenderTexture_Ptr;
      object : sfView_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawText
     (renderTexture : sfRenderTexture_Ptr;
      object : sfText_Ptr;
      arg3 : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawCircleShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfCircleShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawConvexShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfConvexShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawRectangleShape
     (renderTexture : sfRenderTexture_Ptr;
      object : sfRectangleShape_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   procedure sfRenderTexture_drawVertexArray
     (renderTexture : sfRenderTexture_Ptr;
      object : sfVertexArray_Ptr;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

   --//////////////////////////////////////////////////////////
   --/ @brief Draw primitives defined by an array of vertices to a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param vertices      Pointer to the vertices
   --/ @param vertexCount   Number of vertices in the array
   --/ @param primitiveType Type of primitives to draw
   --/ @param states        Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_drawPrimitives
     (renderTexture : sfRenderTexture_Ptr;
      vertices      : access constant Sf.Graphics.Vertex.sfVertex;
      vertexCount   : size_t;
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
   procedure sfRenderTexture_pushGLStates (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Restore the previously saved OpenGL render states and matrices
   --/
   --/ See the description of pushGLStates to get a detailed
   --/ description of these functions.
   --/
   --/ @param renderTexture Render texture object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_popGLStates (renderTexture : sfRenderTexture_Ptr);

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
   procedure sfRenderTexture_resetGLStates (renderTexture : sfRenderTexture_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the target texture of a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return Pointer to the target texture
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_getTexture (renderTexture : sfRenderTexture_Ptr) return sfTexture_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable the smooth filter on a render texture
   --/
   --/ @param renderTexture Render texture object
   --/ @param smooth        sfTrue to enable smoothing, sfFalse to disable it
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_setSmooth (renderTexture : sfRenderTexture_Ptr; smooth : Sf.Config.sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the smooth filter is enabled or not for a render texture
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return sfTrue if smoothing is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_isSmooth (renderTexture : sfRenderTexture_Ptr) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable texture repeating
   --/
   --/ @param renderTexture Render texture object
   --/ @param repeated      sfTrue to enable repeating, sfFalse to disable it
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderTexture_setRepeated (renderTexture : sfRenderTexture_Ptr; repeated : Sf.Config.sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether the texture is repeated or not
   --/
   --/ @param renderTexture Render texture object
   --/
   --/ @return sfTrue if repeat mode is enabled, sfFalse if it is disabled
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderTexture_isRepeated (renderTexture : sfRenderTexture_Ptr) return Sf.Config.sfBool;

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
   function sfRenderTexture_generateMipmap (renderTexture : sfRenderTexture_Ptr)
					   return Sf.Config.sfBool;

private

   pragma Import (C, sfRenderTexture_create, "sfRenderTexture_create");
   pragma Import (C, sfRenderTexture_destroy, "sfRenderTexture_destroy");
   pragma Import (C, sfRenderTexture_getSize, "sfRenderTexture_getSize");
   pragma Import (C, sfRenderTexture_setActive, "sfRenderTexture_setActive");
   pragma Import (C, sfRenderTexture_display, "sfRenderTexture_display");
   pragma Import (C, sfRenderTexture_clear, "sfRenderTexture_clear");
   pragma Import (C, sfRenderTexture_setView, "sfRenderTexture_setView");
   pragma Import (C, sfRenderTexture_getView, "sfRenderTexture_getView");
   pragma Import (C, sfRenderTexture_getDefaultView, "sfRenderTexture_getDefaultView");
   pragma Import (C, sfRenderTexture_getViewport, "sfRenderTexture_getViewport");
   pragma Import (C, sfRenderTexture_mapPixelToCoords, "sfRenderTexture_mapPixelToCoords");
   pragma Import (C, sfRenderTexture_mapCoordsToPixel, "sfRenderTexture_mapCoordsToPixel");
   pragma Import (C, sfRenderTexture_drawSprite, "sfRenderTexture_drawSprite");
   pragma Import (C, sfRenderTexture_drawText, "sfRenderTexture_drawText");
   pragma Import (C, sfRenderTexture_drawShape, "sfRenderTexture_drawShape");
   pragma Import (C, sfRenderTexture_drawCircleShape, "sfRenderTexture_drawCircleShape");
   pragma Import (C, sfRenderTexture_drawConvexShape, "sfRenderTexture_drawConvexShape");
   pragma Import (C, sfRenderTexture_drawRectangleShape, "sfRenderTexture_drawRectangleShape");
   pragma Import (C, sfRenderTexture_drawVertexArray, "sfRenderTexture_drawVertexArray");
   pragma Import (C, sfRenderTexture_drawPrimitives, "sfRenderTexture_drawPrimitives");
   pragma Import (C, sfRenderTexture_pushGLStates, "sfRenderTexture_pushGLStates");
   pragma Import (C, sfRenderTexture_popGLStates, "sfRenderTexture_popGLStates");
   pragma Import (C, sfRenderTexture_resetGLStates, "sfRenderTexture_resetGLStates");
   pragma Import (C, sfRenderTexture_getTexture, "sfRenderTexture_getTexture");
   pragma Import (C, sfRenderTexture_setSmooth, "sfRenderTexture_setSmooth");
   pragma Import (C, sfRenderTexture_isSmooth, "sfRenderTexture_isSmooth");
   pragma Import (C, sfRenderTexture_setRepeated, "sfRenderTexture_setRepeated");
   pragma Import (C, sfRenderTexture_isRepeated, "sfRenderTexture_isRepeated");
   pragma Import (C, sfRenderTexture_generateMipmap, "sfRenderTexture_generateMipmap");

end Sf.Graphics.RenderTexture;
