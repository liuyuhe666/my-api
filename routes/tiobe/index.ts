import { Hono } from 'hono'
import getTop20 from "./top20.ts"

const tiobe = new Hono().basePath('/tiobe')

tiobe.get('/top20', getTop20)

export default tiobe