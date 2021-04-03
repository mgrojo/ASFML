with Ada.Text_IO;         use Ada.Text_IO;

with Sf.Window.Window;    use Sf, Sf.Window, Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.System.Sleep;     use Sf.System.Sleep;
with Sf.System.Time;      use Sf.System.Time;
with Sf.Window.Cursor;

with Sf.Graphics.RenderWindow; use Sf.Graphics, Sf.Graphics.RenderWindow;
with Sf.Graphics.Sprite;       use Sf.Graphics.Sprite;
with Sf.Graphics.Image;        use Sf.Graphics.Image;
with Sf.Graphics.BlendMode;    use Sf.Graphics.BlendMode;
with Sf.Graphics.Text;         use Sf.Graphics.Text;
with Sf.Graphics.Texture;      use Sf.Graphics.Texture;
with Sf.Graphics.Color;        use Sf.Graphics.Color;
with Sf.Graphics.Font;         use Sf.Graphics.Font;

procedure Main is

   Window : sfRenderWindow_Ptr;
   Mode   : sfVideoMode      := (640, 480, 32);
   Params : sfContextSettings := sfDefaultContextSettings;
   Event  : sfEvent;
   CursorHand : Sf.Window.sfCursor_Ptr := Cursor.createFromSystem(Cursor.sfCursorHand);

   Sprite : sfSprite_Ptr;
   Img    : sfTexture_Ptr;
   Icon   : sfImage_Ptr;
   Str    : sfText_Ptr;
   Font   : sfFont_Ptr;

begin

   Img := CreateFromFile ("logo.png");
   if Img = null then
      Put_Line ("Could not open image");
      return;
   end if;

   Icon := CreateFromFile ("sfml-icon.png");
   if Icon = null then
      Put_Line ("Could not open icon");
      Destroy (Img);
      return;
   end if;

   Sprite := Create;
   if Sprite = null then
      Put_Line ("Could not create sprite");
      Destroy (Img);
      return;
   end if;
   SetTexture (Sprite, Img);
   SetPosition (Sprite,
                         (x => Float (sfUint32 (Mode.Width) / 2 - GetSize (Img).x / 2),
                          y => Float (sfUint32 (Mode.Height) / 2 - GetSize (Img).y / 2)));
   --sfSprite_SetBlendMode (Sprite, sfBlendAlpha);

   Font := CreateFromFile("aerial.ttf");
   if Font = null then
      Put_Line ("Could not get font");
      Destroy (Sprite);
      Destroy (Img);
      return;
   end if;

   Str := Create;
   if Str = null then
      Put_Line ("Could not create string");
      Destroy (Sprite);
      Destroy (Img);
      Destroy(Font);
      return;
   end if;
   SetFont (Str, Font);
   SetString (Str, "The SFML Logo" & Character'Val (10) & "In Aerial Font");
   --sfText_SetSize(Str, 20.0);
   SetPosition (Str, (Float (Mode.Width / 2) - (GetGlobalBounds (Str).Width) / 2.0,
                             Float (Mode.Height / 2) + 60.0));
   SetColor (Str, sfBlue);

   Window := Create (Mode, "Ada SFML Window", sfResize or sfClose, Params);
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   setMouseCursor (Window, CursorHand);
   SetFramerateLimit (Window, 32);
   SetVerticalSyncEnabled (Window, sfFalse);
   SetVisible (Window, sfTrue);

   SetIcon (Window, GetSize (Icon).x, GetSize (Icon).y,
                           GetPixelsPtr (Icon));

   while IsOpen (Window) = sfTrue loop
      while PollEvent (Window, Event) = sfTrue loop
         if Event.eventType = sfEvtClosed then
            Close (Window);
            Put_Line ("Attempting to close");
         end if;
         if Event.eventType = sfEvtKeyPressed
           and then Event.key.code = sfKeyEscape then
            Close (Window);
            Put_Line ("Attempting to close");
         end if;
      end loop;
      Clear (Window, sfWhite);

      DrawSprite (Window, Sprite);
      DrawText (Window, Str);

      Display (Window);
      sfSleep (sfSeconds (0.001));
   end loop;

   Destroy (Window);
   Destroy (Sprite);
   Destroy (Img);
   Destroy (Icon);
   Destroy (Str);
   Destroy(Font);

end Main;
