import React, { useState } from 'react';
import Image from "next/image";

const Gallery = () => {
    const images = [
        { id: 1, src: "/img1.jpg", alt: "A white film camera with large lens" },
        { id: 2, src: "/img2.jpg", alt: "A white film camera with large lens" },
        { id: 3, src: "/img3.jpg", alt: "A white film camera with large lens" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        // If at the end, go back to 0, otherwise add 1
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        // If at the start, go to the last image, otherwise subtract 1
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    return (
        <div>
            {/* Main Image: Now uses the current index from state */}
            <div>
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={800}
                    height={500}
                    className="flex m-auto rounded-4xl h-1/4 object-cover aspect-video bg-center  border-amber-50 border-2 2xl:w-3/4"
                />
                <button
                    onClick={prevSlide}
                    className="hidden md:block md:absolute w-10 text-center left-85 bottom-3/5 translate-y-32 bg-white/80 p-2 rounded-xl hover:bg-white"
                >
                    ←
                </button>

                <button
                    onClick={nextSlide}
                    className="hidden md:block md:absolute w-10 right-85 bottom-3/5 translate-y-32 bg-white/80 p-2 rounded-xl hover:bg-white"
                >
                    →
                </button>
            </div>
            <div className="flex flex-row justify-center align-center gap-3 py-3">
                {images.map((img, index) => (
                    <button
                        key={img.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`transition-all ${currentIndex === index ? 'scale-105' : 'opacity-70'}`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={100}
                            height={100}
                            className="aspect-square object-cover rounded-md"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Gallery;