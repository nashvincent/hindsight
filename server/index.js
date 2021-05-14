const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))
