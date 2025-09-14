---
title: "安装stable diffusion webui 1.6的错误备忘录"
date: 2023-12-07
categories: 
  - "python"
---

1，默认的清华源有些包没有，会导致安装失败，简单的运行代码替换为阿里源即可

```
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
```

2，默认的httpx对python版本不兼容，需要自己手动安装一下

```
pip install httpx==0.24.1
```
