with Ada.Text_IO;
with Sf;
with Sf.Graphics;
with Sf.Graphics.Color;
with Sf.Graphics.PrimitiveType;
with Sf.Graphics.Vertex;
with Sf.Graphics.VertexBuffer;
with Sf.System.Vector2;
with Sf.Window;
with Sf.Window.Context;

procedure Main is
   package T_IO renames Ada.Text_IO;
   package Vec2 renames Sf.System.Vector2;
   package Color renames Sf.Graphics.Color;
   package Vertex renames Sf.Graphics.Vertex;
   package Vertex_Buffer renames Sf.Graphics.VertexBuffer;
   package Primitive renames Sf.Graphics.PrimitiveType;
   package Context renames Sf.Window.Context;

   type Vertex_Array is array (Positive range <>) of aliased Vertex.sfVertex;

   use type Sf.Window.sfContext_Ptr;
   use type Sf.Graphics.sfVertexBuffer_Ptr;

   function Bool_Image (Value : Sf.sfBool) return String is
   begin
      if Value then
         return "True";
      else
         return "False";
      end if;
   end Bool_Image;

   GL_Context : constant Sf.Window.sfContext_Ptr := Context.create;
   VB : Sf.Graphics.sfVertexBuffer_Ptr;
   Vertices : Vertex_Array :=
     (1 => (position => (x => -0.5, y => -0.5),
      color    => Color.sfGreen,
            texCoords => Vec2.sfVector2f'(x => 0.0, y => 0.0)),
      2 => (position => (x => 0.5, y => -0.5),
            color    => Color.sfRed,
            texCoords => Vec2.sfVector2f'(x => 1.0, y => 0.0)),
      3 => (position => (x => 0.0, y => 0.5),
            color    => Color.sfBlue,
            texCoords => Vec2.sfVector2f'(x => 0.5, y => 1.0)));

begin
   if GL_Context = null then
      T_IO.Put_Line ("Failed to create OpenGL context, skipping vertex buffer test.");
      return;
   end if;

   VB := Vertex_Buffer.create (vertexCount   => 3,
                               primitiveType => Primitive.sfTriangles,
                               usage         => Vertex_Buffer.sfVertexBufferStatic);

   if VB = null then
      T_IO.Put_Line ("Failed to create vertex buffer.");
      Context.destroy (GL_Context);
      return;
   end if;

   declare
      Updated : constant Sf.sfBool :=
        Vertex_Buffer.update (VB,
                              Vertices (Vertices'First)'Access,
                              Sf.sfUint32 (Vertices'Length),
                              Sf.sfUint32 (0));
   begin
      T_IO.Put_Line ("VertexBuffer.update returned " & Bool_Image (Updated));
   end;

   Vertex_Buffer.destroy (VB);
   Context.destroy (GL_Context);
end Main;
