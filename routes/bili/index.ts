import { Hono } from 'hono'
import getVideoCover from "./video-cover.ts"

const bili = new Hono().basePath('/bili')

bili.get('/video/cover/:bvid', getVideoCover)

export default bili