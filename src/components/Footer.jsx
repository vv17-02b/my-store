import React from 'react';
import '../styles/_footer.scss';
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h3 className="footer__title">Интернет-магазин "Пристиж"</h3>

                <div className="footer__top">
                    <div className="footer__left">
                        <div className="footer__columns">
                            <div className="footer__column">
                                <h4>Услуги:</h4>
                                <ul>
                                    <li>Доставка</li>
                                    <li>Услуги</li>
                                    <li>Техническая поддержка</li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <h4>Отзывы и прочее:</h4>
                                <ul>
                                    <li>Отзывы</li>
                                    <li>Лайки: <span>125</span></li>
                                    <li>Гарантия</li>
                                </ul>
                            </div>
                            <div className="footer__column">
                                <h4>Наши сервисы:</h4>
                                <ul>
                                    <li>Сервис Харьков</li>
                                    <li>Сервис Киев</li>
                                    <li>Сервис Черкассы</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer__right">
                        <h4>Мы в социальных сетях:</h4>
                        <div className="footer__social-icons">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTelegramPlane /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaYoutube /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__icons">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <img key={num} src={`/server/service_${num}.png`} alt={`Сервис ${num}`} />
                        ))}
                    </div>
                    <p className="footer__copy">
                        © {new Date().getFullYear()}Пристиж. Всі права захищен.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
