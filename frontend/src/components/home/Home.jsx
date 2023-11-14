import { useContext } from 'react';
import { myData } from '../../App';
import RecentlyAddedBooks from '../books/RecentlyAddedBooks';
import Carousel from '../other/Carosel';

const Home = () => {
    const { books } = useContext(myData);
    return (
        <div className=" flex">
            <section className="bg-gray-900 w-full text-white">
                <Carousel />
                <hr className=" border-4 border-gray-300 mt-12 w-full rounded" />
                <RecentlyAddedBooks books={books} />
            </section>
        </div>
    );
};

export default Home;
