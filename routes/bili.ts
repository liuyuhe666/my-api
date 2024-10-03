import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { wrapBaseResponse } from "../utils/index.ts"

const bili = new Hono()

const baseUrl = 'https://api.bilibili.com/x/web-interface/view'

bili.get('/video/cover/:bvid', async (c) => {
    const bvid = c.req.param('bvid')
    const e = c.req.query('e')
    if (!bvid) {
        throw new HTTPException(400, { message: 'bvid 不能为空' })
    }
    const url = `${baseUrl}?bvid=${bvid}`
    try {
        const { data = {} } = await (await fetch(url)).json()
        const pic = data.pic
        if (e && e === 'image') {
            return c.redirect(pic)
        } 
        return c.json(wrapBaseResponse({ pic }))
    } catch (e) {
        throw new HTTPException(500, { message: '获取数据失败', cause: e })
    }
})

export default bili