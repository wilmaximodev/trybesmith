import { Router } from 'express';
import LoginController from '../database/controllers/Login.Controller';
import validateLogin from '../database/middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/', validateLogin, LoginController.login);

export default loginRouter;