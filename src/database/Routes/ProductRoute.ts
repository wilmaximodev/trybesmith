import { Router } from 'express';
<<<<<<< HEAD:src/database/Routes/ProductRoute.ts
import ProductController from '../controllers/Products.Controller';
import validateProduct from '../middlewares/validateProduct';

const productRouter = Router();

productRouter.post(
  '/',
  validateProduct.validateName,
  validateProduct.validatePrice,
  ProductController.create,
);
=======
import ProductController from '../database/controllers/Products.Controller';

const productRouter = Router();

productRouter.post('/', ProductController.create);
>>>>>>> parent of 525701a (Challenge 5, validations on products):src/Routes/ProductRoute.ts
productRouter.get('/', ProductController.findAll);

export default productRouter;