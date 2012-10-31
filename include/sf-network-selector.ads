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
with Sf.Network.Types;

package Sf.Network.Selector is
   use Sf.Config;
   use Sf.Network.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new selector
   -- ///
   -- /// \return A new sfSelector object
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSelectorTCP_Create return sfSelectorTCP_Ptr;
   function sfSelectorUDP_Create return sfSelectorUDP_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing selector
   -- ///
   -- /// \param Selector : Selector to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSelectorTCP_Destroy (Selector : sfSelectorTCP_Ptr);
   procedure sfSelectorUDP_Destroy (Selector : sfSelectorUDP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Add a socket to watch to a selector
   -- ///
   -- /// \param Selector : Selector to add the socket to
   -- /// \param Socket :   Socket to add
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSelectorTCP_Add (Selector : sfSelectorTCP_Ptr; Socket : sfSocketTCP_Ptr);
   procedure sfSelectorUDP_Add (Selector : sfSelectorUDP_Ptr; Socket : sfSocketUDP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Remove a socket from a selector
   -- ///
   -- /// \param Selector : Selector to remove the socket from
   -- /// \param Socket :   Socket to remove
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSelectorTCP_Remove (Selector : sfSelectorTCP_Ptr; Socket : sfSocketTCP_Ptr);
   procedure sfSelectorUDP_Remove (Selector : sfSelectorUDP_Ptr; Socket : sfSocketUDP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Remove all sockets from a selector
   -- ///
   -- /// \param Selector : Selector to remove the socket from
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfSelectorTCP_Clear (Selector : sfSelectorTCP_Ptr);
   procedure sfSelectorUDP_Clear (Selector : sfSelectorUDP_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Wait and collect sockets which are ready for reading.
   -- /// This functions will return either when at least one socket
   -- /// is ready, or when the given time is out
   -- ///
   -- /// \param Selector : Selector to check
   -- /// \param Timeout :  Maximum time to wait, in seconds (0 to disable timeout)
   -- ///
   -- /// \return Number of sockets ready
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSelectorTCP_Wait (Selector : sfSelectorTCP_Ptr; Timeout : Float) return sfUint32;
   function sfSelectorUDP_Wait (Selector : sfSelectorUDP_Ptr; Timeout : Float) return sfUint32;

   -- ////////////////////////////////////////////////////////////
   -- /// After a call to Wait(), get the Index-th socket which is
   -- /// ready for reading. The total number of sockets ready
   -- /// is the integer returned by the previous call to Wait()
   -- ///
   -- /// \param Selector : Selector to check
   -- /// \param Index :    Index of the socket to get
   -- ///
   -- /// \return The Index-th socket
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSelectorTCP_GetSocketReady (Selector : sfSelectorTCP_Ptr; Index : sfUint32) return sfSocketTCP_Ptr;
   function sfSelectorUDP_GetSocketReady (Selector : sfSelectorUDP_Ptr; Index : sfUint32) return sfSocketUDP_Ptr;

private

   pragma Import (C, sfSelectorTCP_Create, "sfSelectorTCP_Create");
   pragma Import (C, sfSelectorUDP_Create, "sfSelectorUDP_Create");
   pragma Import (C, sfSelectorTCP_Destroy, "sfSelectorTCP_Destroy");
   pragma Import (C, sfSelectorUDP_Destroy, "sfSelectorUDP_Destroy");
   pragma Import (C, sfSelectorTCP_Add, "sfSelectorTCP_Add");
   pragma Import (C, sfSelectorUDP_Add, "sfSelectorUDP_Add");
   pragma Import (C, sfSelectorTCP_Remove, "sfSelectorTCP_Remove");
   pragma Import (C, sfSelectorUDP_Remove, "sfSelectorUDP_Remove");
   pragma Import (C, sfSelectorTCP_Clear, "sfSelectorTCP_Clear");
   pragma Import (C, sfSelectorUDP_Clear, "sfSelectorUDP_Clear");
   pragma Import (C, sfSelectorTCP_Wait, "sfSelectorTCP_Wait");
   pragma Import (C, sfSelectorUDP_Wait, "sfSelectorUDP_Wait");
   pragma Import (C, sfSelectorTCP_GetSocketReady, "sfSelectorTCP_GetSocketReady");
   pragma Import (C, sfSelectorUDP_GetSocketReady, "sfSelectorUDP_GetSocketReady");

end Sf.Network.Selector;
