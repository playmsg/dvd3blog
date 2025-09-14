---
title: "关于foobar2000播放cue文件噪音问题"
date: 2024-05-07
categories: 
  - "others"
---

用foobar2000打开.cue文件，播放声音是沙沙的无意义噪音。但是打开该cue文件对应的ape文件，则可正常播放。同时用potplayer打开该cue文件也可以正常播放。同时，同一专辑下的有些cue文件播放是正常的。

经过对比播放正常与不正常的cue文件，发现在文件中有'FILE "CDImage.ape" WAVE'与‘FILE "CDImage.ape" BINARY’这一行的区别。也既WAVE可以正确播放，BINARY会产生播放错误。但是无论是这两者中的哪种，potplayer都能正常播放。

没有深究过是什么原因。毕竟我都是把ape转换成mp3听的，对音质没什么追求。
