# Changelog


## SFML 3.0.0

These are the features and bugfixes in [SFML 3.0.0](https://github.com/SFML/SFML/blob/master/changelog.md#sfml-300) translated into Ada terms. The [pull-request numbers](https://github.com/SFML/SFML/pulls?q=is%3Apr+is%3Aclosed) from the SFML project are provided for reference.

### General

-   Removed OpenAL shared library requirement (#2749)
-   Changed many `(x, y)` APIs to instead use `Sf.System.Vector2` (#1902, #1942, #1948, #2055, #2972)
-   Removed deprecated APIs (#1881, #1886)
-   Improved error messages (#2043, #2636, #2689)
-   [Windows] Added support for UCRT MinGW (#3115)
-   [Windows] Added support for Windows ARM64 (#3111)

### System

**Features**

-   Removed multithreading primitives. Use standard Ada tasks (#1863)
-   Made `Sf.System.Clock` pausable (#2004)

**Bugfixes**

-   Fixed condition for trailing bytes count in UTF-8 decoder (#2435)

### Window

**Features**

-   Added `set{Min|Max}imumSize` procedures in `Sf.Window.WindowBase`, `Sf.Window.Window` and `Sf.Graphics.RenderWindow` (#2519)
-   Optimized WGL context creation performance on some systems (#2616)
-   Rewrote `Sf.Window.Event` API (#2766)
-   Added `Sf.Window.sfWindowState` for specifying fullscreen or floating windows (#2818)
-   Renamed `XButton1` and `XButton2` to `Extra1` and `Extra2` (#2838)
-   Added raw mouse input support (#3057)
-   Added `timeout` parameter to `waitEvent` (#3094)

**Bugfixes**

-   [Windows] Fixed OpenGL entry point loading on Windows (#2478)
-   Fixed `wglGetProcAddress` not providing OpenGL 1.1 functions when the context is provided by an Nvidia ICD (#2498)
-   [macOS] Fixed macOS window resizing bug (#2538)
-   [macOS] Fixed macOS window height bug (#2631)
-   Fixed `sf.Context.setActive` bug (#2816)
-   [Windows] Fixed F13-F24 and consumer key names not being returned on Windows (#2873)
-   [Windows] Changed `Sf.Context.getFunction` to return `null` when called on Windows without an active context (#2925)
-   [Linux] Fixed broken joystick axis mappings under Linux (#3167)
-   [macOS] Fixed how macOS fullscreen video modes are detected (#3151, #3348)
-   [macOS] Avoided unnecessary permission request prompts (#3232)
-   [Linux] Fixed DRM mode setting to use SFML window dimensions (#3310)

### Graphics

**Features**

-   Added support for stencil testing (#1453)
-   Added texture coordinate type to `Sf.Graphics.RenderStates` (#1807)
-   Reduced `Sf.Graphics.sfTransformable` object size (#2288)
-   Removed parameterless `Sf.Graphics.Text.create` function (#2486)
-   Removed parameterless `Sf.Graphics.Sprite.create` function (#2494)
-   Added `Sf.Graphics.*Shape.getGeometricCenter` functions (#2537)
-   Removed `Sf.Graphics.View.reset` in favor of assignment operations (#2942)
-   Implemented `Sf.Graphics.Rect` types as position and size vectors (#2972)

**Bugfixes**

-   Fixed EGL pixel format selection and OpenGL version parsing (#2438)
-   [Android] Fixed texture being upside down on Android when copying the texture of an `Sf.Graphics.RenderTexture` (#2719)
-   Fixed shader loading check for empty streams (#2869)
-   Added sanity checks for OpenGL extensions to make sure the required entry points are actually available (#3052)
-   Correctly drained OpenGL errors in [E]GLCheck (#3247)

### Audio

**Features**

-   Removed parameterless `Sf.Audio.Sound.create` function (#2640)
-   Replaced audio backend with miniaudio (#2749)
-   Added support for user defined sound effect implementations (#2973)
-   Added support for changing the audio playback device during runtime (#3029)
-   Renamed `getLoop()` to `isLooping()` and `setLoop()` to `setLooping()` (#3187)

**Bugfixes**

-   Fixed `Sf.Audio.SoundStream.play` bug (#2037)
-   Fixed poor `Sf.Audio.SoundStream.setPlayingOffset` precision (#3101)
-   Fixed a bug when reading Ogg files on big endian systems (#3340)

### Network

**Bugfixes**

-   Removed invalid internal state from `Sf.Network.IpAddress` (#2145)
-   Fixed sockets not closing before being moved into (#2758)
-   Fixed how `Sf.Network.IpAddress`'s internal representation is stored on big endian systems (#3339)
