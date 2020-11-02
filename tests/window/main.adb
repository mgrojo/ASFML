with Ada.Text_IO;         use Ada.Text_IO;
with Sf.Window.Window;    use Sf, Sf.Window, Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.System.Time;      use Sf.System.Time;
with Sf.System.Sleep;     use Sf.System.Sleep;

procedure Main is

   Window : sfWindow_Ptr;
   Mode   : sfVideoMode      := (640, 480, 32);
   Event  : aliased sfEvent;

begin

   Window := sfWindow_Create (Mode, "Window");
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   sfWindow_SetFramerateLimit (Window, 32);
   sfWindow_SetVerticalSyncEnabled (Window, sfTrue);

   while sfWindow_IsOpen (Window) = sfTrue loop
      while sfWindow_PollEvent (Window, Event'Access) = sfTrue loop
         if Event.eventType = sfEvtClosed then
            sfWindow_Close (Window);
            Put_Line ("Attempting to close");
         end if;
         if Event.eventType = sfEvtKeyPressed
           and then Event.key.code = sfKeyEscape then
            sfWindow_Close (Window);
            Put_Line ("Attempting to close");
         end if;
      end loop;
      sfWindow_Display (Window);
      sfSleep (sfSeconds (0.001));
   end loop;
   sfWindow_Destroy (Window);

end Main;
