import { Hono } from 'hono'
import bili from "./bili/index.ts"
import tiobe from "./tiobe/index.ts"

const api = new Hono()

api.route('/', bili)
api.route('/', tiobe)

export default api