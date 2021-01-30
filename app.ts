import mongoose from 'mongoose';
import enviroment from './src/config/enviroment';
import Server from './src/server/server';

mongoose.connect(
    enviroment.MONGO_URI,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        if(err) throw err;
        else {
            console.log("Wow, mongo db online!");
            const server = new Server();
            server.start();
        }
    }
)