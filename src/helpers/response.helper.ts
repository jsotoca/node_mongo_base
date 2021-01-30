import { Response } from 'express';

export const _response = (res: Response,status?: number, data?: any) => {
    let statusCode = status || 200;
    res.status(statusCode)
        .json({ data });
    return res;
}

export const _error_response = (res: Response,status?: number, error?: Error) => {
    let statusCode = status || 500;
    res.status(statusCode)
        .json({ error });
    return res;
}