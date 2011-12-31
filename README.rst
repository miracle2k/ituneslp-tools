=====================================================
Tools to work with iTunes LP / iTunes Extras projects
=====================================================


Contents:

- ./chrome: Extension to play iTunes LP in Chrome.
- ./standalone: Try to wrap WebKit in a GTK app.


Notes on other browsers
=======================

- Safari should work just as well.
- Firefox doesn't support H.264.
- Opera might support H.264 in some cases. It might also allow providing a window.iTunes object without actually having to insert a script file into the DOM (http://www.opera.com/docs/apis/extensions/injectedscriptsguide/#i7)


Other ideas
===========

- Standalone player application.
- Add support to Totem, Banshee etc.
- Convert DVD menus to TuneKit. Since background video is not allowed by iTunes LP, this would be limited.


Other code
==========

https://github.com/Solitude/iTunes-Emulator does a similar thing and seems more advanced.
