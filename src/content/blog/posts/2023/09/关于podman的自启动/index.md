---
title: "关于podman的自启动"
date: 2023-09-22
categories: 
  - "others"
---

在ubuntu下，网上文章多是传统的在/etc/systemd/system下建立service文件，但是因为ubuntu下podman以非root模式运行，所以实际上是用systemctl --user模式来运行的，对应的目录也在~/.config/systemd……下。
