---
title: "QT6 C++中的Qlabel与布局缩放问题"
date: 2024-02-28
categories: 
  - "others"
---

当采用Qlabel->setText()方法后，程序界面窗口可以跟随文字的增加而自动扩大。但是当再次setText()方法减少文字时，程序窗口不会跟随文字缩小。

解决方案：在mainwindow中调用this->adjustSize()。但是直接调用不会有效果，必须在调用之前强制处理所有挂起的事件调用才会生效。完整代码如下：

```
ui->label->setText("sm");
QApplication::processEvents(); // 处理所有挂起的事件
this->adjustSize();
```
