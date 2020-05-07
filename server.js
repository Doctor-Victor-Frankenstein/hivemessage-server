const express = require('express')
const app  = express()
// middlewares
const cors = require('cors')

app.use(cors());
app.use(require('./routes'))

app.listen(process.env.PORT, () => {
    console.log(`server run in port:`, process.env.PORT)
})