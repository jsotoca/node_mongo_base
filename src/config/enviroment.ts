if(process.env.NODE_ENV != 'production') require('dotenv').config();

const enviroment = {
    APP_NAME        : process.env.APP_NAME,
    APP_PORT        : process.env.APP_PORT,
    MONGO_URI       : process.env.MONGO_URI,
    TOKEN_SECRET    : process.env.TOKEN_SECRET,
    MAIL            : process.env.MAIL,
    SMTP_HOST       : process.env.SMTP_HOST,
    SMTP_PORT       : parseInt(process.env.SMTP_PORT),
    SMTP_SECURE     : process.env.SMTP_SECURE,
    SMTP_USER       : process.env.SMTP_USER,
    SMTP_PASSWORD   : process.env.SMTP_PASSWORD
};

export default enviroment;