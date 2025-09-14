---
title: "QProcess的waitForFinished"
date: 2021-02-27
categories: 
  - "python"
---

经过试验（环境为PY3.8-3.9，pyside6），QProcess如果不引用waitForFinished就不会发射finished()信号，当然，文档里也是这么写的，我没细看……还有如果使用这个就不能放在主GUI的线程里，因为所有的wait函数都会锁死GUI。

应该说qt for python的文档吧，写的没什么错误，但是实在是不怎么友好，虽然微言大义，但是对咱这种代码就是一把梭复制粘贴从不看文档的人来说，还是应该有更多的examples才好，而且最可耻的是，明明是qt for python的文档，硬是很多c艹的示例代码。
