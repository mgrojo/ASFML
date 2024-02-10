--//////////////////////////////////////////////////////////
-- SFML - Simple and Fast Multimedia Library
-- Copyright (C) 2007-2023 Laurent Gomila (laurent@sfml-dev.org)
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


package Sf.System.Buffer is

  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////

  --//////////////////////////////////////////////////////////
  --//////////////////////////////////////////////////////////
  --/ @brief Create an empty buffer
  --/
  --/ @return A new sfBuffer object, or NULL if it failed
  --/
  --//////////////////////////////////////////////////////////
   function create return sfBuffer_Ptr;

  --//////////////////////////////////////////////////////////
  --/ @brief Destroy an existing buffer
  --/
  --/ @param buffer Buffer to delete
  --/
  --//////////////////////////////////////////////////////////
   procedure destroy (buffer : sfBuffer_Ptr);

  --//////////////////////////////////////////////////////////
  --/ @brief Return the size of a buffer
  --/
  --/ @param buffer Buffer object
  --/
  --/ @return Size in bytes
  --/
  --//////////////////////////////////////////////////////////
   function getSize (buffer : in sfBuffer_Ptr) return sfSize_t;

  --//////////////////////////////////////////////////////////
  --/ @brief Get a read-only pointer to the array of bytes of a buffer
  --/
  --/ @param buffer Buffer object
  --/
  --/ @return Read-only pointer to the array of bytes
  --/
  --//////////////////////////////////////////////////////////
   function getData (buffer : in sfBuffer_Ptr) return access sfUint8;

private

   pragma Import (C, create, "sfBuffer_create");
   pragma Import (C, destroy, "sfBuffer_destroy");
   pragma Import (C, getSize, "sfBuffer_getSize");
   pragma Import (C, getData, "sfBuffer_getData");

end Sf.System.Buffer;
