import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBook from './components/books/Addbook';
import AllBooks from './components/books/AllBooks';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import Navigation from './components/navigation/Navigation';
import Register from './components/register/Register';

// eslint-disable-next-line react-refresh/only-export-components
export const myData = createContext();

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            const response = await axios.get('http://localhost:3000/books');
            setBooks(response.data);
        };
        getBooks();
    }, []);

    return (
        <myData.Provider value={{ books }}>
            <div className="flex">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<AllBooks />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/add-book" element={<AddBook />} />
                </Routes>
            </div>
        </myData.Provider>
    );
}

export default App;
