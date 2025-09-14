---
title: "django连接mysql8出错"
date: 2020-04-02
categories: 
  - "python"
---

django.db.utils.OperationalError: (2059, )  
这个错误是因为mysql8调整了用户密码加密模式，django用的驱动可能还不识别，所以出错。所以傻办法就是调整mysql8的密码加密模式为旧的方式。

```
use mysql;
select user,plugin from user where user='root';
alter user 'root'@'localhost' identified with mysql_native_password by '密码'
#记得flush生效
flush privileges
```
