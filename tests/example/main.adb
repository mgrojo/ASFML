-- Here is a short example, to show you how simple it is to use ASFML.
-- This is the official SFML example converted to Ada.
-- The program is expected to be run from the current directory
-- so the multimedia resources included in this repository are correctly
-- referenced.

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

   Resource_Unavailable : exception;

   Mode : VideoMode.sfVideoMode := (Width => 800, Height => 600, BitsPerPixel => 32);
   Window : sfRenderWindow_Ptr;
   Texture : sfTexture_Ptr;
   Sprite : sfSprite_Ptr;
   Font : sfFont_Ptr;
   Text : sfText_Ptr;
   Music : sfMusic_Ptr;
   event : sfEvent;

begin

Resources: begin

      -- Create the main Window
      Window := create(Mode, "SFML window");

      -- Load a sprite to display
      Texture := createFromFile("../../images/ASFML_Logo.png");

      if Texture = null then
         raise Resource_Unavailable;
      end if;

      Sprite := create;
      setTexture(Sprite, Texture, sfTrue);
      setPosition(Sprite, (x => 200.0, y => 200.0));

      -- Create a graphical text to display
      Font := createFromFile("../tuffy.ttf");

      if Font = null then
         raise Resource_Unavailable;
      end if;

      Text := create;
      setString(Text, "Hello SFML");
      setFont(Text, Font);
      setCharacterSize(Text, 50);

      -- Load a music file to play
      Music := createFromFile("../doodle_pop.ogg");

      if Music = null then
         raise Resource_Unavailable;
      end if;

      -- Play the music
      play(Music);

      -- Start the game loop
      while isOpen(Window) loop

         -- Process events
         while pollEvent(Window, event) loop

            -- Close window: exit
            if (event.eventType = sfEvtClosed) then
               close(Window);
            end if;
         end loop;

         -- Clear the screen
         clear(Window);

         -- Draw the sprite
         drawSprite(Window, Sprite);

         -- Draw the text
         drawText(Window, Text);

         -- Update the window
         display(Window);
      end loop;

   exception
      when Resource_Unavailable =>
         -- Useful message already printed by SFML
         Ada.Command_Line.Set_Exit_Status (Ada.Command_Line.Failure);
   end Resources;

   -- Cleanup resources
   destroy(Music);
   destroy(Text);
   destroy(Font);
   destroy(Sprite);
   destroy(Texture);
   destroy(Window);

end Main;
