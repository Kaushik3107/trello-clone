const express = require('express');
const { createCard, getCards } = require('../controllers/cardController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, createCard);
router.get('/:listId', auth, getCards);

module.exports = router;
