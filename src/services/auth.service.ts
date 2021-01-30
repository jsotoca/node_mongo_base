import SignInDTO from "../interfaces/dtos/signin.interface";
import SignUpDTO from "../interfaces/dtos/signup.interface";
import AuthRepository from "../repositories/auth.repository";

export default class AuthService {

    public static async signUp(signUpDTO:SignUpDTO){
        return await AuthRepository.signUp(signUpDTO);
    }

    public static async signIn(signInDTO:SignInDTO){
        return await AuthRepository.signIn(signInDTO);
    }

}