#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
# npm run build
pnpm docs:build

# 进入生成的文件夹
cd src/.vuepress/dist

# 如果是发布到自定义域名
#  echo 'doc.frontdoc.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:305810827/myDocs.git master:gh-pages

# 将下面这行替换成自己的仓库地址
# git push -f git@github.com:wuxiaobai137/wuxiaobai137.github.io.git master:gh-pages   
git push -f https://github.com/wuxiaobai137/wuxiaobai137.github.io.git master:gh-pages 


cd -
