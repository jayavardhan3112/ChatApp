const io = require('socket.io')(3000)

io.on('connection', socket => {
    Socket.emit('chat-message', 'Hello World')
})