<div align="center">
    <h1>😎 My API</h1>
    <img src="./assets/walking.gif" alt="walking.gif" />
    <p>基于 Deno 和 Hono 构建的简单 API 列表项目</p>
</div>



## 🧐 API 目录

> 按照添加时间排序。

1. [哔哩哔哩视频封面](#哔哩哔哩视频封面)
2. [TIOBE 编程语言排行榜 Top20](#tiobe-编程语言排行榜-top20)
3. ……

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
    "data": {
        "pic": "http://i2.hdslb.com/bfs/archive/3e4a4df41d4475b1930bf62879047f493b053501.jpg"
    }
}
```

### TIOBE 编程语言排行榜 Top20

请求方法: `GET`

请求路径: `/api/tiobe/top20`

成功响应示例:

```json
{
    "ok": true,
    "message": "所有数据均来自官方, 开源地址: https://github.com/liuyuhe666/my-api",
    "data": [
        {
            "index": "1",
            "name": "Python",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Python.png",
            "ratings": "20.17%",
            "change": "+6.01%"
        },
        {
            "index": "2",
            "name": "C++",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/C__.png",
            "ratings": "10.75%",
            "change": "+0.09%"
        },
        {
            "index": "3",
            "name": "Java",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Java.png",
            "ratings": "9.45%",
            "change": "-0.04%"
        },
        {
            "index": "4",
            "name": "C",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/C.png",
            "ratings": "8.89%",
            "change": "-2.38%"
        },
        {
            "index": "5",
            "name": "C#",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/C_.png",
            "ratings": "6.08%",
            "change": "-1.22%"
        },
        {
            "index": "6",
            "name": "JavaScript",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/JavaScript.png",
            "ratings": "3.92%",
            "change": "+0.62%"
        },
        {
            "index": "7",
            "name": "Visual Basic",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Visual_Basic.png",
            "ratings": "2.70%",
            "change": "+0.48%"
        },
        {
            "index": "8",
            "name": "Go",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Go.png",
            "ratings": "2.35%",
            "change": "+1.16%"
        },
        {
            "index": "9",
            "name": "SQL",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/SQL.png",
            "ratings": "1.94%",
            "change": "+0.50%"
        },
        {
            "index": "10",
            "name": "Fortran",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Fortran.png",
            "ratings": "1.78%",
            "change": "+0.49%"
        },
        {
            "index": "11",
            "name": "Delphi/Object Pascal",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Delphi_Object_Pascal.png",
            "ratings": "1.77%",
            "change": "+0.75%"
        },
        {
            "index": "12",
            "name": "MATLAB",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/MATLAB.png",
            "ratings": "1.47%",
            "change": "+0.28%"
        },
        {
            "index": "13",
            "name": "PHP",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/PHP.png",
            "ratings": "1.46%",
            "change": "-0.09%"
        },
        {
            "index": "14",
            "name": "Rust",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Rust.png",
            "ratings": "1.32%",
            "change": "+0.35%"
        },
        {
            "index": "15",
            "name": "R",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/R.png",
            "ratings": "1.20%",
            "change": "+0.23%"
        },
        {
            "index": "16",
            "name": "Ruby",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Ruby.png",
            "ratings": "1.13%",
            "change": "+0.18%"
        },
        {
            "index": "17",
            "name": "Scratch",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Scratch.png",
            "ratings": "1.11%",
            "change": "+0.03%"
        },
        {
            "index": "18",
            "name": "Kotlin",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Kotlin.png",
            "ratings": "1.10%",
            "change": "+0.20%"
        },
        {
            "index": "19",
            "name": "COBOL",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/COBOL.png",
            "ratings": "1.09%",
            "change": "+0.22%"
        },
        {
            "index": "20",
            "name": "Swift",
            "image": "https://www.tiobe.com/wp-content/themes/tiobe/tiobe-index/images/Swift.png",
            "ratings": "1.08%",
            "change": "+0.09%"
        }
    ]
}
```

## ❤️ License

[GPL-3.0 license](./LICENSE)

## 🎉 Reference
- [https://github.com/vikiboss/60s](https://github.com/vikiboss/60s)
- [https://hono.dev/docs](https://hono.dev/docs)
- [https://deno.com](https://deno.com/)
