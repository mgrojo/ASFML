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

with Sf.Config;
with Sf.Network.IPAddress;
with Sf.Network.SocketStatus;
with Sf.Network.Types;

with System;

package Sf.Network.TcpSocket is
   use Sf.Config;
   use Sf.Network.IPAddress;
   use Sf.Network.SocketStatus;
   use Sf.Network.Types;

   --//////////////////////////////////////////////////////////
   --/ Construct a new TCP socket
   --/
   --/ @return Pointer to the new socket
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_Create return sfTcpSocket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing TCP socket
   --/
   --/ @param Socket   Socket to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTcpSocket_Destroy (Socket : sfTcpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Change the blocking state of a TCP socket.
   --/ The default behaviour of a socket is blocking
   --/
   --/ @param Socket     Socket to modify
   --/ @param Blocking   Pass sfTrue to set the socket as blocking, or false for non-blocking
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTcpSocket_SetBlocking (Socket : sfTcpSocket_Ptr; Blocking : sfBool);


   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a TCP socket is in blocking or non-blocking mode
   --/
   --/ @param socket TCP socket object
   --/
   --/ @return sfTrue if the socket is blocking, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_isBlocking (socket : sfTcpSocket_Ptr) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the port to which a TCP socket is bound locally
   --/
   --/ If the socket is not connected, this function returns 0.
   --/
   --/ @param socket TCP socket object
   --/
   --/ @return Port to which the socket is bound
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_getLocalPort (socket : sfTcpSocket_Ptr) return sfUint16;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the address of the connected peer of a TCP socket
   --/
   --/ It the socket is not connected, this function returns
   --/ sfIpAddress_None.
   --/
   --/ @param socket TCP socket object
   --/
   --/ @return Address of the remote peer
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_getRemoteAddress (socket : sfTcpSocket_Ptr) return Sf.Network.IpAddress.sfIpAddress;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the port of the connected peer to which
   --/        a TCP socket is connected
   --/
   --/ If the socket is not connected, this function returns 0.
   --/
   --/ @param socket TCP socket object
   --/
   --/ @return Remote port to which the socket is connected
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_getRemotePort (socket : sfTcpSocket_Ptr) return sfUint16;

   --//////////////////////////////////////////////////////////
   --/ Connect a TCP socket to another computer on a specified port
   --/
   --/ @param Socket        Socket to use for connecting
   --/ @param Port :        Port to use for transfers (warning   ports < 1024 are reserved)
   --/ @param HostAddress   IP Address of the host to connect to
   --/ @param Timeout       Maximum time to wait (0 to use no timeout)
   --/
   --/ @return sfTrue if operation has been successful
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_Connect
     (Socket      : sfTcpSocket_Ptr;
      Port        : sfUint16;
      HostAddress : sfIPAddress;
      Timeout     : Float)
     return        sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Disconnect a TCP socket from its remote peer
   --/
   --/ This function gracefully closes the connection. If the
   --/ socket is not connected, this function has no effect.
   --/
   --/ @param socket TCP socket object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfTcpSocket_disconnect (socket : sfTcpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Send an array of bytes to the host (must be connected first)
   --/
   --/ @param Socket   Socket to use for sending
   --/ @param Data     Pointer to the bytes to send
   --/ @param Size     Number of bytes to send
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_Send
     (Socket : sfTcpSocket_Ptr;
      Data   : sfInt8_Ptr;
      Size   : sfSize_t)
     return   sfSocketStatus;


   --//////////////////////////////////////////////////////////
   --/ @brief Send raw data to the remote peer
   --/
   --/ This function will fail if the socket is not connected.
   --/
   --/ @param socket TCP socket object
   --/ @param data   Pointer to the sequence of bytes to send
   --/ @param size   Number of bytes to send
   --/ @param sent   The number of bytes sent will be written here
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_sendPartial
     (socket : sfTcpSocket_Ptr;
      data : Standard.System.Address;
      size : sfSize_t;
      sent : access sfSize_t) return Sf.Network.SocketStatus.sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Receive an array of bytes from the host (must be connected first)
   --/
   --/ @param Socket         Socket to use for receiving
   --/ @param Data           Pointer to a byte array to fill (make sure it is big enough)
   --/ @param MaxSize        Maximum number of bytes to read
   --/ @param SizeReceived   Number of bytes received
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_Receive
     (Socket       : sfTcpSocket_Ptr;
      Data         : sfInt8_Ptr;
      MaxSize      : sfSize_t;
      SizeReceived : access sfSize_t)
     return         sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Send a packet of data to the host (must be connected first)
   --/
   --/ @param Socket   Socket to use for sending
   --/ @param Packet   Packet to send
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_SendPacket (Socket : sfTcpSocket_Ptr; Packet : sfPacket_Ptr) return sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Receive a packet from the host (must be connected first)
   --/
   --/ @param Socket   Socket to use for receiving
   --/ @param Packet   Packet to fill with received data
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfTcpSocket_ReceivePacket (Socket : sfTcpSocket_Ptr; Packet : sfPacket_Ptr) return sfSocketStatus;

private

   pragma Import (C, sfTcpSocket_create, "sfTcpSocket_create");
   pragma Import (C, sfTcpSocket_destroy, "sfTcpSocket_destroy");
   pragma Import (C, sfTcpSocket_setBlocking, "sfTcpSocket_setBlocking");
   pragma Import (C, sfTcpSocket_isBlocking, "sfTcpSocket_isBlocking");
   pragma Import (C, sfTcpSocket_getLocalPort, "sfTcpSocket_getLocalPort");
   pragma Import (C, sfTcpSocket_getRemoteAddress, "sfTcpSocket_getRemoteAddress");
   pragma Import (C, sfTcpSocket_getRemotePort, "sfTcpSocket_getRemotePort");
   pragma Import (C, sfTcpSocket_connect, "sfTcpSocket_connect");
   pragma Import (C, sfTcpSocket_disconnect, "sfTcpSocket_disconnect");
   pragma Import (C, sfTcpSocket_send, "sfTcpSocket_send");
   pragma Import (C, sfTcpSocket_sendPartial, "sfTcpSocket_sendPartial");
   pragma Import (C, sfTcpSocket_receive, "sfTcpSocket_receive");
   pragma Import (C, sfTcpSocket_sendPacket, "sfTcpSocket_sendPacket");
   pragma Import (C, sfTcpSocket_receivePacket, "sfTcpSocket_receivePacket");

end Sf.Network.TcpSocket;
