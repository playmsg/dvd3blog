---
title: "scrapy爬虫之xpath获取链接内文字"
date: 2020-03-19
categories: 
  - "python"
---

好多人在问，回答也是五花八门，最正统的回答是直接用 response.xpath导出来。不过在抓链接列表肯定已经进循环了，整个导完全没有美感效率也低。其实就是循环里一个 extract\_first() 的事。

PS.提出的问题是如何获取<a href="xxoo.html">巨蟒少年</a>链接中“巨蟒少年”这四个字。

```
#部分代码
    def parse(self, response):
        res=response.xpath('//ul[@class="lib_text"]/li/a')
        for rUrl in res:
            print(rUrl.xpath("text()").extract_first())
            print(rUrl.attrib['href'])

```
