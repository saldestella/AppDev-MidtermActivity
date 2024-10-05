const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
  
    if (!token || token !== 'mock-token') {
      return res.status(401).json({ message: 'Access denied. No token provided' });
    }
  
    req.userId = 1; // Mock user ID
    next();
  };
  
  module.exports = { authMiddleware };
  