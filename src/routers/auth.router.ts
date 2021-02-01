import { Router } from 'express';
import { signIn, signUp, verifiedAccount } from '../controllers/auth.controller';
import { signUpValidate } from './../middlewares/validators/signup.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();



authRouter.post('/signup',signUpValidate,validationResults,signUp);
authRouter.post('/signin',signInValidate,validationResults,signIn);
authRouter.post('/confirmation/:email/:token',verifiedAccount);

export default authRouter;