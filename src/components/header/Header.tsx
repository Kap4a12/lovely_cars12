import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

export const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const authClassName = location.pathname === '/login' ? 'isActive' : '';

  const handleAuthToggle = () => {
    auth?.user
      ? auth?.signout(() => navigate('/', { replace: true }))
      : navigate('/login')
  };

  
  return (
    <header className="header">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/posts">Посты</NavLink>
      <div
        className={`btn_auth ${authClassName}`}
        onClick={handleAuthToggle}
      >
        {auth?.user
          ? 'Выйти'
          : 'Войти'
        }
      </div>
    </header>
  )
} 