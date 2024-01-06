import { Request, Response, NextFunction } from 'express';

const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<Response | undefined> => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      message: '"username" and "password" are required',
    });
  }

  next();
};

export default validateLogin;