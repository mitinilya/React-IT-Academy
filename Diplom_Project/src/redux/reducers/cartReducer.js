const initialState = {
  items: [], // начальное значение корзины - массив
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_CART':
      return { ...state, items: action.payload };  
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: action.payload };  // обновление крзины после удаления
    default:
      return state;
  }
};

export default cartReducer;
