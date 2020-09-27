with Ada.Text_IO;         use Ada.Text_IO;
with Sf.Config;           use Sf.Config;
with Sf.Window.Types;     use Sf.Window.Types;
with Sf.Window.Window;    use Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.System.Sleep;     use Sf.System.Sleep;
with Sf.System.Time;      use Sf.System.Time;

with Sf.Graphics.RenderWindow; use Sf.Graphics.RenderWindow;
with Sf.Graphics.Types;        use Sf.Graphics.Types;
with Sf.Graphics.Sprite;       use Sf.Graphics.Sprite;
with Sf.Graphics.Image;        use Sf.Graphics.Image;
with Sf.Graphics.BlendMode;    use Sf.Graphics.BlendMode;
with Sf.Graphics.Text;         use Sf.Graphics.Text;
with Sf.Graphics.Texture;      use Sf.Graphics.Texture;
with Sf.Graphics.Color;        use Sf.Graphics.Color;
with Sf.Graphics.Font;         use Sf.Graphics.Font;
with Sf.Graphics.Types;        use Sf.Graphics.Types;

with Interfaces.C; use Interfaces.C;

procedure Main is

   Window : sfRenderWindow_Ptr;
   Mode   : sfVideoMode      := (640, 480, 32);
   Params : sfContextSettings := sfDefaultContextSettings;
   Event  : aliased sfEvent;

   Sprite : sfSprite_Ptr;
   Img    : sfTexture_Ptr;
   Icon   : sfImage_Ptr;
   Str    : sfText_Ptr;
   Font   : sfFont_Ptr;

begin

   Img := sfTexture_CreateFromFile ("logo.png");
   if Img = null then
      Put_Line ("Could not open image");
      return;
   end if;

   Icon := sfImage_CreateFromFile ("sfml-icon.png");
   if Icon = null then
      Put_Line ("Could not open icon");
      sfTexture_Destroy (Img);
      return;
   end if;

   Sprite := sfSprite_Create;
   if Sprite = null then
      Put_Line ("Could not create sprite");
      sfTexture_Destroy (Img);
      return;
   end if;
   sfSprite_SetTexture (Sprite, Img);
   sfSprite_SetPosition (Sprite,
                         (x => Float (unsigned (Mode.Width) / 2 - sfTexture_GetSize (Img).x / 2),
                          y => Float (unsigned (Mode.Height) / 2 - sfTexture_GetSize (Img).y / 2)));
   --sfSprite_SetBlendMode (Sprite, sfBlendAlpha);

   Font := sfFont_CreateFromFile("aerial.ttf");
   if Font = null then
      Put_Line ("Could not get font");
      sfSprite_Destroy (Sprite);
      sfTexture_Destroy (Img);
      return;
   end if;

   Str := sfText_Create;
   if Str = null then
      Put_Line ("Could not create string");
      sfSprite_Destroy (Sprite);
      sfTexture_Destroy (Img);
      sfFont_Destroy(Font);
      return;
   end if;
   sfText_SetFont (Str, Font);
   sfText_SetString (Str, "The SFML Logo" & Character'Val (10) & "In Aerial Font");
   --sfText_SetSize(Str, 20.0);
   sfText_SetPosition (Str, (Float (Mode.Width / 2) - (sfText_GetGlobalBounds (Str).Width) / 2.0,
                             Float (Mode.Height / 2) + 60.0));
   sfText_SetColor (Str, sfBlue);

   Window := sfRenderWindow_Create (Mode, "Ada SFML Window", sfResize or sfClose, Params);
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   sfRenderWindow_SetFramerateLimit (Window, 32);
   sfRenderWindow_SetVerticalSyncEnabled (Window, sfFalse);
   sfRenderWindow_SetVisible (Window, sfTrue);

   sfRenderWindow_SetIcon (Window, sfImage_GetSize (Icon).x, sfImage_GetSize (Icon).y,
                           sfImage_GetPixelsPtr (Icon));

   while sfRenderWindow_IsOpen (Window) = sfTrue loop
      while sfRenderWindow_PollEvent (Window, Event'Access) = sfTrue loop
         if Event.Event_type = sfEvtClosed then
            sfRenderWindow_Close (Window);
            Put_Line ("Attempting to close");
         end if;
         if Event.Event_Type = sfEvtKeyPressed
           and then Event.key.code = sfKeyEscape then
            sfRenderWindow_Close (Window);
            Put_Line ("Attempting to close");
         end if;
      end loop;
      sfRenderWindow_Clear (Window, sfWhite);

      sfRenderWindow_DrawSprite (Window, Sprite);
      sfRenderWindow_DrawText (Window, Str);

      sfRenderWindow_Display (Window);
      sfSleep (sfSeconds (0.001));
   end loop;

   sfRenderWindow_Destroy (Window);
   sfSprite_Destroy (Sprite);
   sfTexture_Destroy (Img);
   sfImage_Destroy (Icon);
   sfText_Destroy (Str);
   sfFont_Destroy(Font);

end Main;
