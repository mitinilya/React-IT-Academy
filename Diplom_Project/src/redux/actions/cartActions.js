// добавление в избранное
// cartActions.js
export const fetchUserCart = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`);
    const user = await response.json();

    // Загрузим корзину для этого пользователя
    dispatch({
      type: 'FETCH_USER_CART',
      payload: user.cart || [],  // Загружаем корзину этого пользователя
    });
  } catch (error) {
    console.error('Error fetching user cart:', error.message);
  }
};


export const saveCartForUser = (cartItems) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (user) {
      await fetch(`http://localhost:5000/cart/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
    }
  } catch (error) {
    console.error('Error saving cart:', error);
  }
};

// Добавление товара в корзину для конкретного пользователя
export const addToCart = (car) => async (dispatch, getState) => {
  try {
    // Получаем информацию о текущем пользователе из loggedInUser
    const { user } = getState().auth;  // текущий авторизованный пользователь

    if (!user) {
      throw new Error('User not logged in');
    }

    // Получаем текущий список пользователей
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();

    // Находим пользователя, корзину которого будем обновлять
    const currentUser = users.find((u) => u.id === user.id);

    if (!currentUser) {
      throw new Error('User not found');
    }

    // Добавляем новый товар в корзину пользователя
    const updatedCart = [...currentUser.cart, car];

    // Отправляем запрос на обновление корзины этого пользователя
    const updateResponse = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: updatedCart }),
    });

    if (!updateResponse.ok) {
      throw new Error('Failed to update cart');
    }

    // Диспатчим успешное обновление корзины
    dispatch({
      type: 'UPDATE_CART',
      payload: updatedCart,
    });
  } catch (error) {
    console.error('Error adding to cart:', error.message);
  }
};




// Удаление из корзины
export const removeFromCart = (carId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/cart/${carId}`, {
      method: 'DELETE',
    });

    const updatedCart = await response.json();
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: updatedCart,
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
  }
};
