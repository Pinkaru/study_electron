"use strict";

var _electron = require("electron");

var _createWindows = require("./createWindows");

_electron.app.allowRendererProcessReuse = true;
_electron.app.on("ready", function () {
    (0, _createWindows.createWindow)();
});

_electron.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        _electron.app.quit();
    }
});

_electron.app.on("activate", function (_e, hasVisibleWindows) {
    if (!hasVisibleWindows) {
        (0, _createWindows.createWindow)();
    }
});