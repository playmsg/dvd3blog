---
title: "烦人的 Django CSRF protection"
date: 2020-03-18
categories: 
  - "python"
---

Postman测试api,结果403，CSRF保护。这东西应该是防止跨站的？还没深究，不过现在用不上。看了好几个解决方案，语焉不详也不想费心弄明白，干脆注释掉settings.py文件中那一行就OjbK了。

```
# 'django.middleware.csrf.CsrfViewMiddleware',
就是上面这一行注释掉
```
