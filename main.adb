with Ada.Text_IO;			use Ada.Text_IO;
with Sf.Config;				use Sf.Config;
with Sf.Window.Types;		use Sf.Window.Types;
with Sf.Window.Window; 		use Sf.Window.Window;
with Sf.Window.VideoMode;	use Sf.Window.VideoMode;
with Sf.Window.Event;		use Sf.Window.Event;
with Sf.Window.Input;		use Sf.Window.Input;
with Sf.System.Sleep;		use Sf.System.Sleep;

procedure Main is
	
	Window	: sfWindow_Ptr;
	Mode	: sfVideoMode := (640, 480, 32);
	Params	: sfWindowSettings := (24, 8, 0);
	Event 	: aliased sfEvent;
	Input	: sfInput_Ptr;
	
begin

	Window := sfWindow_Create(Mode, "Window");
	if Window = null then
		Put_Line("Failed to create window");
		return;
	end if;
	sfWindow_SetFramerateLimit(Window, 32);
	sfWindow_UseVerticalSync(Window, sfTrue);
	sfWindow_Show(Window, sfTrue);
	
	while sfWindow_IsOpened(Window) = sfTrue loop
		while sfWindow_GetEvent(Window, Event'access) = sfTrue loop
			if  Event.Event_Type = sfEvtClosed then
				sfWindow_Close(Window);
				Put_Line("Attepting to close");
			end if;
			Input := sfWindow_GetInput(Window);
			if Input /= Null and then Event.Event_Type = sfEvtKeyPressed 
				and then sfInput_IsKeyDown(Input, sfKeyEscape) = sfTrue then
				sfWindow_Close(Window);
				Put_Line("Attepting to close");
			end if;
		end loop;
		sfWindow_Display(Window);
		sfSleep(0.001);
	end loop;
	sfWindow_Destroy(Window);

end Main;