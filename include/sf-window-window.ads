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

   -- ////////////////////////////////////////////////////////////
   -- /// Structure defining the window's creation settings
   -- ////////////////////////////////////////////////////////////
   type sfWindowSettings is record
      DepthBits : aliased sfUint32;    -- ///< Bits of the
                                       --depth buffer
      StencilBits : aliased sfUint32;  -- ///< Bits of the
                                       --stencil buffer
      AntialiasingLevel : aliased sfUint32;  -- ///< Level of
                                             --antialiasing
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new window
   -- ///
   -- /// \param Mode :   Video mode to use
   -- /// \param Title :  Title of the window
   -- /// \param Style :  Window style
   -- /// \param Params : Creation settings
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_Create
     (Mode   : sfVideoMode;
      Title  : String;
      Style  : sfUint32         := sfResize or sfClose;
      Params : sfWindowSettings := (24, 8, 0))
      return   sfWindow_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a window from an existing control
   -- ///
   -- /// \param Handle : Platform-specific handle of the control
   -- /// \param Params : Creation settings
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_CreateFromHandle (Handle : sfWindowHandle; Params : sfWindowSettings) return sfWindow_Ptr;

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
   function sfWindow_IsOpened (Window : sfWindow_Ptr) return sfBool;

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
   function sfWindow_GetSettings (Window : sfWindow_Ptr) return sfWindowSettings;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the event on top of events stack of a window, if
   --any, and pop it
   -- ///
   -- /// \param Window : Window object
   -- /// \param Event :  Event to fill, if any
   -- ///
   -- /// \return sfTrue if an event was returned, sfFalse if
   --events stack was
   --empty
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfWindow_GetEvent (Window : sfWindow_Ptr; Event : access sfEvent) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Enable / disable vertical synchronization on a window
   -- ///
   -- /// \param Window :  Window object
   -- /// \param Enabled : sfTrue to enable v-sync, sfFalse to
   --deactivate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_UseVerticalSync (Window : sfWindow_Ptr; Enabled : sfBool);

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
   -- /// Show or hide a window
   -- ///
   -- /// \param Window : Window object
   -- /// \param State :  sfTrue to show, sfFalse to hide
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfWindow_Show (Window : sfWindow_Ptr; State : sfBool);

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

   pragma Convention (C_Pass_By_Copy, sfWindowSettings);

   pragma Import (C, sfWindow_CreateFromHandle, "sfWindow_CreateFromHandle");
   pragma Import (C, sfWindow_Destroy, "sfWindow_Destroy");
   pragma Import (C, sfWindow_Close, "sfWindow_Close");
   pragma Import (C, sfWindow_IsOpened, "sfWindow_IsOpened");
   pragma Import (C, sfWindow_GetWidth, "sfWindow_GetWidth");
   pragma Import (C, sfWindow_GetHeight, "sfWindow_GetHeight");
   pragma Import (C, sfWindow_GetSettings, "sfWindow_GetSettings");
   pragma Import (C, sfWindow_GetEvent, "sfWindow_GetEvent");
   pragma Import (C, sfWindow_UseVerticalSync, "sfWindow_UseVerticalSync");
   pragma Import (C, sfWindow_ShowMouseCursor, "sfWindow_ShowMouseCursor");
   pragma Import (C, sfWindow_SetCursorPosition, "sfWindow_SetCursorPosition");
   pragma Import (C, sfWindow_SetPosition, "sfWindow_SetPosition");
   pragma Import (C, sfWindow_SetSize, "sfWindow_SetSize");
   pragma Import (C, sfWindow_Show, "sfWindow_Show");
   pragma Import (C, sfWindow_EnableKeyRepeat, "sfWindow_EnableKeyRepeat");
   pragma Import (C, sfWindow_SetIcon, "sfWindow_SetIcon");
   pragma Import (C, sfWindow_SetActive, "sfWindow_SetActive");
   pragma Import (C, sfWindow_Display, "sfWindow_Display");
   pragma Import (C, sfWindow_GetInput, "sfWindow_GetInput");
   pragma Import (C, sfWindow_SetFramerateLimit, "sfWindow_SetFramerateLimit");
   pragma Import (C, sfWindow_GetFrameTime, "sfWindow_GetFrameTime");
   pragma Import (C, sfWindow_SetJoystickThreshold, "sfWindow_SetJoystickThreshold");

end Sf.Window.Window;
