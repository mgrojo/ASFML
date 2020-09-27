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
with Sf.Graphics.Color;
with Sf.Graphics.Rect;
with Sf.Graphics.Types;
with Sf.Graphics.RenderStates;
with Sf.Graphics.Sprite;
with Sf.Window.Event;
with Sf.Window.VideoMode;
with Sf.Window.WindowHandle;
with Sf.Window.Window;
with Sf.Window.Types;

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

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new renderwindow
   -- ///
   -- /// \param Mode :   Video mode to use
   -- /// \param Title :  Title of the window
   -- /// \param Style :  Window style
   -- /// \param Params : Creation settings
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_Create
     (Mode   : sfVideoMode;
      Title  : Standard.String;
      Style  : sfUint32         := sfResize or sfClose;
      Params : sfContextSettings := sfDefaultContextSettings)
      return   sfRenderWindow_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a renderwindow from an existing control
   -- ///
   -- /// \param Handle : Platform-specific handle of the control
   -- /// \param Params : Creation settings
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_CreateFromHandle (Handle : sfWindowHandle; Params : sfContextSettings) return sfRenderWindow_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing renderwindow
   -- ///
   -- /// \param RenderWindow : Renderwindow to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_Destroy (RenderWindow : sfRenderWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Close a renderwindow (but doesn't destroy the internal data)
   -- ///
   -- /// \param RenderWindow : Renderwindow to close
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_Close (RenderWindow : sfRenderWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Tell whether or not a rende rwindow is open
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_IsOpen (RenderWindow : sfRenderWindow_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the width of the rendering region of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \return Width in pixels
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetWidth (RenderWindow : sfRenderWindow_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the height of the rendering region of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \return Height in pixels
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetHeight (RenderWindow : sfRenderWindow_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the creation settings of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \return Settings used to create the window
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetSettings (RenderWindow : sfRenderWindow_Ptr) return sfContextSettings;

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Get the event on top of event queue of a render window, if any, and pop it
   -- ///
   -- /// \param renderWindow Render window object
   -- /// \param event        Event to fill, if any
   -- ///
   -- /// \return sfTrue if an event was returned, sfFalse if event queue was empty
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_PollEvent (RenderWindow : sfRenderWindow_Ptr;
                                      Event : access sfEvent) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Enable / disable vertical synchronization on a render window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Enabled :      sfTrue to enable v-sync, sfFalse to deactivate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetVerticalSyncEnabled (RenderWindow : sfRenderWindow_Ptr;
                                                    Enabled : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Show or hide the mouse cursor on a window
   -- ///
   -- /// \param RenderWindow : RenderWindow object
   -- /// \param Show :   sfTrue to show, sfFalse to hide
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_ShowMouseCursor (RenderWindow : sfRenderWindow_Ptr; Show : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the position of the mouse cursor on a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Left :         Left coordinate of the cursor, relative to the window
   -- /// \param Top :          Top coordinate of the cursor, relative to the window
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetCursorPosition (RenderWindow : sfRenderWindow_Ptr; Left, Top : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the position of a window on screen.
   -- /// Only works for top-level windows
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Left :         Left position
   -- /// \param Top :          Top position
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetPosition (RenderWindow : sfRenderWindow_Ptr; Left, Top : Integer);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the size of the rendering region of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Width :        New Width
   -- /// \param Height :       New Height
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetSize (RenderWindow : sfRenderWindow_Ptr; Width, Height : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Show or hide a render window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param State :        sfTrue to show, sfFalse to hide
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_setVisible (RenderWindow : sfRenderWindow_Ptr; State : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Enable or disable automatic key-repeat for keydown events.
   -- /// Automatic key-repeat is enabled by default
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Enabled :      sfTrue to enable, sfFalse to disable
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_EnableKeyRepeat (RenderWindow : sfRenderWindow_Ptr; Enabled : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the window's icon
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Width :        Icon's width, in pixels
   -- /// \param Height :       Icon's height, in pixels
   -- /// \param Pixels :       Pointer to the pixels in memory, format must be RGBA 32 bits
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetIcon (RenderWindow : sfRenderWindow_Ptr; Width, Height : unsigned; 
                                     Pixels : sfUint8_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Activate or deactivate a window as the current target for rendering
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Active :       sfTrue to activate, sfFalse to deactivate
   -- ///
   -- /// \return True if operation was successful, false otherwise
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_SetActive (RenderWindow : sfRenderWindow_Ptr; Active : sfBool) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Display a window on screen
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_Display (RenderWindow : sfRenderWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the input manager of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \return Reference to the input
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetInput (RenderWindow : sfRenderWindow_Ptr) return sfInput_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Limit the framerate to a maximum fixed frequency for a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \param Limit : Framerate limit, in frames per seconds (use 0 to disable limit)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetFramerateLimit (RenderWindow : sfRenderWindow_Ptr; Limit : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Get time elapsed since last frame of a window
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- ///
   -- /// \return Time elapsed, in seconds
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetFrameTime (RenderWindow : sfRenderWindow_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Change the joystick threshold, ie. the value below which
   -- /// no move event will be generated
   -- ///
   -- /// \param RenderWindow : Renderwindow object
   -- /// \param Threshold :    New threshold, in range [0, 100]
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetJoystickThreshold (RenderWindow : sfRenderWindow_Ptr; Threshold : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Draw something on a renderwindow
   -- ///
   -- /// \param RenderWindow Renderwindow to draw in
   -- /// \param object       Object to draw
   -- /// \param states       Render states to use for drawing (NULL to use the default states)
   -- ///
   -- ////////////////////////////////////////////////////////////
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

   -- ////////////////////////////////////////////////////////////
   -- /// Save the content of a renderwindow to an image
   -- ///
   -- /// \param RenderWindow : Renderwindow to capture
   -- ///
   -- /// \return Image instance containing the contents of the screen
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_Capture (RenderWindow : sfRenderWindow_Ptr) return sfImage_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Clear the screen with the given color
   -- ///
   -- /// \param RenderWindow : Renderwindow to modify
   -- /// \param Color :        Fill color
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_Clear (RenderWindow : sfRenderWindow_Ptr; Color : sfColor);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the current active view of a renderwindow
   -- ///
   -- /// \param RenderWindow : Renderwindow to modify
   -- /// \param NewView :      Pointer to the new view
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_SetView (RenderWindow : sfRenderWindow_Ptr; View : sfView_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current active view of a renderwindow
   -- ///
   -- /// \param RenderWindow : Renderwindow
   -- ///
   -- /// \return Current active view
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetView (RenderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the default view of a renderwindow
   -- ///
   -- /// \param RenderWindow : Renderwindow
   -- ///
   -- /// \return Default view of the render window
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfRenderWindow_GetDefaultView (RenderWindow : sfRenderWindow_Ptr) return sfView_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Convert a point in window coordinates into view coordinates
   -- ///
   -- /// \param RenderWindow : Target Renderwindow
   -- /// \param WindowX :      X coordinate of the point to convert, relative to the window
   -- /// \param WindowY :      Y coordinate of the point to convert, relative to the window
   -- /// \param ViewX :        Pointer to fill with the X coordinate of the converted point
   -- /// \param ViewY :        Pointer to fill with the Y coordinate of the converted point
   -- /// \param TargetView :   Target view to convert the point to (pass NULL to use the current view)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_ConvertCoords
     (RenderWindow     : sfRenderWindow_Ptr;
      WindowX, WindowY : sfUint32;
      ViewX, ViewY     : access Float;
      TargetView       : sfView_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Tell SFML to preserve external OpenGL states, at the expense of
   -- /// more CPU charge. Use this function if you don't want SFML
   -- /// to mess up your own OpenGL states (if any).
   -- /// Don't enable state preservation if not needed, as it will allow
   -- /// SFML to do internal optimizations and improve performances.
   -- /// This parameter is false by default
   -- ///
   -- /// \param RenderWindow : Target Renderwindow
   -- /// \param Preserve :     True to preserve OpenGL states, false to let SFML optimize
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfRenderWindow_PreserveOpenGLStates (RenderWindow : sfRenderWindow_Ptr; Preserve : sfBool);

private

   pragma Import (C, sfRenderWindow_CreateFromHandle, "sfRenderWindow_createFromHandle");
   pragma Import (C, sfRenderWindow_Destroy, "sfRenderWindow_destroy");
   pragma Import (C, sfRenderWindow_Close, "sfRenderWindow_close");
   pragma Import (C, sfRenderWindow_IsOpen, "sfRenderWindow_isOpen");
   pragma Import (C, sfRenderWindow_GetWidth, "sfRenderWindow_getWidth");
   pragma Import (C, sfRenderWindow_GetHeight, "sfRenderWindow_getHeight");
   pragma Import (C, sfRenderWindow_GetSettings, "sfRenderWindow_getSettings");
   pragma Import (C, sfRenderWindow_PollEvent, "sfRenderWindow_pollEvent");
   pragma Import (C, sfRenderWindow_SetVerticalSyncEnabled, "sfRenderWindow_setVerticalSyncEnabled");
   pragma Import (C, sfRenderWindow_ShowMouseCursor, "sfRenderWindow_showMouseCursor");
   pragma Import (C, sfRenderWindow_SetCursorPosition, "sfRenderWindow_setCursorPosition");
   pragma Import (C, sfRenderWindow_SetPosition, "sfRenderWindow_setPosition");
   pragma Import (C, sfRenderWindow_SetSize, "sfRenderWindow_setSize");
   pragma Import (C, sfRenderWindow_SetVisible, "sfRenderWindow_setVisible");
   pragma Import (C, sfRenderWindow_EnableKeyRepeat, "sfRenderWindow_enableKeyRepeat");
   pragma Import (C, sfRenderWindow_SetIcon, "sfRenderWindow_setIcon");
   pragma Import (C, sfRenderWindow_SetActive, "sfRenderWindow_setActive");
   pragma Import (C, sfRenderWindow_Display, "sfRenderWindow_display");
   pragma Import (C, sfRenderWindow_GetInput, "sfRenderWindow_getInput");
   pragma Import (C, sfRenderWindow_SetFramerateLimit, "sfRenderWindow_setFramerateLimit");
   pragma Import (C, sfRenderWindow_GetFrameTime, "sfRenderWindow_getFrameTime");
   pragma Import (C, sfRenderWindow_SetJoystickThreshold, "sfRenderWindow_setJoystickThreshold");
   pragma Import (C, sfRenderWindow_DrawSprite, "sfRenderWindow_drawSprite");
   pragma Import (C, sfRenderWindow_DrawText, "sfRenderWindow_drawText");
   pragma Import (C, sfRenderWindow_DrawShape, "sfRenderWindow_drawShape");
   pragma Import (C, sfRenderWindow_DrawCircleShape, "sfRenderWindow_drawCircleShape");
   pragma Import (C, sfRenderWindow_DrawConvexShape, "sfRenderWindow_drawConvexShape");
   pragma Import (C, sfRenderWindow_DrawRectangleShape, "sfRenderWindow_drawRectangleShape");
   pragma Import (C, sfRenderWindow_DrawVertexArray, "sfRenderWindow_drawVertexArray");
   pragma Import (C, sfRenderWindow_Capture, "sfRenderWindow_capture");
   pragma Import (C, sfRenderWindow_Clear, "sfRenderWindow_clear");
   pragma Import (C, sfRenderWindow_SetView, "sfRenderWindow_setView");
   pragma Import (C, sfRenderWindow_GetView, "sfRenderWindow_getView");
   pragma Import (C, sfRenderWindow_GetDefaultView, "sfRenderWindow_getDefaultView");
   pragma Import (C, sfRenderWindow_ConvertCoords, "sfRenderWindow_convertCoords");
   pragma Import (C, sfRenderWindow_PreserveOpenGLStates, "sfRenderWindow_preserveOpenGLStates");

end Sf.Graphics.RenderWindow;
