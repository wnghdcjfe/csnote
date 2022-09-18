const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
    const f = JSON.parse(fs.readFileSync("a.json", {encoding:"utf-8"}))
    const data = {
        "name" : f.name
    }
    res.send(data) 
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})