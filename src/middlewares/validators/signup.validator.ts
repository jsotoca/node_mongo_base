import { body } from 'express-validator';

export const signUpValidate = [
    body('fullname','Los nombres completos son requeridos.').exists().notEmpty().withMessage("no debe estar vacio.").trim().isString(),
    body('email','El email es requerido.').exists().notEmpty().withMessage("no debe estar vacio").trim().isString(),
    body('password','La contraseña es requerida.').exists().notEmpty().withMessage("no debe estar vacio").trim().isString()
];