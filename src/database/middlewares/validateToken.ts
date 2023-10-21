import { Request, Response, NextFunction } from 'express';
import jwt from '../auth/jwt';

const validateToken = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  const token = authorization.split(' ')[1];
  try {
    const user = jwt.decodeJwtToken(token);
    req.body.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default validateToken;