with Ada.Text_IO;			use Ada.Text_IO;
with Ada.Integer_Text_IO;	use Ada.Integer_Text_IO;
with Sf.System.Randomizer; 	use Sf.System.Randomizer;

procedure Main is
	
begin

	sfRandom_SetSeed(10);
	for I in 1..10 loop
		Put(sfRandom_Int(0, 10), 0);
		New_Line;
	end loop;

end Main;