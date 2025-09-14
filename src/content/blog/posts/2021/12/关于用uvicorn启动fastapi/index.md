---
title: "关于用uvicorn启动fastapi"
date: 2021-12-10
categories: 
  - "python"
---

用命令行那种应该不可以被pyinstaller之类的打包，所以要用python xxx.py这种方式来启动，那么就要在代码内引用uvicorn.run。

```
import uvicorn
if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
```

执行run方法的时候要在main里，我也不知道为什么，好像和线程进程什么的相关。
