const initialState = {
  cars: [],
  loading: false,
  error: null,
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_CARS_SUCCESS':
      return { ...state, loading: false, cars: action.payload };
    case 'FETCH_CARS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default carsReducer;
