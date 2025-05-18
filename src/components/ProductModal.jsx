import React from 'react';
import '../styles/_productModal.scss';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="product-modal-overlay" onClick={onClose}>
            <div className="product-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <img src={product.image} alt={product.name} className="product-img" />
                <h2>{product.name}</h2>
                <p className="price">{product.price}₴</p>
                <p className="description">{product.description}</p>
                <button className="add-btn" onClick={() => onAddToCart(product)}>
                    Добавить в корзину
                </button>
            </div>
        </div>
    );
};

export default ProductModal;
