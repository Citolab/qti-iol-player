/** @type {import('vite').UserConfig} */
import { defineConfig } from "vite";

const fullReloadAlways = {
  name: "full-reload-always",
  handleHotUpdate({ server }) {
    server.ws.send({ type: "full-reload" });
    return [];
  },
};

export default defineConfig({
  plugins: [fullReloadAlways],
  base: process.env.NODE_ENV === 'production' ? 'https://citolab.github.io/qti-iol-player/' : './',
  server: {
    watch: {
      // Allow watching files in `node_modules`
      ignored: [
        '!**/node_modules/@citolab/qti-components/**',
        '!**/node_modules/@citolab/qti-extended/**']
    },
  },
  optimizeDeps: {
    noDiscovery: true,
  },
});
