with Ada.Text_IO;
with Ada.Directories; use Ada.Directories;
with Ada.Calendar.Formatting;
with Ada.Containers.Vectors;
with Ada.Strings.Unbounded; use Ada.Strings.Unbounded;
use type Ada.Containers.Count_Type;
 
procedure aDir is

	function replace_bind(s : string) return string is
		c : string := s;
	begin
		for i in c'range loop
			if c(i) = '-' then
				c(i) := '.';
			end if;
		end loop;
		return c;
	end replace_bind;

   package IO renames Ada.Text_IO;
   package D renames Ada.Directories;
   package IOI is new IO.Integer_IO (D.File_Size);
   package ACF renames Ada.Calendar.Formatting;
 
   A_Search : D.Search_Type;
   Search_Item : D.Directory_Entry_Type;
   Filter : constant D.Filter_Type := (D.Ordinary_File => True,
                                       D.Special_File => False,
                                       D.Directory => False);
	
	package Vec is new Ada.Containers.Vectors(Positive, Unbounded_String);
	use Vec;
									   
	Output : IO.File_Type;
	Ads_Vec: Vec.Vector;
	Curr_Dir : String := D.Current_Directory;
	
begin
	D.Set_Directory(D.Current_Directory & "/include");
   D.Start_Search (Search    => A_Search,
                   Directory => D.Current_Directory,
                   Pattern   => "*.ads",
                   Filter    => Filter);
   while D.More_Entries (Search => A_Search) loop
      D.Get_Next_Entry (Search          => A_Search,
                        Directory_Entry => Search_Item);
	  Append(Ads_Vec, To_Unbounded_String(D.Base_Name(D.Simple_Name(Search_Item))));
   end loop;
   D.End_Search (Search => A_Search);
   
   D.Set_Directory(Curr_Dir);
   IO.Create(Output, IO.Out_File, "to_gen_docs.adb");
   for i in 1..Length(Ads_Vec) loop
		IO.Put_Line(Output, "with " & replace_bind(To_String(Element(Ads_Vec, Positive(i)))) & ";");
   end loop;
   IO.Put_Line(Output, "procedure to_gen_docs is");
   IO.Put_Line(Output, "begin");
   IO.Put_Line(Output, "end to_gen_docs;");
   IO.Close(Output);
end Adir;