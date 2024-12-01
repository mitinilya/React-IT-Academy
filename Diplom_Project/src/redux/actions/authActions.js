export const login = (username, password) => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:5000/users');
      const users = await response.json();
  
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
  
      if (user) {
        // Добавляем пользователя в loggedInUser
        await fetch('http://localhost:5000/loggedInUser', {
          method: 'POST', // POST для добавления в массив
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  
  export const logout = () => async (dispatch) => {
    try {
      // Удаляем loggedInUser (предполагается, что он один)
      const response = await fetch('http://localhost:5000/loggedInUser/1', {
        method: 'DELETE', // DELETE с ID
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
        dispatch({ type: 'LOGIN_SUCCESS', payload: loggedInUser[0] }); // Берём первого пользователя
      } else {
        dispatch({ type: 'LOGOUT' }); // Если массив пуст, выходим из аккаунта
      }
    } catch (error) {
      console.error('Failed to check auth status:', error.message);
    }
  };
  