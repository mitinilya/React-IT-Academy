const initialState = {
  items: [], // Начальное значение корзины должно быть массивом
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_CART':
      return { ...state, items: action.payload };  // Загружаем корзину пользователя
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: action.payload };  // Здесь обновляется корзина после удаления
    default:
      return state;
  }
};

export default cartReducer;
