with Ada.Wide_Wide_Text_IO; use Ada.Wide_Wide_Text_IO;
with Sf.Window.Window;    use Sf, Sf.Window, Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.Window.Clipboard;
with Sf.Window.Cursor;

with Sf.System.Time;      use Sf.System.Time;
with Sf.System.Sleep;     use Sf.System.Sleep;

procedure Unicode is

   Window : sfWindow_Ptr;
   Mode   : sfVideoMode      := (640, 480, 32);
   Event  : aliased sfEvent;
   CursorHand : sfCursor_Ptr := Cursor.createFromSystem(Cursor.sfCursorHand);
begin

   Window := Create (Mode, "Window");
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   setMouseCursor (Window, CursorHand);
   SetFramerateLimit (Window, 32);
   SetVerticalSyncEnabled (Window, sfTrue);

   while IsOpen (Window) = sfTrue loop
      while waitEvent (Window, Event'Access) = sfTrue loop
         if Event.eventType = sfEvtClosed then
            Close (Window);
            Put_Line ("Attempting to close");
         end if;
         if Event.eventType = sfEvtKeyPressed then
           if Event.key.code = sfKeyEscape then
            Close (Window);
            Put_Line ("Attempting to close");
           elsif
             Event.key.code = sfKeyC and
             Event.key.control = sfTrue then
              sf.Window.Clipboard.setUnicodeString ("„ASFML“ hat in die Zwischenablage kopiert");
              setUnicodeTitle (Window, "„ASFML“ hat in die Zwischenablage kopiert");
           elsif Event.key.code = sfKeyV and
             Event.key.control = sfTrue then
                Put_Line (sf.Window.Clipboard.getUnicodeString);
                setUnicodeTitle (Window, "„ASFML“ hat aus der Zwischenablage eingefügt");
           end if;
         end if;
      end loop;
      Display (Window);
   end loop;
   Destroy (Window);

end Unicode;
