import { Router } from 'express';
import { forgotPassword, resetPassword, signIn, signUp, verifiedAccount } from '../controllers/auth.controller';
import { signUpValidate } from './../middlewares/validators/signup.validator';
import { signInValidate } from '../middlewares/validators/signin.validator';
import { resetPasswordValidate } from './../middlewares/validators/reset-password.validator';
import { validationResults } from '../middlewares/validators/Validationresults.validator';

const authRouter = Router();



authRouter.post('/signup',signUpValidate,validationResults,signUp);
authRouter.post('/signin',signInValidate,validationResults,signIn);
authRouter.post('/confirmation/:email/:token',verifiedAccount);
authRouter.post('/forgot-password/:email',forgotPassword);
authRouter.post('/reset-password/:email/:token',resetPasswordValidate,validationResults,resetPassword);

export default authRouter;