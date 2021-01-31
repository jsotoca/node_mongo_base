import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { _error_response } from '../../helpers/response.helper';

export const validationResults = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        _error_response(res,422,errors);
    }
    else next();
}