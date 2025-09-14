---
title: "关于python PIL的resize"
date: 2020-04-17
categories: 
  - "python"
---

`img1 = Image.open('girlstemplate.png')   img1.resize((158, 158), Image.ANTIALIAS)   img1.save()`  
上面这样……是错误的。原因是resize() returns a resized copy of an image.  
所以应该有个img2=img1.resize的动作，然后针对img2操作
