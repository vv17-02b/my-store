// Hero.jsx
import React, { useState, useEffect } from 'react';
import "../styles/_hero.scss";  // Путь назад на один уровень


const Hero = () => {
    const [images, setImages] = useState([
        '/images/image1.jpg', // Путь к картинкам в папке public/images
        '/images/image2.jpg',
        '/images/image3.jpg',
        '/images/image4.jpg',
        '/images/image5.jpg',
        '/images/image6.jpg',

    ]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Изменение изображения каждые 3 секунды
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval); // Очищаем интервал при размонтировании
    }, [images]);

    return (
        <section className="hero">
            <div className="hero__left">
                <h1 className="blog__hero-title">Інтернет-магазин Пристиж</h1>
                <p className="blog__hero-description">
                    Купуйте товари високої якості за доступними цінами.
                </p>
                <a href="#shop" className="btn-reset hero__btn">Смотреть наши товары</a>
            </div>

            <div className="hero__right">
                <img
                    src={images[currentImageIndex]}
                    alt="Product Image"
                    className="hero__img"
                />
            </div>
        </section>
    );
};

export default Hero;
