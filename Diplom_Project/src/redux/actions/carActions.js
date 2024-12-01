export const fetchCars = () => async (dispatch) => {
  dispatch({ type: 'FETCH_CARS_REQUEST' });
  try {
    const response = await fetch('http://localhost:5000/cars');
    const data = await response.json();
    dispatch({ type: 'FETCH_CARS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_CARS_FAILURE', payload: error.message });
  }
};
