import express from 'express';
import path from 'path';
import cors from 'cors';
import config from './config/index.js';

import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment'
import route from './api/routes/index.js'
import bodyParser from 'body-parser';


async function startServer() {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.listen(config.PORT)
    app.use('/api', route)
    app.use(express.json())
    mongoose.connect(config.DB,
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // }
    ).then(console.log('Mongo connected at port:', config.PORT)).catch(e => console.log('error:', e))
    // autoIncrement.initialize(mongoose.connection);

}

startServer();