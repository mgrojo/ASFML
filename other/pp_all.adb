with Ada.Text_IO;
with Ada.Directories;         use Ada.Directories;
with Ada.Calendar.Formatting;
with Ada.Containers.Vectors;
with Ada.Strings.Unbounded;   use Ada.Strings.Unbounded;
with Interfaces.C; use Interfaces.C;
with Interfaces.C.Strings; use Interfaces.C.Strings;
use type Ada.Containers.Count_Type;

procedure pp_all is

   package IO renames Ada.Text_IO;
   package D renames Ada.Directories;
   package IOI is new IO.Integer_IO (D.File_Size);
   package ACF renames Ada.Calendar.Formatting;

   procedure PP (Filename : String) is
      function system (Cmd : chars_ptr) return int;
      pragma Import (C, system, "system");
      Cmd   : String := "gnatpp -i3 -A1 -A2 -A3 -A4 -A5 -aU -c1 -cl2 -kL -l1 -M256 -nD -pM -rnb ";
      C_Cmd : chars_ptr;
      Dummy : int;
   begin
      IO.Put_Line ("Pretty_Print: " & Filename);
      C_Cmd := New_String (Cmd & Filename);
      Dummy := system (C_Cmd);
      Free (C_Cmd);
   end PP;
   
   A_Search    : D.Search_Type;
   Search_Item : D.Directory_Entry_Type;
   Filter      : constant D.Filter_Type := (D.Ordinary_File => True, D.Special_File => False, D.Directory => False);

   package Vec is new Ada.Containers.Vectors (Positive, Unbounded_String);
   use Vec;

   Src_Vec  : Vec.Vector;
   Curr_Dir : String := D.Current_Directory;

begin
   D.Set_Directory (D.Current_Directory & "/include");
   D.Start_Search (Search => A_Search, Directory => D.Current_Directory, Pattern => "*.ads", Filter => Filter);
   while D.More_Entries (Search => A_Search) loop
      D.Get_Next_Entry (Search => A_Search, Directory_Entry => Search_Item);
      Append (Src_Vec, To_Unbounded_String (D.Simple_Name (Search_Item)));
   end loop;
   D.End_Search (Search => A_Search);
   D.Start_Search (Search => A_Search, Directory => D.Current_Directory, Pattern => "*.adb", Filter => Filter);
   while D.More_Entries (Search => A_Search) loop
      D.Get_Next_Entry (Search => A_Search, Directory_Entry => Search_Item);
      Append (Src_Vec, To_Unbounded_String (D.Simple_Name (Search_Item)));
   end loop;
   D.End_Search (Search => A_Search);
   for i in 1 .. Length (Src_Vec) loop
      PP(To_String(Vec.Element(Src_Vec, Positive(i))));
   end loop;
   D.Set_Directory (Curr_Dir);
end pp_all;
