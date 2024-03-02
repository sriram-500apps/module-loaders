// https://github.com/nuxt/starter/tree/module
import { fileURLToPath } from "url";
import { defineNuxtModule, addComponentsDir, createResolver } from "@nuxt/kit";

interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "Loaders",
    configKey: "loaders",
  },
  setup(_options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    const { resolve } = createResolver(import.meta.url);

    addComponentsDir({
      path: resolve(runtimeDir, "components"),
      global: true,
      // @ts-ignore
      level: 999,
    });

    // @nuxtjs/tailwindcss support
    // @ts-ignore - Module might not exist
    nuxt.hook("tailwindcss:config", (tailwindConfig) => {
      const resourcePaths = (srcDir: string) => [
        `${srcDir}/components/**/*.{js,vue,ts}`,
      ];
      const contentPaths = resourcePaths(runtimeDir);
      // If condition to neglect ts warnings
      if (
        tailwindConfig &&
        tailwindConfig.content &&
        Array.isArray(tailwindConfig.content)
      )
        tailwindConfig.content.push(...contentPaths);
    });
  },
});
