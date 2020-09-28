[![SFML logo](https://www.sfml-dev.org/images/logo.png)](https://www.sfml-dev.org)

# ASFML — Ada's Simple and Fast Multimedia Library

ASFML is an Ada binding to the [SFML](https://www.sfml-dev.org/)
library. It uses Ada types and portable defined types which
eliminates the inclusion of Ada interface libraries.

The library has been tested with the following environments:
- GNAT FSF 7.5.0 under ubuntu 18.04 with bundled CSFML 2.4
- GNAT Community 2020 under Windows 10 with CSFML 2.5

It is writen in standard Ada95 without the use of any specific GNAT extensions.

## State

ASFML is work in progress. It has just been ported from CSFML version
1.6 to CSFML version 2.4. The API is not stable, expect changes. It is
currently compilable in Ada 95, but this might change in the future.

## How to build

Install CSFML

Open a terminal and run this command:
`gprbuild asfml.gpr`

## How to use

To compile your program you need "with" the asfml.gpr projects. Then
you can build using gprbuild. See examples in the tests directory

Use `asfml_opengl.gpr` if you are using OpenGL.

Under Windows, you might need to update the path to your libraries in the
provided GPR files.
