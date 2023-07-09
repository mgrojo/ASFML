with Interfaces.C.Strings;

package body Sf.Graphics.Shader is

   use Interfaces.C.Strings;

   -- Some CSFML functions expect NULL as special value. We suppose
   -- here that the empty string does not make sense as a value and
   -- conflate both cases from C to the empty string in Ada.
   --
   function New_String_Or_Null (Ada_String : String) return chars_ptr is
     (if Ada_String'Length /= 0
      then New_String (Ada_String)
      else Null_Ptr) with Inline;

   function createFromFile
     (vertexShaderFilename : String;
      geometryShaderFilename : String;
      fragmentShaderFilename : String) return sfShader_Ptr is

      function Internal
        (vertexShaderFilename : chars_ptr;
         geometryShaderFilename : chars_ptr;
         fragmentShaderFilename : chars_ptr) return sfShader_Ptr;

      pragma Import (C, Internal, "sfShader_createFromFile");

      C_vertexShaderFilename   : chars_ptr := New_String_Or_Null (vertexShaderFilename);
      C_geometryShaderFilename : chars_ptr := New_String_Or_Null (geometryShaderFilename);
      C_fragmentShaderFilename : chars_ptr := New_String_Or_Null (fragmentShaderFilename);
      Result : sfShader_Ptr;
   begin
      Result := Internal (C_vertexShaderFilename,
                          C_geometryShaderFilename,
                          C_fragmentShaderFilename);

      Free (C_vertexShaderFilename);
      Free (C_geometryShaderFilename);
      Free (C_fragmentShaderFilename);

      return Result;
   end createFromFile;


   function createFromMemory
     (vertexShader : String;
      geometryShader : String;
      fragmentShader : String) return sfShader_Ptr is

      function Internal
        (vertexShader : chars_ptr;
         geometryShader : chars_ptr;
         fragmentShader : chars_ptr) return sfShader_Ptr;

      pragma Import (C, Internal, "sfShader_createFromMemory");

      C_vertexShader   : chars_ptr := New_String_Or_Null (vertexShader);
      C_geometryShader : chars_ptr := New_String_Or_Null (geometryShader);
      C_fragmentShader : chars_ptr := New_String_Or_Null (fragmentShader);
      Result : sfShader_Ptr;
   begin
      Result := Internal (C_vertexShader, C_geometryShader, C_fragmentShader);

      Free (C_vertexShader);
      Free (C_geometryShader);
      Free (C_fragmentShader);

      return Result;

   end createFromMemory;


   procedure setFloatUniform
     (shader : sfShader_Ptr;
      name : String;
      x : float) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : float);
      pragma Import (C, Internal, "sfShader_setFloatUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x);
      Free (C_name);
   end setFloatUniform;


   procedure setVec2Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslVec2) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslVec2);
      pragma Import (C, Internal, "sfShader_setVec2Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setVec2Uniform;


   procedure setVec3Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslVec3) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslVec3);
      pragma Import (C, Internal, "sfShader_setVec3Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setVec3Uniform;

   procedure setVec4Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslVec4) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslVec4);
      pragma Import (C, Internal, "sfShader_setVec4Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setVec4Uniform;


   procedure setColorUniform
     (shader : sfShader_Ptr;
      name : String;
      color : Sf.Graphics.Color.sfColor) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         color : Sf.Graphics.Color.sfColor);
      pragma Import (C, Internal, "sfShader_setColorUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, color);
      Free (C_name);
   end setColorUniform;


   procedure setIntUniform
     (shader : sfShader_Ptr;
      name   : String;
      x      : sfInt32) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : sfInt32);
      pragma Import (C, Internal, "sfShader_setIntUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x);
      Free (C_name);
   end setIntUniform;


   procedure setIvec2Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslIvec2) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslIvec2);
      pragma Import (C, Internal, "sfShader_setIvec2Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setIvec2Uniform;


   procedure setIvec3Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslIvec3) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslIvec3);
      pragma Import (C, Internal, "sfShader_setIvec3Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setIvec3Uniform;


   procedure setIvec4Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslIvec4) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslIvec4);
      pragma Import (C, Internal, "sfShader_setIvec4Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setIvec4Uniform;


   procedure setIntColorUniform
     (shader : sfShader_Ptr;
      name : String;
      color : Sf.Graphics.Color.sfColor)  is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         color : Sf.Graphics.Color.sfColor);
      pragma Import (C, Internal, "sfShader_setIntColorUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, color);
      Free (C_name);
   end setIntColorUniform;


   procedure setBoolUniform
     (shader : sfShader_Ptr;
      name : String;
      x : sfBool) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : sfBool);
      pragma Import (C, Internal, "sfShader_setBoolUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x);
      Free (C_name);
   end setBoolUniform;


   procedure setBvec2Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslBvec2) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslBvec2);
      pragma Import (C, Internal, "sfShader_setBvec2Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setBvec2Uniform;



   procedure setBvec3Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslBvec3) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslBvec3);
      pragma Import (C, Internal, "sfShader_setBvec3Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setBvec3Uniform;


   procedure setBvec4Uniform
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.Graphics.Glsl.sfGlslBvec4)  is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.Graphics.Glsl.sfGlslBvec4);
      pragma Import (C, Internal, "sfShader_setBvec4Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setBvec4Uniform;


   procedure setMat3Uniform
     (shader : sfShader_Ptr;
      name : String;
      matrix : access constant Sf.Graphics.Glsl.sfGlslMat3) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         matrix : access constant Sf.Graphics.Glsl.sfGlslMat3);
      pragma Import (C, Internal, "sfShader_setMat3Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, matrix);
      Free (C_name);
   end setMat3Uniform;


   procedure setMat4Uniform
     (shader : sfShader_Ptr;
      name : String;
      matrix : access constant Sf.Graphics.Glsl.sfGlslMat4) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         matrix : access constant Sf.Graphics.Glsl.sfGlslMat4);
      pragma Import (C, Internal, "sfShader_setMat4Uniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, matrix);
      Free (C_name);
   end setMat4Uniform;


   procedure setTextureUniform
     (shader : sfShader_Ptr;
      name : String;
      texture : sfTexture_Ptr) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         texture : sfTexture_Ptr);
      pragma Import (C, Internal, "sfShader_setTextureUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, texture);
      Free (C_name);
   end setTextureUniform;


   procedure setCurrentTextureUniform (shader : sfShader_Ptr; name : String) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr);
      pragma Import (C, Internal, "sfShader_setCurrentTextureUniform");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name);
      Free (C_name);
   end setCurrentTextureUniform;


   procedure setFloatUniformArray
     (shader : sfShader_Ptr;
      name : String;
      scalarArray : access float;
      length : sfSize_t) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         scalarArray : access float;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setFloatUniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, scalarArray, length);
      Free (C_name);
   end setFloatUniformArray;


   procedure setVec2UniformArray
     (shader : sfShader_Ptr;
      name : String;
      vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec2;
      length : sfSize_t) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec2;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setVec2UniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vectorArray, length);
      Free (C_name);
   end setVec2UniformArray;


   procedure setVec3UniformArray
     (shader : sfShader_Ptr;
      name : String;
      vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec3;
      length : sfSize_t) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec3;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setVec3UniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vectorArray, length);
      Free (C_name);
   end setVec3UniformArray;


   procedure setVec4UniformArray
     (shader : sfShader_Ptr;
      name : String;
      vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec4;
      length : sfSize_t) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vectorArray : access constant Sf.Graphics.Glsl.sfGlslVec4;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setVec4UniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vectorArray, length);
      Free (C_name);
   end setVec4UniformArray;


   procedure setMat3UniformArray
     (shader : sfShader_Ptr;
      name : String;
      matrixArray : access constant Sf.Graphics.Glsl.sfGlslMat3;
      length : sfSize_t)  is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         matrix : access constant Sf.Graphics.Glsl.sfGlslMat3;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setMat3UniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, matrixArray, length);
      Free (C_name);
   end setMat3UniformArray;


   procedure setMat4UniformArray
     (shader : sfShader_Ptr;
      name : String;
      matrixArray : access constant Sf.Graphics.Glsl.sfGlslMat4;
      length : sfSize_t) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         matrixArray : access constant Sf.Graphics.Glsl.sfGlslMat4;
         length : sfSize_t);
      pragma Import (C, Internal, "sfShader_setMat4UniformArray");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, matrixArray, length);
      Free (C_name);
   end setMat4UniformArray;


   procedure setFloatParameter
     (shader : sfShader_Ptr;
      name : String;
      x : float) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : float);
      pragma Import (C, Internal, "sfShader_setFloatParameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x);
      Free (C_name);
   end setFloatParameter;


   procedure setFloat2Parameter
     (shader : sfShader_Ptr;
      name : String;
      x : float;
      y : float) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : float;
         y : float);
      pragma Import (C, Internal, "sfShader_setFloat2Parameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x, y);
      Free (C_name);
   end setFloat2Parameter;


   procedure setFloat3Parameter
     (shader : sfShader_Ptr;
      name : String;
      x : float;
      y : float;
      z : float) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : float;
         y : float;
         z : float);
      pragma Import (C, Internal, "sfShader_setFloat3Parameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x, y, z);
      Free (C_name);
   end setFloat3Parameter;


   procedure setFloat4Parameter
     (shader : sfShader_Ptr;
      name : String;
      x : float;
      y : float;
      z : float;
      w : float) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         x : float;
         y : float;
         z : float;
         w : float);
      pragma Import (C, Internal, "sfShader_setFloat4Parameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, x, y, z, w);
      Free (C_name);
   end setFloat4Parameter;


   procedure setVector2Parameter
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.System.Vector2.sfVector2f) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.System.Vector2.sfVector2f);
      pragma Import (C, Internal, "sfShader_setVector2Parameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setVector2Parameter;


   procedure setVector3Parameter
     (shader : sfShader_Ptr;
      name : String;
      vector : Sf.System.Vector3.sfVector3f) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         vector : Sf.System.Vector3.sfVector3f);
      pragma Import (C, Internal, "sfShader_setVector3Parameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, vector);
      Free (C_name);
   end setVector3Parameter;


   procedure setColorParameter
     (shader : sfShader_Ptr;
      name : String;
      color : Sf.Graphics.Color.sfColor) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         color : Sf.Graphics.Color.sfColor);
      pragma Import (C, Internal, "sfShader_setColorParameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, color);
      Free (C_name);
   end setColorParameter;


   procedure setTransformParameter
     (shader : sfShader_Ptr;
      name : String;
      transform : Sf.Graphics.Transform.sfTransform) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         transform : Sf.Graphics.Transform.sfTransform);
      pragma Import (C, Internal, "sfShader_setTransformParameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, transform);
      Free (C_name);
   end setTransformParameter;


   procedure setTextureParameter
     (shader : sfShader_Ptr;
      name : String;
      texture : sfTexture_Ptr) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr;
         texture : sfTexture_Ptr);
      pragma Import (C, Internal, "sfShader_setTextureParameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name, texture);
      Free (C_name);
   end setTextureParameter;


   procedure setCurrentTextureParameter (shader : sfShader_Ptr; name : String) is

      procedure Internal
        (shader : sfShader_Ptr;
         name : chars_ptr);
      pragma Import (C, Internal, "sfShader_setCurrentTextureParameter");

      C_name : chars_ptr := New_String (name);
   begin

      Internal (shader, C_name);
      Free (C_name);
   end setCurrentTextureParameter;


end Sf.Graphics.Shader;
