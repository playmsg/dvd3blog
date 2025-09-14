---
title: "关于pyside6（pyside2）中文件拖放到控件的问题"
date: 2021-01-07
categories: 
  - "python"
---

网上能查到的方案一般是继承某个Qwidget，然后覆盖dragEnterEvent，dropEvent这两个方法。然而我发现dropEvent就是没有触发……后来经过研究，还要覆盖一下dragMoveEvent这个方法，那么其实就是需要覆盖（重载）三个方法拖放文件才生效。至于具体原因……我不大懂编程，怎么可能知道。

代码如下（原意是打算在QTableWidget里填充文件列表，那个很简单就没写完，只实现了拖放）：

```
from PySide6.QtWidgets import QTableWidget

class QTableWidget(QTableWidget):
    def __init__(self, parent=None):
        super(QTableWidget, self).__init__(parent)
        self.setAcceptDrops(True)

    def dragEnterEvent(self, event):

        if event.mimeData().hasUrls():
            event.accept()
        else:
            event.ignore()

    def dragMoveEvent(self, event):
        pass

    def dropEvent(self, event): 
        files = [str(u.toLocalFile()) for u in event.mimeData().urls()]
        for f in files:
            print(f)

```
