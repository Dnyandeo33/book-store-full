import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Navigation = () => {
    const getCookies = new Cookies();
    const isCookieSet = getCookies.get('token');
    return (
        <div className="flex flex-col items-center w-40 h-screen overflow-hidden text-gray-400 bg-gray-900 border-r-2 border-gray-600">
            <Link
                className="flex justify-center items-center w-full px-3 mr-5 mt-3"
                to="#"
            >
                <svg
                    className="w-5 h-5 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                >
                    <path d="M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z" />
                </svg>
                <Link to="/">
                    <span className="ml-2 text-sm text-white font-bold">
                        Bookshop
                    </span>
                </Link>
            </Link>
            <div className="w-full px-2">
                <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                    <Link
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        to="#"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                        <Link to="/">
                            <span className="ml-2 text-sm font-medium">
                                Home
                            </span>
                        </Link>
                    </Link>
                    <Link
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        to="#"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Search</span>
                    </Link>
                    <Link
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        to="#"
                    >
                        <svg
                            className="w-5 h-5 stroke-current"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 18"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"
                            />
                        </svg>

                        <Link to="/books">
                            <span className="ml-2 text-sm font-medium">
                                Books
                            </span>
                        </Link>
                    </Link>
                    <Link
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        to="#"
                    >
                        <svg
                            className="w-5 h-5 stroke-current"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 16 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"
                            />
                        </svg>

                        <Link to="/add-book">
                            <span className="ml-2 text-sm font-medium">
                                Add Book
                            </span>
                        </Link>
                    </Link>
                </div>
                <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                    <Link
                        className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
                        to="#"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="ml-2 text-sm font-medium">Books</span>
                    </Link>
                </div>
            </div>
            <Link
                className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-gray-300"
                to="#"
            >
                <svg
                    className="w-6 h-6 stroke-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                {!isCookieSet ? (
                    <Link to="/login">
                        <span className="ml-2 text-sm font-medium">Login</span>
                    </Link>
                ) : (
                    <Link to="/logout">
                        <span className="ml-2 text-sm font-medium">Logout</span>
                    </Link>
                )}
            </Link>
        </div>
    );
};

export default Navigation;
