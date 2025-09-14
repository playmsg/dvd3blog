---
title: "关于qtableview/qtablewidget的表头在windows10下没有下封闭横线的问题"
date: 2021-01-29
categories: 
  - "python"
---

```
QHeaderView::section {
   border: 1px outset #D8D8D8;
}
QTableCornerButton::section {
    border: 1px solid #fffff8;
}
```

上面是QSS（其实和CSS好像一样）代码，在qt desinger里添加到qtableview什么的编辑式样表（styleSheet）里就OK了。当然直接写在代码里也可以，我是图省事。第一段是描述表头边框粗细和颜色；第二段是描述左上角那个小按钮（看起来是个空白区那个位置）的式样和颜色。想来那个按钮应该可以覆盖放点自己喜欢的东西，不过还没试过。
