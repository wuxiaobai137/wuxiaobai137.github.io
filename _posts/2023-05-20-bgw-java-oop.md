---
layout: post
title: Java八股文 之 OOP
categories: [八股文]
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

# 15、instanceof 关键字

用来测试一个对象是否为一个类的实例，这个实例可以为一个对象或者一个接口

编译器会实时检查对象能否转换为类的实例
- 能确定实例类型的话，如果不能转换则直接编译不通过
- 不能确定实例类型的话，具体看运行时 

注意：如果判断基本数据类型是是否属于对应包装类的话，比如：1 instanceof Integer，结果肯定是编译不通过

# 16、什么是隐式转换、显式转换

- 隐式转换就是自动类型转换，就是把一个小类型的数据赋值给大类型的数据，装箱；
- 显式转换就是强制类型转换，把一个大类型的数据强制赋值给小类型的数据，拆箱；

# 17、char 类型能不能转成 int 类型？能不能转成 String 类型，能不能转成 double 类型

- char 在 java 中也是比较特殊的类型，它的 int 值从 1 开始，一共有 2 的 16 次方个数据；
- char<int<long<float<double
- char 类型可以隐式转成 int 、double 类型，但是不能隐式转换成 String；
- char 类型转成 byte、short 类型的时候，需要强转。

# 18、什么是装箱、拆箱

1. 装箱就是将基本数据类型转换为包装类型（int-->Integer）
- 调用：Integer.valueOf(int) 方法
- jdk 1.5 之前，必须Integer integer = new Integer(5);
- jdk 1.5 之后，实现了自动装箱，直接这样就可以，Integer integer = 5;
2. 拆箱就是将包装类型转换为基本数据类型（Integer--> int）
- 调用：Integer.intValue() 方法
- jdk 1.5 之后，实现了自动拆箱，int i = integer;

# 19、哪些地方会自动拆装箱

1. 将基本数据类型放入集合类
2. 包装类型与基本类型比较大小
3. 包装类型的运算
4. 三目运算符的使用
5. 函数参数与返回值

# 20 在 java 中的作用，有哪些用法

1. 被 final 修饰的类不可以被继承
2. 被 final 修饰的方法不可以被重写，JVM 会尝试将其内联，以提高运行效率
3. 被 final 修饰的变量不可以被改变，JVM 在编译阶段会存入常量池中，如果修饰引用，表示引用不可变，但引用指向的内容可变

# 21、一个 java 类中包含哪些内容？

属性、方法、内部类、构造方法、代码块

# 22、为什么不能用浮点型表示金额？

由于计算机中保存的小数其实是十进制小数的近似值，并不是准确值，所以最好使用 BigDecimal 或者 Long（单位为分）来表示金额

# 23、Java 中有哪些访问修饰符，以及它们的区别

- public：表明该成员变量或者方法是对所有类、对象都是可见的，所有类或者对象都可以直接访问
- private：表明该成员变量或者方法是私有的，只有类自身对其具有访问权限，除此之外其他类或者对象都没有访问权限，包括子类
- protected：表明该成员变量或者方法对类自身、一个包中的其他类、子类是可见的，其他包下的类不可访问
- default：类的成员不写访问修饰符时默认为 default，表明该成员变量或者方法只对类自身、一个包中的其他类是可见的，子类、其他包下的类不可访问

# 24、float f=3.4; 是否正确？
不正确，3.4 是双精度数，将双精度型（double）赋值给浮点型（float）属于向下转型 会造成精度损失，因此需要强制类型转换float f = (float) 3.4;或者写成float f = 3.4F;。

# 25、什么是单精度、双精度

- 单精度浮点数在计算机存储器中占用 4 个字节（32 bits），利用「浮点（浮动小数点）」的方法，可以表示一个范围很大的数值。
- 双精度浮点数（double）则使用 8 个字节（64 bits） 来存储一个浮点数。

# 26、String、StringBuffer、StringBuilder 的区别

String
- String是只读字符串，它并不是基本数据类型，而是一个对象。从底层源码来看是一个final类型的字符数组，所引用的字符串不能被改变，一经定义，无法再增删改。
- 每次对String的操作都会生成新的String对象
- 每次 + 操作，会隐式在堆上new一个跟原字符串相同的StringBuilder对象，再调用append方法拼接 + 后面的字符。

StringBuffer、StringBuilder
- StringBuffer与StringBuilder都继承了AbstractStringBulder类，而AbtractStringBuilder又实现了CharSequence接口，两个类都是用来进行字符串操作的。
- 在做字符串拼接修改删除替换时，效率比 String 更高。
- StringBuffer 是线程安全的，Stringbuilder 是非线程安全的。
- 因为StringBuffer的方法大多都加了synchronized关键字，所以Stringbuilder比Stringbuffer效率更高
