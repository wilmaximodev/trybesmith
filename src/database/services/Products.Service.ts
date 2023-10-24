import { Optional } from 'sequelize';
import productModel, { ProductSequelizeModel } from '../models/product.model';
import { Product } from '../../types/Product';

const create = async (product: Optional<Product, 'id'>): Promise<object> => {
  const { dataValues } = await productModel.create(product);
  const { orderId, ...data } = dataValues; 
  return data;
};

const findAll = async (): Promise<ProductSequelizeModel[]> => {
  const data = await productModel.findAll();
  console.log('My data:', data);
  return data;
};

export default { 
  create,
  findAll,
};