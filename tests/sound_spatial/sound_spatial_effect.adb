with Sf;

package body Sound_Spatial_Effect is

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

   function Callback return Sf.Audio.EffectProcessor.sfEffectProcessor is
   begin
      return Noop_Effect'Access;
   end Callback;

end Sound_Spatial_Effect;
