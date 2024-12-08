import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authActions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);  
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(username, password));  // вызываем action login
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Вход в систему</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Отображаем ошибку */}
        <form onSubmit={handleLogin}>
          <label>
            Логин: 
            <input
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </label>
          <label>
            Пароль: 
            <input
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
