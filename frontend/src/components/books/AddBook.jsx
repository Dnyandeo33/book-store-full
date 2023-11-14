import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from './BookForm';

const AddProduct = () => {
    const navigate = useNavigate();
    //add product state
    const [addBook, setAddBook] = useState({
        title: '',
        author: '',
        description: '',
        price: '',
        url: '',
        user_id: ''
    });

    // form error state
    const [formError, setFormError] = useState({
        title: '',
        author: '',
        description: '',
        price: '',
        url: '',
        user_id: ''
    });

    // handle server response
    const [response, setResponse] = useState({});

    // handle error
    const [error, setError] = useState({});

    // handleInput
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddBook({ ...addBook, [name]: value });
    };

    // handleSubmit and validation
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputError = {
            title: '',
            author: '',
            description: '',
            price: '',
            url: '',
            user_id: ''
        };

        if (
            !addBook.title &&
            !addBook.author &&
            !addBook.description &&
            !addBook.price &&
            !addBook.url &&
            !addBook.user_id
        ) {
            setFormError({
                ...inputError,
                title: 'Enter valid name',
                author: 'Enter valid category name',
                description: 'Write brief description about product',
                price: `Add a valid price`,
                url: `Add a image url`,
                user_id: `Add user id`
            });
            return;
        }
        if (!addBook.title) {
            setFormError({
                ...inputError,
                title: 'Enter valid title'
            });
            return;
        }
        if (!addBook.author) {
            setFormError({
                ...inputError,
                author: 'Enter valid author name'
            });
            return;
        }
        if (!addBook.description) {
            setFormError({
                ...inputError,
                description: 'Write brief description about product'
            });
            return;
        }
        if (!addBook.price) {
            setFormError({
                ...inputError,
                price: `Add a valid price`
            });
            return;
        }
        if (!addBook.url) {
            setFormError({
                ...inputError,
                url: `Add a image url`
            });
            return;
        }
        if (!addBook.user_id) {
            setFormError({
                ...inputError,
                user_id: `Add a valid user id`
            });
            return;
        }

        setFormError(inputError);
        setFormError((prevState) => ({
            ...prevState,
            successMsg: `Product added successfully...!`
        }));

        const { title, author, description, price, url, user_id } = addBook;

        // adding new product
        const newProduct = { title, author, description, price, url, user_id };

        // post product to server
        const postProduct = async () => {
            try {
                const res = await axios.post(
                    'http://localhost:3000/add-book',
                    newProduct
                );
                setResponse(res.data);
                navigate('/');
            } catch (error) {
                setError(error.response.data);
            }
        };
        postProduct();
        setAddBook({
            title: '',
            author: '',
            description: '',
            price: '',
            url: '',
            user_id: ''
        });
    };

    // form for product
    return (
        <section className="bg-gray-50 w-full flex flex-col justify-center items-center dark:bg-gray-900">
            <BookForm
                formError={formError}
                response={response}
                error={error}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                addBook={addBook}
            />
        </section>
    );
};

export default AddProduct;
