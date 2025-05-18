import React, { useState } from 'react';
import NavDropdown from './NavDropdown';
import UserModal from './UserModal';
import "../styles/_header.scss";

const Header = () => {
    const [isUserModalOpen, setUserModalOpen] = useState(false);

    const toggleUserModal = () => {
        setUserModalOpen(prev => !prev);
    };

    const handleLinkClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleUserModal();
    };

    return (
        <>
            <header className="main-header">
                <div className="container">
                    <div className="logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </div>

                    <nav className="navbar">
                        <ul className="nav-links">
                            <NavDropdown title="О товаре" items={['Характеристика', 'О товаре']} />
                            <NavDropdown title="О нас" items={['О доставке', 'График работы']} />
                            <NavDropdown title="Доставка" items={['Цены', 'Скидки']} />
                            <NavDropdown title="Контакты" items={['Горящие товары']} />
                            <NavDropdown title="Телефоны" isPhone />
                            <li>
                                <a href="#" onClick={handleLinkClick}>Личный кабинет</a>
                            </li>
                        </ul>
                    </nav>
                                    
                </div>
            </header>
            <UserModal isOpen={isUserModalOpen} onClose={toggleUserModal} />
        </>
    );
};

export default Header;
