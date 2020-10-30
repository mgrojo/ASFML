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


with Sf.Config; use Sf.Config;

package Sf.System.Time is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Represents a time value
   --/
   --//////////////////////////////////////////////////////////
   type sfTime is record
      microseconds : aliased sfInt64;
   end record;

   --//////////////////////////////////////////////////////////
   --/ @brief Predefined "zero" time value
   --/
   --//////////////////////////////////////////////////////////
   sfTime_Zero : aliased constant sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Return a time value as a number of seconds
   --/
   --/ @param time Time value
   --/
   --/ @return Time in seconds
   --/
   --//////////////////////////////////////////////////////////
   function sfTime_asSeconds (Time : sfTime) return Float;

   --//////////////////////////////////////////////////////////
   --/ @brief Return a time value as a number of milliseconds
   --/
   --/ @param time Time value
   --/
   --/ @return Time in milliseconds
   --/
   --//////////////////////////////////////////////////////////
   function sfTime_asMilliseconds (Time : sfTime) return sfInt32;

   --//////////////////////////////////////////////////////////
   --/ @brief Return a time value as a number of microseconds
   --/
   --/ @param time Time value
   --/
   --/ @return Time in microseconds
   --/
   --//////////////////////////////////////////////////////////
   function sfTime_asMicroseconds (Time : sfTime) return sfInt64;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a time value from a number of seconds
   --/
   --/ @param amount Number of seconds
   --/
   --/ @return Time value constructed from the amount of seconds
   --/
   --//////////////////////////////////////////////////////////
   function sfSeconds (Amount : Float) return sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a time value from a number of milliseconds
   --/
   --/ @param amount Number of milliseconds
   --/
   --/ @return Time value constructed from the amount of milliseconds
   --/
   --//////////////////////////////////////////////////////////
   function sfMilliseconds (Amount : sfInt32) return sfTime;

   --//////////////////////////////////////////////////////////
   --/ @brief Construct a time value from a number of microseconds
   --/
   --/ @param amount Number of microseconds
   --/
   --/ @return Time value constructed from the amount of microseconds
   --/
   --//////////////////////////////////////////////////////////
   function sfMicroseconds (Amount : sfInt64) return sfTime;

private

   pragma Convention (C_Pass_By_Copy, sfTime);
   pragma Import (C, sfTime_Zero, "sfTime_Zero");
   pragma Import (C, sfTime_asSeconds, "sfTime_asSeconds");
   pragma Import (C, sfTime_asMilliseconds, "sfTime_asMilliseconds");
   pragma Import (C, sfTime_asMicroseconds, "sfTime_asMicroseconds");
   pragma Import (C, sfSeconds, "sfSeconds");
   pragma Import (C, sfMilliseconds, "sfMilliseconds");
   pragma Import (C, sfMicroseconds, "sfMicroseconds");

end Sf.System.Time;
