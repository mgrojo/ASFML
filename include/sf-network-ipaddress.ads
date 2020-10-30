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

--//////////////////////////////////////////////////////////
with Sf.Config;

package Sf.Network.IpAddress is
   use Sf.Config;

   --//////////////////////////////////////////////////////////
   --/ sfIpAddress provides easy manipulation of IP v4 addresses
   --//////////////////////////////////////////////////////////
   type sfAddress_Array is array (0 .. 15) of aliased sfInt8;
   type sfIpAddress is record
      Address : sfAddress_Array;
   end record;
   pragma Convention (C_Pass_By_Copy, sfIpAddress);

   --//////////////////////////////////////////////////////////
   --/ @brief Empty object that represents invalid addresses
   --/
   --//////////////////////////////////////////////////////////
   sfIpAddress_None : aliased sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ @brief Value representing any address (0.0.0.0)
   --/
   --//////////////////////////////////////////////////////////
   sfIpAddress_Any : aliased sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ @brief Local host IP address (127.0.0.1, or "localhost")
   --/
   --//////////////////////////////////////////////////////////
   sfIpAddress_LocalHost : aliased sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ @brief UDP broadcast address (255.255.255.255)
   --/
   --//////////////////////////////////////////////////////////
   sfIpAddress_Broadcast : aliased sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ Construct an address from a string
   --/
   --/ @param String    IP address ("xxx.xxx.xxx.xxx") or network name
   --/
   --/ @return Resulting address
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_FromString (Str : String) return sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ Construct an address from 4 bytes
   --/
   --/ @param Byte0     First byte of the address
   --/ @param Byte1     Second byte of the address
   --/ @param Byte2     Third byte of the address
   --/ @param Byte3     Fourth byte of the address
   --/
   --/ @return Resulting address
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_FromBytes
     (Byte0 : sfUint8;
      Byte1 : sfUint8;
      Byte2 : sfUint8;
      Byte3 : sfUint8)
     return  sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ Construct the address from a 32-bits integer
   --/
   --/ @param Address   4 bytes of the address packed into a 32-bits integer
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_FromInteger (Address : sfUint32) return sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ Get a string representation of an address
   --/
   --/ @param Address   Address to convert
   --/ @param String    Char array to fill (size must be >= 16)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfIpAddress_ToString (Address : sfIpAddress; Str : out String);

   --//////////////////////////////////////////////////////////
   --/ Get an integer representation of the address
   --/
   --/ @param Address   Address to convert
   --/
   --/ @return 32-bits integer containing the 4 bytes of the address, in system endianness
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_ToInteger (Address : sfIpAddress) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ Get the computer's local IP address (from the LAN point of view)
   --/
   --/ @return Local IP address
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_GetLocalAddress return sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ Get the computer's public IP address (from the web point of view).
   --/ The only way to get a public address is to ask it to a
   --/ distant website ; as a consequence, this function may be
   --/ very slow -- use it as few as possible !
   --/
   --/ @param Timeout   Maximum time to wait, in seconds (use 0 for no timeout)
   --/
   --/ @return Public IP address
   --/
   --//////////////////////////////////////////////////////////
   function sfIpAddress_GetPublicAddress (Timeout : Float) return sfIpAddress;

private

   pragma Import (C, sfIpAddress_None, "sfIpAddress_None");
   pragma Import (C, sfIpAddress_Any, "sfIpAddress_Any");
   pragma Import (C, sfIpAddress_LocalHost, "sfIpAddress_LocalHost");
   pragma Import (C, sfIpAddress_Broadcast, "sfIpAddress_Broadcast");
   pragma Import (C, sfIpAddress_FromBytes, "sfIpAddress_fromBytes");
   pragma Import (C, sfIpAddress_FromInteger, "sfIpAddress_fromInteger");
   pragma Import (C, sfIpAddress_ToInteger, "sfIpAddress_toInteger");
   pragma Import (C, sfIpAddress_GetLocalAddress, "sfIpAddress_getLocalAddress");
   pragma Import (C, sfIpAddress_GetPublicAddress, "sfIpAddress_getPublicAddress");

end Sf.Network.IpAddress;
