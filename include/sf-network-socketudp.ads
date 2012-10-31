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
with Sf.Network.IPAddress;
with Sf.Network.SocketStatus;
with Sf.Network.Types;

package Sf.Network.SocketUDP is
   use Sf.Config;
   use Sf.Network.IPAddress;
   use Sf.Network.SocketStatus;
   use Sf.Network.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new UDP socket
   -- ///
   -- /// \return Pointer to the new socket
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_Create return sfSocketUDP_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing UDP socket
   -- ///
   -- /// \param Socket : Socket to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSocketUDP_Destroy (Socket : sfSocketUDP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the blocking state of a UDP socket.
   -- /// The default behaviour of a socket is blocking
   -- ///
   -- /// \param Socket :   Socket to modify
   -- /// \param Blocking : Pass sfTrue to set the socket as blocking, or false for non-blocking
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSocketUDP_SetBlocking (Socket : sfSocketUDP_Ptr; Blocking : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Bind a socket to a specific port
   -- ///
   -- /// \param Socket : Socket to bind
   -- /// \param Port :   Port to bind the socket to
   -- ///
   -- /// \return True if operation has been successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_Bind (Socket : sfSocketUDP_Ptr; Port : sfUint16) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Unbind a socket from its previous port, if any
   -- ///
   -- /// \param Socket : Socket to unbind
   -- ///
   -- /// \return sfTrue if operation has been successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_Unbind (Socket : sfSocketUDP_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Send an array of bytes
   -- ///
   -- /// \param Socket :  Socket to use for sending
   -- /// \param Data :    Pointer to the bytes to send
   -- /// \param Size :    Number of bytes to send
   -- /// \param Address : Address of the computer to send the packet to
   -- /// \param Port :    Port to use for communication
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_Send
     (Socket  : sfSocketUDP_Ptr;
      Data    : sfInt8_Ptr;
      Size    : sfSize_t;
      Address : sfIPAddress;
      Port    : sfUint16)
      return    sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Receive an array of bytes.
   -- /// This function is blocking, ie. it won't return before some
   -- /// bytes have been received
   -- ///
   -- /// \param Socket :       Socket to use for receiving
   -- /// \param Data :         Pointer to a byte array to fill (make sure it is big enough)
   -- /// \param MaxSize :      Maximum number of bytes to read
   -- /// \param SizeReceived : Number of bytes received
   -- /// \param Address :      Address of the computer which sent the data
   -- /// \param Port :         Port on which the remote computer sent the data
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_Receive
     (Socket       : sfSocketUDP_Ptr;
      Data         : sfInt8_Ptr;
      MaxSize      : sfSize_t;
      SizeReceived : access sfSize_t;
      Address      : access sfIPAddress;
      Port         : access sfUint16)
      return         sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Send a packet of data
   -- ///
   -- /// \param Socket :  Socket to use for sending
   -- /// \param Packet :  Packet to send
   -- /// \param Address : Address of the computer to send the packet to
   -- /// \param Port :    Port to use for communication
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_SendPacket
     (Socket  : sfSocketUDP_Ptr;
      Packet  : sfPacket_Ptr;
      Address : sfIPAddress;
      Port    : sfUint16)
      return    sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Receive a packet.
   -- /// This function is blocking, ie. it won't return before a
   -- /// packet is received
   -- ///
   -- /// \param Socket :  Socket to use for receiving
   -- /// \param Packet :  Packet to fill with received data
   -- /// \param Address : Address of the computer which sent the packet
   -- /// \param Port :    Port on which the remote computer sent the data
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_ReceivePacket
     (Socket  : sfSocketUDP_Ptr;
      Packet  : sfPacket_Ptr;
      Address : access sfIPAddress;
      Port    : access sfUint16)
      return    sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Check if a socket is in a valid state ; this function
   -- /// can be called any time to check if the socket is OK
   -- ///
   -- /// \param Socket : Socket to check
   -- ///
   -- /// \return sfTrue if the socket is valid
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketUDP_IsValid (Socket : sfSocketUDP_Ptr) return sfBool;

private

   pragma Import (C, sfSocketUDP_Create, "sfSocketUDP_Create");
   pragma Import (C, sfSocketUDP_Destroy, "sfSocketUDP_Destroy");
   pragma Import (C, sfSocketUDP_SetBlocking, "sfSocketUDP_SetBlocking");
   pragma Import (C, sfSocketUDP_Bind, "sfSocketUDP_Bind");
   pragma Import (C, sfSocketUDP_Unbind, "sfSocketUDP_Unbind");
   pragma Import (C, sfSocketUDP_Send, "sfSocketUDP_Send");
   pragma Import (C, sfSocketUDP_Receive, "sfSocketUDP_Receive");
   pragma Import (C, sfSocketUDP_SendPacket, "sfSocketUDP_SendPacket");
   pragma Import (C, sfSocketUDP_ReceivePacket, "sfSocketUDP_ReceivePacket");
   pragma Import (C, sfSocketUDP_IsValid, "sfSocketUDP_IsValid");

end Sf.Network.SocketUDP;
