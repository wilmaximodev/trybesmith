import { Router } from 'express';
import ProductController from '../database/controllers/Products.Controller';
import validateProduct from '../database/middlewares/validateProduct';

const productRouter = Router();

productRouter.post(
  '/',
  validateProduct.validateName,
  validateProduct.validatePrice,
  ProductController.create,
);
productRouter.get('/', ProductController.findAll);

export default productRouter;