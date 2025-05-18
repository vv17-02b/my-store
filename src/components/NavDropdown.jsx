import React, { useState } from 'react';

const NavDropdown = ({ title, items = [], isPhone = false }) => {
    const [open, setOpen] = useState(false);
    const [generatedItem, setGeneratedItem] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setOpen(!open);

        if (isPhone) {
            const phones = [
                '+38 (050) 123-45-67',
                '+38 (067) 987-65-43',
                '+38 (093) 555-33-11'
            ];
            const phone = phones[Math.floor(Math.random() * phones.length)];
            setGeneratedItem(phone);
        }
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`Скопировано: ${text}`);
        });
    };

    const renderItems = isPhone ? [generatedItem] : items;

    return (
        <li className="nav-item">
            <a href="#" onClick={handleClick}>{title}</a>
            {open && (
                <ul className="dropdown-menu">
                    {renderItems.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (isPhone) handleCopy(item);
                                }}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default NavDropdown;
