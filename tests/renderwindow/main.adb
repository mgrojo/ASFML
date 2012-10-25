with Ada.Text_IO;         use Ada.Text_IO;
with Sf.Config;           use Sf.Config;
with Sf.Window.Types;     use Sf.Window.Types;
with Sf.Window.Window;    use Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Input;     use Sf.Window.Input;
with Sf.System.Sleep;     use Sf.System.Sleep;

with Sf.Graphics.RenderWindow; use Sf.Graphics.RenderWindow;
with Sf.Graphics.Types;        use Sf.Graphics.Types;
with Sf.Graphics.Sprite;       use Sf.Graphics.Sprite;
with Sf.Graphics.Image;        use Sf.Graphics.Image;
with Sf.Graphics.BlendMode;    use Sf.Graphics.BlendMode;
with Sf.Graphics.String;       use Sf.Graphics.String;
with Sf.Graphics.Color;        use Sf.Graphics.Color;
with Sf.Graphics.Font;         use Sf.Graphics.Font;

procedure Main is

   Window : sfRenderWindow_Ptr;
   Mode   : sfVideoMode      := (640, 480, 32);
   Params : sfWindowSettings := (0, 0, 0);
   Event  : aliased sfEvent;
   Input  : sfInput_Ptr;

   Sprite : sfSprite_Ptr;
   Img    : sfImage_Ptr;
   Str    : sfString_Ptr;
   Font   : sfFont_Ptr;

begin

   Img := sfImage_CreateFromFile ("logo.png");
   if Img = null then
      Put_Line ("Could not open image");
      return;
   end if;

   Sprite := sfSprite_Create;
   if Sprite = null then
      Put_Line ("Could not create sprite");
      sfImage_Destroy (Img);
      return;
   end if;
   sfSprite_SetImage (Sprite, Img);
   sfSprite_SetScale (Sprite, 100.0 / Float (sfImage_GetWidth (Img)), 100.0 / Float (sfImage_GetHeight (Img)));
   sfSprite_SetPosition (Sprite, Float (Mode.Width / 2 - 100 / 2), Float (Mode.Height / 2 - 100 / 2));
   sfSprite_SetBlendMode (Sprite, sfBlendAlpha);

   Font := sfFont_GetDefaultFont;
   --Font := sfFont_CreateFromFile("aerial.ttf", 20, null);
   if Font = null then
      Put_Line ("Could not get font");
      sfSprite_Destroy (Sprite);
      sfImage_Destroy (Img);
      return;
   end if;

   Str := sfString_Create;
   if Str = null then
      Put_Line ("Could not create string");
      sfSprite_Destroy (Sprite);
      sfImage_Destroy (Img);
      --sfFont_Destroy(Font);
      return;
   end if;
   sfString_SetFont (Str, Font);
   sfString_SetText (Str, "The SFML Logo" & Character'VAL (10) & "In Default Font");
   --sfString_SetSize(Str, 20.0);
   sfString_SetPosition (Str, Float (Mode.Width / 2) - (sfString_GetRect (Str).Right - sfString_GetRect (Str).Left) / 2.0, Float (Mode.Height / 2) + 60.0);
   sfString_SetColor (Str, sfBlue);

   Window := sfRenderWindow_Create (Mode, "Window", sfResize or sfClose, Params);
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   sfRenderWindow_SetFramerateLimit (Window, 32);
   sfRenderWindow_UseVerticalSync (Window, sfFalse);
   sfRenderWindow_Show (Window, sfTrue);

   while sfRenderWindow_IsOpened (Window) = sfTrue loop
      while sfRenderWindow_GetEvent (Window, Event'ACCESS) = sfTrue loop
         if Event.Event_Type = sfEvtClosed then
            sfRenderWindow_Close (Window);
            Put_Line ("Attepting to close");
         end if;
         Input := sfRenderWindow_GetInput (Window);
         if Input /= null and then Event.Event_Type = sfEvtKeyPressed and then sfInput_IsKeyDown (Input, sfKeyEscape) = sfTrue then
            sfRenderWindow_Close (Window);
            Put_Line ("Attepting to close");
         end if;
      end loop;
      sfRenderWindow_Clear (Window, sfWhite);

      sfRenderWindow_DrawSprite (Window, Sprite);
      sfRenderWindow_DrawString (Window, Str);

      sfRenderWindow_Display (Window);
      sfSleep (0.001);
   end loop;

   sfRenderWindow_Destroy (Window);
   sfSprite_Destroy (Sprite);
   sfImage_Destroy (Img);
   sfString_Destroy (Str);
   --sfFont_Destroy(Font);

end Main;
