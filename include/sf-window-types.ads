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

package Sf.Window.Types is

   type sfContext is null record;
   type sfContext_Ptr is access all sfContext;
   type sfInput is null record;
   type sfInput_Ptr is access all sfInput;
   type sfWindow is null record;
   type sfWindow_Ptr is access all sfWindow;

private

   pragma Convention (C, sfContext);
   pragma Convention (C, sfContext_Ptr);
   pragma Convention (C, sfInput);
   pragma Convention (C, sfInput_Ptr);
   pragma Convention (C, sfWindow);
   pragma Convention (C, sfWindow_Ptr);

end Sf.Window.Types;
