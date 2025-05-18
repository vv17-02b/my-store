import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Shop from './components/Shop'; // ✅ Добавляем импорт Shop
import Footer from './components/Footer';
import './styles/main.scss';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Shop />
      </main>
      <Footer />
    </>
  );
};

export default App;
