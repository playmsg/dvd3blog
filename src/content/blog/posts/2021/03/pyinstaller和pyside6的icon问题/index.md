---
title: "pyinstaller和pyside6的icon问题"
date: 2021-03-30
categories: 
  - "python"
---

经过多次测试发现，在pyside6里无论在何种地方使用.ico文件（作为资源引入方式，不是独立的文件）作为图标，经过pyinstaller打包后皆不能显示，改用png文件后正常（是的，状态栏图标也可以用png文件）。
