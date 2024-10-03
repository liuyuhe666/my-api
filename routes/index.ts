import { Hono } from 'hono'
import bili from "./bili.ts"
import tiobe from "./tiobe.ts"
import counter from "./counter.ts"

const api = new Hono()

api.route('/bili', bili)
api.route('/tiobe', tiobe)
api.route('/counter', counter)

export default api