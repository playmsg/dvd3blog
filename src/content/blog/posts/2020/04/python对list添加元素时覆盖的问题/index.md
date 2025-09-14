---
title: "python对list添加元素时覆盖的问题"
date: 2020-04-13
categories: 
  - "python"
---

首先引用这么个知识“在 Python 中，对象赋值实际上是对象的引用。当创建一个对象，然后把它赋给另一个变量的时候，Python 并没有拷贝这个对象，而只是拷贝了这个对象的引用，我们称之为浅拷贝。当 list 类型的对象进行 append 操作时，实际上追加的是该对象的引用。”妈的我觉得这种设计简直是反人类，而且强调这个点的文档还不多。要是早说python也要搞指针什么的大家也有个心理准备。然后还要引入copy库用里面的deepcopy方法，没有直接内置……越来越反人类。

最后语法类似这种：resTitleList.append(copy.deepcopy(resTitle))
