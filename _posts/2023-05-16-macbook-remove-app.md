---
layout: post
title: MacBook删除顽固App图标
categories: [MacBook, 工具]
description: 某些情况下（感觉是Mac的bug），删除MacBook上应用之后，启动台上依然留存着App的图标，牛皮癣一样
keywords: MacBook
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

只要是代码写的东西，都会存在bug，比如Mac这个：即使App已经被删除，但图标依然存在

![顽固App图标](/images/blog/20230516/wanguapptubiao.jpg)

# 解决方案
## step 1

在终端中输入下面命令，等待一段时间后，会输出存在问题的app信息（比较慢，需要等待一段时间）
```shell
find / -name com.apple.dock.launchpad 2>/dev/null
```

结果如下图
![查找结果](/images/blog/20230516/finderrorapp.jpg)

## step 2

继续在终端输入命令，命令的内容是
> cd + 空格 + 刚才查找出来的路径 + /db

```shell
cd /System/Volumes/Data/private/var/folders/q_/ftqm8tm17rdc14pghr0_hj300000gn/0/com.apple.dock.launchpad/db
```

结果如下
![](/images/blog/20230516/cderrordb.jpg)

## step 3

进入到db目录后，最后需要执行下删除操作，命令的内容是
```shell
sudo sqlite3 db "delete from apps where title='程序名称';"&&killall Dock
```

执行完成之后，会将启动台上顽固App图标清除掉

> 最后没有截图，因为忘了，哈哈哈