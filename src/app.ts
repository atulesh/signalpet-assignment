import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { env } from './config/env';

const app = express();
const router = Router();

app.use(
    cors({
        origin: env.CORS_ORIGIN,
    }),
);
app.use(express.json());

app.use(cookieParser());

export default app;
