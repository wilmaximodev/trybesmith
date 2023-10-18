import { Router } from 'express';
import OrderController from '../database/controllers/Orders.Controller';

const orderRouter = Router();

orderRouter.get('/', OrderController.findAll);

export default orderRouter;