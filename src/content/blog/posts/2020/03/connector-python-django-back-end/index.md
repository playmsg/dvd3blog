---
title: "Connector/Python Django Back End,用MYSQL原生驱动连接django"
date: 2020-03-31
categories: 
  - "python"
---

```
DATABASES = {
    'default': {
        'NAME': 'user_data',
        'ENGINE': 'mysql.connector.django',
        'USER': 'mysql_user',
        'PASSWORD': 'password',
        'OPTIONS': {
          'autocommit': True,
        },
    }
}
```

只需要修改配置文件（settings.py）就OK了，网上流传很广的那个用pymysql的，需要在\_\_init\_\_.py里注入代码的版本已经过于老旧了。此方案来自oracle官方文档，本人在mysql 8下测试通过。性能没有经过测试，不过想来官方的驱动从性能到稳定性到文档应该比社区开发者应该好一些，再说有新不用旧。原文在此（英文）[https://dev.mysql.com/doc/connector-python/en/connector-python-django-backend.html](https://dev.mysql.com/doc/connector-python/en/connector-python-django-backend.html)

补充修改：妈的ORACLE原生的MYSQL驱动（mysql.connector.django）有错，在django3上会报错（django.core.exceptions.ImproperlyConfigured: 'mysql.connector.django' isn't an available database backend.）。看官方文档（就是上面那个链接）里提到对应的django文档版本还是1.5，就忍不住打了个冷颤。迫不得已细看了一下错误信息，是一个sexsix的包引入错误（from django.utils.import(six,timezone,dateparse)），想想为毛six一个解决python兼容性的包在django.utils包里也是蛮费解（也许当年six包还没默认按照，需要django自带？毕竟老子春节后才学python并不了然）。解决方案很简单，就是把from django.utils.import six改成import six就OK了。当然没准儿把six相关的都删掉并且改带吗（放弃py2,3的兼容性问题）也完全OjbK，不过我是没耐心尝试。需要改的文件一共有4个：

site-packages/mysql/connector/django/base.py  
site-packages/mysql/connector/django/features.py  
site-packages/mysql/connector/django/operations.py  
site-packages/mysql/connector/django/compiler.py

  
自己去文件里搜索import six改改就好。最后一个compiler.py文件里改成from six.moves import zip\_longest就好，别含糊。

PS.自己乱改驱动文件真的好吗？我对此其实是有疑惑的，也许有更好的方案呢，比如改改配置什么的就搞定了……
