import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const authClassName = location.pathname === '/login' ? 'isActive' : '';



  
  return (
    <header className="header">
      <NavLink to="/">Главная</NavLink>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/posts">Посты</NavLink>
      <div
        className={`btn_auth ${authClassName}`}
      >
      </div>
    </header>
  )
} 