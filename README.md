[![ASFML logo](images/ASFML_Logo.png)](https://www.sfml-dev.org)
![Ada (GNAT)](https://github.com/mgrojo/ASFML/workflows/Ada%20(GNAT)/badge.svg)
[![Alire](https://img.shields.io/endpoint?url=https://alire.ada.dev/badges/asfml.json)](https://alire.ada.dev/crates/asfml.html)
[![Alire CI/CD](https://img.shields.io/endpoint?url=https://alire-crate-ci.ada.dev/badges/asfml.json)](https://alire-crate-ci.ada.dev/crates/asfml.html)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/ada-lang/Lobby)
[![Mentioned in Awesome Ada](https://awesome.re/mentioned-badge.svg)](https://github.com/ohenley/awesome-ada)

# ASFML — Ada's Simple and Fast Multimedia Library

ASFML is an Ada semi-thick binding to the [SFML](https://www.sfml-dev.org/)
library. It uses Ada types and portable defined types which eliminates the inclusion of Ada interface libraries, but most of the functions are directly imported.

It is written in standard Ada without the use of any specific GNAT extensions, but some indirect dependency could exist through the representation of some types.

## State

The binding is considered complete. Three versions of [CSFML](https://github.com/SFML/CSFML)
 have been bound: 1.6, 2.4 and 2.5 (see [Releases](https://github.com/mgrojo/ASFML/releases/)). The API is considered stable, changes would only be made to fix errors or to upgrade to a new SFML version.

The library has been tested with several GNAT versions and on Windows 10 and Ubuntu Linux 20.04 LTS and 22.04.

## API Documentation

Generated API documentation can be consulted [online](https://mgrojo.github.io/ASFML/doc/).

The Ada API follows the [CSFML](https://26.customprotocol.com/csfml/index.htm) interface, but
with some changes and additions to ease the use:
* Prefixes in C are converted to simple names inside hierarchical packages. For example, the
function `sfMusic_createFromFile` in `SFML/Audio/Music.h` is transformed into the `createFromFile`
function in the `Sf.Audio.Music` package.
* Basic data types from `SFML/Config.h` are defined in the `Sf` package.
* General types at `SFML/Module/Types.h` are moved to the package `Sf.Module`, where `Module`
is Audio, System, Graphics, Window and Network.
* Defaults are applied to parameters when useful and to approximate the C++ API.
* Functions with `char*` parameters are wrapped to do the conversion to standard Ada `String`
  parameters.
* Unicode is supported using `Wide_Wide_String` in Ada where the C API uses `sfUint32*`

## Compatibility with CSFML releases
The versioning scheme of ASFML follows the one of CSFML for the major
and minor numbers; while the patch number is, in principle,
independent. This means, for example, that 2.4.x releases are expected
to be compatible with all 2.4.x releases of CSFML. Note, however, that
some CSFML releases change the API to fix problems with the binding to
SFML and they release them as a patch. Consequently, there are cases,
like CSFML 2.5.2, which requires a specific patch level of ASFML, in this
case, ASFML 2.5.5. When this happens, the Alire dependencies reflect
the requirement.

Nevertheless, the usual problems that can be found when doing an
heterogeneous linking are only spotted when calling one of the
functions having changed between the releases. Otherwise, the
incompatibility will be latent.

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

Using Alire, you can add this library to your project as simply as:
`alr with asfml`

## Examples
You can see simple test examples in the [`tests`](./tests/) directory. For some demo games,
you can review the project [16-Games](https://github.com/mgrojo/16-Games).

Links to projects using ASFML can be found in the
[Wiki](https://github.com/mgrojo/ASFML/wiki#list-of-projects-using-asfml).
