import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { wrapBaseResponse } from "../utils/index.ts"

const bili = new Hono()

const baseUrl = 'https://api.bilibili.com/x/web-interface'
const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 Edg/129.0.0.0'

function biliFetch(input: URL | Request | string, init?: RequestInit): Promise<Response> {
    return fetch(input, {
        headers: {
            'Referer': 'https://www.bilibili.com',
            'User-Agent': ua
        },
        ...init
    })
}

bili.get('/video/cover/:bvid', async (c) => {
    const bvid = c.req.param('bvid')
    const e = c.req.query('e')
    if (!bvid) {
        throw new HTTPException(400, { message: 'bvid 不能为空' })
    }
    const url = `${baseUrl}/view?bvid=${bvid}`
    try {
        const { data = {} } = await (await biliFetch(url)).json()
        const pic = data.pic
        if (e && e === 'image') {
            return c.redirect(pic)
        } 
        return c.json(wrapBaseResponse({ pic }))
    } catch (e) {
        throw new HTTPException(500, { message: '获取数据失败', cause: e })
    }
})

bili.get('/video/ranking/:rid', async (c) => {
    const rid = c.req.param('rid') ?? '0'
    const url = `${baseUrl}/ranking/v2?rid=${rid}`
    try {
        const { data = {} } = await (await biliFetch(url)).json()
        return c.json(wrapBaseResponse(data))
    } catch (e) {
        throw new HTTPException(500, { message: '获取数据失败', cause: e })
    }
})

export default bili