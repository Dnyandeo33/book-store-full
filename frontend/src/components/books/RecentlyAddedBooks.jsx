/* eslint-disable react/prop-types */

const RecentlyAddedBooks = ({ books }) => {
    return (
        <div>
            <div className="flex item-center text-gray-400 justify-between px-10 py-5">
                <h3 className="text-sm font-medium">Newly added books</h3>

                <span className="text-sm font-medium">See All</span>
            </div>
            <div className="">
                <div className=" grid md:grid-cols-2 lg:grid-cols-5 gap-2">
                    {books
                        .slice(-5)
                        .reverse()
                        .map((book) => {
                            const { id, url } = book;
                            return (
                                <div
                                    key={id}
                                    className=" mx-10 shadow-sm shadow-white w-52 h-72 rounded-xl hover:scale-105 ease-in duration-300 "
                                >
                                    <div className="grid justify-center items-center">
                                        <div className=" m-auto">
                                            <img
                                                alt="/"
                                                src={url}
                                                className=" w-60 h-72 rounded-xl"
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default RecentlyAddedBooks;
