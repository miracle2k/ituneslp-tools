/**
A content script can't provide the window.iTunes object directly, since
it runs in a separate isolated context.

This means we need to inject our script directly into the DOM.

Note that we could also run the code in this file from the background page
 using  "chrome.tabs.executeScript", where it not for this bug:
http://code.google.com/p/chromium/issues/detail?id=31947
However, the approach through a content script might actually be the better
solution anyway, being easier and simpler to write, and seemingly giving
us more control over when we run.

TODO: Try to detect pages using TuneKit, only insert our script in those.
**/

var script = document.createElement("script");
script.src = chrome.extension.getURL("itunes.js");
document.head.insertBefore(script, document.head.firstChild);
