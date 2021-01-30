import express from 'express';
import authRouter from './auth.router';

const routers = express();

routers.use('/auth',authRouter);

export default routers;