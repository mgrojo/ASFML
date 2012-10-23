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

package Sf.Network.Types is

   type sfFtpDirectoryResponse is null record;
   type sfFtpDirectoryResponse_Ptr is access all sfFtpDirectoryResponse;
   type sfFtpListingResponse is null record;
   type sfFtpListingResponse_Ptr is access all sfFtpListingResponse;
   type sfFtpResponse is null record;
   type sfFtpResponse_Ptr is access all sfFtpResponse;
   type sfFtp is null record;
   type sfFtp_Ptr is access all sfFtp;
   type sfHttpRequest is null record;
   type sfHttpRequest_Ptr is access all sfHttpRequest;
   type sfHttpResponse is null record;
   type sfHttpResponse_Ptr is access all sfHttpResponse;
   type sfHttp is null record;
   type sfHttp_Ptr is access all sfHttp;
   type sfPacket is null record;
   type sfPacket_Ptr is access all sfPacket;
   type sfSelectorTCP is null record;
   type sfSelectorTCP_Ptr is access all sfSelectorTCP;
   type sfSelectorUDP is null record;
   type sfSelectorUDP_Ptr is access all sfSelectorUDP;
   type sfSocketTCP is null record;
   type sfSocketTCP_Ptr is access all sfSocketTCP;
   type sfSocketUDP is null record;
   type sfSocketUDP_Ptr is access all sfSocketUDP;

private

   pragma Convention (C, sfFtpDirectoryResponse);
   pragma Convention (C, sfFtpDirectoryResponse_Ptr);
   pragma Convention (C, sfFtpListingResponse);
   pragma Convention (C, sfFtpListingResponse_Ptr);
   pragma Convention (C, sfFtpResponse);
   pragma Convention (C, sfFtpResponse_Ptr);
   pragma Convention (C, sfFtp);
   pragma Convention (C, sfFtp_Ptr);
   pragma Convention (C, sfHttpRequest);
   pragma Convention (C, sfHttpRequest_Ptr);
   pragma Convention (C, sfHttpResponse);
   pragma Convention (C, sfHttpResponse_Ptr);
   pragma Convention (C, sfHttp);
   pragma Convention (C, sfHttp_Ptr);
   pragma Convention (C, sfPacket);
   pragma Convention (C, sfPacket_Ptr);
   pragma Convention (C, sfSelectorTCP);
   pragma Convention (C, sfSelectorTCP_Ptr);
   pragma Convention (C, sfSelectorUDP);
   pragma Convention (C, sfSelectorUDP_Ptr);
   pragma Convention (C, sfSocketTCP);
   pragma Convention (C, sfSocketTCP_Ptr);
   pragma Convention (C, sfSocketUDP);
   pragma Convention (C, sfSocketUDP_Ptr);

end Sf.Network.Types;
