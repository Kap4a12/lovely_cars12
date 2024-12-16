import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event: any ) => {
    event.preventDefault();

    const form = event.target;
    const user = form.username.value;

    auth?.signin(user, () => {
      navigate(fromPage, { replace: true })
    });
  }

  return (
    <div>
      <h2>Введите пароль</h2>
      <form onSubmit={handleSubmit}>
        <input style={{ marginTop: '24px' }} name="username" /> 
        <button style={{ marginLeft: '8px' }} type="submit">войти</button>
      </form>
    </div>
  )
}

export { LoginPage };