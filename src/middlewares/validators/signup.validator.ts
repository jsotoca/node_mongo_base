import { body } from 'express-validator';

export const signInValidate = [
    body('email', 'login is required').exists(),
    body('password', 'password is required').exists()
];