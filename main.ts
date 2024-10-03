import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { prettyJSON } from 'hono/pretty-json'
import { appInfo } from "./constants/index.ts"
import api from "./routes/index.ts"

const app = new Hono()

app.use(prettyJSON())
app.use(cors())
app.notFound((c) => c.json({ ok: false, message: 'Not Found' }, 404))
app.onError((err, c) => {
  return c.json({ ok: false, message: err.message })
})

app.get('/', (c) => {
  return c.json({ ok: true, message: appInfo.defaultMessage, data: 'Hello World!' })
})

app.route('/api', api)

Deno.serve(app.fetch)
