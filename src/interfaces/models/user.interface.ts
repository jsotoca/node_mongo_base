import { Document } from 'mongoose';

export default interface IUser extends Document {
    fullname: string
    email: string
    password: string
    avatar?: string
    role?: string
    verified?: boolean
    actived?: boolean
    createdAt?: string
    updatedAt?: string
    comparePasswords(password: string): boolean
}