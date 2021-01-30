if(process.env.NODE_ENV != 'production') require('dotenv').config();

const enviroment = {
    APP_PORT        : process.env.APP_PORT,
    MONGO_URI       : process.env.MONGO_URI,
    TOKEN_SECRET    : process.env.TOKEN_SECRET,
};

export default enviroment;