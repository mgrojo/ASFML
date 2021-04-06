#!/bin/bash
# Author: Manuel Gomez
# Description: Helper for generating most of the binding.
#              Manual adjustments must be done afterwards.
# Platform: Ubuntu Linux 18.04 LTS
#           Ubuntu Linux 20.01 LTS (install gnat-7 for the generation)
# Dependencies: CSFML development packages
# Usage: pass headers to generate from, like: ./gen.sh /usr/include/SFML/*/*.h

set -o nounset

function PackageTofile
{
     tr '[:upper:]' '[:lower:]' | sed 's/\./-/g; s/$/.ads/'
}

for file in $@
do
    
    PARENT=$(dirname $file | sed 's%/usr/include/SFML%Sf%g; s%/%.%g;')
    JUST_PARENT=$(basename $(dirname $file))
    PACKAGE=$(echo $file | sed 's%/usr/include/%%g; s%[/\.]%_%g;')
    FILE=$(echo $PARENT-$PACKAGE | PackageTofile)

    NEW_PACKAGE=$(basename $file .h)
    NEW_FILE=$(echo $PARENT.$NEW_PACKAGE | PackageTofile)

    gnatgcc -c -fdump-ada-spec-slim -fada-spec-parent=$PARENT -C $file

    awk -f postprocess.awk $FILE > $NEW_FILE
    rm $FILE
    sed -i "s/${PARENT}\.SFML_\([A-Za-z][A-Za-z0-9]*\)_h/Sf.\1/g;
        s/${PARENT}\.SFML_\([A-Za-z][A-Za-z0-9]*\)_\([A-Za-z][A-Za-z0-9]*\)_h/Sf.\1.\2/g;
        s/SFML_${JUST_PARENT}_\([A-Za-z][A-Za-z0-9_]*\)_h/\1/g;
        s/data : System\.Address/data : Standard.System.Address/g;
        s/\([A-Za-z]\)\([A-Za-z0-9]*\) : System\.Address/\1\2 : sf\u\1\2_Ptr/g;
        s/return System\.Address/return sf${NEW_PACKAGE}_Ptr/g;
        s/Sf\.Config\.//g;
        s/\\\\/@/g  " $NEW_FILE

    emacs -batch $NEW_FILE -f mark-whole-buffer -f ada-indent-region -f delete-trailing-whitespace -f save-buffer -f save-buffers-kill-emacs
    echo $NEW_FILE

done
