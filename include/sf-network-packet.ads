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

package Sf.Network.Packet is
   use Sf.Config;
   use Sf.Network.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new empty packet
   -- ///
   -- /// \return A new sfPacket object
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_Create return sfPacket_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing packet
   -- ///
   -- /// \param Packet : Packet to delete
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPacket_Destroy (Packet : sfPacket_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Append data to the end of a packet
   -- ///
   -- /// \param Packet :      Packet to fill
   -- /// \param Data :        Pointer to the bytes to append
   -- /// \param SizeInBytes : Number of bytes to append
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPacket_Append (Packet : sfPacket_Ptr; Data : sfVoid_Ptr; SizeInBytes : sfSize_t);

   -- ////////////////////////////////////////////////////////////
   -- /// Clear all the data of a packet
   -- ///
   -- /// \param Packet : Packet to clear
   -- ///
   -- ///////////////////////////////////////////////////////////
   procedure sfPacket_Clear (Packet : sfPacket_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Get a pointer to the data contained in a packet
   -- /// Warning : the returned pointer may be invalid after you
   -- /// append data to the packet
   -- ///
   -- /// \param Packet : Packet to get data from
   -- ///
   -- /// \return Pointer to the data
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_GetData (Packet : sfPacket_Ptr) return sfInt8_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the size of the data contained in a packet
   -- ///
   -- /// \param Packet : Packet to get data size from
   -- ///
   -- /// \return Data size, in bytes
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_GetDataSize (Packet : sfPacket_Ptr) return sfSize_t;

   -- ////////////////////////////////////////////////////////////
   -- /// Tell if the reading position has reached the end of the packet
   -- ///
   -- /// \param Packet : Packet to check
   -- ///
   -- /// \return sfTrue if all data have been read into the packet
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_EndOfPacket (Packet : sfPacket_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Return the validity of packet
   -- ///
   -- /// \param Packet : Packet to check
   -- ///
   -- /// \return sfTrue if last data extraction from packet was successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_CanRead (Packet : sfPacket_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Functions to extract data from a packet
   -- ///
   -- /// \param Packet : Packet to read
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfPacket_ReadBool (Packet : sfPacket_Ptr) return sfBool;
   function sfPacket_ReadInt8 (Packet : sfPacket_Ptr) return sfInt8;
   function sfPacket_ReadUint8 (Packet : sfPacket_Ptr) return sfUint8;
   function sfPacket_ReadInt16 (Packet : sfPacket_Ptr) return sfInt16;
   function sfPacket_ReadUint16 (Packet : sfPacket_Ptr) return sfUint16;
   function sfPacket_ReadInt32 (Packet : sfPacket_Ptr) return sfInt32;
   function sfPacket_ReadUint32 (Packet : sfPacket_Ptr) return sfUint32;
   function sfPacket_ReadFloat (Packet : sfPacket_Ptr) return Float;
   function sfPacket_ReadDouble (Packet : sfPacket_Ptr) return Long_Float;
   procedure sfPacket_ReadString (Packet : sfPacket_Ptr; Str : out String);
   procedure sfPacket_ReadWideString (Packet : sfPacket_Ptr; Str : sfUint32_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Functions to insert data into a packet
   -- ///
   -- /// \param Packet : Packet to write
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfPacket_WriteBool (Packet : sfPacket_Ptr; arg2 : sfBool);
   procedure sfPacket_WriteInt8 (Packet : sfPacket_Ptr; arg2 : sfInt8);
   procedure sfPacket_WriteUint8 (Packet : sfPacket_Ptr; arg2 : sfUint8);
   procedure sfPacket_WriteInt16 (Packet : sfPacket_Ptr; arg2 : sfInt16);
   procedure sfPacket_WriteUint16 (Packet : sfPacket_Ptr; arg2 : sfUint16);
   procedure sfPacket_WriteInt32 (Packet : sfPacket_Ptr; arg2 : sfInt32);
   procedure sfPacket_WriteUint32 (Packet : sfPacket_Ptr; arg2 : sfUint32);
   procedure sfPacket_WriteFloat (Packet : sfPacket_Ptr; arg2 : Float);
   procedure sfPacket_WriteDouble (Packet : sfPacket_Ptr; arg2 : Long_Float);
   procedure sfPacket_WriteString (Packet : sfPacket_Ptr; Str : String);
   procedure sfPacket_WriteWideString (Packet : sfPacket_Ptr; Str : sfUint32_Ptr);

private

   pragma Import (C, sfPacket_Create, "sfPacket_create");
   pragma Import (C, sfPacket_Destroy, "sfPacket_destroy");
   pragma Import (C, sfPacket_Append, "sfPacket_append");
   pragma Import (C, sfPacket_Clear, "sfPacket_clear");
   pragma Import (C, sfPacket_GetData, "sfPacket_getData");
   pragma Import (C, sfPacket_GetDataSize, "sfPacket_getDataSize");
   pragma Import (C, sfPacket_EndOfPacket, "sfPacket_endOfPacket");
   pragma Import (C, sfPacket_CanRead, "sfPacket_canRead");
   pragma Import (C, sfPacket_ReadBool, "sfPacket_readBool");
   pragma Import (C, sfPacket_ReadInt8, "sfPacket_readInt8");
   pragma Import (C, sfPacket_ReadUint8, "sfPacket_readUint8");
   pragma Import (C, sfPacket_ReadInt16, "sfPacket_readInt16");
   pragma Import (C, sfPacket_ReadUint16, "sfPacket_readUint16");
   pragma Import (C, sfPacket_ReadInt32, "sfPacket_readInt32");
   pragma Import (C, sfPacket_ReadUint32, "sfPacket_readUint32");
   pragma Import (C, sfPacket_ReadFloat, "sfPacket_readFloat");
   pragma Import (C, sfPacket_ReadDouble, "sfPacket_readDouble");
   pragma Import (C, sfPacket_ReadWideString, "sfPacket_readWideString");
   pragma Import (C, sfPacket_WriteBool, "sfPacket_writeBool");
   pragma Import (C, sfPacket_WriteInt8, "sfPacket_writeInt8");
   pragma Import (C, sfPacket_WriteUint8, "sfPacket_writeUint8");
   pragma Import (C, sfPacket_WriteInt16, "sfPacket_writeInt16");
   pragma Import (C, sfPacket_WriteUint16, "sfPacket_writeUint16");
   pragma Import (C, sfPacket_WriteInt32, "sfPacket_writeInt32");
   pragma Import (C, sfPacket_WriteUint32, "sfPacket_writeUint32");
   pragma Import (C, sfPacket_WriteFloat, "sfPacket_writeFloat");
   pragma Import (C, sfPacket_WriteDouble, "sfPacket_writeDouble");
   pragma Import (C, sfPacket_WriteWideString, "sfPacket_writeWideString");

end Sf.Network.Packet;
