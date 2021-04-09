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

--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2015 Laurent Gomila (laurent@sfml-dev.org)
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

with Interfaces.C;
with System;

with Ada.Strings.Unbounded;

--/ @image ASFML_Logo.svg
--/ @summary
--/ ASFML: Ada binding to the SFML library
--/
--/ @description
--/ Root package of all the packages provided by SFML. Direct children are the
--/ SFML modules: Audio, Graphics, Network, System and Window.
package Sf is

   --//////////////////////////////////////////////////////////
   -- // Define the CSFML version
   --//////////////////////////////////////////////////////////
   Version_Major : constant := 2;
   Version_Minor : constant := 5;
   Version_Patch : constant := 0;

   --//////////////////////////////////////////////////////////
   -- // Define a portable boolean type
   --//////////////////////////////////////////////////////////
   type sfBool is new Boolean;
   for sfBool'Size use Interfaces.C.Int'Size;
   for sfBool use (False => 0, True => 1);
   sfFalse : sfBool renames False;
   sfTrue  : sfBool renames True;

   --//////////////////////////////////////////////////////////
   -- // Define portable types
   --//////////////////////////////////////////////////////////

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
   type sfInt16 is new Interfaces.Integer_16;
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

   -- // 64 bits integer types
   type sfInt64 is new Interfaces.Integer_64;
   type sfInt64_Ptr is access all sfInt64;
   pragma Convention (C, sfInt64);
   pragma Convention (C, sfInt64_Ptr);

   type sfUint64 is new Interfaces.Unsigned_64;
   type sfUint64_Ptr is access all sfUint64;
   pragma Convention (C, sfUint64_Ptr);

   -- // size_t
   type sfSize_t is mod 2 ** Standard'ADDRESS_SIZE;
   type sfSize_t_Ptr is access all sfSize_t;
   pragma Convention (C, sfSize_t);
   pragma Convention (C, sfSize_t_Ptr);

   type sfArrayOfStrings is array (sfSize_t range <>) of
     Ada.Strings.Unbounded.Unbounded_String;

end Sf;
