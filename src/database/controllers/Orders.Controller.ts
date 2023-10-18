import { Request, Response } from 'express';
import OrdersService from '../services/Orders.Service';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await OrdersService.findAll();
  return res.status(200).json(orders);
};

export default {
  findAll,
};