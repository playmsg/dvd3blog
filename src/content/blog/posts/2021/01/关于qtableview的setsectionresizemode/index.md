---
title: "关于QTableView的setSectionResizeMode"
date: 2021-01-27
categories: 
  - "python"
---

header.setSectionResizeMode(0, self.header.Stretch)这个语句如果放在tableView.setModel前，就会莫名其妙的自动退出，也不报错，放在绑定model后再resize就OK了，不知何解。
