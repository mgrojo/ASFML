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
with Sf.Window.GL;

package Sf.Window.GLU is
   use Sf.Window.GL;

   --//////////////////////////////////////////////////////////
   -- // Define portable types
   --//////////////////////////////////////////////////////////
   type u_GLUfuncptr is access procedure;

   --//////////////////////////////////////////////////////////
   -- // Define constants
   --//////////////////////////////////////////////////////////
   GLU_FALSE                      : constant GLboolean := 0;
   GLU_TRUE                       : constant GLboolean := 1;
   GLU_VERSION_1_1                : constant GLenum    := 1;
   GLU_VERSION_1_2                : constant GLenum    := 1;
   GLU_VERSION                    : constant GLenum    := 100800;
   GLU_EXTENSIONS                 : constant GLenum    := 100801;
   GLU_INVALID_ENUM               : constant GLenum    := 100900;
   GLU_INVALID_VALUE              : constant GLenum    := 100901;
   GLU_OUT_OF_MEMORY              : constant GLenum    := 100902;
   GLU_INVALID_OPERATION          : constant GLenum    := 100904;
   GLU_OUTLINE_POLYGON            : constant GLenum    := 100240;
   GLU_OUTLINE_PATCH              : constant GLenum    := 100241;
   GLU_NURBS_ERROR1               : constant GLenum    := 100251;
   GLU_NURBS_ERROR2               : constant GLenum    := 100252;
   GLU_NURBS_ERROR3               : constant GLenum    := 100253;
   GLU_NURBS_ERROR4               : constant GLenum    := 100254;
   GLU_NURBS_ERROR5               : constant GLenum    := 100255;
   GLU_NURBS_ERROR6               : constant GLenum    := 100256;
   GLU_NURBS_ERROR7               : constant GLenum    := 100257;
   GLU_NURBS_ERROR8               : constant GLenum    := 100258;
   GLU_NURBS_ERROR9               : constant GLenum    := 100259;
   GLU_NURBS_ERROR10              : constant GLenum    := 100260;
   GLU_NURBS_ERROR11              : constant GLenum    := 100261;
   GLU_NURBS_ERROR12              : constant GLenum    := 100262;
   GLU_NURBS_ERROR13              : constant GLenum    := 100263;
   GLU_NURBS_ERROR14              : constant GLenum    := 100264;
   GLU_NURBS_ERROR15              : constant GLenum    := 100265;
   GLU_NURBS_ERROR16              : constant GLenum    := 100266;
   GLU_NURBS_ERROR17              : constant GLenum    := 100267;
   GLU_NURBS_ERROR18              : constant GLenum    := 100268;
   GLU_NURBS_ERROR19              : constant GLenum    := 100269;
   GLU_NURBS_ERROR20              : constant GLenum    := 100270;
   GLU_NURBS_ERROR21              : constant GLenum    := 100271;
   GLU_NURBS_ERROR22              : constant GLenum    := 100272;
   GLU_NURBS_ERROR23              : constant GLenum    := 100273;
   GLU_NURBS_ERROR24              : constant GLenum    := 100274;
   GLU_NURBS_ERROR25              : constant GLenum    := 100275;
   GLU_NURBS_ERROR26              : constant GLenum    := 100276;
   GLU_NURBS_ERROR27              : constant GLenum    := 100277;
   GLU_NURBS_ERROR28              : constant GLenum    := 100278;
   GLU_NURBS_ERROR29              : constant GLenum    := 100279;
   GLU_NURBS_ERROR30              : constant GLenum    := 100280;
   GLU_NURBS_ERROR31              : constant GLenum    := 100281;
   GLU_NURBS_ERROR32              : constant GLenum    := 100282;
   GLU_NURBS_ERROR33              : constant GLenum    := 100283;
   GLU_NURBS_ERROR34              : constant GLenum    := 100284;
   GLU_NURBS_ERROR35              : constant GLenum    := 100285;
   GLU_NURBS_ERROR36              : constant GLenum    := 100286;
   GLU_NURBS_ERROR37              : constant GLenum    := 100287;
   GLU_AUTO_LOAD_MATRIX           : constant GLenum    := 100200;
   GLU_CULLING                    : constant GLenum    := 100201;
   GLU_SAMPLING_TOLERANCE         : constant GLenum    := 100203;
   GLU_DISPLAY_MODE               : constant GLenum    := 100204;
   GLU_PARAMETRIC_TOLERANCE       : constant GLenum    := 100202;
   GLU_SAMPLING_METHOD            : constant GLenum    := 100205;
   GLU_U_STEP                     : constant GLenum    := 100206;
   GLU_V_STEP                     : constant GLenum    := 100207;
   GLU_PATH_LENGTH                : constant GLenum    := 100215;
   GLU_PARAMETRIC_ERROR           : constant GLenum    := 100216;
   GLU_DOMAIN_DISTANCE            : constant GLenum    := 100217;
   GLU_MAP1_TRIM_2                : constant GLenum    := 100210;
   GLU_MAP1_TRIM_3                : constant GLenum    := 100211;
   GLU_POINT                      : constant GLenum    := 100010;
   GLU_LINE                       : constant GLenum    := 100011;
   GLU_FILL                       : constant GLenum    := 100012;
   GLU_SILHOUETTE                 : constant GLenum    := 100013;
   GLU_ERROR                      : constant GLenum    := 100103;
   GLU_SMOOTH                     : constant GLenum    := 100000;
   GLU_FLAT                       : constant GLenum    := 100001;
   GLU_NONE                       : constant GLenum    := 100002;
   GLU_OUTSIDE                    : constant GLenum    := 100020;
   GLU_INSIDE                     : constant GLenum    := 100021;
   GLU_TESS_BEGIN                 : constant GLenum    := 100100;
   GLU_BEGIN                      : constant GLenum    := 100100;
   GLU_TESS_VERTEX                : constant GLenum    := 100101;
   GLU_VERTEX                     : constant GLenum    := 100101;
   GLU_TESS_END                   : constant GLenum    := 100102;
   GLU_END                        : constant GLenum    := 100102;
   GLU_TESS_ERROR                 : constant GLenum    := 100103;
   GLU_TESS_EDGE_FLAG             : constant GLenum    := 100104;
   GLU_EDGE_FLAG                  : constant GLenum    := 100104;
   GLU_TESS_COMBINE               : constant GLenum    := 100105;
   GLU_TESS_BEGIN_DATA            : constant GLenum    := 100106;
   GLU_TESS_VERTEX_DATA           : constant GLenum    := 100107;
   GLU_TESS_END_DATA              : constant GLenum    := 100108;
   GLU_TESS_ERROR_DATA            : constant GLenum    := 100109;
   GLU_TESS_EDGE_FLAG_DATA        : constant GLenum    := 100110;
   GLU_TESS_COMBINE_DATA          : constant GLenum    := 100111;
   GLU_CW                         : constant GLenum    := 100120;
   GLU_CCW                        : constant GLenum    := 100121;
   GLU_INTERIOR                   : constant GLenum    := 100122;
   GLU_EXTERIOR                   : constant GLenum    := 100123;
   GLU_UNKNOWN                    : constant GLenum    := 100124;
   GLU_TESS_WINDING_RULE          : constant GLenum    := 100140;
   GLU_TESS_BOUNDARY_ONLY         : constant GLenum    := 100141;
   GLU_TESS_TOLERANCE             : constant GLenum    := 100142;
   GLU_TESS_ERROR1                : constant GLenum    := 100151;
   GLU_TESS_ERROR2                : constant GLenum    := 100152;
   GLU_TESS_ERROR3                : constant GLenum    := 100153;
   GLU_TESS_ERROR4                : constant GLenum    := 100154;
   GLU_TESS_ERROR5                : constant GLenum    := 100155;
   GLU_TESS_ERROR6                : constant GLenum    := 100156;
   GLU_TESS_ERROR7                : constant GLenum    := 100157;
   GLU_TESS_ERROR8                : constant GLenum    := 100158;
   GLU_TESS_MISSING_BEGIN_POLYGON : constant GLenum    := 100151;
   GLU_TESS_MISSING_BEGIN_CONTOUR : constant GLenum    := 100152;
   GLU_TESS_MISSING_END_POLYGON   : constant GLenum    := 100153;
   GLU_TESS_MISSING_END_CONTOUR   : constant GLenum    := 100154;
   GLU_TESS_COORD_TOO_LARGE       : constant GLenum    := 100155;
   GLU_TESS_NEED_COMBINE_CALLBACK : constant GLenum    := 100156;
   GLU_TESS_WINDING_ODD           : constant GLenum    := 100130;
   GLU_TESS_WINDING_NONZERO       : constant GLenum    := 100131;
   GLU_TESS_WINDING_POSITIVE      : constant GLenum    := 100132;
   GLU_TESS_WINDING_NEGATIVE      : constant GLenum    := 100133;
   GLU_TESS_WINDING_ABS_GEQ_TWO   : constant GLenum    := 100134;
   GLU_INCOMPATIBLE_GL_VERSION    : constant GLenum    := 100903;
   GLU_TESS_MAX_COORD             : constant GLenum    := GLenum'LAST;

   --//////////////////////////////////////////////////////////
   -- // GLU functions
   --//////////////////////////////////////////////////////////
   procedure gluBeginCurve (nurb : GLvoid_Ptr);
   procedure gluBeginPolygon (tess : GLvoid_Ptr);
   procedure gluBeginSurface (nurb : GLvoid_Ptr);
   procedure gluBeginTrim (nurb : GLvoid_Ptr);
   function gluBuild1DMipmaps
     (target         : GLenum;
      internalFormat : GLint;
      width          : GLsizei;
      format         : GLenum;
      c_type         : GLenum;
      data           : GLvoid_Ptr)
     return           GLint;
   function gluBuild2DMipmaps
     (target         : GLenum;
      internalFormat : GLint;
      width          : GLsizei;
      height         : GLsizei;
      format         : GLenum;
      c_type         : GLenum;
      data           : GLvoid_Ptr)
     return           GLint;
   procedure gluCylinder
     (quad   : GLvoid_Ptr;
      base   : GLdouble;
      top    : GLdouble;
      height : GLdouble;
      slices : GLint;
      stacks : GLint);
   procedure gluDeleteNurbsRenderer (nurb : GLvoid_Ptr);
   procedure gluDeleteQuadric (quad : GLvoid_Ptr);
   procedure gluDeleteTess (tess : GLvoid_Ptr);
   procedure gluDisk
     (quad   : GLvoid_Ptr;
      inner  : GLdouble;
      outer  : GLdouble;
      slices : GLint;
      loops  : GLint);
   procedure gluEndCurve (nurb : GLvoid_Ptr);
   procedure gluEndPolygon (tess : GLvoid_Ptr);
   procedure gluEndSurface (nurb : GLvoid_Ptr);
   procedure gluEndTrim (nurb : GLvoid_Ptr);
   function gluErrorString (error : GLenum) return GLubyte_Ptr;
   function gluErrorUnicodeStringEXT (error : GLenum) return GLuint_Ptr;
   procedure gluGetNurbsProperty (nurb : GLvoid_Ptr; property : GLenum; data : access GLfloat);
   function gluGetString (name : GLenum) return GLubyte_Ptr;
   procedure gluGetTessProperty (tess : GLvoid_Ptr; which : GLenum; data : access GLdouble);
   procedure gluLoadSamplingMatrices
     (nurb        : GLvoid_Ptr;
      model       : access GLfloat;
      perspective : access GLfloat;
      view        : access GLint);
   procedure gluLookAt
     (eyeX    : GLdouble;
      eyeY    : GLdouble;
      eyeZ    : GLdouble;
      centerX : GLdouble;
      centerY : GLdouble;
      centerZ : GLdouble;
      upX     : GLdouble;
      upY     : GLdouble;
      upZ     : GLdouble);
   function gluNewNurbsRenderer return GLvoid_Ptr;
   function gluNewQuadric return GLvoid_Ptr;
   function gluNewTess return GLvoid_Ptr;
   procedure gluNextContour (tess : GLvoid_Ptr; c_type : GLenum);
   procedure gluNurbsCallback (nurb : GLvoid_Ptr; which : GLenum; CallBackFunc : u_GLUfuncptr);
   procedure gluNurbsCurve
     (nurb      : GLvoid_Ptr;
      knotCount : GLint;
      knots     : access GLfloat;
      stride    : GLint;
      control   : access GLfloat;
      order     : GLint;
      c_type    : GLenum);
   procedure gluNurbsProperty (nurb : GLvoid_Ptr; property : GLenum; value : GLfloat);
   procedure gluNurbsSurface
     (nurb       : GLvoid_Ptr;
      sKnotCount : GLint;
      sKnots     : access GLfloat;
      tKnotCount : GLint;
      tKnots     : access GLfloat;
      sStride    : GLint;
      tStride    : GLint;
      control    : access GLfloat;
      sOrder     : GLint;
      tOrder     : GLint;
      c_type     : GLenum);
   procedure gluOrtho2D
     (left   : GLdouble;
      right  : GLdouble;
      bottom : GLdouble;
      top    : GLdouble);
   procedure gluPartialDisk
     (quad   : GLvoid_Ptr;
      inner  : GLdouble;
      outer  : GLdouble;
      slices : GLint;
      loops  : GLint;
      start  : GLdouble;
      sweep  : GLdouble);
   procedure gluPerspective
     (fovy   : GLdouble;
      aspect : GLdouble;
      zNear  : GLdouble;
      zFar   : GLdouble);
   procedure gluPickMatrix
     (x        : GLdouble;
      y        : GLdouble;
      delX     : GLdouble;
      delY     : GLdouble;
      viewport : access GLint);
   function gluProject
     (objX  : GLdouble;
      objY  : GLdouble;
      objZ  : GLdouble;
      model : access GLdouble;
      proj  : access GLdouble;
      view  : access GLint;
      winX  : access GLdouble;
      winY  : access GLdouble;
      winZ  : access GLdouble)
     return  GLint;
   procedure gluPwlCurve
     (nurb   : GLvoid_Ptr;
      count  : GLint;
      data   : access GLfloat;
      stride : GLint;
      c_type : GLenum);
   procedure gluQuadricCallback (quad : GLvoid_Ptr; which : GLenum; CallBackFunc : u_GLUfuncptr);
   procedure gluQuadricDrawStyle (quad : GLvoid_Ptr; draw : GLenum);
   procedure gluQuadricNormals (quad : GLvoid_Ptr; normal : GLenum);
   procedure gluQuadricOrientation (quad : GLvoid_Ptr; orientation : GLenum);
   procedure gluQuadricTexture (quad : GLvoid_Ptr; texture : GLboolean);
   function gluScaleImage
     (format  : GLenum;
      wIn     : GLsizei;
      hIn     : GLsizei;
      typeIn  : GLenum;
      dataIn  : GLvoid_Ptr;
      wOut    : GLsizei;
      hOut    : GLsizei;
      typeOut : GLenum;
      dataOut : GLvoid_Ptr)
     return    GLint;
   procedure gluSphere
     (quad   : GLvoid_Ptr;
      radius : GLdouble;
      slices : GLint;
      stacks : GLint);
   procedure gluTessBeginContour (tess : GLvoid_Ptr);
   procedure gluTessBeginPolygon (tess : GLvoid_Ptr; data : GLvoid_Ptr);
   procedure gluTessCallback (tess : GLvoid_Ptr; which : GLenum; CallBackFunc : u_GLUfuncptr);
   procedure gluTessEndContour (tess : GLvoid_Ptr);
   procedure gluTessEndPolygon (tess : GLvoid_Ptr);
   procedure gluTessNormal
     (tess   : GLvoid_Ptr;
      valueX : GLdouble;
      valueY : GLdouble;
      valueZ : GLdouble);
   procedure gluTessProperty (tess : GLvoid_Ptr; which : GLenum; data : GLdouble);
   procedure gluTessVertex (tess : GLvoid_Ptr; location : access GLdouble; data : GLvoid_Ptr);
   function gluUnProject
     (winX  : GLdouble;
      winY  : GLdouble;
      winZ  : GLdouble;
      model : access GLdouble;
      proj  : access GLdouble;
      view  : access GLint;
      objX  : access GLdouble;
      objY  : access GLdouble;
      objZ  : access GLdouble)
     return  GLint;
   function gluUnProject4
     (winX    : GLdouble;
      winY    : GLdouble;
      winZ    : GLdouble;
      clipW   : GLdouble;
      model   : access GLdouble;
      proj    : access GLdouble;
      view    : access GLint;
      nearVal : GLdouble;
      farVal  : GLdouble;
      objX    : access GLdouble;
      objY    : access GLdouble;
      objZ    : access GLdouble;
      objW    : access GLdouble)
     return    GLint;

private

   pragma Import (Stdcall, gluBeginCurve, "gluBeginCurve");
   pragma Import (Stdcall, gluBeginPolygon, "gluBeginPolygon");
   pragma Import (Stdcall, gluBeginSurface, "gluBeginSurface");
   pragma Import (Stdcall, gluBeginTrim, "gluBeginTrim");
   pragma Import (Stdcall, gluBuild1DMipmaps, "gluBuild1DMipmaps");
   pragma Import (Stdcall, gluBuild2DMipmaps, "gluBuild2DMipmaps");
   pragma Import (Stdcall, gluCylinder, "gluCylinder");
   pragma Import (Stdcall, gluDeleteNurbsRenderer, "gluDeleteNurbsRenderer");
   pragma Import (Stdcall, gluDeleteQuadric, "gluDeleteQuadric");
   pragma Import (Stdcall, gluDeleteTess, "gluDeleteTess");
   pragma Import (Stdcall, gluDisk, "gluDisk");
   pragma Import (Stdcall, gluEndCurve, "gluEndCurve");
   pragma Import (Stdcall, gluEndPolygon, "gluEndPolygon");
   pragma Import (Stdcall, gluEndSurface, "gluEndSurface");
   pragma Import (Stdcall, gluEndTrim, "gluEndTrim");
   pragma Import (Stdcall, gluErrorString, "gluErrorString");
   pragma Import (Stdcall, gluErrorUnicodeStringEXT, "gluErrorUnicodeStringEXT");
   pragma Import (Stdcall, gluGetNurbsProperty, "gluGetNurbsProperty");
   pragma Import (Stdcall, gluGetString, "gluGetString");
   pragma Import (Stdcall, gluGetTessProperty, "gluGetTessProperty");
   pragma Import (Stdcall, gluLoadSamplingMatrices, "gluLoadSamplingMatrices");
   pragma Import (Stdcall, gluLookAt, "gluLookAt");
   pragma Import (Stdcall, gluNewNurbsRenderer, "gluNewNurbsRenderer");
   pragma Import (Stdcall, gluNewQuadric, "gluNewQuadric");
   pragma Import (Stdcall, gluNewTess, "gluNewTess");
   pragma Import (Stdcall, gluNextContour, "gluNextContour");
   pragma Import (Stdcall, gluNurbsCallback, "gluNurbsCallback");
   pragma Import (Stdcall, gluNurbsCurve, "gluNurbsCurve");
   pragma Import (Stdcall, gluNurbsProperty, "gluNurbsProperty");
   pragma Import (Stdcall, gluNurbsSurface, "gluNurbsSurface");
   pragma Import (Stdcall, gluOrtho2D, "gluOrtho2D");
   pragma Import (Stdcall, gluPartialDisk, "gluPartialDisk");
   pragma Import (Stdcall, gluPerspective, "gluPerspective");
   pragma Import (Stdcall, gluPickMatrix, "gluPickMatrix");
   pragma Import (Stdcall, gluProject, "gluProject");
   pragma Import (Stdcall, gluPwlCurve, "gluPwlCurve");
   pragma Import (Stdcall, gluQuadricCallback, "gluQuadricCallback");
   pragma Import (Stdcall, gluQuadricDrawStyle, "gluQuadricDrawStyle");
   pragma Import (Stdcall, gluQuadricNormals, "gluQuadricNormals");
   pragma Import (Stdcall, gluQuadricOrientation, "gluQuadricOrientation");
   pragma Import (Stdcall, gluQuadricTexture, "gluQuadricTexture");
   pragma Import (Stdcall, gluScaleImage, "gluScaleImage");
   pragma Import (Stdcall, gluSphere, "gluSphere");
   pragma Import (Stdcall, gluTessBeginContour, "gluTessBeginContour");
   pragma Import (Stdcall, gluTessBeginPolygon, "gluTessBeginPolygon");
   pragma Import (Stdcall, gluTessCallback, "gluTessCallback");
   pragma Import (Stdcall, gluTessEndContour, "gluTessEndContour");
   pragma Import (Stdcall, gluTessEndPolygon, "gluTessEndPolygon");
   pragma Import (Stdcall, gluTessNormal, "gluTessNormal");
   pragma Import (Stdcall, gluTessProperty, "gluTessProperty");
   pragma Import (Stdcall, gluTessVertex, "gluTessVertex");
   pragma Import (Stdcall, gluUnProject, "gluUnProject");
   pragma Import (Stdcall, gluUnProject4, "gluUnProject4");

end Sf.Window.GLU;
