import { S3 } from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import enviroment from '../config/enviroment';
import { extname } from 'path';
import fs from 'fs';
import { _err } from '../helpers/error.helper';
import { v4 as uuidv4 } from 'uuid';

export default class AWSS3 {
    private _s3: S3;
    private _params: PutObjectRequest;
    private static _instance: AWSS3;

    private constructor(){
        this._s3 = new S3({
            accessKeyId: enviroment.AWS_ACCESS_KEY_ID,
            secretAccessKey: enviroment.AWS_SECRET_KEY
        });
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    public static async upload(file: any, route: string){
        return new Promise<string>((resolve, reject) => {
            try {
                this.setParams(file, route);
                this.instance._s3.upload(this._instance._params,(err, data) =>{
                    if(err) reject(err);
                    else resolve(data.Location);
                });
            } catch (error) {
                reject(error);
            }
        })
    }

    private static generateUrl(file: any, route: string){
        const name:string = uuidv4();
        const url = `${route}/${name}`+extname(file.originalname);
        return url;
    }

    private static setParams(file: any, route: string){
        try {
            const fileContent = fs.createReadStream(file.path);
            const url = this.generateUrl(file,route);
            this.instance._params = {
                Bucket: enviroment.AWS_BUCKET,
                Key: url,
                Body: fileContent,
                ACL: 'public-read'
            }
        } catch (error) {
            _err(500,'Ocurrio un error leyendo el archivo',error.message);
        }
        
    }
}