const socketIO = require('socket.io');

module.exports = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    // Handle board updates
    socket.on('boardUpdate', (boardId) => {
      socket.broadcast.emit('boardUpdated', boardId);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};
