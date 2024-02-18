const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! two')
})

app.get('/special', (req, res) => {
    fetch('https://catfact.ninja/fact', {
        method: 'GET'
      })
      .then((apiRes) => {
        return apiRes.json()
      })
      .then((answer) => {
        console.log(answer);
        res.send(`${answer.fact} | (${answer.length})`)
      })
      .catch((e) => {
        console.error(e)
      })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})