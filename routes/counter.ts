import { Hono } from "hono"
import { counterMap } from "../constants/index.ts"

const counter = new Hono()
const kv = await Deno.openKv()

const length = 10
const width = 32
const height = 32

function renderSvg(num: number): string {
    const numArray = num.toString().padStart(length, '0').split('')
    let x = 0, y = 0, parts = ''
    for (let i = 0; i < length; i++) {
        const data = counterMap.get(numArray[i])
        parts = `${parts}
        <image x="${x}" y="0" width="${width}" height="${height}" xlink:href="${data}" />`
        x += width
        if (height > y) {
            y = height
        }
    }
    return `<?xml version="1.0" encoding="UTF-8"?>
                <svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="image-rendering: pixelated;">
                    <g>
                    ${parts}
                    </g>
                </svg>`
}

counter.get('/', async (c) => {
    const key = c.req.query('key') || ''
    c.header('Content-Type', 'image/svg+xml')
    if (!key || key === '') {
        return c.body(renderSvg(123456789))
    }
    const value = (await kv.get([key])).value as string
    let num = 1
    if (value) {
        num = parseInt(value) + 1
    }
    await kv.set([key], num)
    return c.body(renderSvg(num))
})

export default counter