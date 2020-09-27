###############
# Description #
###############

ASFML is an Ada binding to the SFML-2.4 library. It uses Ada types
and portable defined types which eliminates the inclusion of Ada interface
libraries.

The library has been tested with the following compilers: GNAT FSF 7.5.0 under ubuntu 18.04.
It is writen in standard Ada95 without the use of any specific GNAT extensions.

#########
# State #
#########

ASFML is work in progress. It has just been ported from CSFML version 1.6 to CSFML version 2.4. The API is not stable, expect changes. It is currently compilable in Ada 95, but this might change in the future.

##################
# How to build   #
##################

Open a terminal and run this command:
gprbuild asfml.gpr

##################
# How to use     #
##################

To compile your program you need "with" the asfml.gpr projects. Then you can build using gprbuild. See examples in the tests directory

Use asfml_opengl.gpr if you are using OpenGL.
