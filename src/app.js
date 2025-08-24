import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import signinRouter from './routes/auth/SigninRoute.js';
import signupRouter from './routes/auth/SignupRoute.js';

dotenv.config();

const app = express();

// general middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// routes
app.use('/api/v1', signinRouter);
app.use('/api/v1', signupRouter);

export default app;
