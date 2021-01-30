import { Document } from 'mongoose';

export default interface IUser extends Document {
    fullname: string,
    email: string,
    password: string,
    avatar?: string,
    role?: string,
    actived?: boolean,
    
    comparePasswords(password: string): boolean
}