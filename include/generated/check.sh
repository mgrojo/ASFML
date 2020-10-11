#!/bin/bash
# Author: Manuel Gomez
# Description: Checks completeness and correctness of the imported interface.
# Platform: Ubuntu Linux 18.04 LTS

set -o nounset

grep -i "pragma  *Import.*sf[A-Z].*" ../*.ad[sb] | sed 's/.*"\(.*\)".*/\1/' | \
    sort -u > imports.txt

nm -D /usr/lib/x86_64-linux-gnu/libcsfml-*.so | grep -wo 'sf.*' | \
    sort -u > exports.txt

diff -U 0 exports.txt imports.txt
