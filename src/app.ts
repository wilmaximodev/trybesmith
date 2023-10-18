import express from 'express';
import productRouter from './Routes/ProductRoute';
import orderRouter from './Routes/OrderRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

export default app;
