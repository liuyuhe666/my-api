# 😎 My API

> 使用 [Deno](https://deno.com) + [Hono](https://hono.dev) 构建的简单 API 列表项目。

## 🧐 API 目录

> 按照添加时间排序。

1. 哔哩哔哩视频封面
2. ……

## 🎨 返回格式
除特殊说明外，所有 API 默认返回 `json` 格式

## 🧭 使用说明

### 哔哩哔哩视频封面

请求方法: `GET`

请求路径: `/api/bili/video/cover/:bvid`

成功响应示例:

```json
{
    "ok": true,
    "message": "所有数据均来自官方, 开源地址: https://github.com/liuyuhe666/my-api",
    "data": "http://i2.hdslb.com/bfs/archive/8565873a70f3460c9c7b274ea4a53fbae9119a42.jpg"
}
```

## ❤️ License

[GPL-3.0 license](./LICENSE)

## 🎉 Reference
- [https://github.com/vikiboss/60s](https://github.com/vikiboss/60s)
- [https://hono.dev/docs](https://hono.dev/docs)
- [https://deno.com](https://deno.com/)
