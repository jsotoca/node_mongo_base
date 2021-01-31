import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller';
import { signInValidate } from './../middlewares/validators/signup.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();



authRouter.post('/signup',signUp);
authRouter.post('/signin',signInValidate,validationResults,signIn);

export default authRouter;