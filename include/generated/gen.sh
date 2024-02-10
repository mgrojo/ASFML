#!/bin/bash
# Author: Manuel Gomez
# Description: Helper for generating most of the binding.
#              Manual adjustments must be done afterwards.
# Platform: Ubuntu Linux 18.04 LTS
#           Ubuntu Linux 20.01 LTS (install gnat-7 for the generation)
# Dependencies: CSFML development packages
# Usage: pass headers to generate from, like: ./gen.sh /usr/include/SFML/*/*.h

set -o nounset
set -o errexit

function PackageTofile
{
     tr '[:upper:]' '[:lower:]' | sed 's/\./-/g; s/$/.ads/'
}

CSFML_PREFIX=$1

for file in ${CSFML_PREFIX}/include/SFML/*/*.h
do
    PARENT_DIRNAME=$(dirname $(dirname $file))
    GRANDPARENT_DIRNAME=$(dirname $PARENT_DIRNAME)
    PARENT=$(dirname $file | sed "s%${PARENT_DIRNAME}%Sf%g; s%/%.%g;")
    JUST_PARENT=$(basename $(dirname $file))
    PACKAGE=$(echo $file | sed "s%${GRANDPARENT_DIRNAME}/%%g; s%[/\.]%_%g;")
    FILE=$(echo $PARENT-$PACKAGE | PackageTofile)

    NEW_PACKAGE=$(basename $file .h)
    NEW_FILE=$(echo $PARENT.$NEW_PACKAGE | PackageTofile)

    gnatgcc -c -I${CSFML_PREFIX}/include -fdump-ada-spec-slim -fada-spec-parent=$PARENT -C $file

    awk -f postprocess.awk $FILE > $NEW_FILE
    rm $FILE
    sed -i "s/${PARENT}\.SFML_\([A-Za-z][A-Za-z0-9]*\)_h/Sf.\1/g;
        s/${PARENT}\.SFML_\([A-Za-z][A-Za-z0-9]*\)_\([A-Za-z][A-Za-z0-9]*\)_h/Sf.\1.\2/g;
        s/SFML_${JUST_PARENT}_\([A-Za-z][A-Za-z0-9_]*\)_h/\1/g;
        s/data : System\.Address/data : Standard.System.Address/g;
        s/\([A-Za-z]\)\([A-Za-z0-9]*\) : System\.Address/\1\2 : sf\u\1\2_Ptr/g;
        s/return System\.Address/return sf${NEW_PACKAGE}_Ptr/g;
        s%-- ${CSFML_PREFIX}/%-- %g;
        s/Sf\.Config\.//g;
        s/\\\\/@/g  " $NEW_FILE

    emacs -batch $NEW_FILE \
          --eval '(load "~/.emacs")' \
          -f mark-whole-buffer \
          -f indent-for-tab-command \
          -f delete-trailing-whitespace \
          -f save-buffer \
          -f save-buffers-kill-emacs || \
        echo "$0: warning: $FILE could not be formatted by Emacs" >&2
    echo $NEW_FILE

done
