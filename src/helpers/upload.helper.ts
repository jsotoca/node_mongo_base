import multer from 'multer';

const upload = multer({ dest: '/upload'});

export const uploadSingle = (name: string) => {
    return upload.single(name);
}

export const uploadArray = (name: string, max: number) => {
    return upload.array(name, max);
}

export const uploadFields = (fields: any[]) => {
    return upload.fields(fields);
}