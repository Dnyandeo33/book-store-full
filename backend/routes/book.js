import express from 'express';
import bookController from '../controllers/book.js';
import verifyToken from '../middleware/verifyToken.js';

const { getBooks, getOneBook, postBook, updateBook, deleteBook, userBooks } =
    bookController;

const routes = express.Router();
routes.get('/books', getBooks);
routes.get('/books/:id', getOneBook);
routes.get('/user/:user_id', verifyToken, userBooks);
routes.post('/add-book', verifyToken, postBook);
routes.put('/update/:id', verifyToken, updateBook);
routes.delete('/delete/:id', verifyToken, deleteBook);

export default routes;
