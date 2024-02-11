with Ada.Strings.Unbounded.Text_IO;
with Ada.Text_IO;         use Ada.Text_IO;

with Sf.Window.WindowBase;    use Sf, Sf.Window, Sf.Window.WindowBase;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.Window.Vulkan;


procedure Main is

   Window : sfWindowBase_Ptr;
   Mode   : sfVideoMode      := (800, 600, 32);
   Event  : aliased sfEvent;
begin

   Window := Create (Mode, "Vulkan");
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;

   SetVisible (Window, sfTrue);


   if Sf.Window.Vulkan.isAvailable (requireGraphics => sf.sfTrue) then
      Ada.Text_IO.Put_Line ("Vulkan with Graphics supported");
   else
      if Sf.Window.Vulkan.isAvailable (requireGraphics => sf.sfFalse) then
         Ada.Text_IO.Put_Line ("Vulkan without Graphics supported");
      else
         Ada.Text_IO.Put_Line ("Vulkan not supported");
      end if;
      -- API with problems, see https://github.com/SFML/CSFML/issues/227
      -- for Extension of Sf.Window.Vulkan.getGraphicsRequiredInstanceExtensions loop
      -- 	Ada.Strings.Unbounded.Text_IO.Put_Line (Extension);
 	 -- end loop;
   end if;

   while IsOpen (Window) = sfTrue loop
      while PollEvent (Window, Event'ACCESS) = sfTrue loop
         if Event.eventType = sfEvtClosed then
            Close (Window);
            Put_Line ("Attempting to close");
         elsif Event.eventType = sfEvtKeyPressed and then isKeyPressed (sfKeyEscape) = sfTrue then
            Close (Window);
            Put_Line ("Attempting to close");
         end if;
      end loop;



   end loop;
   Destroy (Window);

end Main;
