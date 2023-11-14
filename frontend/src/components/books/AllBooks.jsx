import { useContext } from 'react';
import { myData } from '../../App';

/* eslint-disable react/prop-types */
const AllBooks = () => {
    const { books } = useContext(myData);
    return (
        <section className="bg-gray-900 text-white">
            <div>
                <div className=" flex my-10 flex-col justify-center items-center text-gray-400 px-10 py-5">
                    <h3 className="text-3xl tracking-widest uppercase font-medium">
                        A book is a gift you can
                    </h3>
                    <span className="text-3xl uppercase tracking-widest font-medium">
                        Open again and again.
                    </span>
                </div>
                <div className="">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-6 gap-5">
                        {books.reverse().map((book) => {
                            const { id, url } = book;
                            return (
                                <div
                                    key={id}
                                    className="mx-4 shadow-sm shadow-white w-52 h-72 rounded-xl hover:scale-105 ease-in duration-300 "
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
        </section>
    );
};

export default AllBooks;
