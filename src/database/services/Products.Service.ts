import { Optional } from 'sequelize';
import productModel from '../models/product.model';
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

export default {
  create,
};