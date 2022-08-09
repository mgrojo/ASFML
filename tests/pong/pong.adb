with Ada.Numerics.Elementary_Functions; use Ada.Numerics.Elementary_Functions;
with Ada.Numerics.Float_Random; use Ada.Numerics.Float_Random;

with Sf.Audio.Sound, Sf.Audio.SoundBuffer;

with Sf.Graphics.CircleShape, Sf.Graphics.RectangleShape, Sf.Graphics.Color, Sf.Graphics.Font,
     Sf.Graphics.Text, Sf.Graphics.RenderWindow;

with Sf.System.Vector2, Sf.System.Time, Sf.System.Clock;

with Sf.Window.Event, Sf.Window.Keyboard;

use  Sf, Sf.Audio, Sf.Graphics, Sf.System, Sf.Window;

procedure Pong is
   Pi : constant := Ada.Numerics.Pi;
   GameWidth : constant := 800;
   GameHeight : constant := 600;
   PaddleSize : constant Vector2.sfVector2f := (X => 25.0, Y => 100.0);
   BallRadius : constant := 10.0;
   AITime : constant Time.sfTime := (MicroSeconds => 1000);
   PaddleSpeed : constant Float := 400.0;
   BallSpeed : constant Float := 400.0;
   Win: sfRenderWindow_Ptr;
   BallSoundBuffer: sfSoundBuffer_Ptr;
   BallSound: sfSound_Ptr;
   LeftPaddle, RightPaddle: sfRectangleShape_Ptr;
   Ball: sfCircleShape_Ptr;
   GameFont: sfFont_Ptr;
   GameMessage: sfText_Ptr;
   AITimer, Timer: sfClock_Ptr;
   IsPlaying: Boolean;
   Evt: Event.sfEvent;
   DeltaTime, Factor: Float;
   RightPaddleSpeed: Float := 0.0;
   BallAngle: Float := 0.0;
   ClockTime: Sf.System.Time.sfTime;
   Gen: Ada.Numerics.Float_Random.Generator;
   use type Event.sfEventType;
   use type Keyboard.sfKeyCode;
begin
   Reset (Gen);
   Win := RenderWindow.Create(mode => (GameWidth, GameHeight, 32), title => "Ada SFML Pong");
   RenderWindow.SetVerticalSyncEnabled(Win, sfTrue);
   BallSoundBuffer := SoundBuffer.CreateFromFile("ping_pong_8bit_beeep.ogg");
   BallSound := Sound.Create;
   Sound.SetBuffer(BallSound, BallSoundBuffer);
   LeftPaddle := RectangleShape.Create;

   RectangleShape.setSize(LeftPaddle, (PaddleSize.X - 3.0, PaddleSize.Y - 3.0));
   RectangleShape.setOutlineThickness (LeftPaddle, 3.0);
   RectangleShape.setOutlineColor (LeftPaddle, Color.sfBlack);
   RectangleShape.setFillColor (LeftPaddle, Color.FromRGB(100, 100, 200));
   RectangleShape.setOrigin (LeftPaddle, (0.5 * PaddleSize.X, 0.5 * PaddleSize.Y));

   RightPaddle := RectangleShape.Create;
   RectangleShape.setSize (RightPaddle, (PaddleSize.X - 3.0, PaddleSize.Y - 3.0));
   RectangleShape.setOutlineThickness (RightPaddle, 3.0);
   RectangleShape.setOutlineColor (RightPaddle, Color.sfBlack);
   RectangleShape.setFillColor (RightPaddle, Color.fromRGB(200, 100, 100));
   RectangleShape.setOrigin (RightPaddle, (0.5 * PaddleSize.X, 0.5 * PaddleSize.Y));
   Ball := CircleShape.Create;
   CircleShape.setRadius (Ball, BallRadius - 3.0);
   CircleShape.setOutlineThickness (Ball, 3.0);
   CircleShape.setOutlineColor (Ball, Color.sfBlack);
   CircleShape.setFillColor (Ball, Color.sfWhite);
   CircleShape.setOrigin (Ball, (0.5 * BallRadius, 0.5 * BallRadius));
   GameFont := Font.CreateFromFile("../renderwindow/aerial.ttf");
   GameMessage := Text.Create;
   Text.setFont (GameMessage, GameFont);
   Text.setCharacterSize (GameMessage, 30);
   Text.setPosition (GameMessage, (X => 50.0, Y => 150.0));
   Text.setColor (GameMessage, Color.sfWhite);
   AITimer := Clock.Create;
   Timer := Clock.Create;
   IsPlaying := False;
   while RenderWindow.isOpen (Win) loop
      while RenderWindow.PollEvent(Win, Evt) loop
         if Evt.EventType = Event.sfEvtClosed or
           (Evt.EventType = Event.sfEvtKeyPressed and Evt.Key.Code = Keyboard.sfKeyEscape)
         then
            RenderWindow.Close (Win);
            exit;
         end if;
         if Evt.EventType = Event.sfEvtKeyPressed and Evt.Key.Code = Keyboard.sfKeySpace then
            if not IsPlaying then
               IsPlaying := True;
               ClockTime := Clock.Restart (Timer);
               RectangleShape.setPosition (LeftPaddle, (10.0 + 0.5 * PaddleSize.X, 0.5 * Float (GameHeight)));
               RectangleShape.setPosition (RightPaddle, (Float (GameWidth) - 10.0 - 0.5 * PaddleSize.X, 0.5 * Float (GameHeight)));
               CircleShape.setPosition (Ball, (0.5 * Float (GameWidth), 0.5 * Float (GameHeight)));
               loop
                  BallAngle := Random (Gen) * 2.0 * Pi;
                  exit when abs(Cos(BallAngle)) >= 0.7;
               end loop;
            end if;
         end if;
      end loop;
      if IsPlaying then
         ClockTime := Clock.Restart(Timer);
         DeltaTime := Time.AsSeconds (ClockTime);
         if Keyboard.IsKeyPressed(Keyboard.sfKeyUp) = sfTrue
           and RectangleShape.getPosition (LeftPaddle).Y - 0.5 * PaddleSize.Y > 5.0
         then
            RectangleShape.Move(LeftPaddle, (0.0, -PaddleSpeed * DeltaTime));
         end if;
         if Keyboard.IsKeyPressed(Keyboard.sfKeyDown) = sfTrue
           and (RectangleShape.getPosition (LeftPaddle).Y + 0.5 * PaddleSize.Y < Float (GameHeight) - 5.0)
         then
            RectangleShape.Move(LeftPaddle, (0.0, PaddleSpeed * DeltaTime));
         end if;
         if (RightPaddleSpeed < 0.0
               and (RectangleShape.getPosition (RightPaddle).Y - 0.5 * PaddleSize.Y > 5.0))
           or ((RightPaddleSpeed > 0.0)
                 and (RectangleShape.getPosition (RightPaddle).Y + 0.5 * PaddleSize.Y < Float (GameHeight) - 5.0)) then
            RectangleShape.Move (RightPaddle, (0.0, RightPaddleSpeed * DeltaTime));
         end if;
         if Clock.getElapsedTime (AITimer).MicroSeconds > AITime.MicroSeconds then
            ClockTime := Clock.Restart (AITimer);
            if CircleShape.getPosition(Ball).Y + BallRadius > RectangleShape.getPosition (RightPaddle).Y + 0.5 * PaddleSize.Y then
               RightPaddleSpeed := PaddleSpeed;
            else
               if CircleShape.getPosition(Ball).Y - BallRadius < RectangleShape.getPosition (RightPaddle).Y - 0.5 * PaddleSize.Y then
                  RightPaddleSpeed := -PaddleSpeed;
               else
                  RightPaddleSpeed := 0.0;
               end if;
            end if;
         end if;
         Factor := BallSpeed * DeltaTime;
         CircleShape.Move(Ball, (Cos(BallAngle) * Factor, Sin(BallAngle) * Factor));
         if CircleShape.getPosition (Ball).X - BallRadius < 0.0 then
            IsPlaying := False;
            Text.setString (GameMessage, "You lost!" & ASCII.LF & "Press space to restart or" & ASCII.LF & "escape to exit");
         else
            if CircleShape.getPosition (Ball).X + BallRadius > Float(GameWidth) then
               IsPlaying := False;
               Text.setString (GameMessage, "You won!" & ASCII.LF & "Press space to restart or" & ASCII.LF & "escape to exit");
            end if;
         end if;
         if CircleShape.getPosition (Ball).Y - BallRadius < 0.0 then
            Sound.Play (BallSound);
            BallAngle := -BallAngle;
            CircleShape.setPosition (Ball, (CircleShape.getPosition (Ball).X, BallRadius + 0.1));
         else
            if CircleShape.getPosition (Ball).Y + BallRadius > Float (GameHeight) then
               Sound.Play (BallSound);
               BallAngle := -BallAngle;
               CircleShape.setPosition (Ball, (CircleShape.getPosition (Ball).X, Float (GameHeight) - BallRadius - 0.1));
            end if;
         end if;
         if (CircleShape.getPosition (Ball).X - BallRadius < RectangleShape.getPosition (LeftPaddle).X + 0.5 * PaddleSize.X)
           and (CircleShape.getPosition (Ball).X - BallRadius > RectangleShape.getPosition (LeftPaddle).X)
           and (CircleShape.getPosition (Ball).Y + BallRadius >= RectangleShape.getPosition (LeftPaddle).Y - 0.5 * PaddleSize.Y)
           and (CircleShape.getPosition (Ball).Y - BallRadius <= RectangleShape.getPosition (LeftPaddle).Y + 0.5 * PaddleSize.Y)
         then
            if CircleShape.getPosition (Ball).Y > RectangleShape.getPosition (LeftPaddle).Y then
               BallAngle := Pi - BallAngle + Random (Gen) * Pi / 9.0;
            else
               BallAngle := Pi - BallAngle - Random (Gen) * pi / 9.0;
            end if;
            Sound.Play (BallSound);
            CircleShape.setPosition (Ball, (RectangleShape.getPosition (LeftPaddle).X + BallRadius + 0.5 * PaddleSize.X + 0.1, CircleShape.getPosition (Ball).Y));
         end if;
         if CircleShape.getPosition (Ball).X + BallRadius > RectangleShape.getPosition (RightPaddle).X - 0.5 * PaddleSize.X
           and CircleShape.getPosition (Ball).X + BallRadius < RectangleShape.getPosition (RightPaddle).X
           and CircleShape.getPosition (Ball).Y + BallRadius >= RectangleShape.getPosition (RightPaddle).Y - 0.5 * PaddleSize.Y
           and CircleShape.getPosition (Ball).Y - BallRadius <= RectangleShape.getPosition (RightPaddle).Y + 0.5 * PaddleSize.Y
         then
            if CircleShape.getPosition (Ball).Y > RectangleShape.getPosition (RightPaddle).Y then
               BallAngle := Pi - BallAngle + Random (Gen) * Pi / 9.0;
            else
               BallAngle := Pi - BallAngle - Random (Gen) * Pi / 9.0;
            end if;
            Sound.Play (BallSound);
            CircleShape.setPosition (Ball, (RectangleShape.getPosition (RightPaddle).X - BallRadius - 0.5 * PaddleSize.X - 0.1, CircleShape.getPosition (Ball).Y));
         end if;
      end if;
      RenderWindow.Clear(Win, Color.FromRGB(50, 200, 50));
      if IsPlaying then
         RenderWindow.drawRectangleShape (Win, LeftPaddle);
         RenderWindow.drawRectangleShape (Win, RightPaddle);
         RenderWindow.drawCircleShape (Win, Ball);
      else
         RenderWindow.DrawText (Win, GameMessage);
      end if;
      RenderWindow.Display (Win);
   end loop;
end Pong; -- block
     -- Translated on 7-Nov-2020 by (Obj) P2Ada V1.4a 28-Mar-2010
