import { fetchUserCart } from './cartActions';  


export const logout = () => async (dispatch, getState) => {
  try {
    //получаем текущего польза
    const userId = getState().auth.user?.id;

    if (!userId) {
      throw new Error('No user is logged in');
    }

    //Удаляем loggedInUser с id текущего пользователя
    const response = await fetch(`http://localhost:5000/loggedInUser/${userId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to logout on server');
    }

    // Удаляем пользователя из локального состояния
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    console.error('Logout failed:', error.message);
  }
};




export const checkAuth = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/loggedInUser');
    const loggedInUser = await response.json();

    if (loggedInUser.length > 0) {
      const user = loggedInUser[0];
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });

      dispatch(fetchUserCart(user.id));
    } else {
      dispatch({ type: 'LOGOUT' });
    }
  } catch (error) {
    console.error('Error checking auth:', error.message);
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      await fetch('http://localhost:5000/loggedInUser', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      dispatch({ type: 'LOGIN_SUCCESS', payload: user });

      dispatch(fetchUserCart(user.id));
    } else {
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    console.error('Login failed:', error.message);
  }
};