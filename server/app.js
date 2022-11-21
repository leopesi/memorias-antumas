require('dotenv').config()
const express = require('express')
const morgan = require('morgan');
var cors = require('cors')
const app = express()
const PORT = process.env.PORT;

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(require('./src/routes/index.routes'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

lista = {

}