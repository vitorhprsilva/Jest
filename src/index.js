const express = require('express')
const cors = require('cors')
// const routes = require('./routes')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(port, (req, res)=>{console.log('porta', port)})
