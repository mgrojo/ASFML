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

package Sf.Config is

   -- ////////////////////////////////////////////////////////////
   -- // Define a portable boolean type
   -- ////////////////////////////////////////////////////////////
   subtype sfBool is Integer;
   sfFalse : constant sfBool := 0;
   sfTrue  : constant sfBool := 1;

   -- ////////////////////////////////////////////////////////////
   -- // Define portable types
   -- ////////////////////////////////////////////////////////////

   -- // 8 bits integer types
   type sfInt8 is range -128 .. 127;
   for sfInt8'Size use 8;

   type sfUint8 is mod 256;
   for sfUint8'Size use 8;

   -- // 16 bits integer types
   subtype sfInt16 is Short_Integer;
   type sfUint16 is mod 2 ** sfInt16'Size;

   -- // 32 bits integer types
   subtype sfInt32 is Integer;
   type sfUint32 is mod 2 ** sfInt32'Size;

   -- // size_t
   type sfSize_t is mod 2 ** Standard'Address_Size;

   -- // void
   type sfVoid is null record;
   type sfVoid_Ptr is access all sfVoid;
   
private
   
   pragma Convention(C, sfVoid);
   pragma Convention(C, sfVoid_Ptr);
   
end Sf.Config;
