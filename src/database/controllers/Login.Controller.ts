import { Request, Response } from 'express';
import loginService from '../services/Login.Service';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;
  const response = await loginService.login(username, password);
  return res.status(200).json({ token: response });
};

export default {
  login,
};