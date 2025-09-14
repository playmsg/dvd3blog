---
title: "关于python的databases库与sqlite的memory模式"
date: 2024-02-28
categories: 
  - "python"
---

当在python应用，比如fastapi中采用databases库时，如果数据库端为sqlite并设置为memory的内存数据库模式时，进行create table之类的会显示成功，但是随后进行select等会失败，报table not found之类的错误。

其根本原因是sqlite的memory模式是针对每个数据库连接建立一个内存数据库，当连接断裂后内存数据库自动消失。而databases库本质上是对aio系列驱动，比如aiosqlite等接口进行封装并优化的，在这个优化过程中，databases库自动建立了连接池，所以当采用databases库连接到数据库时，是有可能同时存在多个连接的，这就造成了当select的时候，上一条create table的连接已经消失或者在池里排到另外一个地方去了，造成数据库找不到的情况。当然这个情况对sqlite的文件模型没有影响，仅仅影响内存模式。

解决方案么，要么直接换aiosqlite，自己维护连接池，要么研究研究databases库的连接池的逻辑（我是没空研究的）。

我自己的方案么，是换用了redis……
