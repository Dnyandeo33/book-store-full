import express from 'express';
import userControllers from '../controllers/user.js';

const { register, login, logout } = userControllers;
const routes = express.Router();

routes.post('/register', register);
routes.post('/login', login);
routes.post('/logout', logout);

export default routes;
