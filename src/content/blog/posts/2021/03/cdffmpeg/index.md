---
title: "大枣无损视频合并器发布页"
date: 2021-03-10
categories: 
  - "python"
---

\[likebtn theme="github" lang="auto" bp\_notify="0"\]

大枣无损视频合并器是我在学习python中的一个练手作品，其主要功能是把具有相同格式（分辨率，编码器）的多集影片无损（不再次编码）合并，本质上是给ffmpeg套了个GUI的壳。

这个小软件功能上开发的初衷是解决以往类似软件的一个问题：支持批量操作的软件一定要二次解码，造成视频合并时间特别长而且还有一定概率编码出错，而支持不转码合并的软件又不支持批量化操作，一次只能合并一个文件，不利于利用空闲时间。所以本软件支持不转码进行无损合并（切记一定是原始编码和分辨率一致的影片，多见于一个影片的分段合并），而且支持进行任务池配置，一次生成多个任务然后批量化处理。

考虑到本人年近50，学习python纯属无聊行为，所以该软件估计毛病不小，如果各位有什么意见可以在本项目的[github](https://github.com/playmsg/chinese-date) issues中提出。

github下载的话请[戳这里](https://github.com/playmsg/chinese-date/releases)，如果访问不了github请[戳这里](https://dvd3.net/downloads/cdffmpeg2021-03.zip)。
