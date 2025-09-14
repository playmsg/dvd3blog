---
title: "关于wordpress因dns导致速度慢及安装模板失败的问题"
date: 2021-05-15
categories: 
  - "others"
---

现象：wordpress后台打开速度慢，安装主题提示发生错误（主题缩略图都不能显示）。因为我同时在国外服务器也有部署wp没问题，想当然的以为是墙的原因，比如总所周知的google font问题。然而安装相关插件问题没有解决（中间还顺便在github上给插件作者pr了一个代码bug修复）。然后baidu到有可能是服务器DNS解析问题，于是服务器端尝试ping api.wordpress.org等相关网站，IP均可正常连通。在我都要开始调试wp源代码以及搞服务器翻墙时，无意中想看看服务器DNS设置……/etc/resolv.conf 结果发现dns server为192.168.0.1,既网关地址。抱着死马当成XX马的心态，添加

nameserver 114.114.114.114  
nameserver 8.8.8.8  
nameserver 8.8.4.4

结果OK了。虽然我完全不理解是为了什么。
