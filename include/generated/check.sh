#!/bin/bash
# Author: Manuel Gomez
# Description: Checks completeness and correctness of the imported interface.
# Platform: Ubuntu Linux 18.04 LTS

set -o nounset

awk '/with Import, Convention => C, External_Name =>/ {print $8}
/pragma  *Import.*sf[A-Z].*/ {print $5}
/sf.* : constant sfColor/ {print $1}' ../*.ad[sb]  | sed 's/.*"\(.*\)".*/\1/' | \
    sort -u > imports.txt

nm -D /usr/lib/x86_64-linux-gnu/libcsfml-*.so | grep -wo 'sf.*' | \
    sort -u > exports.txt

diff -U 0 exports.txt imports.txt
