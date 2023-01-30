import { VitePluginFonts } from "vite-plugin-fonts";

export default {
  base: "/int3/",
  plugins: [
    VitePluginFonts({
      google: {
        families: ["IBM Plex Sans"],
      },
    }),
  ],
};
