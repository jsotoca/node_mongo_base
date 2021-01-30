import { _err } from "../helpers/error.helper";
import { generateToken } from "../helpers/token.helper";
import SignUpDTO from "../interfaces/dtos/signup.interface";
import User from "../models/user.model";

export default class AuthRepository {

    public static async signUp(signUpDTO:SignUpDTO){
        const { email } = signUpDTO;
        const found = await User.findOne({ email });
        if(found) _err(401,`${email} ya registrado en la base de datos`);
        try {
            const user = await User.create(signUpDTO);
            const token = generateToken({ _id: user._id});
            return { user, token };
        } catch (error) {
            _err(500,error.message);
        }
    }

}