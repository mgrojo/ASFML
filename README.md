[![ASFML logo](images/ASFML_Logo.png)](https://www.sfml-dev.org)
![Ada (GNAT)](https://github.com/mgrojo/ASFML/workflows/Ada%20(GNAT)/badge.svg)
[![Alire](https://img.shields.io/endpoint?url=https://alire.ada.dev/badges/asfml.json)](https://alire.ada.dev/crates/asfml.html)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/ada-lang/Lobby)

# ASFML — Ada's Simple and Fast Multimedia Library

ASFML is an Ada binding to the [SFML](https://www.sfml-dev.org/)
library. It is a semi-thin binding. It uses Ada types and portable defined types which
eliminates the inclusion of Ada interface libraries, but most of the functions are directly imported.

The library has been tested with the following environments:
- FSF GNAT 9.3.0 under Ubuntu 20.04.2 LTS with bundled CSFML 2.5
- GNAT Community 2020 under Windows 10 with CSFML 2.5

It is writen in standard Ada without the use of any specific GNAT extensions, but some indirect dependency could exist through the representation of some types.

## State

The binding is considered complete. Three versions of [CSFML](https://github.com/SFML/CSFML)
 have been bound: 1.6, 2.4 and 2.5 (see releases). The API is considered stable, changes would only be made to fix errors or to upgrade to a new SFML version.

## Documentation

Generated API documentation can be consulted [online](https://mgrojo.github.io/ASFML/doc/).

## How to build with Alire

This library is available in [Alire](https://alire.ada.dev/) so building is as easy as installing Alire and then executing:
`alr build asfml`

## How to build without Alire

Install CSFML following instructions of your platform. For example, under Ubuntu or Debian:
`sudo apt-get install gnat gprbuild libcsfml-dev libglu1-mesa-dev`

Open a terminal and run this command:
`gprbuild asfml.gpr`

## How to use

To compile your program you need to "with" the `asfml.gpr` project. Then
you can build using gprbuild.

Use `asfml_opengl.gpr` if you are using OpenGL.

Under Windows, you might need to update the path to your libraries in the
provided GPR files.

Using alire you can add this library to your project as simply as:
`alr with asfml`

## Examples
You can see simple test examples in the `tests` directory. For some demo games,
you can review the project [16-Games](https://github.com/mgrojo/16-Games).

Links to projects using ASFML can be found in the
[Wiki](https://github.com/mgrojo/ASFML/wiki#list-of-projects-using-asfml).
