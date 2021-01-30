import { sign, verify } from 'jsonwebtoken';
import enviroment from '../config/enviroment';
import Payload from "../interfaces/payload.intertace";
import { _err } from './error.helper';

export const generateToken = (payload:Payload) => {
    try {
        return sign(payload,enviroment.TOKEN_SECRET,{ expiresIn: '4h'});
    } catch (error) {
        _err(500,'Error generando token');
    }
}

export const decodeToken = (token: string) => {
    return new Promise<Payload>((resolve, reject) => {
        verify(token, enviroment.TOKEN_SECRET, (err, payload) => {
            if(err){
                reject(err);
                return ;
            }
            else{
                resolve(payload as Payload);
            }
        });
    })
}