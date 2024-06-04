import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  // "/demo/",
  "/journal/",
  {
    text: "程序人生",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        prefix: "java/",
        children: [
          { text: "java如何启动", icon: "pen-to-square", link: "java-240604" },
        ],
      },
    ],
  },
]);
