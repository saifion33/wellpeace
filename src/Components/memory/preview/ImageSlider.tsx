import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import campingImage from '/src/assets/images/camping.svg';
import weddingImage from '/src/assets/images/wedding.svg';
import happyMomentImage from '/src/assets/images/happy moment.svg';
import birthdayImage from '/src/assets/images/birthday.svg';
import glidingImage from '/src/assets/images/gliding.svg';
import tripImage from '/src/assets/images/trip.svg';
import weekendImage from '/src/assets/images/weekend.svg';
const images = [
    campingImage,
    weddingImage,
    happyMomentImage,
    birthdayImage,
    glidingImage,
    tripImage,
    weekendImage
];
const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    return (
        <div className='flex justify-center items-center' style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
            <AnimatePresence custom={direction}>
                <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt="slider image"
                    style={{
                        position: 'absolute',
                        width: '80%',
                        height: 'auto',
                        objectFit: 'cover',
                    }}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 200, damping: 50 },
                        opacity: { duration: 0.3 },
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

export default ImageSlider;
