import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "巫小白",
  description: "巫小白的自留地",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
