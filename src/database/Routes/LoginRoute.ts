import { Router } from 'express';
import LoginController from '../controllers/Login.Controller';
import validateLogin from '../middlewares/validateLogin';

const loginRouter = Router();

loginRouter.post('/', validateLogin, LoginController.login);

export default loginRouter;