const express = require('express')
const { createServer } = require('http');
const { Server } = require('socket.io')

const app = express()
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:8080'],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
})

// HTTP маршруты
app.get('/', async (req, res) => {
    return res.send(123)
})

app.listen(3000, async () => {
    console.log('Server is running on port 3000')
})


// Заруск сокет
io.on('connection', (socket) => {
    console.log('Add client ', socket)
})

server.listen(3001, () => {
  console.log('server running at http://localhost:3001');
});