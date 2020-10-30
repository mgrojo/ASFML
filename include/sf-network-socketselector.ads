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

with Interfaces.C; use Interfaces.C;
with System;
with Sf.System.Time;
with Sf.Config;
with Sf.Network.Types;

package Sf.Network.SocketSelector is
   use Types;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new selector
   --/
   --/ @return A new sfSocketSelector object
   --/
   --//////////////////////////////////////////////////////////
   function sfSocketSelector_create return sfSocketSelector_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new socket selector by copying an existing one
   --/
   --/ @param selector Socket selector to copy
   --/
   --/ @return A new sfSocketSelector object which is a copy of @a selector
   --/
   --//////////////////////////////////////////////////////////
   function sfSocketSelector_copy (selector : sfSocketSelector_Ptr) return sfSocketSelector_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a socket selector
   --/
   --/ @param selector Socket selector to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSocketSelector_destroy (selector : sfSocketSelector_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Add a new socket to a socket selector
   --/
   --/ This function keeps a weak pointer to the socket,
   --/ so you have to make sure that the socket is not destroyed
   --/ while it is stored in the selector.
   --/
   --/ @param selector Socket selector object
   --/ @param socket   Pointer to the socket to add
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSocketSelector_addTcpListener (selector : sfSocketSelector_Ptr; socket : sfTcpListener_Ptr);

   procedure sfSocketSelector_addTcpSocket (selector : sfSocketSelector_Ptr; socket : sfTcpSocket_Ptr);

   procedure sfSocketSelector_addUdpSocket (selector : sfSocketSelector_Ptr; socket : sfUdpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Remove a socket from a socket selector
   --/
   --/ This function doesn't destroy the socket, it simply
   --/ removes the pointer that the selector has to it.
   --/
   --/ @param selector Socket selector object
   --/ @param socket   POointer to the socket to remove
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSocketSelector_removeTcpListener (selector : sfSocketSelector_Ptr; socket : sfTcpListener_Ptr);

   procedure sfSocketSelector_removeTcpSocket (selector : sfSocketSelector_Ptr; socket : sfTcpSocket_Ptr);

   procedure sfSocketSelector_removeUdpSocket (selector : sfSocketSelector_Ptr; socket : sfUdpSocket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Remove all the sockets stored in a selector
   --/
   --/ This function doesn't destroy any instance, it simply
   --/ removes all the pointers that the selector has to
   --/ external sockets.
   --/
   --/ @param selector Socket selector object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfSocketSelector_clear (selector : sfSocketSelector_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Wait until one or more sockets are ready to receive
   --/
   --/ This function returns as soon as at least one socket has
   --/ some data available to be received. To know which sockets are
   --/ ready, use the sfSocketSelector_isXxxReady functions.
   --/ If you use a timeout and no socket is ready before the timeout
   --/ is over, the function returns sfFalse.
   --/
   --/ @param selector Socket selector object
   --/ @param timeout  Maximum time to wait (use sfTimeZero for infinity)
   --/
   --/ @return sfTrue if there are sockets ready, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfSocketSelector_wait (selector : sfSocketSelector_Ptr; timeout : Sf.System.Time.sfTime) return Sf.Config.sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Test a socket to know if it is ready to receive data
   --/
   --/ This function must be used after a call to
   --/ sfSocketSelector_wait, to know which sockets are ready to
   --/ receive data. If a socket is ready, a call to Receive will
   --/ never block because we know that there is data available to read.
   --/ Note that if this function returns sfTrue for a sfTcpListener,
   --/ this means that it is ready to accept a new connection.
   --/
   --/ @param selector Socket selector object
   --/ @param socket   Socket to test
   --/
   --/ @return sfTrue if the socket is ready to read, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfSocketSelector_isTcpListenerReady (selector : sfSocketSelector_Ptr; socket : sfTcpListener_Ptr) return Sf.Config.sfBool;

   function sfSocketSelector_isTcpSocketReady (selector : sfSocketSelector_Ptr; socket : sfTcpSocket_Ptr) return Sf.Config.sfBool;

   function sfSocketSelector_isUdpSocketReady (selector : sfSocketSelector_Ptr; socket : sfTcpSocket_Ptr) return Sf.Config.sfBool;

private

   pragma Import (C, sfSocketSelector_create, "sfSocketSelector_create");
   pragma Import (C, sfSocketSelector_copy, "sfSocketSelector_copy");
   pragma Import (C, sfSocketSelector_destroy, "sfSocketSelector_destroy");
   pragma Import (C, sfSocketSelector_addTcpListener, "sfSocketSelector_addTcpListener");
   pragma Import (C, sfSocketSelector_addTcpSocket, "sfSocketSelector_addTcpSocket");
   pragma Import (C, sfSocketSelector_addUdpSocket, "sfSocketSelector_addUdpSocket");
   pragma Import (C, sfSocketSelector_removeTcpListener, "sfSocketSelector_removeTcpListener");
   pragma Import (C, sfSocketSelector_removeTcpSocket, "sfSocketSelector_removeTcpSocket");
   pragma Import (C, sfSocketSelector_removeUdpSocket, "sfSocketSelector_removeUdpSocket");
   pragma Import (C, sfSocketSelector_clear, "sfSocketSelector_clear");
   pragma Import (C, sfSocketSelector_wait, "sfSocketSelector_wait");
   pragma Import (C, sfSocketSelector_isTcpListenerReady, "sfSocketSelector_isTcpListenerReady");
   pragma Import (C, sfSocketSelector_isTcpSocketReady, "sfSocketSelector_isTcpSocketReady");
   pragma Import (C, sfSocketSelector_isUdpSocketReady, "sfSocketSelector_isUdpSocketReady");

end Sf.Network.SocketSelector;
