---
layout: post
title: MacBook使用终端（alias命令）打开App的方法
categories: [MacBook]
description: 虽然Mac已经有了根据command+空格的方式来快捷的打开App，但alias可以让你自定义检索关键词
keywords: MacBook
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

# 前言

虽然Mac已经有了根据command+空格的方式来快捷的打开App，但alias可以让你自定义检索关键词。

比如当你的Mac里有多个App时，使用alias方式可以一步到位的打开想要的App。

![](/images/blog/20230519/mac-1.jpg)

# 操作方法

## step 1

打开 .zshrc 文件 

```shell
vi ~/.zshrc
```

在文件中添加命令

```shell
alias idea='open -a "IntelliJ IDEA"'
alias idea2='open -a "IntelliJ IDEA 2"'
```

![](/images/blog/20230519/mac-2.jpg)

编辑完成之后，要将.zshrc文件生效

```shell
source ~/.zshrc
```

## step 2

做完上述操作之后，在终端中输入idea即可打开App

```shell
idea
```

# 疑难杂症

当在终端中执行命令时，可能会提示“Operation not permitted”，意思是终端没有执行命令的权限。

这是我们需要做的是，打开
1. 系统设置
2. 隐私与安全性
3. 完全磁盘访问权限
4. 找到“终端”，开启访问权限即可

![](/images/blog/20230519/mac-3.jpg)