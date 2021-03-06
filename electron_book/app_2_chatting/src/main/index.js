import {app} from 'electron';
import { createWindow } from "./createWindows";

app.allowRendererProcessReuse = true;
app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
    {
        app.quit();
    }
});

app.on("activate", (_e, hasVisibleWindows) => {
    if(!hasVisibleWindows) {
        createWindow();
    }
});