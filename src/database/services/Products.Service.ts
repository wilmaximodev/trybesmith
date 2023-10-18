import { Optional } from 'sequelize';
import productModel, { ProductSequelizeModel } from '../models/product.model';
import { Product } from '../../types/Product';
import { ResponseData } from '../../types/responseData';

const create = async (product: Optional<Product, 'id'>): Promise<ResponseData> => {
  const { dataValues } = await productModel.create(product);
  const { orderId, ...data } = dataValues; 
  return {
    status: 201,
    data,
  };
};

const findAll = async (): Promise<ProductSequelizeModel[]> => {
  const data = await productModel.findAll();
  console.log(data);
  return data;
};

export default { 
  create,
  findAll,
};