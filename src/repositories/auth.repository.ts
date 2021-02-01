import ErrorTitles from "../enums/error-titles.enum";
import { _err } from "../helpers/error.helper";
import { decodeTemporalToken, generateToken } from "../helpers/token.helper";
import SignInDTO from "../interfaces/dtos/signin.interface";
import SignUpDTO from "../interfaces/dtos/signup.interface";
import IUser from "../interfaces/models/user.interface";
import Payload from "../interfaces/payload.intertace";
import User from "../models/user.model";

export default class AuthRepository {

    public static async signUp(signUpDTO: SignUpDTO){
        const { email } = signUpDTO;
        const found = await User.findOne({ email });
        if(found) _err(401,`El email ${email} ya se encuentra registrado en la base de datos`);
        try {
            const user = await User.create(signUpDTO);
            const token = generateToken({ _id: user._id});
            return { user, token };
        } catch (error) {
            _err(500,error.message,ErrorTitles.ERROR_DATABASE);
        }
    }

    public static async signIn(signInDTO: SignInDTO){
        const { email, password } = signInDTO;
        const found = await User.findOne({ email });
        if(!found) _err(401,`Email y/o contraseña incorrectas.`);
        if(!found.comparePasswords(password)) _err(401,`Email y/o contraseña incorrectas!`);
        const token = generateToken({ _id: found._id});
        return { user:found, token };
    }

    public static async verifiedAccount(email: string, token: string){
        const found: IUser = await User.findOne({ email });
        if(!found) _err(401,`Email no registrado.`);
        if(found.verified) _err(201,`Email ya verificado.`);
        try {
            const payload:Payload = await decodeTemporalToken(token,found);
            if(email != payload.email) _err(403,`Email no coincide.`);
            found.verified = true;
            found.actived = true;
            await found.save();
        } catch (error) {
            _err(500,`Se produjo un error autentificando al usuario.`);
        }
    }

    public static async forgotPassword(email: string){
        const found: IUser = await User.findOne({ email });
        if(!found) _err(401,`Email no registrado en la BD.`);
        if(!found.verified) _err(403,`La cuenta no esta verificada.`);
        if(!found.actived) _err(403,`La cuenta fue dada de baja.`);
        return found;
    }

}