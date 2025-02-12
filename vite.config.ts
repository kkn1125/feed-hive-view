import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import pkg from "./package.json";

dotenv.config({
  path: path.join(path.resolve(), ".env"),
});

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the
  // `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  const MODE = process.env.NODE_ENV || "production";
  const BRAND_NAME = process.env.BRAND_NAME;
  const HOST = process.env.HOST || "0.0.0.0";
  const PORT = +(process.env.PORT || 3000);
  const EMAIL = pkg.author.email;
  const NAME = pkg.author.name;
  const URL = pkg.author.url;

  return {
    // vite config
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
      "process.env": {
        MODE,
        BRAND_NAME,
        AUTHOR: {
          EMAIL,
          NAME,
          URL,
        },
      },
    },
    server: {
      host: HOST,
      port: PORT,
    },
    plugins: [react(), viteTsconfigPaths()],
  };
});
