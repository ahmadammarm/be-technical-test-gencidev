import express from 'express';
import SigninController from '../../controllers/auth/SigninController.js';
import { signinValidate } from '../../validators/auth.js';
import validate from '../../validators/validate.js';

const signinRouter = express.Router();

signinRouter.post('/auth/sign-in', signinValidate, validate, SigninController);

export default signinRouter;
