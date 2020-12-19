import express from 'express';
import { driverRoute } from './routes/routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
    mongoose.connect('mongodb://localhost/muber_dev');
}

const app = express();

app.use(bodyParser.json());

driverRoute(app);

export { app };
