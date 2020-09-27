-- This is the official SFML example converted to ASFML

with Ada.Command_Line;

with Sf.Config; use Sf.Config;

with Sf.Window.Videomode; use Sf.Window, Sf.Window.Videomode;
with Sf.Window.Event; use Sf.Window.Event;
with Sf.Window.Window; use Sf.Window.Window;

with Sf.Graphics.Color; use Sf.Graphics.Color;
with Sf.Graphics.RenderWindow; use Sf.Graphics.RenderWindow;
with Sf.Graphics.Sprite; use Sf.Graphics.Sprite;
with Sf.Graphics.Texture; use Sf.Graphics.Texture;
with Sf.Graphics.Font; use Sf.Graphics.Font;
with Sf.Graphics.Text; use Sf.Graphics.Text;
with Sf.Graphics.Types; use Sf.Graphics.Types;


with Sf.Audio.Music; use Sf.Audio, Sf.Audio.Music;
with Sf.Audio.Types; use Sf.Audio.Types;


procedure Main is

   Abort_Example : exception;

   Mode : VideoMode.sfVideoMode := (Width => 800, Height => 600, BitsPerPixel => 32);
   Window : sfRenderWindow_Ptr;
   Texture : sfTexture_Ptr;
   Sprite : sfSprite_Ptr;
   Font : sfFont_Ptr;
   Text : sfText_Ptr;
   Music : sfMusic_Ptr;
   event : aliased sfEvent;

begin

   -- Create the main Window
   Window := sfRenderWindow_create(Mode, "SFML window", sfResize or sfClose, sfDefaultContextSettings);

   -- Load a sprite to display
   Texture := sfTexture_createFromFile("cute_image.jpg", null);

   Sprite := sfSprite_create;
   sfSprite_setTexture(Sprite, Texture, sfTrue);

   -- Create a graphical text to display
   Font := sfFont_createFromFile("arial.ttf");

   Text := sfText_create;
   sfText_setString(Text, "Hello SFML");
   sfText_setFont(Text, Font);
   sfText_setCharacterSize(Text, 50);

   -- Load a music file to play
   Music := sfMusic_createFromFile("nice_music.ogg");

   -- Play the music
   sfMusic_play(Music);

   -- Start the game loop
   while sfRenderWindow_isOpen(Window) loop

      -- Process events
      while sfRenderWindow_pollEvent(Window, event'access) loop

         -- Close window : exit
         if (event.Event_Type = sfEvtClosed) then
            sfRenderWindow_close(Window);
         end if;
      end loop;

      -- Clear the screen
      sfRenderWindow_clear(Window, sfBlack);

      -- Draw the sprite
      sfRenderWindow_drawSprite(Window, Sprite, null);

      -- Draw the text
      sfRenderWindow_drawText(Window, Text, null);

      -- Update the window
      sfRenderWindow_display(Window);
   end loop;

   -- Cleanup resources
   sfMusic_destroy(Music);
   sfText_destroy(Text);
   sfFont_destroy(Font);
   sfSprite_destroy(Sprite);
   sfTexture_destroy(Texture);
   sfRenderWindow_destroy(Window);

exception
   when others =>

      Ada.Command_Line.Set_Exit_Status (Ada.Command_Line.Failure);

end Main;
