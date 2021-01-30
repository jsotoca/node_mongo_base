import { Schema, model } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt';
import Roles from '../enums/roles.enum';
import IUser from '../interfaces/models/user.interface';

const userSchema = new Schema({
    fullname: { type: String, required:true, lowercase:true, trim: true },
    email: { type: String, required:true, lowercase:true, trim: true, unique: true },
    password: { type: String, required:true, trim: true },
    avatar: { type: String, default:'no_avatar.png' },
    role: { type: String, enum:Roles, default:Roles.USER },
    actived: { type: Boolean, default: true }
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
    return compareSync(password, this.password);
});

const User = model<IUser>('user',userSchema);
export default User;