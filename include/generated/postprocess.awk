/\\param / {
    for (i=1; i<10; i++) {
        if (arg[i] == "") {
            arg[i]=$3
            break
        }
    }
}


# Remove Headers comment
/ *-- Headers *$/ {
    gsub(" *-- Headers *$", "")
}

/Sf.[A-Za-z0-9_]*.stddef_h/ {
    gsub("with Sf.[A-Za-z0-9_]*.stddef_h;", "")
    gsub("Sf.[A-Za-z0-9_]*.stddef_h.", "")
}

/^ *pragma Import/ {
    for (i=1; i<10; i++) {
        arg[i]=""
    }
    gsub("pragma Import \\(C, sf[a-zA-Z0-9]*_", "pragma Import (C, ")
    pragmas=pragmas "\n" $0
    next
}

/arg1 *: */ {
    if(arg[1] != "")
        gsub("arg1", arg[1]);
}
/arg2 *: */ {
    if(arg[2] != "")
        gsub("arg2", arg[2]);
}
/arg3 *: */ {
    if(arg[3] != "")
        gsub("arg3", arg[3]);
}
/arg4 *: */ {
    if(arg[4] != "")
        gsub("arg4", arg[4]);
}
/arg5 *: */ {
    if(arg[5] != "")
        gsub("arg5", arg[5]);
}
/arg6 *: */ {
    if(arg[6] != "")
        gsub("arg6", arg[6]);
}
/arg7 *: */ {
    if(arg[7] != "")
        gsub("arg7", arg[7]);
}
/arg8 *: */ {
    if(arg[8] != "")
        gsub("arg8", arg[8]);
}
/arg9 *: */ {
    if(arg[9] != "")
        gsub("arg9", arg[9]);
}

/^end / {
    print "private"
    print pragmas
    print "\n"
}
/^with Interfaces.C; use Interfaces.C;/ { next }
/^with System;/ { next }
/^with Sf.*.Config.*;/ { next }


/  -- SFML - Simple and Fast Multimedia Library/ { next }
/  -- Copyright \(C\) 2007-20[0-9][0-9] Laurent Gomila \(laurent@sfml-dev.org\)/ { next }
/  -- This software is provided 'as-is', without any express or implied warranty./ { next }
/  -- In no event will the authors be held liable for any damages arising from the use of this software./ { next }
/  -- Permission is granted to anyone to use this software for any purpose,/ { next }
/  -- including commercial applications, and to alter it and redistribute it freely,/ { next }
/  -- subject to the following restrictions:/ { next }
/  -- 1. The origin of this software must not be misrepresented;/ { next }
/  --    you must not claim that you wrote the original software./ { next }
/  --    If you use this software in a product, an acknowledgment/ { next }
/  --    in the product documentation would be appreciated but is not required./ { next }
/  -- 2. Altered source versions must be plainly marked as such,/ { next }
/  --    and must not be misrepresented as being the original software./ { next }
/  -- 3. This notice may not be removed or altered from any source distribution./ { next }

{

    gsub("pragma Ada_2005;", "--//////////////////////////////////////////////////////////\n-- SFML - Simple and Fast Multimedia Library\n-- Copyright (C) 2007-2018 Laurent Gomila (laurent@sfml-dev.org)\n-- This software is provided 'as-is', without any express or implied warranty.\n-- In no event will the authors be held liable for any damages arising from the use of this software.\n-- Permission is granted to anyone to use this software for any purpose,\n-- including commercial applications, and to alter it and redistribute it freely,\n-- subject to the following restrictions:\n-- 1. The origin of this software must not be misrepresented;\n--    you must not claim that you wrote the original software.\n--    If you use this software in a product, an acknowledgment\n--    in the product documentation would be appreciated but is not required.\n-- 2. Altered source versions must be plainly marked as such,\n--    and must not be misrepresented as being the original software.\n-- 3. This notice may not be removed or altered from any source distribution.\n--//////////////////////////////////////////////////////////\n")



    gsub("pragma Style_Checks \\(Off\\);", "--//////////////////////////////////////////////////////////");

    gsub("procedure sf[a-zA-Z0-9]*_", "procedure ")
    gsub("function sf[a-zA-Z0-9]*_", "function ")
    gsub(" *-- /usr/include/SFML/.*", "")
    gsub("^limited with ", "with ")
    gsub("with Interfaces.C.Strings;", "")
    gsub(" size_t", " sfSize_t")
    gsub(" unsigned_short", " sfUint16")
    gsub(" unsigned", " sfUint32")
    gsub("Interfaces\.C\.Strings\.chars_ptr", "String")
    gsub("Sf\.Config\.", "")


    print

}
