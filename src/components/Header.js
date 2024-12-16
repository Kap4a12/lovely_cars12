
import './Header.css';

const Header = ({ onOpenRegister, onOpenLogin }) => {
    return (
        <header>
            <nav>
                <div className="logo">АвтоЛюбители12</div>
                <a href="tonirovka.html" class="button-link">Тонировка</a>
                <a href="polirovka.html" class="button-link">Полировка</a>
                <a href="deteyl.html" class="button-link">Детейлинг</a>
                <div className="auth-buttons">
                    <button onClick={onOpenRegister}><strong>Регистрация</strong></button>
                    <button onClick={onOpenLogin}><strong>Войти</strong></button>
                </div>
                
            </nav>
        </header>
    );
};

export default Header;
