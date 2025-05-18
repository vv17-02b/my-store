import React, { useState } from 'react';
import '../styles/_shop.scss';

const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Товар ${i + 1}`,
    description: `Описание товара ${i + 1}`,
    price: (10000 + i * 1000).toLocaleString(),
    discount: (i % 3 === 0) ? 'Скидка 10%' : null,
    image: `/products/${(i % 6) + 1}.jpg`, // Пример пути к изображениям
}));

const Shop = () => {
    const [category, setCategory] = useState('Все');
    const [cart, setCart] = useState([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleCart = (product) => {
        setCart((prev) =>
            prev.includes(product)
                ? prev.filter((item) => item !== product)
                : [...prev, product]
        );
    };

    const filteredProducts = category === 'Все'
        ? products
        : products.filter((_, i) => category === 'Битовая техника' ? i % 2 === 0 : i % 2 !== 0);

    return (
        <section id="shop" className="shop">
            {/* Левая колонка (фильтр и описание товара) */}
            <div className="shop__left">
                <h2>Наши товары</h2>

                {/* Категории товаров */}
                <div className="dropdown">
                    <button onClick={() => setDropdownVisible(!dropdownVisible)} className="dropdown__toggle">
                        Категории
                    </button>
                    {dropdownVisible && (
                        <ul className="dropdown__menu">
                            <li onClick={() => setCategory('Битовая техника')}>Битовая техника</li>
                            <li onClick={() => setCategory('Электроника')}>Электроника</li>
                            <li onClick={() => setCategory('Все')}>Все</li>
                        </ul>
                    )}
                </div>

                {/* Список товаров с кликом для выбора */}
                <ul className="product-list">
                    {filteredProducts.map((product) => (
                        <li key={product.id} onClick={() => setSelectedProduct(product)}>
                            {product.title}
                        </li>
                    ))}
                </ul>

                {/* Иконки */}
                <div className="shop__icons">
                    <img src="/icons/delivery.png" alt="Доставка" />
                    <img src="/icons/guaranty.png" alt="Гарантія" />
                    <img src="/icons/quality.png" alt="Якість" />
                    <img src="/icons/time.png" alt="Час" />
                </div>

                {/* Описание выбранного товара */}
                {selectedProduct && (
                    <div className="product-detail">
                        <h3>{selectedProduct.title}</h3>
                        <img src={selectedProduct.image} alt={selectedProduct.title} />
                        <p>{selectedProduct.description}</p>
                        <div className="price">
                            <span>{selectedProduct.price} гр</span>
                            {selectedProduct.discount && <span className="discount">{selectedProduct.discount}</span>}
                        </div>
                        <button
                            className={cart.includes(selectedProduct) ? 'active' : ''}
                            onClick={() => toggleCart(selectedProduct)}
                        >
                            {cart.includes(selectedProduct) ? 'Удалить' : 'Добавить 🛒'}
                        </button>
                    </div>
                )}
            </div>

            {/* Правая колонка (Карточки товаров) */}
            <div className="shop__right">
                <div className="grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="card">
                            <img src={product.image} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <div className="price">
                                <span>{product.price} ₽</span>
                                {product.discount && <span className="discount">{product.discount}</span>}
                            </div>
                            <button
                                className={cart.includes(product) ? 'active' : ''}
                                onClick={() => toggleCart(product)}
                            >
                                {cart.includes(product) ? 'Удалить' : 'Добавить 🛒'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Shop;
