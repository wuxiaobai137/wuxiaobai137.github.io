---
layout: post
title: Java八股文之OOP
categories: [Java, 八股文]
description: Java八股文之OOP
keywords: 八股文
mermaid: false
sequence: false
flow: false
mathjax: false
mindmap: false
mindmap2: false
---

# 1、什么是面向过程

面向过程是一种自上而下的编程模式，它将问题拆分为一个个步骤，每个步骤用函数实现，依次调用即可

# 2、什么是面向对象

面向对象是一种将事务高度抽象化的编程模式，它也是将问题分解为一个个步骤，它会对每个步骤进行相应的抽象，形成一个个对象，通过不同对象之间的调用，组合解决问题

# 3、面向对象与面向过程的区别

面向过程：占用资源低，执行速度相对快
面向对象：占用资源高，执行速度相对慢，但是面向对象可以使工程更加模块化，实现更低的耦合和更高的内聚

# 4、面向对象的三大基本特征

封装、继承、多态

# 5、你对封装是怎么理解的

就是将客观事物封装成抽象的类，可以只让可信的类或者对象进行访问，对不可信的隐藏。

# 6、你再说说继承

继承是指一个类可以继承另一个类的所有功能，并在无需重新编写原来类的情况下对其进行扩展，这种派生方式体现了传递性，除了继承，还有一种体现传递性的方式叫做实现。

两者的区别：
-  继承：使用父类的所有属性和方法，无需对其额外编码
- 实现：只能使用接口定义的全局变量和方法的名称，并且实现类必须提供方法的实现

# 7、什么是多态

所谓多态就是指一个类实例的相同方法在不同情形有不同的表现形式，使具有不同内部结构的对象可以共享相同的外部接口。

# 8、如何实现多态

- 有类继承或者接口实现
- 子类要重写父类的方法
- 父类的引用指向子类的对象

# 9、什么是 B/S 架构？什么是 C/S 架构

1. B/S(Browser/Server)，浏览器/服务器程序
2. C/S(Client/Server)，客户端/服务端，桌面应用程序

# 10、JDK、JRE、JVM 有什么区别？

JDK：「Java Development Kit」
- Java 开发工具包，提供了 Java 的开发环境和运行环境，包含编译 Java 源文件的编译器 Javac，还有调试和分析的工具。

JRE：「Java Runtime Environment」
- Java 运行环境，包含 Java 虚拟机和一些基础类库

JVM：「Java Virtual Machine」
- Java 虚拟机，提供了执行字节码文件的能力

# 11、Java 的基本数据类型以及包装类有哪些？

数值型
- 整型：byte、short、int、long
- 浮点型：float、double
字符型
- char
布尔型
- boolean

包装类
- Byte、Short、Integer、Long、Float、Double、Character、Boolean

# 12、Java 常见的数据结构有哪些？

1. 数组「Array」
2. 栈「Stack」
3. 链表「Linked List」
4. 图「Graph」
5. 哈希表「Hash」
6. 队列「Queue」
7. 树「Tree」
8. 堆「Heap」

# 13、== 和 equals 的区别

==
- 比较基本数据类型，比较的是值
- 比较引用类型，比较的是引用在内存中的地址

equals
- 是java.lang.Object的方法，这个方法返回的是 == 的判断，只不过有的类把这个方法重写了，所以才会比较内容是否相等，比如：String

# 14、类与对象的关系？

类是对象的抽象，对象是类的具体，类是对象的模板，对象是类的实例