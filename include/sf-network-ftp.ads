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
with Sf.Network.IPAddress;
with Sf.Network.Types;

package Sf.Network.Ftp is
   use Sf.Config;
   use Sf.Network.IPAddress;
   use Sf.Network.Types;

   -- ////////////////////////////////////////////////////////////
   -- /// Enumerate all the FTP file transfer modes
   -- ////////////////////////////////////////////////////////////
   type sfFtpTransferMode is (sfFtpBinary, sfFtpAscii, sfFtpEbcdic);

   -- ////////////////////////////////////////////////////////////
   -- /// Enumerate all the valid status codes returned in
   -- /// a FTP response
   -- ////////////////////////////////////////////////////////////
   subtype sfFtpStatus is sfUint32;
   sfFtpRestartMarkerReply          : constant sfFtpStatus := 110;
   sfFtpServiceReadySoon            : constant sfFtpStatus := 120;
   sfFtpDataConnectionAlreadyOpened : constant sfFtpStatus := 125;
   sfFtpOpeningDataConnection       : constant sfFtpStatus := 150;
   sfFtpOk                          : constant sfFtpStatus := 200;
   sfFtpPointlessCommand            : constant sfFtpStatus := 202;
   sfFtpSystemStatus                : constant sfFtpStatus := 211;
   sfFtpDirectoryStatus             : constant sfFtpStatus := 212;
   sfFtpFileStatus                  : constant sfFtpStatus := 213;
   sfFtpHelpMessage                 : constant sfFtpStatus := 214;
   sfFtpSystemType                  : constant sfFtpStatus := 215;
   sfFtpServiceReady                : constant sfFtpStatus := 220;
   sfFtpClosingConnection           : constant sfFtpStatus := 221;
   sfFtpDataConnectionOpened        : constant sfFtpStatus := 225;
   sfFtpClosingDataConnection       : constant sfFtpStatus := 226;
   sfFtpEnteringPassiveMode         : constant sfFtpStatus := 227;
   sfFtpLoggedIn                    : constant sfFtpStatus := 230;
   sfFtpFileActionOk                : constant sfFtpStatus := 250;
   sfFtpDirectoryOk                 : constant sfFtpStatus := 257;
   sfFtpNeedPassword                : constant sfFtpStatus := 331;
   sfFtpNeedAccountToLogIn          : constant sfFtpStatus := 332;
   sfFtpNeedInformation             : constant sfFtpStatus := 350;
   sfFtpServiceUnavailable          : constant sfFtpStatus := 421;
   sfFtpDataConnectionUnavailable   : constant sfFtpStatus := 425;
   sfFtpTransferAborted             : constant sfFtpStatus := 426;
   sfFtpFileActionAborted           : constant sfFtpStatus := 450;
   sfFtpLocalError                  : constant sfFtpStatus := 451;
   sfFtpInsufficientStorageSpace    : constant sfFtpStatus := 452;
   sfFtpCommandUnknown              : constant sfFtpStatus := 500;
   sfFtpParametersUnknown           : constant sfFtpStatus := 501;
   sfFtpCommandNotImplemented       : constant sfFtpStatus := 502;
   sfFtpBadCommandSequence          : constant sfFtpStatus := 503;
   sfFtpParameterNotImplemented     : constant sfFtpStatus := 504;
   sfFtpNotLoggedIn                 : constant sfFtpStatus := 530;
   sfFtpNeedAccountToStore          : constant sfFtpStatus := 532;
   sfFtpFileUnavailable             : constant sfFtpStatus := 550;
   sfFtpPageTypeUnknown             : constant sfFtpStatus := 551;
   sfFtpNotEnoughMemory             : constant sfFtpStatus := 552;
   sfFtpFilenameNotAllowed          : constant sfFtpStatus := 553;
   sfFtpInvalidResponse             : constant sfFtpStatus := 1000;
   sfFtpConnectionFailed            : constant sfFtpStatus := 1001;
   sfFtpConnectionClosed            : constant sfFtpStatus := 1002;
   sfFtpInvalidFile                 : constant sfFtpStatus := 1003;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing Ftp listing response
   -- ///
   -- /// \param FtpResponse : Ftp listing response to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfFtpListingResponse_Destroy (FtpListingResponse : sfFtpListingResponse_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Convenience function to check if the response status code
   -- /// means a success
   -- ///
   -- /// \param FtpListingResponse : Ftp listing response
   -- ///
   -- /// \return sfTrue if status is success (code < 400)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpListingResponse_IsOk (FtpListingResponse : sfFtpListingResponse_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the response status code
   -- ///
   -- /// \param FtpListingResponse : Ftp listing response
   -- ///
   -- /// \return Status code
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpListingResponse_GetStatus (FtpListingResponse : sfFtpListingResponse_Ptr) return sfFtpStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the full message contained in the response
   -- ///
   -- /// \param FtpListingResponse : Ftp listing response
   -- ///
   -- /// \return The response message
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpListingResponse_GetMessage (FtpListingResponse : sfFtpListingResponse_Ptr) return String;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the number of filenames in the listing
   -- ///
   -- /// \param FtpListingResponse : Ftp listing response
   -- ///
   -- /// \return Total number of filenames
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpListingResponse_GetCount (FtpListingResponse : sfFtpListingResponse_Ptr) return sfSize_t;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the Index-th filename in the directory
   -- ///
   -- /// \param FtpListingResponse : Ftp listing response
   -- /// \param Index :              Index of the filename to get
   -- ///
   -- /// \return Index-th filename
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpListingResponse_GetFilename (FtpListingResponse : sfFtpListingResponse_Ptr; Index : sfSize_t) return String;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing Ftp directory response
   -- ///
   -- /// \param FtpDirectoryResponse : Ftp directory response to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfFtpDirectoryResponse_Destroy (FtpDirectoryResponse : sfFtpDirectoryResponse_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Convenience function to check if the response status code
   -- /// means a success
   -- ///
   -- /// \param FtpDirectoryResponse : Ftp directory response
   -- ///
   -- /// \return sfTrue if status is success (code < 400)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpDirectoryResponse_IsOk (FtpDirectoryResponse : sfFtpDirectoryResponse_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the response status code
   -- ///
   -- /// \param FtpDirectoryResponse : Ftp directory response
   -- ///
   -- /// \return Status code
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpDirectoryResponse_GetStatus (FtpDirectoryResponse : sfFtpDirectoryResponse_Ptr) return sfFtpStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the full message contained in the response
   -- ///
   -- /// \param FtpDirectoryResponse : Ftp directory response
   -- ///
   -- /// \return The response message
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpDirectoryResponse_GetMessage (FtpDirectoryResponse : sfFtpDirectoryResponse_Ptr) return String;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the directory returned in the response
   -- ///
   -- /// \param FtpDirectoryResponse : Ftp directory response
   -- ///
   -- /// \return Directory name
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpDirectoryResponse_GetDirectory (FtpDirectoryResponse : sfFtpDirectoryResponse_Ptr) return String;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing Ftp response
   -- ///
   -- /// \param FtpResponse : Ftp response to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfFtpResponse_Destroy (FtpResponse : sfFtpResponse_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Convenience function to check if the response status code
   -- /// means a success
   -- ///
   -- /// \param FtpResponse : Ftp response
   -- ///
   -- /// \return sfTrue if status is success (code < 400)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpResponse_IsOk (FtpResponse : sfFtpResponse_Ptr) return sfBool;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the response status code
   -- ///
   -- /// \param FtpResponse : Ftp response
   -- ///
   -- /// \return Status code
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpResponse_GetStatus (FtpResponse : sfFtpResponse_Ptr) return sfFtpStatus;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the full message contained in the response
   -- ///
   -- /// \param FtpResponse : Ftp response
   -- ///
   -- /// \return The response message
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtpResponse_GetMessage (FtpResponse : sfFtpResponse_Ptr) return String;

   -- ////////////////////////////////////////////////////////////
   -- /// Construct a new Ftp
   -- ///
   -- /// \return Pointer to the new Ftp
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Create return sfFtp_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Destroy an existing Ftp
   -- ///
   -- /// \param Ftp : Ftp to destroy
   -- ///
   -- ////////////////////////////////////////////////////////////
   procedure sfFtp_Destroy (Ftp : sfFtp_Ptr);

   -- ////////////////////////////////////////////////////////////
   -- /// Connect to the specified FTP server
   -- ///
   -- /// \param Ftp :     Ftp instance
   -- /// \param Server :  FTP server to connect to
   -- /// \param Port :    Port used for connection (21 by default, standard FTP port)
   -- /// \param Timeout : Maximum time to wait (0 to use no timeout)
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Connect
     (Ftp     : sfFtp_Ptr;
      Server  : sfIPAddress;
      Port    : sfUint16;
      Timeout : Float)
      return    sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Log in using anonymous account
   -- ///
   -- /// \param Ftp : Ftp instance
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_LoginAnonymous (Ftp : sfFtp_Ptr) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Log in using a username and a password
   -- ///
   -- /// \param Ftp :      Ftp instance
   -- /// \param UserName : User name
   -- /// \param Password : Password
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Login
     (Ftp      : sfFtp_Ptr;
      UserName : String;
      Password : String)
      return     sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Close the connection with FTP server
   -- ///
   -- /// \param Ftp : Ftp instance
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Disconnect (Ftp : sfFtp_Ptr) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Send a null command just to prevent from being disconnected
   -- ///
   -- /// \param Ftp : Ftp instance
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_KeepAlive (Ftp : sfFtp_Ptr) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the current working directory
   -- ///
   -- /// \param Ftp : Ftp instance
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_GetWorkingDirectory (Ftp : sfFtp_Ptr) return sfFtpDirectoryResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Get the contents of the given directory
   -- /// (subdirectories and files)
   -- ///
   -- /// \param Ftp :       Ftp instance
   -- /// \param Directory : Directory to list ("" by default, the current one)
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_GetDirectoryListing (Ftp : sfFtp_Ptr; Directory : String) return sfFtpListingResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Change the current working directory
   -- ///
   -- /// \param Ftp :       Ftp instance
   -- /// \param Directory : New directory, relative to the current one
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_ChangeDirectory (Ftp : sfFtp_Ptr; Directory : String) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Go to the parent directory of the current one
   -- ///
   -- /// \param Ftp : Ftp instance
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_ParentDirectory (Ftp : sfFtp_Ptr) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new directory
   -- ///
   -- /// \param Ftp :  Ftp instance
   -- /// \param Name : Name of the directory to create
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_MakeDirectory (Ftp : sfFtp_Ptr; Name : String) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Remove an existing directory
   -- ///
   -- /// \param Ftp :  Ftp instance
   -- /// \param Name : Name of the directory to remove
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_DeleteDirectory (Ftp : sfFtp_Ptr; Name : String) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Rename a file
   -- ///
   -- /// \param Ftp :     Ftp instance
   -- /// \param File :    File to rename
   -- /// \param NewName : New name
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_RenameFile
     (Ftp     : sfFtp_Ptr;
      File    : String;
      NewName : String)
      return    sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Remove an existing file
   -- ///
   -- /// \param Ftp :  Ftp instance
   -- /// \param Name : File to remove
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_DeleteFile (Ftp : sfFtp_Ptr; Name : String) return sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Download a file from the server
   -- ///
   -- /// \param Ftp :         Ftp instance
   -- /// \param DistantFile : Path of the distant file to download
   -- /// \param DestPath :    Where to put to file on the local computer
   -- /// \param Mode :        Transfer mode (binary by default)
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Download
     (Ftp         : sfFtp_Ptr;
      DistantFile : String;
      DestPath    : String;
      Mode        : sfFtpTransferMode)
      return        sfFtpResponse_Ptr;

   -- ////////////////////////////////////////////////////////////
   -- /// Upload a file to the server
   -- ///
   -- /// \param Ftp :       Ftp instance
   -- /// \param LocalFile : Path of the local file to upload
   -- /// \param DestPath :  Where to put to file on the server
   -- /// \param Mode :      Transfer mode (binary by default)
   -- ///
   -- /// \return Server response to the request
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfFtp_Upload
     (Ftp       : sfFtp_Ptr;
      LocalFile : String;
      DestPath  : String;
      Mode      : sfFtpTransferMode)
      return      sfFtpResponse_Ptr;

private

   pragma Convention (C, sfFtpTransferMode);
   pragma Import (C, sfFtpListingResponse_Destroy, "sfFtpListingResponse_destroy");
   pragma Import (C, sfFtpListingResponse_IsOk, "sfFtpListingResponse_isOk");
   pragma Import (C, sfFtpListingResponse_GetStatus, "sfFtpListingResponse_getStatus");
   pragma Import (C, sfFtpListingResponse_GetCount, "sfFtpListingResponse_getCount");
   pragma Import (C, sfFtpDirectoryResponse_Destroy, "sfFtpDirectoryResponse_destroy");
   pragma Import (C, sfFtpDirectoryResponse_IsOk, "sfFtpDirectoryResponse_isOk");
   pragma Import (C, sfFtpDirectoryResponse_GetStatus, "sfFtpDirectoryResponse_getStatus");
   pragma Import (C, sfFtpResponse_Destroy, "sfFtpResponse_destroy");
   pragma Import (C, sfFtpResponse_IsOk, "sfFtpResponse_isOk");
   pragma Import (C, sfFtpResponse_GetStatus, "sfFtpResponse_getStatus");
   pragma Import (C, sfFtp_Create, "sfFtp_create");
   pragma Import (C, sfFtp_Destroy, "sfFtp_destroy");
   pragma Import (C, sfFtp_Connect, "sfFtp_connect");
   pragma Import (C, sfFtp_LoginAnonymous, "sfFtp_loginAnonymous");
   pragma Import (C, sfFtp_Disconnect, "sfFtp_disconnect");
   pragma Import (C, sfFtp_KeepAlive, "sfFtp_keepAlive");
   pragma Import (C, sfFtp_GetWorkingDirectory, "sfFtp_getWorkingDirectory");
   pragma Import (C, sfFtp_ParentDirectory, "sfFtp_parentDirectory");

end Sf.Network.Ftp;
