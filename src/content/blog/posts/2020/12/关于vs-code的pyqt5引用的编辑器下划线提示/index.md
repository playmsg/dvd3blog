---
title: "关于vs code的pyqt5引用的编辑器下划线提示"
date: 2020-12-31
categories: 
  - "python"
---

如果没做设置会在import关键字上显示红色下划线，提示“Unable to import 'PyQt5'pylint(import-error)”虽然运行无错但是看着恶心。

网上找了很多方案，什么修改json之类的十分麻烦还不好用，最后发现在项目目录下新建一个.pylintrc文件（就是Linux下的不可见文件）内容为 extension-pkg-whitelist=PyQt5 这一行，重启VS CODE搞定。没细研究过，按理说如果pyside6也显示红线的话这个方法改改应该就行了。
