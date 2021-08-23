import express from 'express'

import { RokuControl } from './RokuControl'

const app = express()
const port = 3000

const ROKU_IP = '10.0.0.43'

app.get('/night', async (req, res) => {
  const roku = new RokuControl(ROKU_IP)
  await roku.night()

  res.status(200)
  res.send('ok')
})

app.get('/day', async (req, res) => {
  const roku = new RokuControl(ROKU_IP)
  await roku.day()

  res.status(200)
  res.send('ok')
})

app.listen(port, () => console.log(`RokuControl up on port: ${port}`))
