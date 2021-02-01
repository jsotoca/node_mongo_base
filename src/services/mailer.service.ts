import nodemailer from 'nodemailer';
import enviroment from '../config/enviroment';
import ErrorTitles from '../enums/error-titles.enum';
import { _err } from '../helpers/error.helper';
import MailerOptions from '../interfaces/mailer.interface';
import IUser from '../interfaces/models/user.interface';

export default class MailerService {
    private _transport;
    private static _instance: MailerService;

    private constructor(){
        this._transport = nodemailer.createTransport({
            host: enviroment.SMTP_HOST,
            port: enviroment.SMTP_PORT,
            secure: true,
            auth: {
                user: enviroment.SMTP_USER,
                pass: enviroment.SMTP_PASSWORD
            }
        });
    }

    private static get instance(){
        return this._instance || (this._instance = new this());
    }

    private static async sendEmail(mailerOptions:MailerOptions){
        try {
            await this.instance._transport.sendMail(mailerOptions);
        } catch (error) {
            _err(500,`Ocurrio un error enviando email a ${mailerOptions.to}`, ErrorTitles.ERROR_EMAIL);
        }
    }

    public static async sendEmailConfirmation(user:IUser){
        const mailerOptions: MailerOptions = {
            from: enviroment.MAIL,
            to: user.email,
            subject: ` Confirma tu cuenta en ${enviroment.APP_NAME}`,
            text: "Sending test email 123456",
        }
        await this.sendEmail(mailerOptions);
    }
}