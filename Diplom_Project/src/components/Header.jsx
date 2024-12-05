import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">AUTO.BY</Link>
      </div>
      <div className="header-actions">
        {user ? (
          <>
            <Link to="/cart">Избранное</Link>
            <span>   </span>
            <span>{user.username}</span>
            <button onClick={handleLogout}>Выйти из профиля</button>
          </>
        ) : (
          <Link to="/login">Вход</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
