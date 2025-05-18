// HomePage.js
import React from 'react';
import Hero from './components/Hero'; // Путь в зависимости от структуры

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero /> {/* Здесь Hero будет отображаться */}
            {/* Другой контент страницы */}
        </div>
    );
};

export default HomePage;
