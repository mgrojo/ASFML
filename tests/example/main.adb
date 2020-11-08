-- This is the official SFML example converted to ASFML

with Ada.Command_Line;

with Sf.Window.Videomode; use Sf, Sf.Window, Sf.Window.Videomode;
with Sf.Window.Event; use Sf.Window.Event;
with Sf.Window.Window; use Sf.Window.Window;

with Sf.Graphics.Color; use Sf.Graphics, Sf.Graphics.Color;
with Sf.Graphics.RenderWindow; use Sf.Graphics.RenderWindow;
with Sf.Graphics.Sprite; use Sf.Graphics.Sprite;
with Sf.Graphics.Texture; use Sf.Graphics.Texture;
with Sf.Graphics.Font; use Sf.Graphics.Font;
with Sf.Graphics.Text; use Sf.Graphics.Text;

with Sf.Audio.Music; use Sf.Audio, Sf.Audio.Music;


procedure Main is

   Abort_Example : exception;

   Mode : VideoMode.sfVideoMode := (Width => 800, Height => 600, BitsPerPixel => 32);
   Window : sfRenderWindow_Ptr;
   Texture : sfTexture_Ptr;
   Sprite : sfSprite_Ptr;
   Font : sfFont_Ptr;
   Text : sfText_Ptr;
   Music : sfMusic_Ptr;
   event : sfEvent;

begin

   -- Create the main Window
   Window := create(Mode, "SFML window", sfResize or sfClose, sfDefaultContextSettings);

   -- Load a sprite to display
   Texture := createFromFile("cute_image.jpg", null);

   Sprite := create;
   setTexture(Sprite, Texture, sfTrue);

   -- Create a graphical text to display
   Font := createFromFile("arial.ttf");

   Text := create;
   setString(Text, "Hello SFML");
   setFont(Text, Font);
   setCharacterSize(Text, 50);

   -- Load a music file to play
   Music := createFromFile("nice_music.ogg");

   -- Play the music
   play(Music);

   -- Start the game loop
   while isOpen(Window) loop

      -- Process events
      while pollEvent(Window, event) loop

         -- Close window : exit
         if (event.eventType = sfEvtClosed) then
            close(Window);
         end if;
      end loop;

      -- Clear the screen
      clear(Window, sfBlack);

      -- Draw the sprite
      drawSprite(Window, Sprite, null);

      -- Draw the text
      drawText(Window, Text, null);

      -- Update the window
      display(Window);
   end loop;

   -- Cleanup resources
   destroy(Music);
   destroy(Text);
   destroy(Font);
   destroy(Sprite);
   destroy(Texture);
   destroy(Window);

exception
   when others =>

      Ada.Command_Line.Set_Exit_Status (Ada.Command_Line.Failure);

end Main;
