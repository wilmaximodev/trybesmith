import { Router } from 'express';
import OrderController from '../controllers/Orders.Controller';

const orderRouter = Router();

orderRouter.get('/', OrderController.findAll);
orderRouter.post('/', OrderController.create);

export default orderRouter;