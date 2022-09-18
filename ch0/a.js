const express = require('express')
const app = express()
const port = 3000

app.get('/aaa', (req, res) => {
    const obj = {
        "name" : "kundol"
    }
    res.send(obj) 
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})