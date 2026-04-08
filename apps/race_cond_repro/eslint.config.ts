import cogsPluginEslintConfig from "@repo/eslint-config/cogsPlugin";
import viteEslintConfig from "@repo/eslint-config/vite";
import tseslint from "typescript-eslint";

export default tseslint.config([
  viteEslintConfig,
  cogsPluginEslintConfig,
]);
