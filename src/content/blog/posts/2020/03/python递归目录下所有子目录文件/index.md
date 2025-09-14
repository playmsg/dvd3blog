---
title: "python递归目录下所有子目录文件"
date: 2020-03-16
categories: 
  - "python"
---

最近打算写一个邪恶的小工具用来整理几个T的NAS。巨蟒少年Python火了好几年了，感觉又不是很难的样子，所以开始一步一步的学习和使用。第一步当然是从简单的文件整理开始……

```
#变量名字都是随便起的，没有叫ABCD已经给足面子，所以不要嫌弃命名诡异
import os

def getFileList(fileDir, filesList):
    #感觉baseDir的定义好像有点画蛇添足，不过没有深究
    baseDir = os.path.abspath(fileDir)
    fileList = os.scandir(fileDir)
    for files in fileList:
        if files.is_file():
            fileNameList.append(files.name)
        else:
            #此处放置try是为了避免有些文件读取权限不够出错挂掉,上面的判断是如果不是
            #文件当然是目录啦（虽知道也可能不是，但是懒得改了），然后就递归自己读新发现的目录
            try:
                getFileList(os.path.join(baseDir, files.name), filesList)
            except IOError:
                print(files.name+' IO Error!')

    fileList.close()
    return fileNameList

fileNameList = []
fList = getFileList('.', fileNameList)
print(fList)
```

就这么个破代码我写了半个多小时。看来年纪大了学习能力果然不济。
