import { Hono } from 'hono'
import bili from "./bili.ts"
import tiobe from "./tiobe.ts"

const api = new Hono()

api.route('/bili', bili)
api.route('/tiobe', tiobe)

export default api