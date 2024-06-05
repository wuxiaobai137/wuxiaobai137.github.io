export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"博客主页","i":"home"} }],
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/intro.html.js"), meta: {"v":"/assets/images/cover3.jpg","e":"\n<ul>\n<li>java小学生</li>\n<li>游戏狂热爱好者</li>\n<li>篮球三板斧</li>\n</ul>\n","r":{"minutes":0.08,"words":24},"t":"介绍页","i":"circle-info","y":"a"} }],
  ["/journal/240604.html", { loader: () => import(/* webpackChunkName: "journal_240604.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/journal/240604.html.js"), meta: {"e":"\n<p>hello</p>\n","r":{"minutes":0.01,"words":2},"t":"0604","y":"a"} }],
  ["/posts/java/java-240604.html", { loader: () => import(/* webpackChunkName: "posts_java_java-240604.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/posts/java/java-240604.html.js"), meta: {"e":"<p>ceshi</p>\n","r":{"minutes":0,"words":1},"t":"","y":"a"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/journal/", { loader: () => import(/* webpackChunkName: "journal_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/journal/index.html.js"), meta: {"t":"Journal"} }],
  ["/posts/java/", { loader: () => import(/* webpackChunkName: "posts_java_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/posts/java/index.html.js"), meta: {"t":"Java"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/posts/index.html.js"), meta: {"t":"Posts"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"t":"分类","I":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"t":"标签","I":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"t":"文章","I":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"t":"星标","I":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"/Users/wucheng/code/openspace/wuxiaobai137.github.io/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"t":"时间轴","I":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
