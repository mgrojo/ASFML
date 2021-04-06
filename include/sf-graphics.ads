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


------------------------------------------------------------
--/ @summary
--/ Graphics module
--/
--/ @description
--/ 2D graphics module: sprites, text, shapes, ...
--/
package Sf.Graphics is

   type sfCircleShape is null record;
   type sfCircleShape_Ptr is access all sfCircleShape;

   type sfConvexShape is null record;
   type sfConvexShape_Ptr is access all sfConvexShape;

   type sfFont is null record;
   type sfFont_Ptr is access all sfFont;

   type sfImage is null record;
   type sfImage_Ptr is access all sfImage;

   type sfShader is null record;
   type sfShader_Ptr is access all sfShader;

   type sfRectangleShape is null record;
   type sfRectangleShape_Ptr is access all sfRectangleShape;

   type sfRenderTexture is null record;
   type sfRenderTexture_Ptr is access all sfRenderTexture;

   type sfRenderWindow is null record;
   type sfRenderWindow_Ptr is access all sfRenderWindow;

   type sfShape is null record;
   type sfShape_Ptr is access all sfShape;

   type sfSprite is null record;
   type sfSprite_Ptr is access all sfSprite;

   type sfText is null record;
   type sfText_Ptr is access all sfText;

   type sfTexture is null record;
   type sfTexture_Ptr is access all sfTexture;

   type sfTransformable is null record;
   type sfTransformable_Ptr is access all sfTransformable;

   type sfVertex is null record;
   type sfVertex_Ptr is access all sfVertex;

   type sfVertexArray is null record;
   type sfVertexArray_Ptr is access all sfVertexArray;

   type sfVertexBuffer is null record;
   type sfVertexBuffer_Ptr is access all sfVertexBuffer;

   type sfView is null record;
   type sfView_Ptr is access all sfView;

private

   pragma Convention (C, sfCircleShape);
   pragma Convention (C, sfCircleShape_Ptr);
   pragma Convention (C, sfConvexShape);
   pragma Convention (C, sfConvexShape_Ptr);
   pragma Convention (C, sfFont);
   pragma Convention (C, sfFont_Ptr);
   pragma Convention (C, sfImage);
   pragma Convention (C, sfImage_Ptr);
   pragma Convention (C, sfShader);
   pragma Convention (C, sfShader_Ptr);
   pragma Convention (C, sfRectangleShape);
   pragma Convention (C, sfRectangleShape_Ptr);
   pragma Convention (C, sfRenderTexture);
   pragma Convention (C, sfRenderTexture_Ptr);
   pragma Convention (C, sfRenderWindow);
   pragma Convention (C, sfRenderWindow_Ptr);
   pragma Convention (C, sfShape);
   pragma Convention (C, sfShape_Ptr);
   pragma Convention (C, sfSprite);
   pragma Convention (C, sfSprite_Ptr);
   pragma Convention (C, sfText);
   pragma Convention (C, sfText_Ptr);
   pragma Convention (C, sfTexture);
   pragma Convention (C, sfTexture_Ptr);
   pragma Convention (C, sfTransformable);
   pragma Convention (C, sfTransformable_Ptr);
   pragma Convention (C, sfVertexArray);
   pragma Convention (C, sfVertexArray_Ptr);
   pragma Convention (C, sfView);
   pragma Convention (C, sfView_Ptr);

end Sf.Graphics;
