import express from 'express';
import { driverRoute } from './routes/routes.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber');

const app = express();

app.use(bodyParser.json());

driverRoute(app);

export { app };
