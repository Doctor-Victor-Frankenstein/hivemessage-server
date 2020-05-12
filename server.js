const app = require('express')()
const server = require('http').createServer(app);
// const io = require('socket.io')(server);

// middlewares
const cors = require('cors')

app.use(cors());
app.use(require('./routes'))

// starting socket.io
// io.on('connection', require('./ws'))

server.listen(process.env.PORT, () => {
    console.log(`server run in port:`, process.env.PORT)
});

