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

package Sf.Window.VideoMode is
   use Sf.Config;

   -- ////////////////////////////////////////////////////////////
   -- /// sfVideoMode defines a video mode (width, height, bpp, frequency)
   -- /// and provides functions for getting modes supported
   -- /// by the display device
   -- ////////////////////////////////////////////////////////////
   type sfVideoMode is record
      Width        : aliased sfUint32; -- ///< Video mode width, in pixels
      Height       : aliased sfUint32; -- ///< Video mode height, in pixels
      BitsPerPixel : aliased sfUint32; -- ///< Video mode pixel depth, in bits per pixels
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current desktop video mode
   -- ///
   -- /// \return Current desktop video mode
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfVideoMode_GetDesktopMode return sfVideoMode;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a valid video mode
   -- /// Index must be in range [0, GetModesCount()[
   -- /// Modes are sorted from best to worst
   -- ///
   -- /// \param Index : Index of video mode to get
   -- ///
   -- /// \return Corresponding video mode (invalid mode if index is out of range)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfVideoMode_GetMode (Index : sfSize_t) return sfVideoMode;

   -- ////////////////////////////////////////////////////////////
   -- /// Get valid video modes count
   -- ///
   -- /// \return Number of valid video modes available
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfVideoMode_GetModesCount return sfSize_t;

   -- ////////////////////////////////////////////////////////////
   -- /// Tell whether or not a video mode is supported
   -- ///
   -- /// \param Mode : Video mode to check
   -- ///
   -- ///
   -- /// \return True if video mode is supported, false otherwise
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfVideoMode_IsValid (Mode : sfVideoMode) return sfBool;

private

   pragma Convention (C_Pass_By_Copy, sfVideoMode);

   pragma Import (C, sfVideoMode_GetDesktopMode, "sfVideoMode_GetDesktopMode");
   pragma Import (C, sfVideoMode_GetMode, "sfVideoMode_GetMode");
   pragma Import (C, sfVideoMode_GetModesCount, "sfVideoMode_GetModesCount");
   pragma Import (C, sfVideoMode_IsValid, "sfVideoMode_IsValid");

end Sf.Window.VideoMode;
