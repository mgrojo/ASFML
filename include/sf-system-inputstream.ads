pragma Ada_2005;
pragma Style_Checks (Off);

with Interfaces.C; use Interfaces.C;
with System;
with Sf.Config;

package Sf.System.InputStream is

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

  --//////////////////////////////////////////////////////////
   type sfInputStreamReadFunc is access function
        (arg1 : Standard.System.Address;
         arg2 : Sf.Config.sfInt64;
         arg3 : Standard.System.Address) return Sf.Config.sfInt64;
   pragma Convention (C, sfInputStreamReadFunc);

   type sfInputStreamSeekFunc is access function (arg1 : Sf.Config.sfInt64; arg2 : Standard.System.Address) return Sf.Config.sfInt64;
   pragma Convention (C, sfInputStreamSeekFunc);

   type sfInputStreamTellFunc is access function (arg1 : Standard.System.Address) return Sf.Config.sfInt64;
   pragma Convention (C, sfInputStreamTellFunc);

   type sfInputStreamGetSizeFunc is access function (arg1 : Standard.System.Address) return Sf.Config.sfInt64;
   pragma Convention (C, sfInputStreamGetSizeFunc);

  --//////////////////////////////////////////////////////////
  --/ @brief Set of callbacks that allow users to define custom file streams
  --/
  --//////////////////////////////////////////////////////////
  --/< Function to read data from the stream
   type sfInputStream is record
      read : sfInputStreamReadFunc;
      seek : sfInputStreamSeekFunc;
      tell : sfInputStreamTellFunc;
      getSize : sfInputStreamGetSizeFunc;
      userData : Standard.System.Address;
   end record;
   pragma Convention (C_Pass_By_Copy, sfInputStream);

  --/< Function to set the current read position
  --/< Function to get the current read position
  --/< Function to get the total number of bytes in the stream
  --/< User data that will be passed to the callbacks
end Sf.System.InputStream;
