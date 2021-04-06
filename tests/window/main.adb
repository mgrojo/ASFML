with Ada.Text_IO;         use Ada.Text_IO;
with Sf.Window.Window;    use Sf, Sf.Window, Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.Window.Clipboard;
with Sf.Window.Cursor;

with Sf.System.Time;      use Sf.System.Time;
with Sf.System.Sleep;     use Sf.System.Sleep;

procedure Main is

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
      while PollEvent (Window, Event'Access) = sfTrue loop
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
              sf.Window.Clipboard.setString ("ASFML has copied to Clipboard");
              setTitle (Window, "ASFML has copied to Clipboard");
           elsif Event.key.code = sfKeyV and
             Event.key.control = sfTrue then
                Put_Line (sf.Window.Clipboard.getString);
                setTitle (Window, "ASFML has pasted to standard output");
           end if;
         end if;
      end loop;
      Display (Window);
      sfSleep (sfSeconds (0.001));
   end loop;
   Destroy (Window);

end Main;
