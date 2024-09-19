const express = require('express');
const { createBoard, getBoards, addCollaborator } = require('../controllers/boardController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createBoard);
router.get('/', auth, getBoards);
router.post('/collaborator', auth, addCollaborator);

module.exports = router;
