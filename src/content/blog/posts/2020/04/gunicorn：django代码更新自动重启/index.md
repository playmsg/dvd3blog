---
title: "gunicorn：django代码更新自动重启"
date: 2020-04-11
categories: 
  - "python"
---

启动时加上--reload参数即可，类似django runserver时默认支持代码更新就自动重启一样。完整命令行类似 #gunicorn myproject.wsgi -c /mygunicorn.conf --reload 。里面的mygunicorn.conf是自己项目的gunicorn配置文件，比如配置什么unix sock,port之类的。

PS.感觉网上好多人都是gunicorn搭配flask，搭配django的不多。当然对于我这种半吊子程序员来说所有的orm都是shit……
