with Interfaces.C.Strings;

package body Sf.Audio.SoundBuffer is

   -- ////////////////////////////////////////////////////////////
   -- /// Create a new sound buffer and load it from a file
   -- ///
   -- /// \param Filename : Path of the music file to open
   -- ///
   -- /// \return A new sfSoundBuffer object (NULL if failed)
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundBuffer_CreateFromFile (Filename : String) return sfSoundBuffer_Ptr is
      function Internal (Filename : Interfaces.C.Strings.chars_ptr) return sfSoundBuffer_Ptr;
      pragma Import (C, Internal, "sfSoundBuffer_CreateFromFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfSoundBuffer_Ptr do
         R := Internal (Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfSoundBuffer_CreateFromFile;

   -- ////////////////////////////////////////////////////////////
   -- /// Save a sound buffer to a file
   -- ///
   -- /// \param SoundBuffer : Sound buffer to save
   -- /// \param Filename :    Path of the sound file to write
   -- ///
   -- /// \return sfTrue if saving has been successful
   -- ///
   -- ////////////////////////////////////////////////////////////
   function sfSoundBuffer_SaveToFile (SoundBuffer : sfSoundBuffer_Ptr; Filename : String) return sfBool is
      function Internal (SoundBuffer : sfSoundBuffer_Ptr; Filename : Interfaces.C.Strings.chars_ptr) return sfBool;
      pragma Import (C, Internal, "sfSoundBuffer_SaveToFile");
      Temp : Interfaces.C.Strings.chars_ptr := Interfaces.C.Strings.New_String (Filename);
   begin
      return R : sfBool do
         R := Internal (SoundBuffer, Temp);
         Interfaces.C.Strings.Free (Temp);
      end return;
   end sfSoundBuffer_SaveToFile;

end Sf.Audio.SoundBuffer;
