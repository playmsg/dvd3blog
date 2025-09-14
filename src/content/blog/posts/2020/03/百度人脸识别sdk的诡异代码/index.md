---
title: "百度人脸识别SDK的诡异代码"
date: 2020-03-19
categories: 
  - "python"
---

百度AI的人脸识别python SDK里 detect 方法要求image是base64编码。然而直接提交base64的编码会出错，大意是json序列化出错。这就可以猜到sdk里其实也就是拼拼参数形成json跑http API，其实这个SDK也没封装几行代码……解决方案很简单，转换base64为utf8的string搞定。

```
with open('xxoo.jpg', 'rb') as f:
    img = str(base64.b64encode(f.read()), 'utf-8')

```

PS.如果不加UTF8会抛出'error\_code': 222203错误。直接传BASE64会jsondump错误。
