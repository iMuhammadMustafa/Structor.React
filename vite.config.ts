import path from "path";
import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react-swc";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import paths from "./tsconfig.paths.json";

export default defineConfig(({ command, mode }) => {
  const openBrowser = mode === "development";
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    resolve: {
      alias: resolveTSConfigPathAlias(),
    },
    server: {
      host: true,
      port: Number.parseInt(env.PORT) || 3001,
      open: openBrowser,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./vitest.setup.ts",
      css: false,
    },
  };
});

function resolveTSConfigPathAlias() {
  const pathsAliasesArray = paths.compilerOptions.paths;
  const aliasesKeys = Object.keys(pathsAliasesArray).map(x => x.slice(0, -2));

  const aliases: any = {};

  aliasesKeys.forEach(key => {
    const pathString = pathsAliasesArray[key + "/*"][0].slice(0, -1);
    aliases[key] = path.join(path.resolve(__dirname, pathString));
  });
  return aliases;
}
