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


with Sf.Network.IpAddress;
with Sf.System.Time;
with Sf.Network.SocketStatus;

with System;

package Sf.Network.TcpSocket is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new TCP socket
   --/
   --/ @return A new sfTcpSocket object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfTcpSocket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a TCP socket
   --/
   --/ @param socket TCP socket to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (socket : sfTcpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the blocking state of a TCP listener
   --/
   --/ In blocking mode, calls will not return until they have
   --/ completed their task. For example, a call to
   --/ sfTcpSocket_receive in blocking mode won't return until
   --/ new data was actually received.
   --/ In non-blocking mode, calls will always return immediately,
   --/ using the return code to signal whether there was data
   --/ available or not.
   --/ By default, all sockets are blocking.
   --/
   --/ @param socket   TCP socket object
   --/ @param blocking sfTrue to set the socket as blocking, sfFalse for non-blocking
   --/
   --//////////////////////////////////////////////////////////
   procedure setBlocking (socket : sfTcpSocket_Ptr; blocking : sfBool);

   --//////////////////////////////////////////////////////////
   --/ @brief Tell whether a TCP socket is in blocking or non-blocking mode
   --/
   --/ @param socket TCP socket object
   --/
   --/ @return sfTrue if the socket is blocking, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function isBlocking (socket : sfTcpSocket_Ptr) return sfBool;

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
   function getLocalPort (socket : sfTcpSocket_Ptr) return sfUint16;

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
   function getRemoteAddress (socket : sfTcpSocket_Ptr)
                                         return Sf.Network.IpAddress.sfIpAddress;

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
   function getRemotePort (socket : sfTcpSocket_Ptr) return sfUint16;

   --//////////////////////////////////////////////////////////
   --/ @brief Connect a TCP socket to a remote peer
   --/
   --/ In blocking mode, this function may take a while, especially
   --/ if the remote peer is not reachable. The last parameter allows
   --/ you to stop trying to connect after a given timeout.
   --/ If the socket was previously connected, it is first disconnected.
   --/
   --/ @param socket        TCP socket object
   --/ @param remoteAddress Address of the remote peer
   --/ @param remotePort    Port of the remote peer
   --/ @param timeout       Maximum time to wait
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function connect
     (socket        : sfTcpSocket_Ptr;
      remoteAddress : Sf.Network.IpAddress.sfIpAddress;
      remotePort    : sfUint16;
      timeout       : Sf.System.Time.sfTime) return Sf.Network.SocketStatus.sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Disconnect a TCP socket from its remote peer
   --/
   --/ This function gracefully closes the connection. If the
   --/ socket is not connected, this function has no effect.
   --/
   --/ @param socket TCP socket object
   --/
   --//////////////////////////////////////////////////////////
   procedure disconnect (socket : sfTcpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Send raw data to the remote peer of a TCP socket
   --/
   --/ To be able to handle partial sends over non-blocking
   --/ sockets, use the sfTcpSocket_sendPartial(sfTcpSocket*, const void*, std::size_t, sfSize_t*)
   --/ overload instead.
   --/ This function will fail if the socket is not connected.
   --/
   --/ @param socket TCP socket object
   --/ @param data   Pointer to the sequence of bytes to send
   --/ @param size   Number of bytes to send
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function send
     (socket : sfTcpSocket_Ptr;
      data   : Standard.System.Address;
      size   : sfSize_t) return Sf.Network.SocketStatus.sfSocketStatus;

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
   function sendPartial
     (socket :        sfTcpSocket_Ptr;
      data   :        Standard.System.Address;
      size   :        sfSize_t;
      sent   : access sfSize_t) return Sf.Network.SocketStatus.sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Receive raw data from the remote peer of a TCP socket
   --/
   --/ In blocking mode, this function will wait until some
   --/ bytes are actually received.
   --/ This function will fail if the socket is not connected.
   --/
   --/ @param socket   TCP socket object
   --/ @param data     Pointer to the array to fill with the received bytes
   --/ @param size     Maximum number of bytes that can be received
   --/ @param received This variable is filled with the actual number of bytes received
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function receive
     (socket   :        sfTcpSocket_Ptr;
      data     :        Standard.System.Address;
      size     :        sfSize_t;
      received : access sfSize_t) return Sf.Network.SocketStatus.sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Send a formatted packet of data to the remote peer of a TCP socket
   --/
   --/ In non-blocking mode, if this function returns sfSocketPartial,
   --/ you must retry sending the same unmodified packet before sending
   --/ anything else in order to guarantee the packet arrives at the remote
   --/ peer uncorrupted.
   --/ This function will fail if the socket is not connected.
   --/
   --/ @param socket TCP socket object
   --/ @param packet Packet to send
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function sendPacket (socket : sfTcpSocket_Ptr;
                                    packet : sfPacket_Ptr)
                                   return Sf.Network.SocketStatus.sfSocketStatus;

   --//////////////////////////////////////////////////////////
   --/ @brief Receive a formatted packet of data from the remote peer
   --/
   --/ In blocking mode, this function will wait until the whole packet
   --/ has been received.
   --/ This function will fail if the socket is not connected.
   --/
   --/ @param socket TCP socket object
   --/ @param packet Packet to fill with the received data
   --/
   --/ @return Status code
   --/
   --//////////////////////////////////////////////////////////
   function receivePacket (socket : sfTcpSocket_Ptr;
                                       packet : sfPacket_Ptr)
                                      return Sf.Network.SocketStatus.sfSocketStatus;

private

   pragma Import (C, create, "sfTcpSocket_create");
   pragma Import (C, destroy, "sfTcpSocket_destroy");
   pragma Import (C, setBlocking, "sfTcpSocket_setBlocking");
   pragma Import (C, isBlocking, "sfTcpSocket_isBlocking");
   pragma Import (C, getLocalPort, "sfTcpSocket_getLocalPort");
   pragma Import (C, getRemoteAddress, "sfTcpSocket_getRemoteAddress");
   pragma Import (C, getRemotePort, "sfTcpSocket_getRemotePort");
   pragma Import (C, connect, "sfTcpSocket_connect");
   pragma Import (C, disconnect, "sfTcpSocket_disconnect");
   pragma Import (C, send, "sfTcpSocket_send");
   pragma Import (C, sendPartial, "sfTcpSocket_sendPartial");
   pragma Import (C, receive, "sfTcpSocket_receive");
   pragma Import (C, sendPacket, "sfTcpSocket_sendPacket");
   pragma Import (C, receivePacket, "sfTcpSocket_receivePacket");


end Sf.Network.TcpSocket;
