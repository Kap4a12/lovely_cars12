import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h2>Контакты для записи</h2>
                <p><strong>Андреев Павел:</strong> 7 902 743-74-23</p>
                <p><strong>Толмачев Егор:</strong> 7 902 105-23-12</p>
                <p><strong>Поствайкин Кирилл:</strong> 7 987 702-79-41</p>
            </div>
            <div>
             <img src="/images/logo.png" alt=" " />
            </div>
            <div class="footer-social">
                <h3>Наши соцсети</h3>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">VK</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 АвтоЛюбители12. Все права защищены.</p>
        </div>
    </footer>
    
    );
};

export default Footer;
