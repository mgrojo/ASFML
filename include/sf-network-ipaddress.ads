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

package Sf.Network.IPAddress is
   use Sf.Config;

   -- ////////////////////////////////////////////////////////////
   -- /// sfIPAddress provides easy manipulation of IP v4 addresses
   -- ////////////////////////////////////////////////////////////
   type sfAddress_Array is array (0 .. 15) of aliased sfInt8;
   type sfIPAddress is record
      Address : sfAddress_Array;
   end record;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct an address from a string
   -- ///
   -- /// \param String :  IP address ("xxx.xxx.xxx.xxx") or network name
   -- ///
   -- /// \return Resulting address
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_FromString (Str : String) return sfIPAddress;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct an address from 4 bytes
   -- ///
   -- /// \param Byte0 :   First byte of the address
   -- /// \param Byte1 :   Second byte of the address
   -- /// \param Byte2 :   Third byte of the address
   -- /// \param Byte3 :   Fourth byte of the address
   -- ///
   -- /// \return Resulting address
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_FromBytes
     (Byte0 : sfUint8;
      Byte1 : sfUint8;
      Byte2 : sfUint8;
      Byte3 : sfUint8)
      return  sfIPAddress;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct the address from a 32-bits integer
   -- ///
   -- /// \param Address : 4 bytes of the address packed into a 32-bits integer
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_FromInteger (Address : sfUint32) return sfIPAddress;

   -- ////////////////////////////////////////////////////////////
   -- /// Tell if an address is a valid one
   -- ///
   -- /// \param Address : Address to check
   -- ///
   -- /// \return sfTrue if address has a valid syntax
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_IsValid (Address : sfIPAddress) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get a string representation of an address
   -- ///
   -- /// \param Address : Address to convert
   -- /// \param String :  Char array to fill (size must be >= 16)
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfIPAddress_ToString (Address : sfIPAddress; Str : out String);

   -- ////////////////////////////////////////////////////////////
   -- /// Get an integer representation of the address
   -- ///
   -- /// \param Address : Address to convert
   -- ///
   -- /// \return 32-bits integer containing the 4 bytes of the address, in system endianness
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_ToInteger (Address : sfIPAddress) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the computer's local IP address (from the LAN point of view)
   -- ///
   -- /// \return Local IP address
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_GetLocalAddress return sfIPAddress;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the computer's public IP address (from the web point of view).
   -- /// The only way to get a public address is to ask it to a
   -- /// distant website ; as a consequence, this function may be
   -- /// very slow -- use it as few as possible !
   -- ///
   -- /// \param Timeout : Maximum time to wait, in seconds (use 0 for no timeout)
   -- ///
   -- /// \return Public IP address
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_GetPublicAddress (Timeout : Float) return sfIPAddress;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the computer's loopback address
   -- ///
   -- /// \return Local host IP address (127.0.0.1, or "localhost")
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfIPAddress_LocalHost return sfIPAddress;

private

   pragma Convention (C, sfAddress_Array);
   pragma Convention (C_Pass_By_Copy, sfIPAddress);

   pragma Import (C, sfIPAddress_FromBytes, "sfIPAddress_fromBytes");
   pragma Import (C, sfIPAddress_FromInteger, "sfIPAddress_fromInteger");
   pragma Import (C, sfIPAddress_IsValid, "sfIPAddress_isValid");
   pragma Import (C, sfIPAddress_ToInteger, "sfIPAddress_toInteger");
   pragma Import (C, sfIPAddress_GetLocalAddress, "sfIPAddress_getLocalAddress");
   pragma Import (C, sfIPAddress_GetPublicAddress, "sfIPAddress_getPublicAddress");
   pragma Import (C, sfIPAddress_LocalHost, "sfIPAddress_localHost");

end Sf.Network.IPAddress;
