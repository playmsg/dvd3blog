---
title: "关于databases库0.8和0.9的区别造成的错误"
date: 2024-03-21
categories: 
  - "python"
---

在0.8版本里，用await db.fetch\_all(query=query)返回的结果是一个list，list的内容是string，既常用的方法是用id,name in records的方式进行循环取id和name值。

但是在0.9版本里，返回的结果还是个list，list的内容变为databases.backends.common.records.Record对象。

这就十分操蛋了，导致我上线的代码报错，废了1个多小时才找到问题所在，然后改代码还不知道要多久，所有的查询都要改
