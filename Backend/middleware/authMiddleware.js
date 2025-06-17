export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token === 'test-token') {
    req.user = { _id: 'test-user' }; // fake user for dev
    return next();
  }

  return res.status(401).json({ message: 'Unauthorized' });
};
