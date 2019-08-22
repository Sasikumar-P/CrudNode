const express = require('express')
const  fs = require('fs');
const  morgan = require('morgan');



const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const  accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});

app.use(morgan('combined', {stream: accessLogStream}));

app.use(require('./routes/index.routes'))

app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})
// Starting server
app.listen('1337')
console.log("server is running at port 1337")