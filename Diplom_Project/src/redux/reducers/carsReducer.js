const initialState = {
  cars: [],
  loggedInUser: null,
  loading: false,
  error: null,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Загрузка данных о пользователе
    case 'FETCH_LOGGED_IN_USER_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_LOGGED_IN_USER_SUCCESS':
      return { ...state, loading: false, loggedInUser: action.payload };
    case 'FETCH_LOGGED_IN_USER_FAILURE':
      return { ...state, loading: false, error: action.payload };

    // загрузка списка автомобилей
    case 'FETCH_CARS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CARS_SUCCESS':
      return { ...state, loading: false, cars: action.payload };
    case 'FETCH_CARS_FAILURE':
      return { ...state, loading: false, error: action.payload };

    // Удаление автомобиля
    case 'DELETE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.filter(car => car.id !== action.payload),
      };
    case 'ADD_ADVERTISEMENT':
      return { ...state, cars: [...state.cars, action.payload] };
    // обновляем авто
    case 'UPDATE_CAR_SUCCESS':
      return {
        ...state,
        cars: state.cars.map(car =>
          car.id === action.payload.id ? action.payload : car
        ),
      };

    default:
      return state;
  }
};

export default carsReducer;
