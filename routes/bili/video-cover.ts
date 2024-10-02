import { Context } from "hono"
import { HTTPException } from 'hono/http-exception'
import { appInfo } from "../../constants/index.ts"

const baseUrl = 'https://api.bilibili.com/x/web-interface/view'

const getVideoCover = async (c: Context) => {
    const bvid = c.req.param('bvid')
    const url = `${baseUrl}?bvid=${bvid}`
    try {
        const { data = {} } = await (await fetch(url)).json()
        const pic = data.pic    
        return c.json({ ok: true, message: appInfo.defaultMessage, data: pic })
    } catch (e) {
        throw new HTTPException(500, { message: '获取数据失败', cause: e })
    }
}

export default getVideoCover