--//////////////////////////////////////////////////////////
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
--//////////////////////////////////////////////////////////

--//////////////////////////////////////////////////////////

--//////////////////////////////////////////////////////////
with Sf.Config;
with Sf.Network.Types;

package Sf.Network.Http is
   use Sf.Config;
   use Sf.Network.Types;

   --//////////////////////////////////////////////////////////
   --/ Enumerate the available HTTP methods for a request
   --//////////////////////////////////////////////////////////
   type sfHttpMethod is (sfHttpGet, sfHttpPost, sfHttpHead);

   --//////////////////////////////////////////////////////////
   --/ Enumerate all the valid status codes returned in
   --/ a HTTP response
   --//////////////////////////////////////////////////////////
   subtype sfHttpStatus is sfUint32;
   sfHttpOk                  : constant sfHttpStatus := 200;
   sfHttpCreated             : constant sfHttpStatus := 201;
   sfHttpAccepted            : constant sfHttpStatus := 202;
   sfHttpNoContent           : constant sfHttpStatus := 204;
   sfHttpMultipleChoices     : constant sfHttpStatus := 300;
   sfHttpMovedPermanently    : constant sfHttpStatus := 301;
   sfHttpMovedTemporarily    : constant sfHttpStatus := 302;
   sfHttpNotModified         : constant sfHttpStatus := 304;
   sfHttpBadRequest          : constant sfHttpStatus := 400;
   sfHttpUnauthorized        : constant sfHttpStatus := 401;
   sfHttpForbidden           : constant sfHttpStatus := 403;
   sfHttpNotFound            : constant sfHttpStatus := 404;
   sfHttpInternalServerError : constant sfHttpStatus := 500;
   sfHttpNotImplemented      : constant sfHttpStatus := 501;
   sfHttpBadGateway          : constant sfHttpStatus := 502;
   sfHttpServiceNotAvailable : constant sfHttpStatus := 503;
   sfHttpInvalidResponse     : constant sfHttpStatus := 1000;
   sfHttpConnectionFailed    : constant sfHttpStatus := 1001;

   --//////////////////////////////////////////////////////////
   --/ Construct a new Http request
   --/
   --/ @return Pointer to the new Http request
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpRequest_Create return sfHttpRequest_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing Http request
   --/
   --/ @param HttpRequest   Http request to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_Destroy (HttpRequest : sfHttpRequest_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Set the value of a field; the field is added if it doesn't exist
   --/
   --/ @param HttpRequest   Http request to modify
   --/ @param Field         Name of the field to set (case-insensitive)
   --/ @param Value         Value of the field
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_SetField (HttpRequest : sfHttpRequest_Ptr; Field : String; Value : String);

   --//////////////////////////////////////////////////////////
   --/ Set the request method.
   --/ This parameter is sfHttpGet by default
   --/
   --/ @param HttpRequest     Http request to modify
   --/ @param RequestMethod   Method to use for the request
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_SetMethod (HttpRequest : sfHttpRequest_Ptr; Method : sfHttpMethod);

   --//////////////////////////////////////////////////////////
   --/ Set the target URI of the request.
   --/ This parameter is "/" by default
   --/
   --/ @param HttpRequest   Http request to modify
   --/ @param URI           URI to request, local to the host
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_SetURI (HttpRequest : sfHttpRequest_Ptr; URI : String);

   --//////////////////////////////////////////////////////////
   --/ Set the HTTP version of the request.
   --/ This parameter is 1.0 by default
   --/
   --/ @param HttpRequest   Http request to modify
   --/ @param Major         Major version number
   --/ @param Minor         Minor version number
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_SetHttpVersion (HttpRequest : sfHttpRequest_Ptr; Major : sfUint32; Minor : sfUint32);

   --//////////////////////////////////////////////////////////
   --/ Set the body of the request. This parameter is optional and
   --/ makes sense only for POST requests.
   --/ This parameter is empty by default
   --/
   --/ @param HttpRequest   Http request to modify
   --/ @param Body          Content of the request body
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpRequest_SetBody (HttpRequest : sfHttpRequest_Ptr; The_Body : String);

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing Http response
   --/
   --/ @param HttpResponse   Http response to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttpResponse_Destroy (HttpResponse : sfHttpResponse_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Get the value of a field; returns NULL if the field doesn't exist
   --/
   --/ @param HttpResponse   Http response
   --/ @param Field          Field to get
   --/
   --/ @return Value of the field (NULL if it doesn't exist)
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpResponse_GetField (HttpResponse : sfHttpResponse_Ptr; Field : String) return String;

   --//////////////////////////////////////////////////////////
   --/ Get the status of a response
   --/
   --/ @param HttpResponse   Http response
   --/
   --/ @return Status of the response
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpResponse_GetStatus (HttpResponse : sfHttpResponse_Ptr) return sfHttpStatus;

   --//////////////////////////////////////////////////////////
   --/ Get the major HTTP version of a response
   --/
   --/ @param HttpResponse   Http response
   --/
   --/ @return HTTP major version of the response
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpResponse_GetMajorVersion (HttpResponse : sfHttpResponse_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ Get the minor HTTP version of a response
   --/
   --/ @param HttpResponse   Http response
   --/
   --/ @return HTTP minor version of the response
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpResponse_GetMinorVersion (HttpResponse : sfHttpResponse_Ptr) return sfUint32;

   --//////////////////////////////////////////////////////////
   --/ Get the body of the response. The body can contain :
   --/ - the requested page (for GET requests)
   --/ - a response from the server (for POST requests)
   --/ - nothing (for HEAD requests)
   --/ - an error message (in case of an error)
   --/
   --/ @param HttpResponse   Http response
   --/
   --/ @return Body of the response (empty string if no body)
   --/
   --//////////////////////////////////////////////////////////
   function sfHttpResponse_GetBody (HttpResponse : sfHttpResponse_Ptr) return String;

   --//////////////////////////////////////////////////////////
   --/ Construct a new Http object
   --/
   --/ @return Pointer to the new Http
   --/
   --//////////////////////////////////////////////////////////
   function sfHttp_Create return sfHttp_Ptr;

   --//////////////////////////////////////////////////////////
   --/ Destroy an existing Http object
   --/
   --/ @param Http   Http to destroy
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttp_Destroy (Http : sfHttp_Ptr);

   --//////////////////////////////////////////////////////////
   --/ Set the target host of a Http server
   --/
   --/ @param Http   Http object
   --/ @param Host   Web server to connect to
   --/ @param Port   Port to use for connection (0 to use the standard port of the protocol used)
   --/
   --//////////////////////////////////////////////////////////
   procedure sfHttp_SetHost (Http : sfHttp_Ptr; Host : String; Port : sfUint16);

   --//////////////////////////////////////////////////////////
   --/ Send a HTTP request and return the server's response.
   --/ You must be connected to a host before sending requests.
   --/ Any missing mandatory header field will be added with an appropriate value.
   --/ Warning : this function waits for the server's response and may
   --/ not return instantly; use a thread if you don't want to block your
   --/ application.
   --/
   --/ @param Http      Http object
   --/ @param Request   Request to send
   --/ @param Timeout   Maximum time to wait (0 to use no timeout)
   --/
   --/ @return Server's response, or NULL if request is invalid
   --/
   --//////////////////////////////////////////////////////////
   function sfHttp_SendRequest
     (Http    : sfHttp_Ptr;
      Request : sfHttpRequest_Ptr;
      Timeout : Float)
     return    sfHttpResponse_Ptr;

private

   pragma Convention (C, sfHttpMethod);

   pragma Import (C, sfHttpRequest_Create, "sfHttpRequest_create");
   pragma Import (C, sfHttpRequest_Destroy, "sfHttpRequest_destroy");
   pragma Import (C, sfHttpRequest_SetMethod, "sfHttpRequest_setMethod");
   pragma Import (C, sfHttpRequest_SetHttpVersion, "sfHttpRequest_setHttpVersion");
   pragma Import (C, sfHttpResponse_Destroy, "sfHttpResponse_destroy");
   pragma Import (C, sfHttpResponse_GetStatus, "sfHttpResponse_getStatus");
   pragma Import (C, sfHttpResponse_GetMajorVersion, "sfHttpResponse_getMajorVersion");
   pragma Import (C, sfHttpResponse_GetMinorVersion, "sfHttpResponse_getMinorVersion");
   pragma Import (C, sfHttp_Create, "sfHttp_create");
   pragma Import (C, sfHttp_Destroy, "sfHttp_destroy");
   pragma Import (C, sfHttp_SendRequest, "sfHttp_sendRequest");

end Sf.Network.Http;
