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

with Sf.System.Vector3;

package Sf.Audio.Listener is

   --//////////////////////////////////////////////////////////
   --/ @brief Change the global volume of all the sounds and musics
   --/
   --/ The volume is a number between 0 and 100; it is combined with
   --/ the individual volume of each sound / music.
   --/ The default value for the volume is 100 (maximum).
   --/
   --/ @param volume New global volume, in the range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   procedure setGlobalVolume (volume : float);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current value of the global volume
   --/
   --/ @return Current global volume, in the range [0, 100]
   --/
   --//////////////////////////////////////////////////////////
   function getGlobalVolume return float;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the position of the listener in the scene
   --/
   --/ The default listener's position is (0, 0, 0).
   --/
   --/ @param position New position of the listener
   --/
   --//////////////////////////////////////////////////////////
   procedure setPosition (position : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current position of the listener in the scene
   --/
   --/ @return The listener's position
   --/
   --//////////////////////////////////////////////////////////
   function getPosition return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the orientation of the forward vector in the scene
   --/
   --/ The direction (also called "at vector") is the vector
   --/ pointing forward from the listener's perspective. Together
   --/ with the up vector, it defines the 3D orientation of the
   --/ listener in the scene. The direction vector doesn't
   --/ have to be normalized.
   --/ The default listener's direction is (0, 0, -1).
   --/
   --/ @param direction New listener's direction
   --/
   --//////////////////////////////////////////////////////////
   procedure setDirection (direction : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current forward vector of the listener in the scene
   --/
   --/ @return Listener's forward vector (not normalized)
   --/
   --//////////////////////////////////////////////////////////
   function getDirection return Sf.System.Vector3.sfVector3f;

   --//////////////////////////////////////////////////////////
   --/ @brief Set the upward vector of the listener in the scene
   --/
   --/ The up vector is the vector that points upward from the
   --/ listener's perspective. Together with the direction, it
   --/ defines the 3D orientation of the listener in the scene.
   --/ The up vector doesn't have to be normalized.
   --/ The default listener's up vector is (0, 1, 0). It is usually
   --/ not necessary to change it, especially in 2D scenarios.
   --/
   --/ @param upVector New listener's up vector
   --/
   --//////////////////////////////////////////////////////////
   procedure setUpVector (upVector : Sf.System.Vector3.sfVector3f);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the current upward vector of the listener in the scene
   --/
   --/ @return Listener's upward vector (not normalized)
   --/
   --//////////////////////////////////////////////////////////
   function getUpVector return Sf.System.Vector3.sfVector3f;

private

   pragma Import (C, setGlobalVolume, "sfListener_setGlobalVolume");
   pragma Import (C, getGlobalVolume, "sfListener_getGlobalVolume");
   pragma Import (C, setPosition, "sfListener_setPosition");
   pragma Import (C, getPosition, "sfListener_getPosition");
   pragma Import (C, setDirection, "sfListener_setDirection");
   pragma Import (C, getDirection, "sfListener_getDirection");
   pragma Import (C, setUpVector, "sfListener_setUpVector");
   pragma Import (C, getUpVector, "sfListener_getUpVector");



end Sf.Audio.Listener;
