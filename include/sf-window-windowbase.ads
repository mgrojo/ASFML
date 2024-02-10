--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2023 Laurent Gomila (laurent@sfml-dev.org)
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

with Sf.Window.VideoMode;

with Sf.Window.WindowHandle;
with Sf.Window.Event;
with Sf.System.Vector2;
with Sf.Window.Vulkan;

package Sf.Window.WindowBase is

  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////

  --//////////////////////////////////////////////////////////
  --/ @brief Construct a new window
  --/
  --/ This function creates the window with the size and pixel
  --/ depth defined in @a mode. An optional style can be passed to
  --/ customize the look and behaviour of the window (borders,
  --/ title bar, resizable, closable, ...). If @a style contains
  --/ sfFullscreen, then @a mode must be a valid video mode.
  --/
  --/ @param mode     Video mode to use (defines the width, height and depth of the rendering area of the windowBase)
  --/ @param title    Title of the window
  --/ @param style    Window style
  --/
  --/ @return A new sfWindow object
  --/
  --//////////////////////////////////////////////////////////
   function create
     (mode : Sf.Window.VideoMode.sfVideoMode;
      title : String;
      style : sfWindowStyle := sfResize or sfClose) return sfWindowBase_Ptr;

  --//////////////////////////////////////////////////////////
  --/ @brief Construct a new window (with a UTF-32 title)
  --/
  --/ This function creates the window with the size and pixel
  --/ depth defined in @a mode. An optional style can be passed to
  --/ customize the look and behaviour of the window (borders,
  --/ title bar, resizable, closable, ...). If @a style contains
  --/ sfFullscreen, then @a mode must be a valid video mode.
  --/
  --/ @param mode     Video mode to use (defines the width, height and depth of the rendering area of the windowBase)
  --/ @param title    Title of the window (UTF-32)
  --/ @param style    Window style
  --/
  --/ @return A new sfWindow object
  --/
  --//////////////////////////////////////////////////////////
   function createUnicode
     (mode : Sf.Window.VideoMode.sfVideoMode;
      title : Wide_Wide_String;
      style : sfWindowStyle := sfResize or sfClose) return sfWindowBase_Ptr;

  --//////////////////////////////////////////////////////////
  --/ @brief Construct a window from an existing control
  --/
  --/ @param handle   Platform-specific handle of the control
  --/
  --/ @return A new sfWindow object
  --/
  --//////////////////////////////////////////////////////////
   function createFromHandle (handle : Sf.Window.WindowHandle.sfWindowHandle) return sfWindowBase_Ptr;

  --//////////////////////////////////////////////////////////
  --/ @brief Destroy a window
  --/
  --/ @param windowBase Window to destroy
  --/
  --//////////////////////////////////////////////////////////
   procedure destroy (windowBase : sfWindowBase_Ptr);

  --//////////////////////////////////////////////////////////
  --/ @brief Close a window and destroy all the attached resources
  --/
  --/ After calling this function, the sfWindow object remains
  --/ valid, you must call sfWindowBase_destroy to actually delete it.
  --/ All other functions such as sfWindowBase_pollEvent or sfWindowBase_display
  --/ will still work (i.e. you don't have to test sfWindowBase_isOpen
  --/ every time), and will have no effect on closed windows.
  --/
  --/ @param windowBase Window object
  --/
  --//////////////////////////////////////////////////////////
   procedure close (windowBase : sfWindowBase_Ptr);

  --//////////////////////////////////////////////////////////
  --/ @brief Tell whether or not a window is opened
  --/
  --/ This function returns whether or not the window exists.
  --/ Note that a hidden window (sfWindowBase_setVisible(sfFalse)) will return
  --/ sfTrue.
  --/
  --/ @param windowBase Window object
  --/
  --/ @return sfTrue if the window is opened, sfFalse if it has been closed
  --/
  --//////////////////////////////////////////////////////////
   function isOpen (windowBase : in sfWindowBase_Ptr) return sfBool;

  --//////////////////////////////////////////////////////////
  --/ @brief Pop the event on top of event queue, if any, and return it
  --/
  --/ This function is not blocking: if there's no pending event then
  --/ it will return false and leave @a event unmodified.
  --/ Note that more than one event may be present in the event queue,
  --/ thus you should always call this function in a loop
  --/ to make sure that you process every pending event.
  --/
  --/ @param windowBase Window object
  --/ @param event      Event to be returned
  --/
  --/ @return sfTrue if an event was returned, or sfFalse if the event queue was empty
  --/
  --//////////////////////////////////////////////////////////
   function pollEvent (windowBase : sfWindowBase_Ptr; event : access Sf.Window.Event.sfEvent)
      return sfBool;

  --//////////////////////////////////////////////////////////
  --/ @brief Wait for an event and return it
  --/
  --/ This function is blocking: if there's no pending event then
  --/ it will wait until an event is received.
  --/ After this function returns (and no error occured),
  --/ the @a event object is always valid and filled properly.
  --/ This function is typically used when you have a thread that
  --/ is dedicated to events handling: you want to make this thread
  --/ sleep as long as no new event is received.
  --/
  --/ @param windowBase Window object
  --/ @param event      Event to be returned
  --/
  --/ @return sfFalse if any error occured
  --/
  --//////////////////////////////////////////////////////////
   function waitEvent (windowBase : sfWindowBase_Ptr; event : access Sf.Window.Event.sfEvent) return sfBool;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the position of a window
  --/
  --/ @param windowBase Window object
  --/
  --/ @return Position in pixels
  --/
  --//////////////////////////////////////////////////////////
   function getPosition (windowBase : in sfWindowBase_Ptr) return Sf.System.Vector2.sfVector2i;

  --//////////////////////////////////////////////////////////
  --/ @brief Change the position of a window on screen
  --/
  --/ This function only works for top-level windows
  --/ (i.e. it will be ignored for windows created from
  --/ the handle of a child window/control).
  --/
  --/ @param windowBase Window object
  --/ @param position   New position of the windowBase, in pixels
  --/
  --//////////////////////////////////////////////////////////
   procedure setPosition (windowBase : sfWindowBase_Ptr; position : Sf.System.Vector2.sfVector2i);

  --//////////////////////////////////////////////////////////
  --/ @brief Get the size of the rendering region of a window
  --/
  --/ The size doesn't include the titlebar and borders
  --/ of the window.
  --/
  --/ @param windowBase Window object
  --/
  --/ @return Size in pixels
  --/
  --//////////////////////////////////////////////////////////
   function getSize (windowBase : in sfWindowBase_Ptr) return Sf.System.Vector2.sfVector2u;

  --//////////////////////////////////////////////////////////
  --/ @brief Change the size of the rendering region of a window
  --/
  --/ @param windowBase Window object
  --/ @param size       New size, in pixels
  --/
  --//////////////////////////////////////////////////////////
   procedure setSize (windowBase : sfWindowBase_Ptr; size : Sf.System.Vector2.sfVector2u);

  --//////////////////////////////////////////////////////////
  --/ @brief Change the title of a window
  --/
  --/ @param windowBase Window object
  --/ @param title      New title
  --/
  --//////////////////////////////////////////////////////////
   procedure setTitle (windowBase : sfWindowBase_Ptr; title : String);

  --//////////////////////////////////////////////////////////
  --/ @brief Change the title of a window (with a UTF-32 string)
  --/
  --/ @param windowBase Window object
  --/ @param title      New title
  --/
  --//////////////////////////////////////////////////////////
   procedure setUnicodeTitle (windowBase : sfWindowBase_Ptr; 
                              title : Wide_Wide_String);

  --//////////////////////////////////////////////////////////
  --/ @brief Change a window's icon
  --/
  --/ @a pixels must be an array of @a width x @a height pixels
  --/ in 32-bits RGBA format.
  --/
  --/ @param windowBase Window object
  --/ @param width      Icon's width, in pixels
  --/ @param height     Icon's height, in pixels
  --/ @param pixels     Pointer to the array of pixels in memory
  --/
  --//////////////////////////////////////////////////////////
   procedure setIcon
     (windowBase : sfWindowBase_Ptr;
      width : sfUint32;
      height : sfUint32;
      pixels : access sfUint8);

  --//////////////////////////////////////////////////////////
  --/ @brief Show or hide a window
  --/
  --/ @param windowBase Window object
  --/ @param visible    sfTrue to show the windowBase, sfFalse to hide it
  --/
  --//////////////////////////////////////////////////////////
   procedure setVisible (windowBase : sfWindowBase_Ptr; visible : sfBool);

  --//////////////////////////////////////////////////////////
  --/ @brief Show or hide the mouse cursor
  --/
  --/ @param windowBase Window object
  --/ @param visible    sfTrue to show, sfFalse to hide
  --/
  --//////////////////////////////////////////////////////////
   procedure setMouseCursorVisible (windowBase : sfWindowBase_Ptr; visible : sfBool);

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
   procedure setMouseCursorGrabbed (windowBase : sfWindowBase_Ptr; grabbed : sfBool);

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
  --/ @param windowBase Window object
  --/ @param cursor     Native system cursor type to display
  --/
  --/ @see sfCursor_createFromSystem
  --/ @see sfCursor_createFromPixels
  --/
  --//////////////////////////////////////////////////////////
   procedure setMouseCursor (windowBase : sfWindowBase_Ptr;
                             cursor : sfCursor_Ptr);

  --//////////////////////////////////////////////////////////
  --/ @brief Enable or disable automatic key-repeat
  --/
  --/ If key repeat is enabled, you will receive repeated
  --/ KeyPress events while keeping a key pressed. If it is disabled,
  --/ you will only get a single event when the key is pressed.
  --/
  --/ Key repeat is enabled by default.
  --/
  --/ @param windowBase Window object
  --/ @param enabled    sfTrue to enable, sfFalse to disable
  --/
  --//////////////////////////////////////////////////////////
   procedure setKeyRepeatEnabled (windowBase : sfWindowBase_Ptr; enabled : sfBool);

  --//////////////////////////////////////////////////////////
  --/ @brief Change the joystick threshold
  --/
  --/ The joystick threshold is the value below which
  --/ no JoystickMoved event will be generated.
  --/
  --/ @param windowBase Window object
  --/ @param threshold  New threshold, in the range [0, 100]
  --/
  --//////////////////////////////////////////////////////////
   procedure setJoystickThreshold (windowBase : sfWindowBase_Ptr; threshold : float);

  --//////////////////////////////////////////////////////////
  --/ @brief Request the current window to be made the active
  --/ foreground window
  --/
  --/ At any given time, only one window may have the input focus
  --/ to receive input events such as keystrokes or mouse events.
  --/ If a window requests focus, it only hints to the operating
  --/ system, that it would like to be focused. The operating system
  --/ is free to deny the request.
  --/
  --//////////////////////////////////////////////////////////
   procedure requestFocus (windowBase : sfWindowBase_Ptr);

  --//////////////////////////////////////////////////////////
  --/ @brief Check whether the window has the input focus
  --/
  --/ At any given time, only one window may have the input focus
  --/ to receive input events such as keystrokes or most mouse
  --/ events.
  --/
  --/ @return True if window has focus, false otherwise
  --/
  --//////////////////////////////////////////////////////////
   function hasFocus (windowBase : in sfWindowBase_Ptr) return sfBool;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the OS-specific handle of the window
  --/
  --/ The type of the returned handle is sfWindowHandle,
  --/ which is a typedef to the handle type defined by the OS.
  --/ You shouldn't need to use this function, unless you have
  --/ very specific stuff to implement that SFML doesn't support,
  --/ or implement a temporary workaround until a bug is fixed.
  --/
  --/ @param windowBase Window object
  --/
  --/ @return System handle of the window
  --/
  --//////////////////////////////////////////////////////////
   function getSystemHandle (windowBase : in sfWindowBase_Ptr)
      return Sf.Window.WindowHandle.sfWindowHandle;

  --//////////////////////////////////////////////////////////
  --/ @brief Create a Vulkan rendering surface
  --/
  --/ @param windowBase Window object
  --/ @param instance  Vulkan instance
  --/ @param surface   Created surface
  --/ @param allocator Allocator to use
  --/
  --/ @return True if surface creation was successful, false otherwise
  --/
  --//////////////////////////////////////////////////////////
   function createVulkanSurface
     (windowBase : sfWindowBase_Ptr;
      instance : access constant Sf.Window.Vulkan.VkInstance;
      surface : access Sf.Window.Vulkan.VkSurfaceKHR;
      allocator : access constant Sf.Window.Vulkan.VkAllocationCallbacks) return sfBool;

private

   pragma Import (C, createFromHandle, "sfWindowBase_createFromHandle");
   pragma Import (C, destroy, "sfWindowBase_destroy");
   pragma Import (C, close, "sfWindowBase_close");
   pragma Import (C, isOpen, "sfWindowBase_isOpen");
   pragma Import (C, pollEvent, "sfWindowBase_pollEvent");
   pragma Import (C, waitEvent, "sfWindowBase_waitEvent");
   pragma Import (C, getPosition, "sfWindowBase_getPosition");
   pragma Import (C, setPosition, "sfWindowBase_setPosition");
   pragma Import (C, getSize, "sfWindowBase_getSize");
   pragma Import (C, setSize, "sfWindowBase_setSize");
   pragma Import (C, setIcon, "sfWindowBase_setIcon");
   pragma Import (C, setVisible, "sfWindowBase_setVisible");
   pragma Import (C, setMouseCursorVisible, "sfWindowBase_setMouseCursorVisible");
   pragma Import (C, setMouseCursorGrabbed, "sfWindowBase_setMouseCursorGrabbed");
   pragma Import (C, setMouseCursor, "sfWindowBase_setMouseCursor");
   pragma Import (C, setKeyRepeatEnabled, "sfWindowBase_setKeyRepeatEnabled");
   pragma Import (C, setJoystickThreshold, "sfWindowBase_setJoystickThreshold");
   pragma Import (C, requestFocus, "sfWindowBase_requestFocus");
   pragma Import (C, hasFocus, "sfWindowBase_hasFocus");
   pragma Import (C, getSystemHandle, "sfWindowBase_getSystemHandle");
   pragma Import (C, createVulkanSurface, "sfWindowBase_createVulkanSurface");

end Sf.Window.WindowBase;
