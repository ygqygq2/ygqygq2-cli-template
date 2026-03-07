/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.mjs
     * │
     * ```
     */
    APP_ROOT: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

// Used in Renderer process, exposed via preload.ts
interface Window {
  Main: {
    sendMessage: (message: string) => void;
    Minimize: () => void;
    Maximize: () => void;
    Close: () => void;
    on: (channel: string, callback: (data: unknown) => void) => void;
    off: (channel: string, callback: (...args: unknown[]) => void) => void;
  };
}
