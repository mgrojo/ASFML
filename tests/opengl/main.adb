with Ada.Text_IO;         use Ada.Text_IO;

with Sf.Window.Window;    use Sf, Sf.Window, Sf.Window.Window;
with Sf.Window.VideoMode; use Sf.Window.VideoMode;
with Sf.Window.Event;     use Sf.Window.Event;
with Sf.Window.Keyboard;  use Sf.Window.Keyboard;
with Sf.Window.GL;        use Sf.Window.GL;
with Sf.Window.GLU;       use Sf.Window.GLU;
with Sf.System.Time;      use Sf.System, Sf.System.Time;
with Sf.System.Clock;     use Sf.System.Clock;
with Sf.System.Sleep;     use Sf.System.Sleep;

procedure Main is

   Window : sfWindow_Ptr;
   Mode   : sfVideoMode      := (800, 600, 32);
   Params : constant sfContextSettings :=
     (depthBits =>  24,
      stencilBits => 8,
      antialiasingLevel => 2,
      majorVersion => 3,
      minorVersion => 3,
      attributeFlags => 0,
      sRgbCapable => sfFalse);
   Event  : aliased sfEvent;
   Clock  : sfClock_Ptr;
   Wireframe : Boolean := False;
begin

   Clock := Create;

   Window := Create (Mode, "OpenGL", settings => Params);
   if Window = null then
      Put_Line ("Failed to create window");
      return;
   end if;
   SetFramerateLimit (Window, 60);
   setVerticalSyncEnabled (Window, sfFalse);
   SetVisible (Window, sfTrue);

   --opengl stuff
   glClearDepth (1.0);
   glClearColor (0.0, 0.0, 0.0, 0.0);
   glEnable (GL_DEPTH_TEST);
   glDepthMask (GL_TRUE);

   glEnable (GL_FOG);
   glFogi (GL_FOG_MODE, GLint (GL_EXP));
   glFogf (GL_FOG_DENSITY, 0.004);
   glHint (GL_FOG_HINT, GL_NICEST);

   glMatrixMode (GL_PROJECTION);
   glLoadIdentity;
   gluPerspective (90.0, 1.0, 1.0, 500.0);

   glLineWidth (3.0);

   while IsOpen (Window) = sfTrue loop
      while PollEvent (Window, Event'ACCESS) = sfTrue loop
         if Event.eventType = sfEvtClosed then
            Close (Window);
            Put_Line ("Attempting to close");
         elsif Event.eventType = sfEvtKeyPressed and then isKeyPressed (sfKeyEscape) = sfTrue then
            Close (Window);
            Put_Line ("Attempting to close");
         elsif Event.eventType = sfEvtKeyPressed and then isKeyPressed (sfKeySpace) = sfTrue then
            Wireframe := not Wireframe;
         elsif Event.eventType = sfEvtResized then
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
      glRotatef (GLfloat (asSeconds (getElapsedTime (Clock)) * 50.0), 1.0, 0.0, 0.0);
      glRotatef (GLfloat (asSeconds (getElapsedTime (Clock)) * 30.0), 0.0, 1.0, 0.0);
      glRotatef (GLfloat (asSeconds (getElapsedTime (Clock)) * 90.0), 0.0, 0.0, 1.0);

      glPolygonMode(GL_FRONT_AND_BACK, (if Wireframe then GL_LINE else GL_FILL));

      glBegin(GL_QUADS);

      -- Multicolor side
      glColor4f( 1.0, 0.0, 1.0, 0.0 );
      glVertex3f( -50.0, -50.0, -50.0 );
      glColor4f( 0.0, 0.0, 1.0, 0.0 );
      glVertex3f( -50.0,  50.0, -50.0 );
      glColor4f( 0.0, 1.0, 0.0, 0.0 );
      glVertex3f(  50.0,  50.0, -50.0 );
      glColor4f( 1.0, 0.0, 0.0, 0.0 );
      glVertex3f(  50.0, -50.0, -50.0 );

      -- Yellow side
      glColor4f(   1.0,  1.0, 0.0, 0.0 );
      glVertex3f(  50.0, -50.0, 50.0 );
      glVertex3f(  50.0,  50.0, 50.0 );
      glVertex3f( -50.0,  50.0, 50.0 );
      glVertex3f( -50.0, -50.0, 50.0 );

      -- Purple side
      glColor4f(  1.0,  0.0,  1.0, 0.0 );
      glVertex3f( 50.0, -50.0, -50.0 );
      glVertex3f( 50.0,  50.0, -50.0 );
      glVertex3f( 50.0,  50.0,  50.0 );
      glVertex3f( 50.0, -50.0,  50.0 );

      -- Green side
      glColor4f(   0.0,  1.0,  0.0, 0.0 );
      glVertex3f( -50.0, -50.0,  50.0 );
      glVertex3f( -50.0,  50.0,  50.0 );
      glVertex3f( -50.0,  50.0, -50.0 );
      glVertex3f( -50.0, -50.0, -50.0 );

      -- Blue side
      glColor4f(   0.0,  0.0,  1.0, 0.0 );
      glVertex3f(  50.0,  50.0,  50.0 );
      glVertex3f(  50.0,  50.0, -50.0 );
      glVertex3f( -50.0,  50.0, -50.0 );
      glVertex3f( -50.0,  50.0,  50.0 );

      -- Red side
      glColor4f(   1.0,  0.0,  0.0, 0.0 );
      glVertex3f(  50.0, -50.0, -50.0 );
      glVertex3f(  50.0, -50.0,  50.0 );
      glVertex3f( -50.0, -50.0,  50.0 );
      glVertex3f( -50.0, -50.0, -50.0 );

      glEnd;

      Display (Window);
      sfDelay (0.001);
   end loop;
   Destroy (Window);
   Destroy (Clock);

end Main;
