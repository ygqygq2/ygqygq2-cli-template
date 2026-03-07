import { contextBridge, ipcRenderer } from "electron";

const api = {
  /**
   * Expose functions to the renderer process so they can interact with the
   * main (electron) side without security problems.
   */
  sendMessage: (message: string) => {
    ipcRenderer.send("message", message);
  },
  /** AppBar controls */
  Minimize: () => {
    ipcRenderer.send("minimize");
  },
  Maximize: () => {
    ipcRenderer.send("maximize");
  },
  Close: () => {
    ipcRenderer.send("close");
  },
  /** Listen to events from main process */
  on: (channel: string, callback: (data: unknown) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
  off: (channel: string, callback: (...args: unknown[]) => void) => {
    ipcRenderer.off(channel, callback);
  },
};

contextBridge.exposeInMainWorld("Main", api);
