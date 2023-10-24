import { Sequelize } from 'sequelize';
import OrderModel, { OrderSequelizeModel } from '../models/order.model';
import ProductModel from '../models/product.model';
import { Order } from '../../types/Order';

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

// cadastrar novo pedido no formato {
//   "productIds": [1, 2],
//   "userId": 1
// }

const create = async (order: Order): Promise<object> => {
  const myOrder = await OrderModel.create(order);
  console.log(myOrder);

  return myOrder;
};

export default {
  findAll,
  create,
};