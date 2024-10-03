import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { DOMParser } from "jsr:@b-fuze/deno-dom"
import { wrapBaseResponse } from "../utils/index.ts"

const tiobe = new Hono()
const baseUrl = 'https://www.tiobe.com'
const url = `${baseUrl}/tiobe-index`
const key = 'tiobe:top20'

const cache: Map<string, Item[]> = new Map()

// 清空缓存
Deno.cron('clear cache', { hour: { every: 1 } }, () => cache.clear())

interface Item {
    index: string
    name: string
    image: string
    ratings: string
    change: string
}

tiobe.get('/top20', async (c) => {
    // 从缓存中读取
    const cacheData = cache.get(key)
    if (cacheData) {
        return c.json(wrapBaseResponse(cacheData))
    }
    try {
        const result: Item[] = []
        const html = await (await fetch(url)).text()
        const doc = new DOMParser().parseFromString(html, 'text/html')
        const table = doc.querySelector("#top20")!
        const tbody = table.children[1]
        for (const tr of tbody.children) {
            const imageUrl = `${baseUrl}${tr.children[3].firstElementChild?.getAttribute('src')}`
            result.push({
                index: tr.children[0].textContent,
                name: tr.children[4].textContent,
                image: imageUrl,
                ratings: tr.children[5].textContent,
                change: tr.children[6].textContent
            })
        }
        // 设置缓存
        cache.set(key, result)
        return c.json(wrapBaseResponse(result))
    } catch (e) {
        throw new HTTPException(500, { message: '获取数据失败', cause: e })
    }
})

export default tiobe