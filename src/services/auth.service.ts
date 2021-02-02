import SignInDTO from "../interfaces/dtos/signin.interface";
import SignUpDTO from "../interfaces/dtos/signup.interface";
import AuthRepository from "../repositories/auth.repository";
import AWSS3 from "./aws-s3.service";
import MailerService from "./mailer.service";

export default class AuthService {

    public static async signUp(signUpDTO: SignUpDTO, file?: any){
        const data = await AuthRepository.signUp(signUpDTO);
        if(data.user && file){
            signUpDTO.avatar = await AWSS3.upload(file,'images/avatar');
            await data.user.updateOne({ avatar: signUpDTO.avatar });
            data.user.avatar = signUpDTO.avatar;
        }
        MailerService.sendEmailConfirmation(data.user);
        return data;
    }

    public static async signIn(signInDTO:SignInDTO){
        return await AuthRepository.signIn(signInDTO);
    }

    public static async verifiedAccount(email: string, token: string){
        return await AuthRepository.verifiedAccount(email, token);
    }

    public static async forgotPassword(email: string){
        const user = await AuthRepository.forgotPassword(email);
        MailerService.sendEmailResetPassword(user);
    }

    public static async resetPassword(email: string, token: string, password: string){
        return await AuthRepository.resetPassword(email, token, password);
    }

}