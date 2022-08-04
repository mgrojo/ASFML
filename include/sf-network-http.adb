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
with Interfaces.C.Strings;

package body Sf.Network.Http is
   use Interfaces.C.Strings;

   package body Request is

      --//////////////////////////////////////////////////////////
      --/ Set the value of a field; the field is added if it doesn't exist
      --/
      --/ @param HttpRequest   Http request to modify
      --/ @param Field         Name of the field to set (case-insensitive)
      --/ @param Value         Value of the field
      --/
      --//////////////////////////////////////////////////////////
      procedure SetField (HttpRequest : sfHttpRequest_Ptr; Field : String; Value : String) is
         procedure Internal (HttpRequest : sfHttpRequest_Ptr; Field : chars_ptr; Value : chars_ptr);
         pragma Import (C, Internal, "sfHttpRequest_setField");
         Temp1 : chars_ptr := New_String (Field);
         Temp2 : chars_ptr := New_String (Value);
      begin
         Internal (HttpRequest, Temp1, Temp2);
         Free (Temp1);
         Free (Temp2);
      end SetField;

      --//////////////////////////////////////////////////////////
      --/ Set the target URI of the request.
      --/ This parameter is "/" by default
      --/
      --/ @param HttpRequest   Http request to modify
      --/ @param URI           URI to request, local to the host
      --/
      --//////////////////////////////////////////////////////////
      procedure SetURI (HttpRequest : sfHttpRequest_Ptr; URI : String) is
         procedure Internal (HttpRequest : sfHttpRequest_Ptr; URI : chars_ptr);
         pragma Import (C, Internal, "sfHttpRequest_setUri");
         Temp : chars_ptr := New_String (URI);
      begin
         Internal (HttpRequest, Temp);
         Free (Temp);
      end SetURI;

      --//////////////////////////////////////////////////////////
      --/ Set the body of the request. This parameter is optional and
      --/ makes sense only for POST requests.
      --/ This parameter is empty by default
      --/
      --/ @param HttpRequest   Http request to modify
      --/ @param Body          Content of the request body
      --/
      --//////////////////////////////////////////////////////////
      procedure SetBody (HttpRequest : sfHttpRequest_Ptr; httpBody : String) is
         procedure Internal (HttpRequest : sfHttpRequest_Ptr; httpBody : chars_ptr);
         pragma Import (C, Internal, "sfHttpRequest_setBody");
         Temp : chars_ptr := New_String (httpBody);
      begin
         Internal (HttpRequest, Temp);
         Free (Temp);
      end SetBody;

   end Request;

   package body Response is

      --//////////////////////////////////////////////////////////
      --/ Get the value of a field; returns NULL if the field doesn't exist
      --/
      --/ @param HttpResponse   Http response
      --/ @param Field          Field to get
      --/
      --/ @return Value of the field (NULL if it doesn't exist)
      --/
      --//////////////////////////////////////////////////////////
      function GetField (HttpResponse : sfHttpResponse_Ptr; Field : String) return String is
         function Internal (HttpResponse : sfHttpResponse_Ptr; Field : chars_ptr) return chars_ptr;
         pragma Import (C, Internal, "sfHttpResponse_getField");
         Temp1 : chars_ptr := New_String (Field);
         Temp2 : chars_ptr := Internal (HttpResponse, Temp1);
         R     : constant String := Value (Temp2);
      begin
         Free (Temp1);
         Free (Temp2);
         return R;
      end GetField;

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
      function GetBody (HttpResponse : sfHttpResponse_Ptr) return String is
         function Internal (HttpResponse : sfHttpResponse_Ptr) return chars_ptr;
         pragma Import (C, Internal, "sfHttpResponse_getBody");
         Temp : chars_ptr := Internal (HttpResponse);
         R    : constant String := Value (Temp);
      begin
         Free (Temp);
         return R;
      end GetBody;

   end Response;

   --//////////////////////////////////////////////////////////
   --/ Set the target host of a Http server
   --/
   --/ @param Http   Http object
   --/ @param Host   Web server to connect to
   --/ @param Port   Port to use for connection (0 to use the standard port of the protocol used)
   --/
   --//////////////////////////////////////////////////////////
   procedure SetHost (Http : sfHttp_Ptr; Host : String; Port : sfUint16) is
      procedure Internal (Http : sfHttp_Ptr; Host : chars_ptr; Port : sfUint16);
      pragma Import (C, Internal, "sfHttp_setHost");
      Temp : chars_ptr := New_String (Host);
   begin
      Internal (Http, Temp, Port);
      Free (Temp);
   end SetHost;

end Sf.Network.Http;
