---
title: "用python PIL从图片中剪切出圆形图片"
date: 2020-04-24
categories: 
  - "python"
---

使用函数方法，传进去一个PIL的image对象，虚化值（就是模糊到啥程度），返回一个剪切后的image对象，背景部分是透明的（就是圆的四周多余的那部分边框）

```
from PIL import Image, ImageDraw, ImageFont, ImageFilter
def mask_circle_transparent(pil_img, blur_radius, offset=0):
    offset = blur_radius * 2 + offset
    mask = Image.new("L", pil_img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse(
        (offset, offset, pil_img.size[0] - offset, pil_img.size[1] - offset), fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(blur_radius))

    result = pil_img.copy()
    result.putalpha(mask)

    return result

```
