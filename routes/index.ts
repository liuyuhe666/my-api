import { Hono } from 'hono'
import bili from "./bili.ts"
import tiobe from "./tiobe.ts"
import counter from "./counter.ts"
import proxy from "./proxy.ts";

const api = new Hono()

api.route('/bili', bili)
api.route('/tiobe', tiobe)
api.route('/counter', counter)
api.route('/proxy', proxy)

export default api