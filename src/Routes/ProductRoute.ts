import { Router } from 'express';
import ProductController from '../database/controllers/Products.Controller';

const productRouter = Router();

productRouter.post('/', ProductController.create);
productRouter.get('/', ProductController.findAll);

export default productRouter;