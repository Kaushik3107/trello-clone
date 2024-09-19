const Card = require('../models/Card');

exports.createCard = async (req, res) => {
  try {
    const { title, description, listId } = req.body;
    const card = new Card({ title, description, listId });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: 'Error creating card', error });
  }
};

exports.getCards = async (req, res) => {
  try {
    const { listId } = req.params;
    const cards = await Card.find({ listId });
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error });
  }
};
