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

with Sf.Graphics.Vertex;
with Sf.Graphics.PrimitiveType;
with Sf.Graphics.Rect;

package Sf.Graphics.VertexArray is

   --//////////////////////////////////////////////////////////
   --/ @brief Create a new vertex array
   --/
   --/ @return A new sfVertexArray object
   --/
   --//////////////////////////////////////////////////////////
   function create return sfVertexArray_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Copy an existing vertex array
   --/
   --/ @param vertexArray Vertex array to copy
   --/
   --/ @return Copied object
   --/
   --//////////////////////////////////////////////////////////
   function copy (vertexArray : sfVertexArray_Ptr) return sfVertexArray_Ptr;

   --//////////////////////////////////////////////////////////
   --/ @brief Destroy an existing vertex array
   --/
   --/ @param vertexArray Vertex array to delete
   --/
   --//////////////////////////////////////////////////////////
   procedure destroy (vertexArray : sfVertexArray_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Return the vertex count of a vertex array
   --/
   --/ @param vertexArray Vertex array object
   --/
   --/ @return Number of vertices in the array
   --/
   --//////////////////////////////////////////////////////////
   function getVertexCount (vertexArray : sfVertexArray_Ptr) return sfSize_t;

   --//////////////////////////////////////////////////////////
   --/ @brief Get access to a vertex by its index
   --/
   --/ This function doesn't check @a index, it must be in range
   --/ [0, vertex count - 1]. The behaviour is undefined
   --/ otherwise.
   --/
   --/ @param vertexArray Vertex array object
   --/ @param index       Index of the vertex to get
   --/
   --/ @return Pointer to the index-th vertex
   --/
   --//////////////////////////////////////////////////////////
   function getVertex (vertexArray : sfVertexArray_Ptr; index : sfSize_t) return access Sf.Graphics.Vertex.sfVertex;

   --//////////////////////////////////////////////////////////
   --/ @brief Clear a vertex array
   --/
   --/ This function removes all the vertices from the array.
   --/ It doesn't deallocate the corresponding memory, so that
   --/ adding new vertices after clearing doesn't involve
   --/ reallocating all the memory.
   --/
   --/ @param vertexArray Vertex array object
   --/
   --//////////////////////////////////////////////////////////
   procedure clear (vertexArray : sfVertexArray_Ptr);

   --//////////////////////////////////////////////////////////
   --/ @brief Resize the vertex array
   --/
   --/ If @a vertexCount is greater than the current size, the previous
   --/ vertices are kept and new (default-constructed) vertices are
   --/ added.
   --/ If @a vertexCount is less than the current size, existing vertices
   --/ are removed from the array.
   --/
   --/ @param vertexArray Vertex array objet
   --/ @param vertexCount New size of the array (number of vertices)
   --/
   --//////////////////////////////////////////////////////////
   procedure resize (vertexArray : sfVertexArray_Ptr; vertexCount : sfSize_t);

   --//////////////////////////////////////////////////////////
   --/ @brief Add a vertex to a vertex array array
   --/
   --/ @param vertexArray Vertex array objet
   --/ @param vertex      Vertex to add
   --/
   --//////////////////////////////////////////////////////////
   procedure append (vertexArray : sfVertexArray_Ptr; vertex : Sf.Graphics.Vertex.sfVertex);

   --//////////////////////////////////////////////////////////
   --/ @brief Set the type of primitives of a vertex array
   --/
   --/ This function defines how the vertices must be interpreted
   --/ when it's time to draw them:
   --/ @li As points
   --/ @li As lines
   --/ @li As triangles
   --/ @li As quads
   --/ The default primitive type is sfPoints.
   --/
   --/ @param vertexArray Vertex array objet
   --/ @param primitiveType Type of primitive
   --/
   --//////////////////////////////////////////////////////////
   procedure setPrimitiveType (vertexArray : sfVertexArray_Ptr; primitiveType : Sf.Graphics.PrimitiveType.sfPrimitiveType);

   --//////////////////////////////////////////////////////////
   --/ @brief Get the type of primitives drawn by a vertex array
   --/
   --/ @param vertexArray Vertex array objet
   --/
   --/ @return Primitive type
   --/
   --//////////////////////////////////////////////////////////
   function getPrimitiveType (vertexArray : sfVertexArray_Ptr) return Sf.Graphics.PrimitiveType.sfPrimitiveType;

   --//////////////////////////////////////////////////////////
   --/ @brief Compute the bounding rectangle of a vertex array
   --/
   --/ This function returns the axis-aligned rectangle that
   --/ contains all the vertices of the array.
   --/
   --/ @param vertexArray Vertex array objet
   --/
   --/ @return Bounding rectangle of the vertex array
   --/
   --//////////////////////////////////////////////////////////
   function getBounds (vertexArray : sfVertexArray_Ptr) return Sf.Graphics.Rect.sfFloatRect;

private

   pragma Import (C, create, "sfVertexArray_create");
   pragma Import (C, copy, "sfVertexArray_copy");
   pragma Import (C, destroy, "sfVertexArray_destroy");
   pragma Import (C, getVertexCount, "sfVertexArray_getVertexCount");
   pragma Import (C, getVertex, "sfVertexArray_getVertex");
   pragma Import (C, clear, "sfVertexArray_clear");
   pragma Import (C, resize, "sfVertexArray_resize");
   pragma Import (C, append, "sfVertexArray_append");
   pragma Import (C, setPrimitiveType, "sfVertexArray_setPrimitiveType");
   pragma Import (C, getPrimitiveType, "sfVertexArray_getPrimitiveType");
   pragma Import (C, getBounds, "sfVertexArray_getBounds");

end Sf.Graphics.VertexArray;
