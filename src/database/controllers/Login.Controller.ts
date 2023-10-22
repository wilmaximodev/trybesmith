import { Request, Response } from 'express';
import loginService from '../services/Login.Service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const response = await loginService.login(username, password);
  if (typeof response !== 'string') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(200).json({ token: response });
};

export default {
  login,
};