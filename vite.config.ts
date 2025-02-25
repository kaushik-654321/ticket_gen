import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      "zmndkg-5173.csb.app",
      "zmndkg-5174.csb.app",
      // Add the host here
    ],
  },
  plugins: [react()],
});
