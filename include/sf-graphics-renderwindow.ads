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

with Sf.Window.VideoMode;
with Sf.Window.Window;
with Sf.Window.WindowHandle;
with Sf.Window.Event;

with Sf.System.Vector2;

with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.RenderStates;
with Sf.Graphics.Vertex;
with Sf.Graphics.PrimitiveType;

package Sf.Graphics.RenderWindow is
   use type Sf.Window.Window.sfWindowStyle;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new render window
   --/
   --/ @param mode     Video mode to use
   --/ @param title    Title of the window
   --/ @param style    Window style
   --/ @param settings Creation settings
   --/
   --//////////////////////////////////////////////////////////
   function create
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : Standard.String;
      style    : Sf.Window.Window.sfWindowStyle :=
        Sf.Window.Window.sfResize or Sf.Window.Window.sfClose;
      settings : Sf.Window.Window.sfContextSettings := Sf.Window.Window.sfDefaultContextSettings)
     return   sfRenderWindow_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Construct a new render window (with a UTF-32 title)
   --/
   --/ @param mode     Video mode to use
   --/ @param title    Title of the window (UTF-32)
   --/ @param style    Window style
   --/ @param settings Creation settings (pass NULL to use default values)
   --/
   --//////////////////////////////////////////////////////////
   function createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : access sfUint32;
      style    : sfUint32;
      settings : access constant Sf.Window.Window.sfContextSettings) return sfRenderWindow_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a render window from an existing control
   --/
   --/ @param handle   Platform-specific handle of the control
   --/ @param settings Creation settings (pass NULL to use default values)
   --/
   --//////////////////////////////////////////////////////////
   function createFromHandle
     (handle   : Sf.Window.WindowHandle.sfWindowHandle;
      settings : access constant Sf.Window.Window.sfContextSettings) return sfRenderWindow_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing render window
   --/
   --/ @param renderWindow Render window to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Close a render window (but doesn't destroy the internal data)
   --/
   --/ @param renderWindow Render window to close
   --/
   --//////////////////////////////////////////////////////////
   procedure close (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a render window is opened
   --/
   --/ @param renderWindow Render window object
   --/
   --//////////////////////////////////////////////////////////
   function isOpen (renderWindow : sfRenderWindow_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the creation settings of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Settings used to create the window
   --/
   --//////////////////////////////////////////////////////////
   function getSettings (renderWindow : sfRenderWindow_Ptr) return Sf.Window.Window.sfContextSettings;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the event on top of event queue of a render window, if any, and pop it
   --/
   --/ @param renderWindow Render window object
   --/ @param event        Event to fill, if any
   --/
   --/ @return sfTrue if an event was returned, sfFalse if event queue was empty
   --/
   --//////////////////////////////////////////////////////////
   function pollEvent (renderWindow : sfRenderWindow_Ptr;
                       event        : in out Sf.Window.Event.sfEvent) return sfBool;


   --//////////////////////////////////////////////////////////
   --/ @brief Wait for an event and return it
   --/
   --/ @param renderWindow Render window object
   --/ @param event        Event to fill
   --/
   --/ @return sfFalse if an error occured
   --/
   --//////////////////////////////////////////////////////////
   function waitEvent (renderWindow : sfRenderWindow_Ptr; event : in out Sf.Window.Event.sfEvent) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Position in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getPosition (renderWindow : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the position of a render window on screen
   --/
   --/ Only works for top-level windows
   --/
   --/ @param renderWindow Render window object
   --/ @param position     New position, in pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (renderWindow : sfRenderWindow_Ptr; position : Sf.System.Vector2.sfVector2i);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the rendering region of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function getSize (renderWindow : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the size of the rendering region of a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param size         New size, in pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure setSize (renderWindow : sfRenderWindow_Ptr; size : Sf.System.Vector2.sfVector2u);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the title of a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param title        New title
   --/
   --//////////////////////////////////////////////////////////
   procedure setTitle (renderWindow : sfRenderWindow_Ptr; title : String);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the title of a render window (with a UTF-32 string)
   --/
   --/ @param renderWindow Render window object
   --/ @param title        New title
   --/
   --//////////////////////////////////////////////////////////
   procedure setUnicodeTitle (renderWindow : sfRenderWindow_Ptr; title : access sfUint32);


   --//////////////////////////////////////////////////////////
   --/ @brief Change a render window's icon
   --/
   --/ @param renderWindow Render window object
   --/ @param width          Icon's width, in pixels
   --/ @param height         Icon's height, in pixels
   --/ @param pixels         Pointer to the pixels in memory, format must be RGBA 32 bits
   --/
   --//////////////////////////////////////////////////////////
   procedure setIcon (renderWindow  : sfRenderWindow_Ptr;
                      width, height : sfUint32;
                      pixels        : sfUint8_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Show or hide a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param visible      sfTrue to show the window, sfFalse to hide it
   --/
   --//////////////////////////////////////////////////////////
   procedure setVisible (renderWindow : sfRenderWindow_Ptr; visible : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable / disable vertical synchronization on a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param enabled        sfTrue to enable v-sync, sfFalse to deactivate
   --/
   --//////////////////////////////////////////////////////////
   procedure setVerticalSyncEnabled (renderWindow : sfRenderWindow_Ptr;
                                     enabled      : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Show or hide the mouse cursor on a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param show         sfTrue to show, sfFalse to hide
   --/
   --//////////////////////////////////////////////////////////
   procedure setMouseCursorVisible (renderWindow : sfRenderWindow_Ptr;
                                    show         : sfBool);


   --//////////////////////////////////////////////////////////
   --/ @brief Grab or release the mouse cursor
   --/
   --/ If set, grabs the mouse cursor inside this window's client
   --/ area so it may no longer be moved outside its bounds.
   --/ Note that grabbing is only active while the window has
   --/ focus and calling this function for fullscreen windows
   --/ won't have any effect (fullscreen windows always grab the
   --/ cursor).
   --/
   --/ @param grabbed sfTrue to enable, sfFalse to disable
   --/
   --//////////////////////////////////////////////////////////
   procedure setMouseCursorGrabbed (renderWindow : sfRenderWindow_Ptr;
                                    grabbed      : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the displayed cursor to a native system cursor
   --/
   --/ Upon window creation, the arrow cursor is used by default.
   --/
   --/ @warning The cursor must not be destroyed while in use by
   --/          the window.
   --/
   --/ @warning Features related to Cursor are not supported on
   --/          iOS and Android.
   --/
   --/ @param cursor Native system cursor type to display
   --/
   --/ @see sfCursor_createFromSystem
   --/ @see sfCursor_createFromPixels
   --/
   --//////////////////////////////////////////////////////////
   procedure setMouseCursor (renderWindow : sfRenderWindow_Ptr; cursor : Sf.Window.sfCursor_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable or disable automatic key-repeat for keydown events
   --/
   --/ Automatic key-repeat is enabled by default
   --/
   --/ @param renderWindow Render window object
   --/ @param enabled        sfTrue to enable, sfFalse to disable
   --/
   --//////////////////////////////////////////////////////////
   procedure setKeyRepeatEnabled (renderWindow : sfRenderWindow_Ptr; enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Limit the framerate to a maximum fixed frequency for a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param limit        Framerate limit, in frames per seconds (use 0 to disable limit)
   --/
   --//////////////////////////////////////////////////////////
   procedure setFramerateLimit (renderWindow : sfRenderWindow_Ptr; limit : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the joystick threshold, ie. the value below which no move event will be generated
   --/
   --/ @param renderWindow Render window object
   --/ @param threshold      New threshold, in range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   procedure setJoystickThreshold (renderWindow : sfRenderWindow_Ptr; threshold : Float);

   --//////////////////////////////////////////////////////////
   --/ @brief Activate or deactivate a render window as the current target for rendering
   --/
   --/ @param renderWindow Render window object
   --/ @param active         sfTrue to activate, sfFalse to deactivate
   --/
   --/ @return True if operation was successful, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function setActive (renderWindow : sfRenderWindow_Ptr; active : sfBool) return sfBool;

   --/////////////////////////////////////////////////////////
   --/ @brief Request the current render window to be made the active
   --/ foreground window
   --/
   --/ At any given time, only one window may have the input focus
   --/ to receive input events such as keystrokes or mouse events.
   --/ If a window requests focus, it only hints to the operating
   --/ system, that it would like to be focused. The operating system
   --/ is free to deny the request.
   --/ This is not to be confused with sfWindow_setActive().
   --/
   --/////////////////////////////////////////////////////////
   procedure requestFocus (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Check whether the render window has the input focus
   --/
   --/ At any given time, only one window may have the input focus
   --/ to receive input events such as keystrokes or most mouse
   --/ events.
   --/
   --/ @return True if window has focus, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function hasFocus (renderWindow : sfRenderWindow_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Display a render window on screen
   --/
   --/ @param renderWindow Render window object
   --/
   --//////////////////////////////////////////////////////////
   procedure display (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Retrieve the OS-specific handle of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Window handle
   --/
   --//////////////////////////////////////////////////////////
   function getSystemHandle (renderWindow : sfRenderWindow_Ptr) return Sf.Window.WindowHandle.sfWindowHandle;

   --//////////////////////////////////////////////////////////
   --/ @brief Clear a render window with the given color
   --/
   --/ @param renderWindow Render window object
   --/ @param color        Fill color
   --/
   --//////////////////////////////////////////////////////////
   procedure clear
     (renderWindow : sfRenderWindow_Ptr;
      color        : Sf.Graphics.Color.sfColor := Sf.Graphics.Color.sfBlack);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the current active view of a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param view         Pointer to the new view
   --/
   --//////////////////////////////////////////////////////////
   procedure setView (renderWindow : sfRenderWindow_Ptr;
                      view         : sfView_Ptr);


   --//////////////////////////////////////////////////////////
   --/ @brief Get the current active view of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Current active view
   --/
   --//////////////////////////////////////////////////////////
   function getView (renderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the default view of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Default view of the render window
   --/
   --//////////////////////////////////////////////////////////
   function getDefaultView (renderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the viewport of a view applied to this target
   --/
   --/ @param renderWindow Render window object
   --/ @param view         Target view
   --/
   --/ @return Viewport rectangle, expressed in pixels in the current target
   --/
   --//////////////////////////////////////////////////////////
   function getViewport (renderWindow : sfRenderWindow_Ptr; view : sfView_Ptr)
                        return Sf.Graphics.Rect.sfIntRect;

   --//////////////////////////////////////////////////////////
   --/ @brief Convert a point from window coordinates to world coordinates
   --/
   --/ This function finds the 2D position that matches the
   --/ given pixel of the render-window. In other words, it does
   --/ the inverse of what the graphics card does, to find the
   --/ initial position of a rendered pixel.
   --/
   --/ Initially, both coordinate systems (world units and target pixels)
   --/ match perfectly. But if you define a custom view or resize your
   --/ render-window, this assertion is not true anymore, ie. a point
   --/ located at (10, 50) in your render-window may map to the point
   --/ (150, 75) in your 2D world -- if the view is translated by (140, 25).
   --/
   --/ This function is typically used to find which point (or object) is
   --/ located below the mouse cursor.
   --/
   --/ This version uses a custom view for calculations, see the other
   --/ overload of the function if you want to use the current view of the
   --/ render-window.
   --/
   --/ @param renderWindow Render window object
   --/ @param point Pixel to convert
   --/ @param view The view to use for converting the point
   --/
   --/ @return The converted point, in "world" units
   --/
   --//////////////////////////////////////////////////////////
   function mapPixelToCoords
     (renderWindow : sfRenderWindow_Ptr;
      point        : Sf.System.Vector2.sfVector2i;
      view         : sfView_Ptr) return Sf.System.Vector2.sfVector2f;

   --//////////////////////////////////////////////////////////
   --/ @brief Convert a point from world coordinates to window coordinates
   --/
   --/ This function finds the pixel of the render-window that matches
   --/ the given 2D point. In other words, it goes through the same process
   --/ as the graphics card, to compute the final position of a rendered point.
   --/
   --/ Initially, both coordinate systems (world units and target pixels)
   --/ match perfectly. But if you define a custom view or resize your
   --/ render-window, this assertion is not true anymore, ie. a point
   --/ located at (150, 75) in your 2D world may map to the pixel
   --/ (10, 50) of your render-window -- if the view is translated by (140, 25).
   --/
   --/ This version uses a custom view for calculations, see the other
   --/ overload of the function if you want to use the current view of the
   --/ render-window.
   --/
   --/ @param renderWindow Render window object
   --/ @param point Point to convert
   --/ @param view The view to use for converting the point
   --/
   --/ @return The converted point, in target coordinates (pixels)
   --/
   --//////////////////////////////////////////////////////////
   function mapCoordsToPixel
     (renderWindow : sfRenderWindow_Ptr;
      point : Sf.System.Vector2.sfVector2f;
      view : sfView_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Draw a drawable object to the render-target
   --/
   --/ @param renderWindow render window object
   --/ @param object       Object to draw
   --/ @param states       Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure drawSprite
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfSprite_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawText
     (renderWindow : sfRenderWindow_Ptr;
      text         : sfText_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawShape
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfShape_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawCircleShape
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfShape_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawConvexShape
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfConvexShape_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawRectangleShape
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfRectangleShape_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawVertexArray
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfVertexArray_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);
   procedure drawVertexBuffer
     (renderWindow : sfRenderWindow_Ptr;
      object       : sfVertexBuffer_Ptr;
      states       : Sf.Graphics.RenderStates.sfRenderStates_Ptr := null);

   --//////////////////////////////////////////////////////////
   --/ @brief Draw primitives defined by an array of vertices to a render window
   --/
   --/ @param renderWindow render window object
   --/ @param vertices     Pointer to the vertices
   --/ @param vertexCount  Number of vertices in the array
   --/ @param primitiveType Type of primitives to draw
   --/ @param states       Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure drawPrimitives
     (renderWindow : sfRenderWindow_Ptr;
      vertices : access constant Sf.Graphics.Vertex.sfVertex;
      vertexCount : sfSize_t;
      primitiveType : Sf.Graphics.PrimitiveType.sfPrimitiveType;
      states : access constant Sf.Graphics.RenderStates.sfRenderStates);

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
   --/ @param renderWindow render window object
   --/
   --//////////////////////////////////////////////////////////
   procedure pushGLStates (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Restore the previously saved OpenGL render states and matrices
   --/
   --/ See the description of pushGLStates to get a detailed
   --/ description of these functions.
   --/
   --/ @param renderWindow render window object
   --/
   --//////////////////////////////////////////////////////////
   procedure popGLStates (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Reset the internal OpenGL states so that the target is ready for drawing
   --/
   --/ This function can be used when you mix SFML drawing
   --/ and direct OpenGL rendering, if you choose not to use
   --/ pushGLStates/popGLStates. It makes sure that all OpenGL
   --/ states needed by SFML are set, so that subsequent sfRenderWindow_draw*()
   --/ calls will work as expected.
   --/
   --/ @param renderWindow render window object
   --/
   --//////////////////////////////////////////////////////////
   procedure resetGLStates (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Copy the current contents of the window to an image
   --/
   --/ @deprecated
   --/ Use a sfTexture and its
   --/ sfTexture_updateFromRenderWindow(sfTexture*, const sfRenderWindow*, sfUint32 int, sfUint32 int)
   --/ function and copy its contents into an sfImage instead.
   --/ @code
   --/ sfVector2u windowSize = sfRenderWindow_getSize(window);
   --/ sfTexture* texture = sfTexture_create(windowSize.x, windowSize.y);
   --/ sfTexture_updateFromRenderWindow(texture, window, windowSize.x, windowSize.y);
   --/ sfImage* screenshot = sfTexture_copyToImage(texture);
   --/ @endcode
   --/
   --/ This is a slow operation, whose main purpose is to make
   --/ screenshots of the application. If you want to update an
   --/ image with the contents of the window and then use it for
   --/ drawing, you should rather use a sfTexture and the
   --/ sfTexture_updateFromWindow(sfTexture*, const sfWindow*, sfUint32 int, sfUint32 int) function.
   --/ You can also draw things directly to a texture with the
   --/ sfRenderTexture class.
   --/
   --/ @return sfImage containing the captured contents.
   --/
   --//////////////////////////////////////////////////////////
   function capture (renderWindow : sfRenderWindow_Ptr) return sfImage_Ptr;


   package Mouse is

      --//////////////////////////////////////////////////////////
      --/ @brief Get the current position of the mouse relative to a render-window
      --/
      --/ This function returns the current position of the mouse
      --/ cursor relative to the given render-window, or desktop if NULL is passed.
      --/
      --/ @param relativeTo Reference window
      --/
      --/ @return Position of the mouse cursor, relative to the given render window
      --/
      --//////////////////////////////////////////////////////////
      function getPosition (relativeTo : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

      --//////////////////////////////////////////////////////////
      --/ @brief Set the current position of the mouse relative to a render window
      --/
      --/ This function sets the current position of the mouse
      --/ cursor relative to the given render-window, or desktop if NULL is passed.
      --/
      --/ @param position   New position of the mouse
      --/ @param relativeTo Reference window
      --/
      --//////////////////////////////////////////////////////////
      procedure setPosition (position : Sf.System.Vector2.sfVector2i;
                                         relativeTo : sfRenderWindow_Ptr);

   private

      pragma Import (C, getPosition, "sfMouse_getPositionRenderWindow");
      pragma Import (C, setPosition, "sfMouse_setPositionRenderWindow");

   end Mouse;

   package Touch is

      --//////////////////////////////////////////////////////////
      --/ @brief Get the current position of a touch in window coordinates
      --/
      --/ This function returns the current touch position
      --/ relative to the given render window, or desktop if NULL is passed.
      --/
      --/ @param finger Finger index
      --/ @param relativeTo Reference window
      --/
      --/ @return Current position of @a finger, or undefined if it's not down
      --/
      --//////////////////////////////////////////////////////////
      function getPosition
        (finger     : sfUint32;
         relativeTo : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

   private
      pragma Import (C, getPosition, "sfTouch_getPositionRenderWindow");

   end Touch;

private

   pragma Import (C, createUnicode, "sfRenderWindow_createUnicode");
   pragma Import (C, createFromHandle, "sfRenderWindow_createFromHandle");
   pragma Import (C, destroy, "sfRenderWindow_destroy");
   pragma Import (C, close, "sfRenderWindow_close");
   pragma Import (C, isOpen, "sfRenderWindow_isOpen");
   pragma Import (C, getSettings, "sfRenderWindow_getSettings");
   pragma Import (C, pollEvent, "sfRenderWindow_pollEvent");
   pragma Import (C, waitEvent, "sfRenderWindow_waitEvent");
   pragma Import (C, getPosition, "sfRenderWindow_getPosition");
   pragma Import (C, setPosition, "sfRenderWindow_setPosition");
   pragma Import (C, getSize, "sfRenderWindow_getSize");
   pragma Import (C, setSize, "sfRenderWindow_setSize");
   pragma Import (C, setUnicodeTitle, "sfRenderWindow_setUnicodeTitle");
   pragma Import (C, setIcon, "sfRenderWindow_setIcon");
   pragma Import (C, setVisible, "sfRenderWindow_setVisible");
   pragma Import (C, setVerticalSyncEnabled, "sfRenderWindow_setVerticalSyncEnabled");
   pragma Import (C, setMouseCursorVisible, "sfRenderWindow_setMouseCursorVisible");
   pragma Import (C, setMouseCursorGrabbed, "sfRenderWindow_setMouseCursorGrabbed");
   pragma Import (C, setMouseCursor, "sfRenderWindow_setMouseCursor");
   pragma Import (C, setKeyRepeatEnabled, "sfRenderWindow_setKeyRepeatEnabled");
   pragma Import (C, setFramerateLimit, "sfRenderWindow_setFramerateLimit");
   pragma Import (C, setJoystickThreshold, "sfRenderWindow_setJoystickThreshold");
   pragma Import (C, setActive, "sfRenderWindow_setActive");
   pragma Import (C, requestFocus, "sfRenderWindow_requestFocus");
   pragma Import (C, hasFocus, "sfRenderWindow_hasFocus");
   pragma Import (C, display, "sfRenderWindow_display");
   pragma Import (C, getSystemHandle, "sfRenderWindow_getSystemHandle");
   pragma Import (C, clear, "sfRenderWindow_clear");
   pragma Import (C, setView, "sfRenderWindow_setView");
   pragma Import (C, getView, "sfRenderWindow_getView");
   pragma Import (C, getDefaultView, "sfRenderWindow_getDefaultView");
   pragma Import (C, getViewport, "sfRenderWindow_getViewport");
   pragma Import (C, mapPixelToCoords, "sfRenderWindow_mapPixelToCoords");
   pragma Import (C, mapCoordsToPixel, "sfRenderWindow_mapCoordsToPixel");
   pragma Import (C, drawSprite, "sfRenderWindow_drawSprite");
   pragma Import (C, drawText, "sfRenderWindow_drawText");
   pragma Import (C, drawShape, "sfRenderWindow_drawShape");
   pragma Import (C, drawCircleShape, "sfRenderWindow_drawCircleShape");
   pragma Import (C, drawConvexShape, "sfRenderWindow_drawConvexShape");
   pragma Import (C, drawRectangleShape, "sfRenderWindow_drawRectangleShape");
   pragma Import (C, drawVertexArray, "sfRenderWindow_drawVertexArray");
   pragma Import (C, drawVertexBuffer, "sfRenderWindow_drawVertexBuffer");
   pragma Import (C, drawPrimitives, "sfRenderWindow_drawPrimitives");
   pragma Import (C, pushGLStates, "sfRenderWindow_pushGLStates");
   pragma Import (C, popGLStates, "sfRenderWindow_popGLStates");
   pragma Import (C, resetGLStates, "sfRenderWindow_resetGLStates");
   pragma Import (C, capture, "sfRenderWindow_capture");

end Sf.Graphics.RenderWindow;
