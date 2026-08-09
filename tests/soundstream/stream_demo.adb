with Ada.Numerics.Elementary_Functions;
with Ada.Unchecked_Conversion;

with Sf.Audio.SoundChannel;
with Sf.Audio.SoundStream;
with Sf.Audio.EffectProcessor;
with Sf.System.Time;

with System.Address_To_Access_Conversions;

package body Stream_Demo is

   package Math renames Ada.Numerics.Elementary_Functions;
   package Channels renames Sf.Audio.SoundChannel;
   package Sound_Stream renames Sf.Audio.SoundStream;
   package Time renames Sf.System.Time;

   Sample_Rate   : constant Sf.sfUint32 := 44_100;
   Channel_Count : constant Sf.sfUint32 := 4;
   Batch_Size    : constant Natural := 1_024;
   Total_Samples : constant Natural := Batch_Size * 8;

   type Sample_Array is array (Natural range <>) of aliased Sf.sfInt16;
   Samples : aliased Sample_Array (0 .. Total_Samples - 1);

   type Stream_State is record
      Position : Natural := Samples'First;
   end record;

   State : aliased Stream_State;
   package State_Conv is new System.Address_To_Access_Conversions (Stream_State);
   use type State_Conv.Object_Pointer;

   type Channel_Map_Array is array (Positive range <>) of aliased Channels.sfSoundChannel;
   Channel_Map : aliased Channel_Map_Array (1 .. Integer (Channel_Count)) :=
     (1 => Channels.sfSoundChannelFrontLeft,
      2 => Channels.sfSoundChannelFrontRight,
      3 => Channels.sfSoundChannelBackLeft,
      4 => Channels.sfSoundChannelBackRight);

   type Channel_Map_Ptr is access all Channels.sfSoundChannel;
   type Const_Channel_Map_Ptr is access constant Channels.sfSoundChannel;
   function To_Const is new Ada.Unchecked_Conversion (Channel_Map_Ptr, Const_Channel_Map_Ptr);

   procedure Noop_Effect
     (Input_Frames       : access Float;
      Input_Frame_Count  : access Sf.sfUint32;
      Output_Frames      : access Float;
      Output_Frame_Count : access Sf.sfUint32;
      Channel_Count      : Sf.sfUint32);
   pragma Convention (C, Noop_Effect);

   procedure Noop_Effect
     (Input_Frames       : access Float;
      Input_Frame_Count  : access Sf.sfUint32;
      Output_Frames      : access Float;
      Output_Frame_Count : access Sf.sfUint32;
      Channel_Count      : Sf.sfUint32) is
      pragma Unreferenced (Input_Frames);
      pragma Unreferenced (Output_Frames);
      pragma Unreferenced (Channel_Count);
   begin
      if Input_Frame_Count /= null then
         Input_Frame_Count.all := 0;
      end if;
      if Output_Frame_Count /= null then
         Output_Frame_Count.all := 0;
      end if;
   end Noop_Effect;

   function On_Get_Data
     (Chunk    : access Sound_Stream.sfSoundStreamChunk;
      User_Data : System.Address) return Sf.sfBool;
   pragma Convention (C, On_Get_Data);

   function On_Get_Data
     (Chunk    : access Sound_Stream.sfSoundStreamChunk;
      User_Data : System.Address) return Sf.sfBool is
      State_Ptr : constant State_Conv.Object_Pointer := State_Conv.To_Pointer (User_Data);
   begin
      if State_Ptr = null then
         return Sf.sfFalse;
      end if;

      declare
         Remaining : constant Natural := Samples'Last - State_Ptr.Position + 1;
      begin
         if Remaining = 0 then
            State_Ptr.Position := Samples'First;
            return Sf.sfFalse;
         end if;

         declare
            Batch : constant Natural := Integer'Min (Remaining, Batch_Size);
            Sample_Ptr : constant Sf.sfInt16_Ptr := Samples (State_Ptr.Position)'Unchecked_Access;
         begin
            Chunk.Samples := Sample_Ptr;
            Chunk.NbSamples := Sf.sfUint32 (Batch);
            State_Ptr.Position := State_Ptr.Position + Batch;
            return Sf.sfTrue;
         end;
      end;
   end On_Get_Data;

   procedure On_Seek (Target_Time : Sf.System.Time.sfTime; User_Data : System.Address);
   pragma Convention (C, On_Seek);

   procedure On_Seek (Target_Time : Sf.System.Time.sfTime; User_Data : System.Address) is
      State_Ptr : constant State_Conv.Object_Pointer := State_Conv.To_Pointer (User_Data);
   begin
      if State_Ptr = null then
         return;
      end if;

      declare
         Seconds    : constant Float := Time.asSeconds (Target_Time);
         Sample_Off : Integer := Integer (Float (Sample_Rate) * Seconds);
      begin
         if Sample_Off < Integer (Samples'First) then
            Sample_Off := Integer (Samples'First);
         elsif Sample_Off > Integer (Samples'Last) then
            Sample_Off := Integer (Samples'Last);
         end if;
         State_Ptr.Position := Natural (Sample_Off);
      end;
   end On_Seek;

   procedure Reset_State is
   begin
      State.Position := Samples'First;
   end Reset_State;

   function Channel_Map_Pointer return Const_Channel_Map_Ptr is
      Raw_Map_Ptr : constant Channel_Map_Ptr := Channel_Map (Channel_Map'First)'Unchecked_Access;
   begin
      return To_Const (Raw_Map_Ptr);
   end Channel_Map_Pointer;

   procedure Ensure_Samples_Filled is
   begin
      for I in Samples'Range loop
         declare
            Angle : constant Float :=
              Float (I) / Float (Sample_Rate) * 2.0 * Ada.Numerics.Pi * 220.0;
         begin
            Samples (I) := Sf.sfInt16 (Integer (Math.Sin (Angle) * Float (Sf.sfInt16'Last) * 0.3));
         end;
      end loop;
   end Ensure_Samples_Filled;

   Samples_Ready : Boolean := False;

   procedure Initialize is
   begin
      if not Samples_Ready then
         Ensure_Samples_Filled;
         Samples_Ready := True;
      end if;
      Reset_State;
   end Initialize;

   function Create_Stream return Sf.Audio.sfSoundStream_Ptr is
      Map_Ptr : constant Const_Channel_Map_Ptr := Channel_Map_Pointer;
   begin
      return Sound_Stream.create
        (onGetData      => On_Get_Data'Access,
         onSeek         => On_Seek'Access,
         channelCount   => Channel_Count,
         sampleRate     => Sample_Rate,
         channelMap     => Map_Ptr,
         channelMapSize => Sf.sfSize_t (Channel_Map'Length),
         userData       => State'Address);
   end Create_Stream;

   function Effect_Callback return Sf.Audio.EffectProcessor.sfEffectProcessor is
   begin
      return Noop_Effect'Access;
   end Effect_Callback;

end Stream_Demo;
