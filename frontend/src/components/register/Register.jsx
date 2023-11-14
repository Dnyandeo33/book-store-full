'use client';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validateEmail from '../../utils/validateEmail';
import validatePassword from '../../utils/validatePassword';
import verifyPassword from '../../utils/verifyPassword';

const Register = () => {
    const navigate = useNavigate();
    // registration state
    const [userRegistration, setUserRegistration] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    // form error state
    const [formError, setFormError] = useState({
        email: '',
        password: '',
        rePassword: ''
    });

    // handle server response state
    const [response, setResponse] = useState({});

    const [error, setError] = useState({});

    // handle input
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegistration({ ...userRegistration, [name]: value });
    };

    // handle submit and validation
    const handleSubmit = (e) => {
        e.preventDefault();
        let inputError = {
            email: '',
            password: '',
            rePassword: ''
        };

        if (
            !userRegistration.email &&
            !userRegistration.password &&
            !userRegistration.rePassword
        ) {
            setFormError({
                ...inputError,
                email: 'Enter valid email address',
                password: `Password shouldn't be empty`
            });
            return;
        }
        if (!userRegistration.email) {
            setFormError({
                ...inputError,
                email: 'Enter valid email address'
            });
            return;
        }
        if (!userRegistration.password) {
            setFormError({
                ...inputError,
                password: `Password shouldn't be empty`
            });
            return;
        }
        if (!userRegistration.password !== !userRegistration.rePassword) {
            setFormError({
                ...inputError,
                rePassword: `Password & confirm password should be same`
            });
            return;
        }

        setFormError(inputError);
        setFormError((prevState) => ({
            ...prevState,
            successMsg: `Registration successful, Please login!`
        }));

        const { email, password, rePassword } = userRegistration;

        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        const isVerifyPassword = verifyPassword(password, rePassword);

        if (isValidEmail && isValidPassword && isVerifyPassword) {
            const newUser = { email, password, rePassword };

            // user registration function
            const postRegister = async () => {
                try {
                    const res = await axios.post(
                        'http://localhost:3000/register',
                        newUser
                    );
                    setResponse(res.data);
                    navigate('/login');
                } catch (error) {
                    console.log(error);
                    setError(error.response.data);
                }
            };
            postRegister();
            setUserRegistration({
                email: '',
                password: '',
                rePassword: ''
            });
        }
    };

    return (
        <section className="bg-gray-50 w-full flex flex-col justify-center items-center dark:bg-gray-900">
            <svg
                className="w-20 h-20 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
            >
                <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
            </svg>
            <h1 className="text-5xl p-10 text-white font-bold">Bookshop</h1>
            <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Register your account
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                autoComplete="off"
                                id="email"
                                name="email"
                                value={userRegistration.email}
                                onChange={handleInput}
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                required=""
                            />
                        </div>
                        <p className="text-red-400 text-sm">
                            {formError.email}
                        </p>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                autoComplete="off"
                                id="password"
                                name="password"
                                value={userRegistration.password}
                                onChange={handleInput}
                                type="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <p className="text-red-400 text-sm">
                            {formError.password}
                        </p>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm Password
                            </label>
                            <input
                                autoComplete="off"
                                id="rePassword"
                                name="rePassword"
                                value={userRegistration.rePassword}
                                onChange={handleInput}
                                type="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required=""
                            />
                        </div>
                        <p className="text-red-400 text-sm">
                            {formError.rePassword}
                        </p>
                        <p className=" text-green-600 text-sm">
                            {response.message}
                        </p>
                        <p className=" text-red-400 text-sm">{error.message}</p>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Register
                        </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <a
                                href="/login"
                                className="font-medium p-2 text-primary-600 hover:underline dark:text-primary-500"
                            >
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
