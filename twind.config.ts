import { Options } from "$fresh/plugins/twind.ts";

export default {
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
  },
  selfURL: import.meta.url,
} as Options;
