# echoForwarder
A Chrome extension that forwards JSON packets from Amazon Echo to one ore more development servers

1. Change server urls in background.js and filter url in devtools.js
2. In Chrome, open chrome://extensions/ page.
2. Check developers mode.
3. Load unpacked extension and browse this directory.
4. Open new tab and open developers tool(Ctrl+F12), then open target page(echo.amezon.com).
 Note extension will be able to parse request only if developers tool are open.
5. Monitor on requested server. You should be getting requested data.
6. for any changes in path, reload the plugin chrome://extensions/ page, and then repeat all steps.
