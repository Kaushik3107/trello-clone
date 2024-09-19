const express = require('express');
const { createList, getLists } = require('../controllers/listController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createList);
router.get('/:boardId', auth, getLists);

module.exports = router;
