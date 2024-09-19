const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const boardRoutes = require('./routes/boardRoutes');
const listRoutes = require('./routes/listRoutes');
const cardRoutes = require('./routes/cardRoutes');
const socketSetup = require('./socket/socket');

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/cards', cardRoutes);

// WebSocket setup
socketSetup(server);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
