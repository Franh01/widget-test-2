import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "jsx",
      enforce: "pre",
      transform(code, id) {
        if (id.endsWith(".js") && code.includes("jsx")) {
          return {
            code: code.replace(
              /(import.*from.*['"])(.*\.(jsx|js))(['"])/g,
              "$1$2$3"
            ),
            map: null,
          };
        }
      },
    },
  ],
  esbuild: {
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
});
