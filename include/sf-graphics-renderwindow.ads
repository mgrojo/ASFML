--//////////////////////////////////////////////////////////
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
--//////////////////////////////////////////////////////////

with Sf.Config;
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.Types;
with Sf.Graphics.RenderStates;
with Sf.Graphics.Sprite;
with Sf.Graphics.PrimitiveType;
with Sf.Window.Event;
with Sf.Window.VideoMode;
with Sf.Window.WindowHandle;
with Sf.Window.Window;
with Sf.Window.Types;
with Sf.System.Vector2;
with Sf.Graphics.Vertex;

with Interfaces.C; use Interfaces.C;

package Sf.Graphics.RenderWindow is
   use Sf.Config;
   use Sf.Graphics.Color;
   use Sf.Graphics.Rect;
   use Sf.Graphics.Types;
   use Sf.Graphics.RenderStates;
   use Sf.Window.Event;
   use Sf.Window.VideoMode;
   use Sf.Window.WindowHandle;
   use Sf.Window.Window;
   use Sf.Window.Types;

   --//////////////////////////////////////////////////////////
   --/ Construct a new renderwindow
   --/
   --/ @param Mode     Video mode to use
   --/ @param Title    Title of the window
   --/ @param Style    Window style
   --/ @param Params   Creation settings
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_Create
     (Mode   : sfVideoMode;
      Title  : Standard.String;
      Style  : sfUint32 := sfResize or sfClose;
      Params : sfContextSettings := sfDefaultContextSettings)
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
   function sfRenderWindow_createUnicode
     (mode     : Sf.Window.VideoMode.sfVideoMode;
      title    : access Sf.Config.sfUint32;
      style    : Sf.Config.sfUint32;
      settings : access constant Sf.Window.Window.sfContextSettings) return sfRenderWindow_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Construct a render window from an existing control
   --/
   --/ @param Handle   Platform-specific handle of the control
   --/ @param Params   Creation settings
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_CreateFromHandle (Handle : sfWindowHandle; Params : sfContextSettings) return sfRenderWindow_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing renderwindow
   --/
   --/ @param RenderWindow   Renderwindow to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_Destroy (RenderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Close a renderwindow (but doesn't destroy the internal data)
   --/
   --/ @param RenderWindow   Renderwindow to close
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_Close (RenderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether or not a rende rwindow is open
   --/
   --/ @param RenderWindow   Renderwindow object
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_IsOpen (RenderWindow : sfRenderWindow_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ Get the creation settings of a window
   --/
   --/ @param RenderWindow   Renderwindow object
   --/
   --/ @return Settings used to create the window
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_GetSettings (RenderWindow : sfRenderWindow_Ptr) return sfContextSettings;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the event on top of event queue of a render window, if any, and pop it
   --/
   --/ @param renderWindow Render window object
   --/ @param event        Event to fill, if any
   --/
   --/ @return sfTrue if an event was returned, sfFalse if event queue was empty
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_PollEvent (RenderWindow : sfRenderWindow_Ptr;
                                      Event : access sfEvent) return sfBool;


   --//////////////////////////////////////////////////////////
   --/ @brief Wait for an event and return it
   --/
   --/ @param renderWindow Render window object
   --/ @param event        Event to fill
   --/
   --/ @return sfFalse if an error occured
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_waitEvent (renderWindow : sfRenderWindow_Ptr; event : access Sf.Window.Event.sfEvent) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the position of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Position in pixels
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_getPosition (renderWindow : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the position of a render window on screen
   --/
   --/ Only works for top-level windows
   --/
   --/ @param renderWindow Render window object
   --/ @param position     New position, in pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setPosition (renderWindow : sfRenderWindow_Ptr; position : Sf.System.Vector2.sfVector2i);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the rendering region of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Size in pixels
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_getSize (renderWindow : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2u;

   --//////////////////////////////////////////////////////////
   --/ @brief Change the size of the rendering region of a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param size         New size, in pixels
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setSize (renderWindow : sfRenderWindow_Ptr; size : Sf.System.Vector2.sfVector2u);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the title of a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param title        New title
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setTitle (renderWindow : sfRenderWindow_Ptr; title : Standard.String);

   --//////////////////////////////////////////////////////////
   --/ @brief Change the title of a render window (with a UTF-32 string)
   --/
   --/ @param renderWindow Render window object
   --/ @param title        New title
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setUnicodeTitle (renderWindow : sfRenderWindow_Ptr; title : access Sf.Config.sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Enable / disable vertical synchronization on a render window
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Enabled        sfTrue to enable v-sync, sfFalse to deactivate
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetVerticalSyncEnabled (RenderWindow : sfRenderWindow_Ptr;
                                                    Enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Show or hide the mouse cursor on a render window
   --/
   --/ @param renderWindow Render window object
   --/ @param show         sfTrue to show, sfFalse to hide
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setMouseCursorVisible (RenderWindow : sfRenderWindow_Ptr; Show : sfBool);


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
   procedure sfRenderWindow_setMouseCursorGrabbed (RenderWindow : sfRenderWindow_Ptr;
                                                   grabbed : sfBool);

   --//////////////////////////////////////////////////////////
   --/ Change the position of a window on screen.
   --/ Only works for top-level windows
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Left           Left position
   --/ @param Top            Top position
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetPosition (RenderWindow : sfRenderWindow_Ptr; Left, Top : Integer);

   --//////////////////////////////////////////////////////////
   --/ Change the size of the rendering region of a window
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Width          New Width
   --/ @param Height         New Height
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetSize (RenderWindow : sfRenderWindow_Ptr; Width, Height : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ @brief Show or hide a render window
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param State          sfTrue to show, sfFalse to hide
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setVisible (RenderWindow : sfRenderWindow_Ptr; State : sfBool);

   --//////////////////////////////////////////////////////////
   --/ Enable or disable automatic key-repeat for keydown events.
   --/ Automatic key-repeat is enabled by default
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Enabled        sfTrue to enable, sfFalse to disable
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_setKeyRepeatEnabled (RenderWindow : sfRenderWindow_Ptr; Enabled : sfBool);

   --//////////////////////////////////////////////////////////
   --/ Change the window's icon
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Width          Icon's width, in pixels
   --/ @param Height         Icon's height, in pixels
   --/ @param Pixels         Pointer to the pixels in memory, format must be RGBA 32 bits
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetIcon (RenderWindow : sfRenderWindow_Ptr; Width, Height : unsigned;
                                     Pixels : sfUint8_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Activate or deactivate a window as the current target for rendering
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Active         sfTrue to activate, sfFalse to deactivate
   --/
   --/ @return True if operation was successful, false otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_SetActive (RenderWindow : sfRenderWindow_Ptr; Active : sfBool) return sfBool;

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
   procedure sfRenderWindow_requestFocus (renderWindow : sfRenderWindow_Ptr);

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
   function sfRenderWindow_hasFocus (renderWindow : sfRenderWindow_Ptr) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ Display a window on screen
   --/
   --/ @param RenderWindow   Renderwindow object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_Display (RenderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Limit the framerate to a maximum fixed frequency for a window
   --/
   --/ @param RenderWindow   Renderwindow object
   --/
   --/ @param Limit   Framerate limit, in frames per seconds (use 0 to disable limit)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetFramerateLimit (RenderWindow : sfRenderWindow_Ptr; Limit : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ Change the joystick threshold, ie. the value below which
   --/ no move event will be generated
   --/
   --/ @param RenderWindow   Renderwindow object
   --/ @param Threshold      New threshold, in range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetJoystickThreshold (RenderWindow : sfRenderWindow_Ptr; Threshold : Float);

   --//////////////////////////////////////////////////////////
   --/ Draw something on a renderwindow
   --/
   --/ @param RenderWindow Renderwindow to draw in
   --/ @param object       Object to draw
   --/ @param states       Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_DrawSprite (RenderWindow : sfRenderWindow_Ptr;
                                        Object : sfSprite_Ptr;
                                        States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawText (RenderWindow : sfRenderWindow_Ptr;
                                      Text : sfText_Ptr;
                                      States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawShape (RenderWindow : sfRenderWindow_Ptr;
                                       Object : sfShape_Ptr;
                                       States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawCircleShape (RenderWindow : sfRenderWindow_Ptr;
                                             Object : sfShape_Ptr;
                                             States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawConvexShape (RenderWindow : sfRenderWindow_Ptr;
                                             Object : sfConvexShape_Ptr;
                                             States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawRectangleShape (RenderWindow : sfRenderWindow_Ptr;
                                                Object : sfRectangleShape_Ptr;
                                                States :  sfRenderStates_Ptr := null);
   procedure sfRenderWindow_DrawVertexArray (RenderWindow : sfRenderWindow_Ptr;
                                             Object : sfVertexArray_Ptr;
                                             States :  sfRenderStates_Ptr := null);

   --//////////////////////////////////////////////////////////
   --/ @brief Draw primitives defined by an array of vertices to a render window
   --/
   --/ @param renderWindow render window object
   --/ @param vertices     Pointer to the vertices
   --/ @param vertexCount  Number of vertices in the array
   --/ @param type         Type of primitives to draw
   --/ @param states       Render states to use for drawing (NULL to use the default states)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_drawPrimitives
     (renderWindow : sfRenderWindow_Ptr;
      vertices : access constant Sf.Graphics.Vertex.sfVertex;
      vertexCount : size_t;
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
   procedure sfRenderWindow_pushGLStates (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Restore the previously saved OpenGL render states and matrices
   --/
   --/ See the description of pushGLStates to get a detailed
   --/ description of these functions.
   --/
   --/ @param renderWindow render window object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_popGLStates (renderWindow : sfRenderWindow_Ptr);

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
   procedure sfRenderWindow_resetGLStates (renderWindow : sfRenderWindow_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Save the content of a renderwindow to an image
   --/
   --/ @param RenderWindow   Renderwindow to capture
   --/
   --/ @return Image instance containing the contents of the screen
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_Capture (RenderWindow : sfRenderWindow_Ptr) return sfImage_Ptr;


   --//////////////////////////////////////////////////////////
   --/ @brief Retrieve the OS-specific handle of a render window
   --/
   --/ @param renderWindow Render window object
   --/
   --/ @return Window handle
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_getSystemHandle (renderWindow : sfRenderWindow_Ptr) return Sf.Window.WindowHandle.sfWindowHandle;

   --//////////////////////////////////////////////////////////
   --/ Clear the screen with the given color
   --/
   --/ @param RenderWindow   Renderwindow to modify
   --/ @param Color          Fill color
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_Clear (RenderWindow : sfRenderWindow_Ptr; Color : sfColor);

   --//////////////////////////////////////////////////////////
   --/ Change the current active view of a renderwindow
   --/
   --/ @param RenderWindow   Renderwindow to modify
   --/ @param NewView        Pointer to the new view
   --/
   --//////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetView (RenderWindow : sfRenderWindow_Ptr; View : sfView_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Get the current active view of a renderwindow
   --/
   --/ @param RenderWindow   Renderwindow
   --/
   --/ @return Current active view
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_GetView (RenderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Get the default view of a renderwindow
   --/
   --/ @param RenderWindow   Renderwindow
   --/
   --/ @return Default view of the render window
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_GetDefaultView (RenderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the viewport of a view applied to this target
   --/
   --/ @param renderWindow Render window object
   --/ @param view         Target view
   --/
   --/ @return Viewport rectangle, expressed in pixels in the current target
   --/
   --//////////////////////////////////////////////////////////
   function sfRenderWindow_getViewport (renderWindow : sfRenderWindow_Ptr; view : sfView_Ptr)
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
   function sfRenderWindow_mapPixelToCoords
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
   function sfRenderWindow_mapCoordsToPixel
     (renderWindow : sfRenderWindow_Ptr;
      point : Sf.System.Vector2.sfVector2f;
      view : sfView_Ptr) return Sf.System.Vector2.sfVector2i;

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
   function sfMouse_getPositionRenderWindow (relativeTo : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

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
   procedure sfMouse_setPositionRenderWindow (position : Sf.System.Vector2.sfVector2i;
                                              relativeTo : sfRenderWindow_Ptr);

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
   function sfTouch_getPositionRenderWindow
     (finger     : unsigned;
      relativeTo : sfRenderWindow_Ptr) return Sf.System.Vector2.sfVector2i;

private

   pragma Import (C, sfRenderWindow_createUnicode, "sfRenderWindow_createUnicode");
   pragma Import (C, sfRenderWindow_createFromHandle, "sfRenderWindow_createFromHandle");
   pragma Import (C, sfRenderWindow_destroy, "sfRenderWindow_destroy");
   pragma Import (C, sfRenderWindow_close, "sfRenderWindow_close");
   pragma Import (C, sfRenderWindow_isOpen, "sfRenderWindow_isOpen");
   pragma Import (C, sfRenderWindow_getSettings, "sfRenderWindow_getSettings");
   pragma Import (C, sfRenderWindow_pollEvent, "sfRenderWindow_pollEvent");
   pragma Import (C, sfRenderWindow_waitEvent, "sfRenderWindow_waitEvent");
   pragma Import (C, sfRenderWindow_getPosition, "sfRenderWindow_getPosition");
   pragma Import (C, sfRenderWindow_setPosition, "sfRenderWindow_setPosition");
   pragma Import (C, sfRenderWindow_getSize, "sfRenderWindow_getSize");
   pragma Import (C, sfRenderWindow_setSize, "sfRenderWindow_setSize");
   pragma Import (C, sfRenderWindow_setUnicodeTitle, "sfRenderWindow_setUnicodeTitle");
   pragma Import (C, sfRenderWindow_setIcon, "sfRenderWindow_setIcon");
   pragma Import (C, sfRenderWindow_setVisible, "sfRenderWindow_setVisible");
   pragma Import (C, sfRenderWindow_setVerticalSyncEnabled, "sfRenderWindow_setVerticalSyncEnabled");
   pragma Import (C, sfRenderWindow_setMouseCursorVisible, "sfRenderWindow_setMouseCursorVisible");
   pragma Import (C, sfRenderWindow_setMouseCursorGrabbed, "sfRenderWindow_setMouseCursorGrabbed");
   pragma Import (C, sfRenderWindow_setKeyRepeatEnabled, "sfRenderWindow_setKeyRepeatEnabled");
   pragma Import (C, sfRenderWindow_setFramerateLimit, "sfRenderWindow_setFramerateLimit");
   pragma Import (C, sfRenderWindow_setJoystickThreshold, "sfRenderWindow_setJoystickThreshold");
   pragma Import (C, sfRenderWindow_setActive, "sfRenderWindow_setActive");
   pragma Import (C, sfRenderWindow_requestFocus, "sfRenderWindow_requestFocus");
   pragma Import (C, sfRenderWindow_hasFocus, "sfRenderWindow_hasFocus");
   pragma Import (C, sfRenderWindow_display, "sfRenderWindow_display");
   pragma Import (C, sfRenderWindow_getSystemHandle, "sfRenderWindow_getSystemHandle");
   pragma Import (C, sfRenderWindow_clear, "sfRenderWindow_clear");
   pragma Import (C, sfRenderWindow_setView, "sfRenderWindow_setView");
   pragma Import (C, sfRenderWindow_getView, "sfRenderWindow_getView");
   pragma Import (C, sfRenderWindow_getDefaultView, "sfRenderWindow_getDefaultView");
   pragma Import (C, sfRenderWindow_getViewport, "sfRenderWindow_getViewport");
   pragma Import (C, sfRenderWindow_mapPixelToCoords, "sfRenderWindow_mapPixelToCoords");
   pragma Import (C, sfRenderWindow_mapCoordsToPixel, "sfRenderWindow_mapCoordsToPixel");
   pragma Import (C, sfRenderWindow_drawSprite, "sfRenderWindow_drawSprite");
   pragma Import (C, sfRenderWindow_drawText, "sfRenderWindow_drawText");
   pragma Import (C, sfRenderWindow_drawShape, "sfRenderWindow_drawShape");
   pragma Import (C, sfRenderWindow_drawCircleShape, "sfRenderWindow_drawCircleShape");
   pragma Import (C, sfRenderWindow_drawConvexShape, "sfRenderWindow_drawConvexShape");
   pragma Import (C, sfRenderWindow_drawRectangleShape, "sfRenderWindow_drawRectangleShape");
   pragma Import (C, sfRenderWindow_drawVertexArray, "sfRenderWindow_drawVertexArray");
   pragma Import (C, sfRenderWindow_drawPrimitives, "sfRenderWindow_drawPrimitives");
   pragma Import (C, sfRenderWindow_pushGLStates, "sfRenderWindow_pushGLStates");
   pragma Import (C, sfRenderWindow_popGLStates, "sfRenderWindow_popGLStates");
   pragma Import (C, sfRenderWindow_resetGLStates, "sfRenderWindow_resetGLStates");
   pragma Import (C, sfRenderWindow_capture, "sfRenderWindow_capture");
   pragma Import (C, sfMouse_getPositionRenderWindow, "sfMouse_getPositionRenderWindow");
   pragma Import (C, sfMouse_setPositionRenderWindow, "sfMouse_setPositionRenderWindow");
   pragma Import (C, sfTouch_getPositionRenderWindow, "sfTouch_getPositionRenderWindow");

end Sf.Graphics.RenderWindow;
