import { Request, Response } from 'express';
import { _err } from '../helpers/error.helper';
import { _error_response, _response } from '../helpers/response.helper';
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