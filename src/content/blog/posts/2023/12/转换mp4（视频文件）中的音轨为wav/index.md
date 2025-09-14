---
title: "转换mp4（视频文件）中的音轨为wav"
date: 2023-12-07
categories: 
  - "share"
---

```
ffmpeg -i <infile> -ac 2 -f wav <outfile>
```

一行代码，好简单，犯不上去下载什么软件，有些还要收费。
