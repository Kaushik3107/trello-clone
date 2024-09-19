const List = require('../models/List');

exports.createList = async (req, res) => {
  try {
    const { name, boardId } = req.body;
    const list = new List({ name, boardId });
    await list.save();
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ message: 'Error creating list', error });
  }
};

exports.getLists = async (req, res) => {
  try {
    const { boardId } = req.params;
    const lists = await List.find({ boardId });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lists', error });
  }
};
