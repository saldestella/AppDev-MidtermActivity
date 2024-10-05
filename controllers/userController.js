const { users, getUserByUsername, addUser } = require('../models/userModel');

// Register a new user
const registerUser = (req, res) => {
  const { username, password, email } = req.body;

  if (getUserByUsername(username)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { id: users.length + 1, username, password, email };
  addUser(newUser);
  res.status(201).json({ message: 'User registered successfully' });
};

// User Login
const loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', token: 'mock-token' });
};

// Get user profile with authentication
const getProfile = (req, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

module.exports = { registerUser, loginUser, getProfile };
