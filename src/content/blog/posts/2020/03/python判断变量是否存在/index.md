---
title: "python判断变量是否存在"
date: 2020-03-17
categories: 
  - "python"
---

python居然没有isExist之类的方法，需要自己用并不优雅的方式判断（也许是我不知道）。

```
name1='king'
if 'name1' in locals().keys():
    print('妈的这个变量存在')
else:
    print('妈的这个变量不存在')
```

原理就是locals().keys()返回的是当前所有变量的列表（list），然后判断变量名是不是在这个列表里。感觉这个方法十分不好看，不过尝试过try/catch什么的之后，相比之下觉得这种还感觉好一些。
