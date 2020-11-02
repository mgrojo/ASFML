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





package Sf.Network.Packet is

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////

   --//////////////////////////////////////////////////////////
   --//////////////////////////////////////////////////////////
   --/ @brief Create a new packet
   --/
   --/ @return A new sfPacket object
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_create return sfPacket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new packet by copying an existing one
   --/
   --/ @param packet Packet to copy
   --/
   --/ @return A new sfPacket object which is a copy of @a packet
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_copy (packet : sfPacket_Ptr) return sfPacket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy a packet
   --/
   --/ @param packet Packet to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfPacket_destroy (packet : sfPacket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Append data to the end of a packet
   --/
   --/ @param packet      Packet object
   --/ @param data        Pointer to the sequence of bytes to append
   --/ @param sizeInBytes Number of bytes to append
   --/
   --//////////////////////////////////////////////////////////
   procedure sfPacket_append
     (packet : sfPacket_Ptr;
      data : Standard.System.Address;
      sizeInBytes : sfSize_t);

   --//////////////////////////////////////////////////////////
   --/ @brief Clear a packet
   --/
   --/ After calling Clear, the packet is empty.
   --/
   --/ @param packet Packet object
   --/
   --/////////////////////////////////////////////////////////
   procedure sfPacket_clear (packet : sfPacket_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Get a pointer to the data contained in a packet
   --/
   --/ Warning: the returned pointer may become invalid after
   --/ you append data to the packet, therefore it should never
   --/ be stored.
   --/ The return pointer is NULL if the packet is empty.
   --/
   --/ @param packet Packet object
   --/
   --/ @return Pointer to the data
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_getData (packet : sfPacket_Ptr) return sfPacket_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Get the size of the data contained in a packet
   --/
   --/ This function returns the number of bytes pointed to by
   --/ what sfPacket_getData returns.
   --/
   --/ @param packet Packet object
   --/
   --/ @return Data size, in bytes
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_getDataSize (packet : sfPacket_Ptr) return sfSize_t;

   --//////////////////////////////////////////////////////////
   --/ @brief Tell if the reading position has reached the
   --/        end of a packet
   --/
   --/ This function is useful to know if there is some data
   --/ left to be read, without actually reading it.
   --/
   --/ @param packet Packet object
   --/
   --/ @return sfTrue if all data was read, sfFalse otherwise
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_endOfPacket (packet : sfPacket_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Test the validity of a packet, for reading
   --/
   --/ This function allows to test the packet, to check if
   --/ a reading operation was successful.
   --/
   --/ A packet will be in an invalid state if it has no more
   --/ data to read.
   --/
   --/ @param packet Packet object
   --/
   --/ @return sfTrue if last data extraction from packet was successful
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_canRead (packet : sfPacket_Ptr) return sfBool;

   --//////////////////////////////////////////////////////////
   --/ @brief Functions to extract data from a packet
   --/
   --/ @param packet Packet object
   --/
   --//////////////////////////////////////////////////////////
   function sfPacket_readBool (packet : sfPacket_Ptr) return sfBool;

   function sfPacket_readInt8 (packet : sfPacket_Ptr) return sfInt8;

   function sfPacket_readUint8 (packet : sfPacket_Ptr) return sfUint8;

   function sfPacket_readInt16 (packet : sfPacket_Ptr) return sfInt16;

   function sfPacket_readUint16 (packet : sfPacket_Ptr) return sfUint16;

   function sfPacket_readInt32 (packet : sfPacket_Ptr) return sfInt32;

   function sfPacket_readUint32 (packet : sfPacket_Ptr) return sfUint32;

   function sfPacket_readFloat (packet : sfPacket_Ptr) return Float;

   function sfPacket_readDouble (packet : sfPacket_Ptr) return Long_Float;

   procedure sfPacket_readString (packet :     sfPacket_Ptr;
                                  str    : out String);

   procedure sfPacket_readWideString (packet : sfPacket_Ptr;
                                      str    : sfUint32_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Functions to insert data into a packet
   --/
   --/ @param packet Packet object
   --/
   --//////////////////////////////////////////////////////////
   procedure sfPacket_writeBool (packet : sfPacket_Ptr; item : sfBool);

   procedure sfPacket_writeInt8 (packet : sfPacket_Ptr; item : sfInt8);

   procedure sfPacket_writeUint8 (packet : sfPacket_Ptr; item : sfUint8);

   procedure sfPacket_writeInt16 (packet : sfPacket_Ptr; item : sfInt16);

   procedure sfPacket_writeUint16 (packet : sfPacket_Ptr; item : sfUint16);

   procedure sfPacket_writeInt32 (packet : sfPacket_Ptr; item : sfInt32);

   procedure sfPacket_writeUint32 (packet : sfPacket_Ptr; item : sfUint32);

   procedure sfPacket_writeFloat (packet : sfPacket_Ptr; item : Float);

   procedure sfPacket_writeDouble (packet : sfPacket_Ptr; item : Long_Float);

   procedure sfPacket_writeString (packet : sfPacket_Ptr; item : String);

   procedure sfPacket_writeWideString (packet : sfPacket_Ptr; item : sfUint32_Ptr);

private

   pragma Import (C, sfPacket_create, "sfPacket_create");
   pragma Import (C, sfPacket_copy, "sfPacket_copy");
   pragma Import (C, sfPacket_destroy, "sfPacket_destroy");
   pragma Import (C, sfPacket_append, "sfPacket_append");
   pragma Import (C, sfPacket_clear, "sfPacket_clear");
   pragma Import (C, sfPacket_getData, "sfPacket_getData");
   pragma Import (C, sfPacket_getDataSize, "sfPacket_getDataSize");
   pragma Import (C, sfPacket_endOfPacket, "sfPacket_endOfPacket");
   pragma Import (C, sfPacket_canRead, "sfPacket_canRead");
   pragma Import (C, sfPacket_readBool, "sfPacket_readBool");
   pragma Import (C, sfPacket_readInt8, "sfPacket_readInt8");
   pragma Import (C, sfPacket_readUint8, "sfPacket_readUint8");
   pragma Import (C, sfPacket_readInt16, "sfPacket_readInt16");
   pragma Import (C, sfPacket_readUint16, "sfPacket_readUint16");
   pragma Import (C, sfPacket_readInt32, "sfPacket_readInt32");
   pragma Import (C, sfPacket_readUint32, "sfPacket_readUint32");
   pragma Import (C, sfPacket_readFloat, "sfPacket_readFloat");
   pragma Import (C, sfPacket_readDouble, "sfPacket_readDouble");
   pragma Import (C, sfPacket_readWideString, "sfPacket_readWideString");
   pragma Import (C, sfPacket_writeBool, "sfPacket_writeBool");
   pragma Import (C, sfPacket_writeInt8, "sfPacket_writeInt8");
   pragma Import (C, sfPacket_writeUint8, "sfPacket_writeUint8");
   pragma Import (C, sfPacket_writeInt16, "sfPacket_writeInt16");
   pragma Import (C, sfPacket_writeUint16, "sfPacket_writeUint16");
   pragma Import (C, sfPacket_writeInt32, "sfPacket_writeInt32");
   pragma Import (C, sfPacket_writeUint32, "sfPacket_writeUint32");
   pragma Import (C, sfPacket_writeFloat, "sfPacket_writeFloat");
   pragma Import (C, sfPacket_writeDouble, "sfPacket_writeDouble");
   pragma Import (C, sfPacket_writeWideString, "sfPacket_writeWideString");


end Sf.Network.Packet;
