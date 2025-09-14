---
title: "python PIL库的paste方法贴透明图片"
date: 2020-05-07
categories: 
  - "python"
---

PIL的Image下的paste方法有个诡异的地方。我在笔记本下（忘记哪个python和PIL的版本了），用一个透明背景的图标贴到一个图片上组合成一个新图片-这个操作很普通，然而在笔记本环境下透明背景是白色的，同样的代码在我的台式机上则变成了黑色和……格子状你以为是透明然而不是透明的颜色。因为一开始基底图片是白色的，所以我也没在意。后来发现变黑还是得老老实实弄透明的，又折腾了一下。大意就是在paste的时候设置mask参数为alpha透明什么的（就是类似PS里的蒙版透明）。

```
#这个是省事写法，大意是取r,g,b,a=atavarPic.split()里a作为mask的意思
baseImg.paste(atavarPic, (10,10), mask=atavarPic.split()[3])
```
