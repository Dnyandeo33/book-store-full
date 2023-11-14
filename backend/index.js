import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import bookRoutes from './routes/book.js';
import userRoutes from './routes/user.js';

// configure dotenv
dotenv.config();
const PORT = process.env.PORT || '8000';

// initialize express
const app = express();

// cors
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
);

// parse body and cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// use routes
app.use(userRoutes);
app.use(bookRoutes);

// handle 404
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Page is not found' });
});

// listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
