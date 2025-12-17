import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {
      "/api/waitlist": {
        target:
          "https://wfyqbfeontndczdhegnx.supabase.co/functions/v1/waitlist-processor",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/waitlist/, ""),
      },
    },
  },
});
