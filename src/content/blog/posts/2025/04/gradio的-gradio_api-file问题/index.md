---
title: "gradio的/gradio_api/file=问题"
date: 2025-04-30
categories: 
  - "python"
---

这个问题折腾了好几个小时，最后发现是用gradio app.py这种方式启动的应用热更新是不更新demo.launch()方法本身的，比如你一开始是用demo.launch()这种方式启动，然后你修改了代码为demo.launch(allowed\_paths=\["./"\])，然后你看到gradio的cli显示了更新，以为生效了……其实是没生效。研究了一下资料，最可靠的居然就是ctrl+c中断后再重启应用，也真是操蛋。

当然了，最后解决问题的方法很简单，/gradio\_api/file=这种方式在gradio5.x是有效的，/file=这种方式中间似乎也生效过，不过因为热更新的问题我也不确定哪种设定是有效的了。所以最后的组合是/gradio\_api/file=加上demo.launch(allowed\_paths=\["./"\])这种方式，很简单。

另外还要吐槽一下,gradio的官网docs语焉不详也就算了，居然examples有低级的拼写错误。
