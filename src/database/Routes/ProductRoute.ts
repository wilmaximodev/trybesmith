import { Router } from 'express';
import ProductController from '../controllers/Products.Controller';
import validateProduct from '../middlewares/validateProduct';

const productRouter = Router();

productRouter.post(
  '/',
  validateProduct.validateName,
  validateProduct.validatePrice,
  ProductController.create,
);
productRouter.get('/', ProductController.findAll);

export default productRouter;