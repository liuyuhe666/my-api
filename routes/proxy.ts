import { Hono } from "hono"
import { HTTPException } from 'hono/http-exception'

const proxy = new Hono()

proxy.get('/', async (c) => {
    const url = c.req.query('url')
    if (!url) {
        throw new HTTPException(400, { message: 'url 不能为空' })
    }
    const response = await fetch(url)
    if (!response.ok) {
        throw new HTTPException(500, { message: '获取数据失败' })
    }
    const newResponse = new Response(response.body, response)
    return newResponse
})

export default proxy
