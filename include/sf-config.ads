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
   for sfInt8'SIZE use 8;
   type sfInt8_Ptr is access all sfInt8;
   pragma Convention (C, sfInt8);
   pragma Convention (C, sfInt8_Ptr);

   type sfUint8 is mod 256;
   for sfUint8'SIZE use 8;
   type sfUint8_Ptr is access all sfUint8;
   pragma Convention (C, sfUint8);
   pragma Convention (C, sfUint8_Ptr);

   -- // 16 bits integer types
   type sfInt16 is new Short_Integer;
   type sfInt16_Ptr is access all sfInt16;
   pragma Convention (C, sfInt16);
   pragma Convention (C, sfInt16_Ptr);

   type sfUint16 is mod 2 ** sfInt16'SIZE;
   type sfUint16_Ptr is access all sfUint16;
   pragma Convention (C, sfUint16);
   pragma Convention (C, sfUint16_Ptr);

   -- // 32 bits integer types
   type sfInt32 is new Integer;
   type sfInt32_Ptr is access all sfInt32;
   pragma Convention (C, sfInt32);
   pragma Convention (C, sfInt32_Ptr);

   type sfUint32 is mod 2 ** sfInt32'SIZE;
   type sfUint32_Ptr is access all sfUint32;
   pragma Convention (C, sfUint32);
   pragma Convention (C, sfUint32_Ptr);

   -- // size_t
   type sfSize_t is mod 2 ** Standard'ADDRESS_SIZE;
   type sfSize_t_Ptr is access all sfSize_t;
   pragma Convention (C, sfSize_t);
   pragma Convention (C, sfSize_t_Ptr);

   -- // void
   type sfVoid is null record;
   type sfVoid_Ptr is access all sfVoid;
   pragma Convention (C, sfVoid);
   pragma Convention (C, sfVoid_Ptr);

end Sf.Config;
