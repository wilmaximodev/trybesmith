import express from 'express';
import productRouter from './database/Routes/ProductRoute';
import orderRouter from './database/Routes/OrderRoute';
import loginRouter from './database/Routes/LoginRoute';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/orders', orderRouter);

app.use('/login', loginRouter);

export default app;
