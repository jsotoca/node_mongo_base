import { body } from 'express-validator';

export const signInValidate = [
    body('email', 'El email es requerido.').exists(),
    body('password', 'El password es requerido').exists()
];