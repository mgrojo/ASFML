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
with Sf.Window.Types;
with Sf.Window.Event;
with Sf.Window.VideoMode;
with Sf.Window.WindowHandle;

with Interfaces.C; use Interfaces.C;

package Sf.Window.Window is
   use Sf.Config;
   use Sf.Window.Types;
   use Sf.Window.Event;
   use Sf.Window.VideoMode;
   use Sf.Window.WindowHandle;

   -- ////////////////////////////////////////////////////////////
   -- /// Enumeration of window creation styles
   -- ///
   -- ////////////////////////////////////////////////////////////
   sfNone : constant sfUint32 := 0; -- ///< No border / title bar
                                    --(this
                                    --flag and all others are
                                    --mutually
                                    --exclusive)
   sfTitlebar : constant sfUint32 := 1;   -- ///< Title bar +
                                          --fixed border
   sfResize : constant sfUint32 := 2;     -- ///< Titlebar +
                                          --resizable
                                          --border + maximize
                                          --button
   sfClose : constant sfUint32 := 4;   -- ///< Titlebar + close
                                       --button
   sfFullscreen : constant sfUint32 := 8;    -- ///< Fullscreen
                                             --mode (this
                                             --flag and all others
                                             --are
                                             --mutually exclusive)

  --//////////////////////////////////////////////////////////
  --/ \brief Structure defining the window's creation settings
  --/
  --//////////////////////////////////////////////////////////
  --/< Bits of the depth buffer
  --/< Bits of the stencil buffer
  --/< Level of antialiasing
  --/< Major number of the context version to create
  --/< Minor number of the context version to create
  --/< The attribute flags to create the context with
  --/< Whether the context framebuffer is sRGB capable
   type sfContextSettings is record
      depthBits : aliased unsigned;  -- /usr/include/SFML/Window/Window.h:72
      stencilBits : aliased unsigned;  -- /usr/include/SFML/Window/Window.h:73
      antialiasingLevel : aliased unsigned;  -- /usr/include/SFML/Window/Window.h:74
      majorVersion : aliased unsigned;  -- /usr/include/SFML/Window/Window.h:75
      minorVersion : aliased unsigned;  -- /usr/include/SFML/Window/Window.h:76
      attributeFlags : aliased Sf.Config.sfUint32;  -- /usr/include/SFML/Window/Window.h:77
      sRgbCapable : aliased Sf.Config.sfBool;  -- /usr/include/SFML/Window/Window.h:78
   end record;
      
   sfDefaultContextSettings : constant sfContextSettings;
   
   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new window
   -- ///
   -- /// \param Mode :   Video mode to use
   -- /// \param Title :  Title of the window
   -- /// \param Style :  Window style
   -- /// \param Settings : Additional settings for the underlying OpenGL context
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_Create
     (Mode   : sfVideoMode;
      Title  : String;
      Style  : sfUint32         := sfResize or sfClose;
      Params : sfContextSettings := sfDefaultContextSettings)
      return   sfWindow_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a window from an existing control
   -- ///
   -- /// \param Handle : Platform-specific handle of the control
   -- /// \param Params : Creation settings
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_CreateFromHandle (Handle : sfWindowHandle; Params : sfContextSettings) return sfWindow_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing window
   -- ///
   -- /// \param Window : Window to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_Destroy (Window : sfWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Close a window (but doesn't destroy the internal data)
   -- ///
   -- /// \param Window : Window to close
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_Close (Window : sfWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Tell whether or not a window is opened
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_IsOpen (Window : sfWindow_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the width of the rendering region of a window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \return Width in pixels
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetWidth (Window : sfWindow_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the height of the rendering region of a window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \return Height in pixels
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetHeight (Window : sfWindow_Ptr) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the creation settings of a window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \return Settings used to create the window
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetSettings (Window : sfWindow_Ptr) return sfContextSettings;

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Pop the event on top of event queue, if any, and return it
   -- ///
   -- /// This function is not blocking: if there's no pending event then
   -- /// it will return false and leave \a event unmodified.
   -- /// Note that more than one event may be present in the event queue,
   -- /// thus you should always call this function in a loop
   -- /// to make sure that you process every pending event.
   -- ///
   -- /// \param window Window object
   -- /// \param event  Event to be returned
   -- ///
   -- /// \return sfTrue if an event was returned, or sfFalse if the event queue was empty
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_PollEvent (Window : sfWindow_Ptr; Event : access sfEvent) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// \brief Enable or disable vertical synchronization
   -- ///
   -- /// Activating vertical synchronization will limit the number
   -- /// of frames displayed to the refresh rate of the monitor.
   -- /// This can avoid some visual artifacts, and limit the framerate
   -- /// to a good value (but not constant across different computers).
   -- ///
   -- /// \param window  Window object
   -- /// \param enabled sfTrue to enable v-sync, sfFalse to deactivate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetVerticalSyncEnabled (Window : sfWindow_Ptr; Enabled : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Show or hide the mouse cursor on a window
   -- ///
   -- /// \param Window : Window object
   -- /// \param Show :   sfTrue to show, sfFalse to hide
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_ShowMouseCursor (Window : sfWindow_Ptr; Show : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the position of the mouse cursor on a window
   -- ///
   -- /// \param Window : Window object
   -- /// \param Left :   Left coordinate of the cursor, relative
   --to the window
   -- /// \param Top :    Top coordinate of the cursor, relative
   --to the window
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetCursorPosition (Window : sfWindow_Ptr; Left : sfUint32; Top : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the position of a window on screen.
   -- /// Only works for top-level windows
   -- ///
   -- /// \param Window : Window object
   -- /// \param Left :   Left position
   -- /// \param Top :    Top position
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetPosition (Window : sfWindow_Ptr; Left : Integer; Top : Integer);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the size of the rendering region of a window
   -- ///
   -- /// \param Window : Window object
   -- /// \param Width :  New Width
   -- /// \param Height : New Height
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetSize (Window : sfWindow_Ptr; Width : sfUint32; Height : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Enable or disable automatic key-repeat for keydown
   --events.
   -- /// Automatic key-repeat is enabled by default
   -- ///
   -- /// \param Window :  Window object
   -- /// \param Enabled : sfTrue to enable, sfFalse to disable
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_EnableKeyRepeat (Window : sfWindow_Ptr; Enabled : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the window's icon
   -- ///
   -- /// \param Window : Window object
   -- /// \param Width :  Icon's width, in pixels
   -- /// \param Height : Icon's height, in pixels
   -- /// \param Pixels : Pointer to the pixels in memory, format
   --must be RGBA
   --32 bits
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetIcon
     (Window : sfWindow_Ptr;
      Width  : sfUint32;
      Height : sfUint32;
      Pixels : sfUint8_Ptr);

  --//////////////////////////////////////////////////////////
  --/ \brief Show or hide a window
  --/
  --/ \param window  Window object
  --/ \param visible sfTrue to show the window, sfFalse to hide it
  --/
  --//////////////////////////////////////////////////////////
   procedure sfWindow_SetVisible (Window : sfWindow_Ptr; Visible : sfBool);
   
   -- ////////////////////////////////////////////////////////////
   -- /// Activate or deactivate a window as the current target
   --for rendering
   -- ///
   -- /// \param Window : Window object
   -- /// \param Active : sfTrue to activate, sfFalse to deactivate
   -- ///
   -- /// \return True if operation was successful, false otherwise
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_SetActive (Window : sfWindow_Ptr; Active : sfBool) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Display a window on screen
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_Display (Window : sfWindow_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the input manager of a window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \return Reference to the input
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetInput (Window : sfWindow_Ptr) return sfInput_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Limit the framerate to a maximum fixed frequency for a
   --window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \param Limit : Framerate limit, in frames per seconds
   --(use 0 to
   --disable limit)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetFramerateLimit (Window : sfWindow_Ptr; Limit : sfUint32);

   -- ////////////////////////////////////////////////////////////
   -- /// Get time elapsed since last frame of a window
   -- ///
   -- /// \param Window : Window object
   -- ///
   -- /// \return Time elapsed, in seconds
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetFrameTime (Window : sfWindow_Ptr) return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Change the joystick threshold, ie. the value below which
   -- /// no move event will be generated
   -- ///
   -- /// \param Window :    Window object
   -- /// \param Threshold : New threshold, in range [0, 100]
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_SetJoystickThreshold (Window : sfWindow_Ptr; Threshold : Float);

private
   
   pragma Convention (C, sfContextSettings);

   sfDefaultContextSettings : constant sfContextSettings :=
     (depthBits =>  24,
      stencilBits => 8,
      antialiasingLevel => 0,
      majorVersion => 1,
      minorVersion => 0,
      attributeFlags => 0,
      sRgbCapable => sfTrue);
   
   pragma Import (C, sfWindow_CreateFromHandle, "sfWindow_createFromHandle");
   pragma Import (C, sfWindow_Destroy, "sfWindow_destroy");
   pragma Import (C, sfWindow_Close, "sfWindow_close");
   pragma Import (C, sfWindow_IsOpen, "sfWindow_isOpen");
   pragma Import (C, sfWindow_GetWidth, "sfWindow_getWidth");
   pragma Import (C, sfWindow_GetHeight, "sfWindow_getHeight");
   pragma Import (C, sfWindow_GetSettings, "sfWindow_getSettings");
   pragma Import (C, sfWindow_PollEvent, "sfWindow_pollEvent");
   pragma Import (C, sfWindow_SetVerticalSyncEnabled, "sfWindow_setVerticalSyncEnabled");
   pragma Import (C, sfWindow_ShowMouseCursor, "sfWindow_showMouseCursor");
   pragma Import (C, sfWindow_SetCursorPosition, "sfWindow_setCursorPosition");
   pragma Import (C, sfWindow_SetPosition, "sfWindow_setPosition");
   pragma Import (C, sfWindow_SetSize, "sfWindow_setSize");
   pragma Import (C, sfWindow_EnableKeyRepeat, "sfWindow_enableKeyRepeat");
   pragma Import (C, sfWindow_setVisible, "sfWindow_setVisible");
   pragma Import (C, sfWindow_SetIcon, "sfWindow_setIcon");
   pragma Import (C, sfWindow_SetActive, "sfWindow_setActive");
   pragma Import (C, sfWindow_Display, "sfWindow_display");
   pragma Import (C, sfWindow_GetInput, "sfWindow_getInput");
   pragma Import (C, sfWindow_SetFramerateLimit, "sfWindow_setFramerateLimit");
   pragma Import (C, sfWindow_GetFrameTime, "sfWindow_getFrameTime");
   pragma Import (C, sfWindow_SetJoystickThreshold, "sfWindow_setJoystickThreshold");

end Sf.Window.Window;
