import db from '../models/index.js';

const Book = db.books;

const bookController = {
    getBooks: async (req, res) => {
        try {
            const allBooks = await Book.findAll({});
            res.status(200).json(allBooks);
        } catch (error) {
            res.status(500).json({ error: "Failed to receive all books" });
        }
    },

    getOneBook: async (req, res) => {
        try {
            const { id } = req.params;
            const oneBook = await Book.findOne({ where: { id } });
            if (oneBook) {
                return res.status(200).json(oneBook);
            } else {
                return res
                    .status(400)
                    .json({ message: `book with ${id} doesn't exist` });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to get book" });
        }
    },

    userBooks: async (req, res) => {
        try {
            const user_id = Number(req.params.user_id);

            const userBooks = await Book.findAll({ where: { user_id } });

            if (userBooks.length > 0) {
                return res.status(200).json(userBooks);
            } else {
                return res.status(404).json({ message: `User doesn't have any book` })
            }
        } catch (error) {
            return res.status(500).json({
                error: "Failed to retrieve user's books"
            });
        }
    },

    postBook: async (req, res) => {
        try {
            const { title, author, description, price, url, user_id } = req.body;

            if (!title || !author || !description || !price || !url || !user_id) {
                return res
                    .status(404)
                    .json({ message: `please fill all fields....` });
            } else {
                await Book.create({
                    title: title,
                    author: author,
                    description: description,
                    price: price,
                    url: url,
                    user_id: user_id
                });
                return res
                    .status(200)
                    .json({ message: `book added successfully..` });
            }
        } catch (error) {
            res.status(500).json({ error: "Failed to add book" });
        }
    },

    updateBook: async (req, res) => {
        try {
            const { id } = req.params;
            const { title, author, price, user_id } = req.body;

            await Book.update(
                { title, author, price, user_id },
                { where: { id: id } }
            );
            return res
                .status(200)
                .json({ message: `book updated successfully...` });
        } catch (error) {
            return res.status(500).json({ error: "failed to update book" });
        }
    },

    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;
            await Book.destroy({ where: { id: id } });
            res.status(200).json({
                message: `book is deleted successfully...`
            });
        } catch (error) {
            return res.status(500).json({ error: "Failed to delete book" });
        }
    }
};

export default bookController;
