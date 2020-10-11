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

with Interfaces.C; use Interfaces.C;

with Sf.Config;
with Sf.Network.IPAddress;
with Sf.Network.SocketStatus;
with Sf.Network.Types;

package Sf.Network.UdpSocket is
   use Sf.Config;
   use Sf.Network.IPAddress;
   use Sf.Network.SocketStatus;
   use Sf.Network.Types;

   --//////////////////////////////////////////////////////////
   --/ Construct a new UDP socket
   --/
   --/ @return Pointer to the new socket
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_Create return sfUdpSocket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing UDP socket
   --/
   --/ @param Socket   Socket to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfUdpSocket_Destroy (Socket : sfUdpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Change the blocking state of a UDP socket.
   --/ The default behaviour of a socket is blocking
   --/
   --/ @param Socket     Socket to modify
   --/ @param Blocking   Pass sfTrue to set the socket as blocking, or false for non-blocking
   --/
   --//////////////////////////////////////////////////////////
   procedure sfUdpSocket_SetBlocking (Socket : sfUdpSocket_Ptr; Blocking : sfBool);


  --//////////////////////////////////////////////////////////
  --/ @brief Tell whether a UDP socket is in blocking or non-blocking mode
  --/
  --/ @param socket UDP socket object
  --/
  --/ @return sfTrue if the socket is blocking, sfFalse otherwise
  --/
  --//////////////////////////////////////////////////////////
   function sfUdpSocket_isBlocking (socket : sfUdpSocket_Ptr) return Sf.Config.sfBool;

  --//////////////////////////////////////////////////////////
  --/ @brief Get the port to which a UDP socket is bound locally
  --/
  --/ If the socket is not bound to a port, this function
  --/ returns 0.
  --/
  --/ @param socket UDP socket object
  --/
  --/ @return Port to which the socket is bound
  --/
  --//////////////////////////////////////////////////////////
   function sfUdpSocket_getLocalPort (socket : sfUdpSocket_Ptr) return sfUint16;

   --//////////////////////////////////////////////////////////
   --/ Bind a socket to a specific port
   --/
   --/ @param Socket   Socket to bind
   --/ @param Port     Port to bind the socket to
   --/
   --/ @return True if operation has been successful
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_Bind (Socket : sfUdpSocket_Ptr; Port : sfUint16) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ Unbind a socket from its previous port, if any
   --/
   --/ @param Socket   Socket to unbind
   --/
   --/ @return sfTrue if operation has been successful
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_Unbind (Socket : sfUdpSocket_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ Send an array of bytes
   --/
   --/ @param Socket    Socket to use for sending
   --/ @param Data      Pointer to the bytes to send
   --/ @param Size      Number of bytes to send
   --/ @param Address   Address of the computer to send the packet to
   --/ @param Port      Port to use for communication
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_Send
     (Socket  : sfUdpSocket_Ptr;
      Data    : sfInt8_Ptr;
      Size    : sfSize_t;
      Address : sfIPAddress;
      Port    : sfUint16)
      return    sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Receive an array of bytes.
   --/ This function is blocking, ie. it won't return before some
   --/ bytes have been received
   --/
   --/ @param Socket         Socket to use for receiving
   --/ @param Data           Pointer to a byte array to fill (make sure it is big enough)
   --/ @param MaxSize        Maximum number of bytes to read
   --/ @param SizeReceived   Number of bytes received
   --/ @param Address        Address of the computer which sent the data
   --/ @param Port           Port on which the remote computer sent the data
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_Receive
     (Socket       : sfUdpSocket_Ptr;
      Data         : sfInt8_Ptr;
      MaxSize      : sfSize_t;
      SizeReceived : access sfSize_t;
      Address      : access sfIPAddress;
      Port         : access sfUint16)
      return         sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Send a packet of data
   --/
   --/ @param Socket    Socket to use for sending
   --/ @param Packet    Packet to send
   --/ @param Address   Address of the computer to send the packet to
   --/ @param Port      Port to use for communication
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_SendPacket
     (Socket  : sfUdpSocket_Ptr;
      Packet  : sfPacket_Ptr;
      Address : sfIPAddress;
      Port    : sfUint16)
      return    sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ Receive a packet.
   --/ This function is blocking, ie. it won't return before a
   --/ packet is received
   --/
   --/ @param Socket    Socket to use for receiving
   --/ @param Packet    Packet to fill with received data
   --/ @param Address   Address of the computer which sent the packet
   --/ @param Port      Port on which the remote computer sent the data
   --/
   --/ @return Socket status
   --/
   --//////////////////////////////////////////////////////////
   function sfUdpSocket_ReceivePacket
     (Socket  : sfUdpSocket_Ptr;
      Packet  : sfPacket_Ptr;
      Address : access sfIPAddress;
      Port    : access sfUint16)
      return    sfSocketStatus;

  --//////////////////////////////////////////////////////////
  --/ @brief Return the maximum number of bytes that can be
  --/        sent in a single UDP datagram
  --/
  --/ @return The maximum size of a UDP datagram (message)
  --/
  --//////////////////////////////////////////////////////////
   function sfUdpSocket_maxDatagramSize return unsigned;

private


   pragma Import (C, sfUdpSocket_create, "sfUdpSocket_create");
   pragma Import (C, sfUdpSocket_destroy, "sfUdpSocket_destroy");
   pragma Import (C, sfUdpSocket_setBlocking, "sfUdpSocket_setBlocking");
   pragma Import (C, sfUdpSocket_isBlocking, "sfUdpSocket_isBlocking");
   pragma Import (C, sfUdpSocket_getLocalPort, "sfUdpSocket_getLocalPort");
   pragma Import (C, sfUdpSocket_bind, "sfUdpSocket_bind");
   pragma Import (C, sfUdpSocket_unbind, "sfUdpSocket_unbind");
   pragma Import (C, sfUdpSocket_send, "sfUdpSocket_send");
   pragma Import (C, sfUdpSocket_receive, "sfUdpSocket_receive");
   pragma Import (C, sfUdpSocket_sendPacket, "sfUdpSocket_sendPacket");
   pragma Import (C, sfUdpSocket_receivePacket, "sfUdpSocket_receivePacket");
   pragma Import (C, sfUdpSocket_maxDatagramSize, "sfUdpSocket_maxDatagramSize");

end Sf.Network.UdpSocket;
