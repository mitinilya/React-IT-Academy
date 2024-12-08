

const initialState = {
  user: null,
  error: null,  // добавим поле для ошибки
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null };  // при успешном логине очищаем ошибку
    case 'LOGIN_ERROR':
      return { ...state, error: action.payload };  // сохраняем ошибку в state
    case 'LOGOUT':
      return { ...state, user: null, error: null };  // очищаем при выходе
    default:
      return state;
  }
};

export default authReducer;
