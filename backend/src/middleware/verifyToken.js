const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, TOKEN_SECRET);
      const userId = decodedToken.userId;
      if (req.body.userId && req.body.userId !== userId) {
        throw 'ID utilisateur erroné';
      } else {
        next();
      }
    } catch {
      res.status(401).json({
        error: new Error('Requête invalide')
      });
    }
  };