import { Buffer } from "buffer";

(window as any).global = (window as any).global ?? window;
(window as any).Buffer = (window as any).Buffer ?? Buffer;
(window as any).process = (window as any).process ?? { env: {} }; // Minimal process polyfill

export {};
