import React from 'react';

const Cart = ({ items, removeFromCart }) => {
    return (
        <div className="cart">
            <h3>Корзина</h3>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price} грн
                        <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
