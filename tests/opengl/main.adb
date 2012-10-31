with Ada.Text_IO;         use Ada.Text_IO;
with Sf.Config;           use Sf.Config;
with Sf.Window.Types;     use Sf.Window.Types;
with Sf.Window.Window;    use Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Input;     use Sf.Window.Input;
with Sf.Window.GL;        use Sf.Window.GL;
with Sf.Window.GLU;       use Sf.Window.GLU;
with Sf.System.Clock;     use Sf.System.Clock;
with Sf.System.Sleep;     use Sf.System.Sleep;
with Sf.System.Types;     use Sf.System.Types;

procedure Main is

   Window : sfWindow_Ptr;
   Mode   : sfVideoMode      := (800, 600, 32);
   Params : sfWindowSettings := (24, 8, 2);
   Event  : aliased sfEvent;
   Input  : sfInput_Ptr;
   Clock  : sfClock_Ptr;

begin

   Clock := sfClock_Create;

   Window := sfWindow_Create (Mode, "Window", sfClose, Params);
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   sfWindow_SetFramerateLimit (Window, 32);
   sfWindow_UseVerticalSync (Window, sfFalse);
   sfWindow_Show (Window, sfTrue);

   --opengl stuff
   glClearDepth (1.0);
   glClearColor (0.0, 0.0, 0.0, 0.0);
   glEnable (GL_DEPTH_TEST);
   glDepthMask (GL_TRUE);

   glMatrixMode (GL_PROJECTION);
   glLoadIdentity;
   gluPerspective (90.0, 1.0, 1.0, 500.0);

   while sfWindow_IsOpened (Window) = sfTrue loop
      while sfWindow_GetEvent (Window, Event'ACCESS) = sfTrue loop
         if Event.Event_Type = sfEvtClosed then
            sfWindow_Close (Window);
            Put_Line ("Attepting to close");
         end if;
         Input := sfWindow_GetInput (Window);
         if Input /= null and then Event.Event_Type = sfEvtKeyPressed and then sfInput_IsKeyDown (Input, sfKeyEscape) = sfTrue then
            sfWindow_Close (Window);
            Put_Line ("Attepting to close");
         end if;
         if Event.Event_Type = sfEvtResized then
            glViewport (0, 0, GLsizei (Event.Size.Width), GLsizei (Event.Size.Height));
         end if;
      end loop;
      --render to this window
      --sfWindow_SetActive(Window, sfTrue);

      --opengl stuff
      glClear (GLbitfield (GL_COLOR_BUFFER_BIT) or GLbitfield (GL_DEPTH_BUFFER_BIT));
      glMatrixMode (GL_MODELVIEW);
      glLoadIdentity;
      glTranslatef (0.0, 0.0, -200.0);
      glRotatef (GLfloat (sfClock_GetTime (Clock) * 50.0), 1.0, 0.0, 0.0);
      glRotatef (GLfloat (sfClock_GetTime (Clock) * 30.0), 0.0, 1.0, 0.0);
      glRotatef (GLfloat (sfClock_GetTime (Clock) * 90.0), 0.0, 0.0, 1.0);
      glBegin (GL_QUADS);
      glVertex3f (-50.0, -50.0, -50.0);
      glVertex3f (-50.0, 50.0, -50.0);
      glVertex3f (50.0, 50.0, -50.0);
      glVertex3f (50.0, -50.0, -50.0);
      glVertex3f (-50.0, -50.0, 50.0);
      glVertex3f (-50.0, 50.0, 50.0);
      glVertex3f (50.0, 50.0, 50.0);
      glVertex3f (50.0, -50.0, 50.0);
      glVertex3f (-50.0, -50.0, -50.0);
      glVertex3f (-50.0, 50.0, -50.0);
      glVertex3f (-50.0, 50.0, 50.0);
      glVertex3f (-50.0, -50.0, 50.0);
      glVertex3f (50.0, -50.0, -50.0);
      glVertex3f (50.0, 50.0, -50.0);
      glVertex3f (50.0, 50.0, 50.0);
      glVertex3f (50.0, -50.0, 50.0);
      glVertex3f (-50.0, -50.0, 50.0);
      glVertex3f (-50.0, -50.0, -50.0);
      glVertex3f (50.0, -50.0, -50.0);
      glVertex3f (50.0, -50.0, 50.0);
      glVertex3f (-50.0, 50.0, 50.0);
      glVertex3f (-50.0, 50.0, -50.0);
      glVertex3f (50.0, 50.0, -50.0);
      glVertex3f (50.0, 50.0, 50.0);
      glEnd;

      sfWindow_Display (Window);
      sfSleep (0.001);
   end loop;
   sfWindow_Destroy (Window);
   sfClock_Destroy (Clock);

end Main;
