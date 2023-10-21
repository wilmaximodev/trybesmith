import express from 'express';
import productRouter from './Routes/ProductRoute';
import orderRouter from './Routes/OrderRoute';
import loginRouter from './Routes/LoginRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

app.use('/login', loginRouter);

export default app;
