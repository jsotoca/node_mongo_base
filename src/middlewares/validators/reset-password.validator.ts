import { body } from 'express-validator';

export const resetPasswordValidate = [
    body('password','La contraseña es requerida.').exists()
];