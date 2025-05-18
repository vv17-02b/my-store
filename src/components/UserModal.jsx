import React, { useState } from 'react';
import dummyProducts from '../data/dummyProducts';
import ProductModal from './ProductModal';
import '../styles/_modal.scss';

const UserModal = ({ isOpen, onClose }) => {
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleProduct = (product) => {
        setCart(prev =>
            prev.find(p => p.id === product.id)
                ? prev.filter(p => p.id !== product.id)
                : [...prev, product]
        );
    };

    return (
        <>
            <div className={`user-modal ${isOpen ? 'open' : ''}`}>
                <div className="user-modal-content">
                    <button className="close-btn" onClick={onClose}>×</button>

                    <h2>Личный кабинет</h2>
                    <form className="register-form">
                        <input type="text" placeholder="Имя" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Пароль" />
                        <button type="submit">Регистрация</button>
                    </form>

                    <h3>Товары</h3>
                    <ul className="product-list">
                        {dummyProducts.map(product => (
                            <li key={product.id} onClick={() => setSelectedProduct(product)}>
                                {product.name} – {product.price}₴
                                <button onClick={(e) => {
                                    e.stopPropagation();
                                    toggleProduct(product);
                                }}>
                                    {cart.find(p => p.id === product.id) ? 'Удалить' : 'Добавить'}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <h3>🛒 Корзина:</h3>
                    {cart.length === 0 ? <p>Корзина пуста</p> : (
                        <ul className="cart-list">
                            {cart.map(item => (
                                <li key={item.id}>{item.name} – {item.price}₴</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    isOpen={selectedProduct !== null}
                    onClose={() => setSelectedProduct(null)}
                    onAddToCart={toggleProduct}
                />
            )}
        </>
    );
};

export default UserModal;
