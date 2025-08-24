import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import signinRouter from './routes/auth/SigninRoute.js';
import signupRouter from './routes/auth/SignupRoute.js';
import notesRoute from './routes/notes/NotesRoute.js';
import errorHandler from './lib/errorHandler.js';
import notFound from './controllers/notFound/NotFoundController.js';

dotenv.config();

const app = express();

// general middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// routes
app.use('/api/v1', signinRouter);
app.use('/api/v1', signupRouter);
app.use('/api/v1', notesRoute);

app.use(notFound);

app.use(errorHandler);

export default app;
