import express from 'express';
import routes from './routes';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', routes);

export default app;