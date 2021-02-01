import { Schema, model } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';
import Roles from '../enums/roles.enum';
import IUser from '../interfaces/models/user.interface';
import { _err } from '../helpers/error.helper';

const userSchema = new Schema({
    fullname: { type: String, required:true, lowercase:true, trim: true },
    email: { type: String, required:true, lowercase:true, trim: true, unique: true },
    password: { type: String, required:true, trim: true },
    avatar: { type: String, default:'no_avatar.png' },
    role: { type: String, enum:Roles, default:Roles.USER },
    verified: { type: Boolean, default: false },
    actived: { type: Boolean, default: false }
},{ timestamps: true });

userSchema.methods.toJSON = function<IUser>(){
    let user = this.toObject();
    delete user.password;
    return user;
}

userSchema.pre<IUser>('save',function(next){
    if(!this.isModified('password')) next();
    this.password = hashSync(this.password,10);
    next();
});

userSchema.method('comparePasswords',function<IUser>(password: string){
    try {
        return compareSync(password, this.password);
    } catch (error) {
        _err(500,error.message);
    }
});

const User = model<IUser>('user',userSchema);
export default User;