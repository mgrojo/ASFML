###############
# Description #
###############

ASFML-1.6 is a Ada95 binding to the SFML-1.6 library. It uses ada types
and portable defined types which eliminates the inclusion of Ada interface
libraries.

The library has been tested with the following compilers: MinGW 4.6.2 and GNAT GPL 2012.
It is writen in standard Ada95 without the use of any specific GNAT extensions.

##################
# How to build   #
##################

Open a terminal and go to "include" in your ASFML-1.6 directory
gnatmake *.adb
gnatmake *.ads

NOTE: This step is not required but prevents the recompilation of the library every
time you use it.

##################
# How to use     #
##################

To compile your program you need to use:
gnatmake <filename>.adb -I<ASFML-1.6/include> -largs -L<ASFML-1.6/lib> -l<csfml-libs> -l<sfml-libs> -lstdc++