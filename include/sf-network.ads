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


--/ @summary
--/ Network module
--/
--/ @description
--/ Socket-based communication, utilities and higher-level
--/ network protocols (HTTP, FTP).
package Sf.Network is

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
   type sfSocketSelector is null record;
   type sfSocketSelector_Ptr is access all sfSocketSelector;
   type sfTcpListener is null record;
   type sfTcpListener_Ptr is access all sfTcpListener;
   type sfTcpSocket is null record;
   type sfTcpSocket_Ptr is access all sfTcpSocket;
   type sfUdpSocket is null record;
   type sfUdpSocket_Ptr is access all sfUdpSocket;

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
   pragma Convention (C, sfSocketSelector);
   pragma Convention (C, sfSocketSelector_Ptr);
   pragma Convention (C, sfTcpSocket);
   pragma Convention (C, sfTcpSocket_Ptr);
   pragma Convention (C, sfUdpSocket);
   pragma Convention (C, sfUdpSocket_Ptr);

end Sf.Network;
