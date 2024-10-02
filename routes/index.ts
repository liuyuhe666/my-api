import { Hono } from 'hono'
import bili from "./bili/index.ts"

const api = new Hono()

api.route('/', bili)

export default api