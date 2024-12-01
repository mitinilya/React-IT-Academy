// Действие для добавления товара в корзину
export const addToCart = (carId) => async (dispatch) => {
    try {
      // Отправляем запрос на сервер для добавления товара в корзину
      const response = await fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carId }),
      });
      
      // Получаем обновленное состояние корзины
      const updatedCart = await response.json();
      
      // Обновляем Redux с новым состоянием корзины
      dispatch({
        type: 'ADD_TO_CART',
        payload: updatedCart,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
// Действие для удаления товара из корзины
export const removeFromCart = (carId) => async (dispatch) => {
    try {
      // Отправляем запрос на сервер для удаления товара из корзины
      const response = await fetch(`http://localhost:5000/cart/${carId}`, {
        method: 'DELETE',
      });
      
      // Получаем обновленное состояние корзины
      const updatedCart = await response.json();
      
      // Обновляем Redux с новым состоянием корзины
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: updatedCart,
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };
  