--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2026 Laurent Gomila (laurent@sfml-dev.org)
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

package Sf.Audio.SoundChannel is

  --//////////////////////////////////////////////////////////
   --/ @brief Types of sound channels that can be read/written from audio data
   --/
   --/ In multi-channel audio, each sound channel can be assigned a spatial
   --/ position. The position of the channel is used to determine where to
   --/ place a sound when it is spatialized. Assigning an incorrect sound
   --/ channel results in positional audio being rendered incorrectly.
   --//////////////////////////////////////////////////////////
   type sfSoundChannel is
     (sfSoundChannelUnspecified,
      sfSoundChannelMono,
      sfSoundChannelFrontLeft,
      sfSoundChannelFrontRight,
      sfSoundChannelFrontCenter,
      sfSoundChannelFrontLeftOfCenter,
      sfSoundChannelFrontRightOfCenter,
      sfSoundChannelLowFrequencyEffects,
      sfSoundChannelBackLeft,
      sfSoundChannelBackRight,
      sfSoundChannelBackCenter,
      sfSoundChannelSideLeft,
      sfSoundChannelSideRight,
      sfSoundChannelTopCenter,
      sfSoundChannelTopFrontLeft,
      sfSoundChannelTopFrontRight,
      sfSoundChannelTopFrontCenter,
      sfSoundChannelTopBackLeft,
      sfSoundChannelTopBackRight,
      sfSoundChannelTopBackCenter);

private
   pragma Convention (C, sfSoundChannel);

end Sf.Audio.SoundChannel;
