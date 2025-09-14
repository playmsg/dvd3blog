---
title: "Pyside6 QTableview/QListwidget 点击按钮上下移动条目（item）"
date: 2021-01-24
categories: 
  - "python"
---

虽然用的是pyside6,不过其他pyqt什么的也都一样的。网上关于这个细则的范例韩真是比较少，有的也非常复杂难懂。就这么个东西折腾了大半天，因为资料实在是比较少，QT网站那个文档实在是不友好，我一直在select方向（往光标所在行的方向上去思考了）的方法上折腾，后来才看见这个setCurrentRow的方法……当然最早也没注意到takeItem这个方法。算是给自己留个学习笔记吧。

```
def dataup(self):
    currentRow = self.ui.listWidget.currentRow()
    currentItem = self.ui.listWidget.takeItem(currentRow)
    if currentRow >0 :
        newRow=currentRow-1
    else:
        newRow=currentRow

    self.ui.listWidget.insertItem(newRow, currentItem)
    #下面这个主要是为了让光标随着移动的item而移动，这样可以连续点按按钮
    self.ui.listWidget.setCurrentRow(newRow)
    

def datadown(self):
    currentRow = self.ui.listWidget.currentRow()
    currentItem = self.ui.listWidget.takeItem(currentRow)
    if currentRow < self.ui.listWidget.count():
        newRow=currentRow+1
    else:
        newRow=currentRow
    self.ui.listWidget.insertItem(newRow, currentItem)
    self.ui.listWidget.setCurrentRow(newRow)

```

不过我就想，这其实应该是很普通的功能吧（包括列表内拖动排序，默认的那个简直屎一样），QT Desinger貌似没有内置，实在是不可原谅。
