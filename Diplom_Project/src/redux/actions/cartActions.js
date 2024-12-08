// Экшен для загрузки корзины пользователя
export const fetchUserCart = (userId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userId}`);
    const user = await response.json();

    // Проверяем, что корзина существует и передаем в Redux
    dispatch({
      type: 'FETCH_USER_CART',
      payload: user.cart || [],  // если нет корзины - то пустой массив передать
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

export const addToCart = (car) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth;
    if (!user) {
      throw new Error('User not logged in');
    }

    // Получаем текущий список пользователей
    const response = await fetch('http://localhost:5000/users');
    const users = await response.json();

    const currentUser = users.find((u) => u.id === user.id);
    if (!currentUser) {
      throw new Error('User not found');
    }

    // Проверяем не добавлен ли уже этот товар вкорзину
    if (currentUser.cart.find(item => item.id === car.id)) {
      throw new Error('Item already in cart');
    }

    // Добавляем товар в корзину
    const updatedCart = [...currentUser.cart, car];

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

    // диспатчим   успешное обновление корзины
    dispatch({
      type: 'UPDATE_CART',
      payload: updatedCart,
    });
  } catch (error) {
    console.error('Error adding to cart:', error.message);
  }
};



// cartActions.js

export const removeFromCart = (carId) => async (dispatch, getState) => {
  try {
    const { user } = getState().auth; // Получаем текущего пользователя
    if (!user) {
      throw new Error('User not logged in');
    }

    // Получаем текущую корзину пользователя из состояния
    const cart = getState().cart.items; // Состояние корзины из Redux

    // Проверяем, что корзина существует и является массивом
    if (!Array.isArray(cart)) {
      throw new Error('Cart is not an array');
    }

    // Фильтруем товар, который нужно удалить
    const updatedCart = cart.filter((item) => item.id !== carId);

    // Если товар не найден, выходим
    if (updatedCart.length === cart.length) {
      console.log('Item not found in cart');
      return;
    }

    // Отправляем обновленную корзину на сервер
    const response = await fetch(`http://localhost:5000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart: updatedCart }),
    });

    if (!response.ok) {
      throw new Error('Failed to update cart');
    }

    // Диспатчим обновленную корзину в Redux
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: updatedCart,
    });
  } catch (error) {
    console.error('Error removing from cart:', error.message);
  }
};
