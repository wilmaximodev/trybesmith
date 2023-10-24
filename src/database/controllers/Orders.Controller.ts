import { Request, Response } from 'express';
import OrdersService from '../services/Orders.Service';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const orders = await OrdersService.findAll();
  return res.status(200).json(orders);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  const newOrder = await OrdersService.create(req.body);
  return res.status(201).json(newOrder);
};

export default {
  findAll,
  create,
};