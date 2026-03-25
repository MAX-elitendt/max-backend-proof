import express from 'express'

const app = express()
const port = Number(process.env.PORT || 3000)
const startedAt = new Date().toISOString()

app.get('/', (_req, res) => {
  res.json({
    ok: true,
    service: 'max-backend-proof',
    message: 'Minimal backend deployment proof is live-capable.',
    startedAt,
  })
})

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'max-backend-proof',
    startedAt,
  })
})

app.listen(port, '0.0.0.0', () => {
  console.log(`max-backend-proof listening on http://0.0.0.0:${port}`)
})
