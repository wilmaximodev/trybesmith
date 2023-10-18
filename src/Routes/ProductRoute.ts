import { Router } from 'express';
import ProductController from '../database/controllers/Products.Controller';

const productRouter = Router();

productRouter.post('/', ProductController.create);

export default productRouter;