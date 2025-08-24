import express from 'express';
import SignupController from '../../controllers/auth/SignupController.js';
import { signupValidate } from '../../validators/auth.js';
import validate from '../../validators/validate.js';

const signupRouter = express.Router();

signupRouter.post('/auth/sign-up', signupValidate, validate, SignupController);

export default signupRouter;
