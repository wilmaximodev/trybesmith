import { Sequelize } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../models/order.model';
import ProductModel from '../models/product.model';

const findAll = async (): Promise<OrderSequelizeModel[]> => {
  const orders = await OrderModel.findAll({
    include: {
      model: ProductModel,
      as: 'productIds',
      attributes: [],
    },
    raw: true,
    attributes: [
      'id',
      'userId',
      [Sequelize.fn('JSON_ARRAYAGG', Sequelize.col('productIds.id')), 'productIds'],
    ],
    group: ['id'],
  });

  return orders;
};

export default {
  findAll,
};