import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 
  const user = useSelector((state) => state.auth.user);
  const [anchorEl, setAnchorEl] = useState(null); 

  // Открытие меню
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Закрытие меню
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Обработчик выхода
  const handleLogout = () => {
    dispatch(logout());
    handleClose(); 

    
    const validUrls = ['/cart', '/add-advertisement', '/my-advertisement'];
    if (validUrls.includes(location.pathname)) {
      navigate('/'); 
    } else {
      navigate(location.pathname); 
    }
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">AUTO.BY</Link>
      </div>
      <div className="header-actions">
        {user ? (
          <>
            {/* Иконка с выпадающим меню */}
            <IconButton onClick={handleClick} color="primary">
              <AccountCircleIcon fontSize="large" style={{ color: 'white' }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled>
                Аккаунт: {user.username}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Избранное
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/add-advertisement" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Добавить объявление
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/my-advertisement" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Мои объявления
                </Link>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Выйти
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Link to="/login">Вход</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
