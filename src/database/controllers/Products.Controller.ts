import { Request, Response } from 'express';
import productsService from '../services/Products.Service';

const create = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;
  const newProduct = await productsService.create({ name, price, orderId });
  return res.status(201).json(newProduct);
};

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productsService.findAll();
  return res.status(200).json(products);
};

export default {
  create,
  findAll,
};