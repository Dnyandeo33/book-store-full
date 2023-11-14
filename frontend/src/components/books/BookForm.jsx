/* eslint-disable react/prop-types */
const BookForm = ({
    addBook,
    formError,
    response,
    error,
    handleInput,
    handleSubmit
}) => {
    return (
        <div className="container mx-auto items-center my-4 px-4 lg:px-20">
            <div className="w-full border-2 border-gray-400 p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                <form action="" onSubmit={handleSubmit}>
                    <div className="flex">
                        <h1 className="font-bold text-white uppercase text-5xl">
                            Add a Book
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                        <div className=" flex flex-col">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                id="title"
                                name="title"
                                onChange={handleInput}
                                value={addBook.title}
                                autoComplete="off"
                                placeholder="title*"
                            />
                            <p className="text-red-400 text-sm">
                                {formError.title}
                            </p>
                        </div>

                        <div className=" relative flex-col">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="text"
                                id="author"
                                name="author"
                                onChange={handleInput}
                                value={addBook.author}
                                autoComplete="off"
                                placeholder="Author Name*"
                            />
                            <p className="text-red-400 text-sm">
                                {formError.author}
                            </p>
                        </div>
                        <div className=" relative flex-col">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="number"
                                id="price"
                                name="price"
                                onChange={handleInput}
                                value={addBook.price}
                                autoComplete="off"
                                placeholder="Price*"
                            />
                            <p className="text-red-400 text-sm">
                                {formError.price}
                            </p>
                        </div>
                        <div className=" relative flex-col">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                type="url"
                                id="url"
                                name="url"
                                onChange={handleInput}
                                value={addBook.url}
                                autoComplete="off"
                                placeholder="Image url*"
                            />
                            <p className="text-red-400 text-sm">
                                {formError.url}
                            </p>
                        </div>
                    </div>
                    <div className="my-4 relative flex-col">
                        <textarea
                            name="description"
                            id="description"
                            onChange={handleInput}
                            value={addBook.description}
                            autoComplete="off"
                            placeholder="description*"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        ></textarea>
                        <p className="text-red-400 text-sm">
                            {formError.description}
                        </p>
                    </div>
                    <div className=" relative flex-col">
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-30 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="number"
                            id="user_id"
                            name="user_id"
                            onChange={handleInput}
                            value={addBook.user_id}
                            autoComplete="off"
                            placeholder="user id*"
                        />
                        <p className="text-red-400 text-sm">
                            {formError.user_id}
                        </p>
                    </div>
                    <p className=" text-green-600 text-sm">
                        {response.message}
                    </p>
                    <p className=" text-red-400 text-sm">{error.message}</p>
                    <div className="my-2 w-1/2 lg:w-1/4">
                        <button
                            type="submit"
                            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
        focus:outline-none focus:shadow-outline"
                        >
                            Add Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookForm;
