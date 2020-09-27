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
with Sf.System.Types;

package Sf.System.Thread is
   use Sf.Config;
   use Sf.System.Types;

   pragma Warnings (Off);

   type sfThreadFunc_Ptr is access procedure (arg : sfVoid_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new thread from a function pointer
   -- ///
   -- /// \param Function : Entry point of the thread
   -- /// \param UserData : Data to pass to the thread function
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfThread_Create (Func : sfThreadFunc_Ptr; UserData : sfVoid_Ptr) return sfThread_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing thread
   -- ///
   -- /// \param Thread : Thread to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfThread_Destroy (Thread : sfThread_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Run a thread
   -- ///
   -- /// \param Thread : Thread to launch
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfThread_Launch (Thread : sfThread_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Wait until a thread finishes
   -- ///
   -- /// \param Thread : Thread to wait for
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfThread_Wait (Thread : sfThread_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Terminate a thread
   -- /// Terminating a thread with this function is not safe,
   -- /// you should rather try to make the thread function
   -- /// terminate by itself
   -- ///
   -- /// \param Thread : Thread to terminate
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfThread_Terminate (Thread : sfThread_Ptr);

private

   pragma Warnings (On);

   pragma Import (C, sfThread_Create, "sfThread_create");
   pragma Import (C, sfThread_Destroy, "sfThread_destroy");
   pragma Import (C, sfThread_Launch, "sfThread_launch");
   pragma Import (C, sfThread_Wait, "sfThread_wait");
   pragma Import (C, sfThread_Terminate, "sfThread_terminate");

end Sf.System.Thread;
