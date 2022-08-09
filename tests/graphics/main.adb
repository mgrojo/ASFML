with Sf.Graphics.Rect;
with Sf.System.Vector2;
with Ada.Wide_Wide_Text_IO; use Ada.Wide_Wide_Text_IO;

procedure Main is

   FloatRectangle : aliased constant Sf.Graphics.Rect.sfFloatRect := (0.00, 0.00, 100.00, 100.00);
   IntegerRectangle : aliased constant Sf.Graphics.Rect.sfIntRect := (0, 0, 100, 100);

   FloatPoint : constant Sf.System.Vector2.sfVector2f := (10.00, 10.00);
   IntegerPoint : constant Sf.System.Vector2.sfVector2i := (10, 10);

   OutFloatPoint : constant Sf.System.Vector2.sfVector2f := (200.00, 10.00);
   OutIntegerPoint : constant Sf.System.Vector2.sfVector2i := (200, 10);

begin


   case
     Sf.Graphics.Rect.contains (rect => FloatRectangle'Access,
                                x    => FloatPoint.x,
                                y    => FloatPoint.y)
   is
      when Sf.sfTrue =>
         Put_Line ("OK: Floatpoint is inside.");

      when Sf.sfFalse =>
         Put_Line ("Fail: Floatpoint is outside.");
   end case;

   case
     Sf.Graphics.Rect.contains (rect => IntegerRectangle'Access,
                                x    => Integer (IntegerPoint.x),
                                y    => Integer (IntegerPoint.y))
   is
      when Sf.sfTrue =>
         Put_Line ("OK: Integerpoint is inside.");

      when Sf.sfFalse =>
         Put_Line ("Fail: Integerpoint is outside.");
   end case;


   case
     Sf.Graphics.Rect.contains (rect => FloatRectangle'Access,
                                x    => OutFloatPoint.x,
                                y    => OutFloatPoint.y)
   is
      when Sf.sfTrue =>
         Put_Line ("Fail: OutFloatpoint is inside.");

      when Sf.sfFalse =>
         Put_Line ("OK: OutFloatpoint is outside.");
   end case;

   case
     Sf.Graphics.Rect.contains (rect => IntegerRectangle'Access,
                                x    => Integer (OutIntegerPoint.x),
                                y    => Integer (OutIntegerPoint.y))
   is
      when Sf.sfTrue =>
         Put_Line ("Fail: OutIntegerpoint is inside.");

      when Sf.sfFalse =>
         Put_Line ("OK: OutIntegerpoint is outside.");
   end case;

end Main;
