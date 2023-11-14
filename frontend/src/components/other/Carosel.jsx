import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
    const slides = [
        {
            url: 'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/07/28037_Quote_A1_Iron_Flame_11-07.jpg'
        },
        {
            url: 'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/07/28037_Quote_A2_Fourth_Wing_11-07.jpg'
        },
        {
            url: 'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/03B/27930_BB_B_BestBooksof2023_11-03.jpg'
        },
        {
            url: 'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/11/03B/27930_Quote_B1_BOTY_Finalists_11-3.jpg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className="max-w-[1400px] h-96 w-full m-auto mt-10 border-2 border-white-400 rounded-2xl relative group">
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            {/* Left Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
