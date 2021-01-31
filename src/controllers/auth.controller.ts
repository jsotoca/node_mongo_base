import { Request, Response } from 'express';
import { _error_response, _response } from '../helpers/response.helper';
import SignInDTO from '../interfaces/dtos/signin.interface';
import SignUpDTO from '../interfaces/dtos/signup.interface';
import AuthService from '../services/auth.service';

export const signUp = async(req: Request, res: Response) => {
    const signUpDTO = req.body as SignUpDTO;
    try {
        const data = await AuthService.signUp(signUpDTO);
        _response(res,null,data);
    } catch (error) {
        _error_response(res, error.status || 500, error);
    }
}

export const signIn = async(req: Request, res: Response) => {
    const signInDTO = req.body as SignInDTO;
    try {
        const data = await AuthService.signIn(signInDTO);
        _response(res,201,data);
    } catch (error) {
        _error_response(res, error.status || 500, error);
    }
}