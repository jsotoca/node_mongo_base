import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller';
import { signUpValidate } from './../middlewares/validators/signup.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();



authRouter.post('/signup',signUpValidate,validationResults,signUp);
authRouter.post('/signin',signInValidate,validationResults,signIn);

export default authRouter;