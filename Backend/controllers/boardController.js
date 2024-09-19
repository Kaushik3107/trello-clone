const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
  try {
    const { name } = req.body;
    const board = new Board({ name, owner: req.user.userId });
    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(400).json({ message: 'Error creating board', error });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user.userId });
    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching boards', error });
  }
};

exports.addCollaborator = async (req, res) => {
  try {
    const { boardId, userId } = req.body;
    const board = await Board.findById(boardId);
    if (!board.collaborators.includes(userId)) {
      board.collaborators.push(userId);
      await board.save();
    }
    res.json(board);
  } catch (error) {
    res.status(400).json({ message: 'Error adding collaborator', error });
  }
};
