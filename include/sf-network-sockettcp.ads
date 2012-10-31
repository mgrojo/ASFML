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

package Sf.Network.SocketTCP is
   use Sf.Config;
   use Sf.Network.IPAddress;
   use Sf.Network.SocketStatus;
   use Sf.Network.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new TCP socket
   -- ///
   -- /// \return Pointer to the new socket
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Create return sfSocketTCP_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing TCP socket
   -- ///
   -- /// \param Socket : Socket to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSocketTCP_Destroy (Socket : sfSocketTCP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the blocking state of a TCP socket.
   -- /// The default behaviour of a socket is blocking
   -- ///
   -- /// \param Socket :   Socket to modify
   -- /// \param Blocking : Pass sfTrue to set the socket as blocking, or false for non-blocking
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSocketTCP_SetBlocking (Socket : sfSocketTCP_Ptr; Blocking : sfBool);

   -- ////////////////////////////////////////////////////////////
   -- /// Connect a TCP socket to another computer on a specified port
   -- ///
   -- /// \param Socket :      Socket to use for connecting
   -- /// \param Port :        Port to use for transfers (warning : ports < 1024 are reserved)
   -- /// \param HostAddress : IP Address of the host to connect to
   -- /// \param Timeout :     Maximum time to wait (0 to use no timeout)
   -- ///
   -- /// \return sfTrue if operation has been successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Connect
     (Socket      : sfSocketTCP_Ptr;
      Port        : sfUint16;
      HostAddress : sfIPAddress;
      Timeout     : Float)
      return        sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Listen to a specified port for incoming data or connections
   -- ///
   -- /// \param Socket : Socket to use for listening
   -- /// \param Port :   Port to listen to
   -- ///
   -- /// \return sfTrue if operation has been successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Listen (Socket : sfSocketTCP_Ptr; Port : sfUint16) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Wait for a connection (must be listening to a port).
   -- /// This function is blocking, ie. it won't return before
   -- /// a connection has been accepted
   -- ///
   -- /// \param Socket :    Socket to use for accepting
   -- /// \param Connected : Pointer to a socket pointer that will be filled with the connected client
   -- /// \param Address :   Pointer to an address to fill with client infos
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Accept
     (Socket    : sfSocketTCP_Ptr;
      Connected : access sfSocketTCP_Ptr;
      Address   : access sfIPAddress)
      return      sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Send an array of bytes to the host (must be connected first)
   -- ///
   -- /// \param Socket : Socket to use for sending
   -- /// \param Data :   Pointer to the bytes to send
   -- /// \param Size :   Number of bytes to send
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Send
     (Socket : sfSocketTCP_Ptr;
      Data   : sfInt8_Ptr;
      Size   : sfSize_t)
      return   sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Receive an array of bytes from the host (must be connected first)
   -- ///
   -- /// \param Socket :       Socket to use for receiving
   -- /// \param Data :         Pointer to a byte array to fill (make sure it is big enough)
   -- /// \param MaxSize :      Maximum number of bytes to read
   -- /// \param SizeReceived : Number of bytes received
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_Receive
     (Socket       : sfSocketTCP_Ptr;
      Data         : sfInt8_Ptr;
      MaxSize      : sfSize_t;
      SizeReceived : access sfSize_t)
      return         sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Send a packet of data to the host (must be connected first)
   -- ///
   -- /// \param Socket : Socket to use for sending
   -- /// \param Packet : Packet to send
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_SendPacket (Socket : sfSocketTCP_Ptr; Packet : sfPacket_Ptr) return sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Receive a packet from the host (must be connected first)
   -- ///
   -- /// \param Socket : Socket to use for receiving
   -- /// \param Packet : Packet to fill with received data
   -- ///
   -- /// \return Socket status
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_ReceivePacket (Socket : sfSocketTCP_Ptr; Packet : sfPacket_Ptr) return sfSocketStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Check if a socket is in a valid state ; this function
   -- /// can be called any time to check if the socket is OK
   -- ///
   -- /// \param Socket : Socket to check
   -- ///
   -- /// \return True if the socket is valid
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSocketTCP_IsValid (Socket : sfSocketTCP_Ptr) return sfBool;

private

   pragma Import (C, sfSocketTCP_Create, "sfSocketTCP_Create");
   pragma Import (C, sfSocketTCP_Destroy, "sfSocketTCP_Destroy");
   pragma Import (C, sfSocketTCP_SetBlocking, "sfSocketTCP_SetBlocking");
   pragma Import (C, sfSocketTCP_Connect, "sfSocketTCP_Connect");
   pragma Import (C, sfSocketTCP_Listen, "sfSocketTCP_Listen");
   pragma Import (C, sfSocketTCP_Accept, "sfSocketTCP_Accept");
   pragma Import (C, sfSocketTCP_Send, "sfSocketTCP_Send");
   pragma Import (C, sfSocketTCP_Receive, "sfSocketTCP_Receive");
   pragma Import (C, sfSocketTCP_SendPacket, "sfSocketTCP_SendPacket");
   pragma Import (C, sfSocketTCP_ReceivePacket, "sfSocketTCP_ReceivePacket");
   pragma Import (C, sfSocketTCP_IsValid, "sfSocketTCP_IsValid");

end Sf.Network.SocketTCP;
