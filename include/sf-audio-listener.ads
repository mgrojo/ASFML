-- ////////////////////////////////////////////////////////////
-- //
-- // SFML - Simple and Fast Multimedia Library
-- // Copyright (C) 2007-2009 Laurent Gomila (laurent.gom@gmail.com)
-- //
-- // This software is provided 'as-is', without any express or implied
-- // warranty.
-- // In no event will the authors be held liable for any damages arising from
-- // the use of this software.
-- //
-- // Permission is granted to anyone to use this software for any purpose,
-- // including commercial applications, and to alter it and redistribute it
-- // freely,
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
-- // 3. This notice may not be removed or altered from any source
-- //    distribution.
-- //
-- ////////////////////////////////////////////////////////////

package Sf.Audio.Listener is

   -- ////////////////////////////////////////////////////////////
   -- /// Change the global volume of all the sounds
   -- ///
   -- /// \param Volume : New global volume, in the range [0, 100]
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfListener_SetGlobalVolume (Volume : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current value of the global volume of all the sounds
   -- ///
   -- /// \return Current global volume, in the range [0, 100]
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfListener_GetGlobalVolume return Float;

   -- ////////////////////////////////////////////////////////////
   -- /// Change the position of the listener
   -- ///
   -- /// \param PosX : X position of the listener in the world
   -- /// \param PosY : Y position of the listener in the world
   -- /// \param PosZ : Z position of the listener in the world
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfListener_SetPosition (PosX, PosY, PosZ : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current position of the listener
   -- ///
   -- /// \param PosX : X position of the listener in the world
   -- /// \param PosY : Y position of the listener in the world
   -- /// \param PosZ : Z position of the listener in the world
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfListener_GetPosition (PosX, PosY, PosZ : access Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Change the orientation of the listener (the point
   -- /// he must look at)
   -- ///
   -- /// \param TargetX : X position of the point the listener must look at
   -- /// \param TargetY : X position of the point the listener must look at
   -- /// \param TargetZ : X position of the point the listener must look at
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfListener_SetTarget (TargetX, TargetY, TargetZ : Float);

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current orientation of the listener (the point
   -- /// he's looking at)
   -- ///
   -- /// \param TargetX : X position of the point the listener is looking at
   -- /// \param TargetY : X position of the point the listener is looking at
   -- /// \param TargetZ : X position of the point the listener is looking at
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfListener_GetTarget (TargetX, TargetY, TargetZ : access Float);

private

   pragma Import (C, sfListener_SetGlobalVolume, "sfListener_setGlobalVolume");
   pragma Import (C, sfListener_GetGlobalVolume, "sfListener_getGlobalVolume");
   pragma Import (C, sfListener_SetPosition, "sfListener_setPosition");
   pragma Import (C, sfListener_GetPosition, "sfListener_getPosition");
   pragma Import (C, sfListener_SetTarget, "sfListener_setTarget");
   pragma Import (C, sfListener_GetTarget, "sfListener_getTarget");

end Sf.Audio.Listener;
