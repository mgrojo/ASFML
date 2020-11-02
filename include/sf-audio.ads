--//////////////////////////////////////////////////////////
-- //
-- // SFML - Simple and Fast Multimedia Library
-- // Copyright (C) 2007-2009 Laurent Gomila (laurent.gom@gmail.com)
-- //
-- // This software is provided 'as-is', without any express or implied warranty.
-- // In no event will the authors be held liable for any damages arising from the use of this software.
-- //
-- // Permission is granted to anyone to use this software for any purpose,
-- // including commercial applications, and to alter it and redistribute it freely,
-- // subject to the following restrictions:
-- //
-- // 1. The origin of this software must not be misrepresented;
-- //    you must not claim that you wrote the original software.
-- //    If you use this software in a product, an acknowledgment
-- //    in the product documentation would be appreciated but is not required.
-- //
-- // 2. Altered source versions must be plainly marked as such,
-- //    and must not be misrepresented as being the original software.
-- //
-- // 3. This notice may not be removed or altered from any source distribution.
-- //
--//////////////////////////////////////////////////////////

--/ @summary
--/ Audio module
--/
--/ @description
--/ Sounds, streaming (musics or custom sources), recording,
--/ spatialization.
--/
package Sf.Audio is

   type sfMusic is null record;
   type sfMusic_Ptr is access all sfMusic;
   type sfSound is null record;
   type sfSound_Ptr is access all sfSound;
   type sfSoundBuffer is null record;
   type sfSoundBuffer_Ptr is access all sfSoundBuffer;
   type sfSoundBufferRecorder is null record;
   type sfSoundBufferRecorder_Ptr is access all sfSoundBufferRecorder;
   type sfSoundRecorder is null record;
   type sfSoundRecorder_Ptr is access all sfSoundRecorder;
   type sfSoundStream is null record;
   type sfSoundStream_Ptr is access all sfSoundStream;

private

   pragma Convention (C, sfMusic);
   pragma Convention (C, sfMusic_Ptr);
   pragma Convention (C, sfSound);
   pragma Convention (C, sfSound_Ptr);
   pragma Convention (C, sfSoundBuffer);
   pragma Convention (C, sfSoundBuffer_Ptr);
   pragma Convention (C, sfSoundBufferRecorder);
   pragma Convention (C, sfSoundBufferRecorder_Ptr);
   pragma Convention (C, sfSoundRecorder);
   pragma Convention (C, sfSoundRecorder_Ptr);
   pragma Convention (C, sfSoundStream);
   pragma Convention (C, sfSoundStream_Ptr);

end Sf.Audio;
