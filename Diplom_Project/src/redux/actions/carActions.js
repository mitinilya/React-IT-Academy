export const fetchLoggedInUser = () => async (dispatch) => {
  dispatch({ type: 'FETCH_LOGGED_IN_USER_REQUEST' });
  try {
    const response = await fetch('http://localhost:5000/loggedInUser');
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные пользователя');
    }
    const data = await response.json();
    dispatch({ type: 'FETCH_LOGGED_IN_USER_SUCCESS', payload: data[0] }); // ожидаем только одного пользователя для входа
  } catch (error) {
    dispatch({ type: 'FETCH_LOGGED_IN_USER_FAILURE', payload: error.message });
  }
};

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

export const deleteCar = (carId) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/cars/${carId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      dispatch({ type: 'DELETE_CAR_SUCCESS', payload: carId });
    } else {
      console.error('Ошибка при удалении автомобиля');
    }
  } catch (error) {
    console.error('Ошибка при удалении автомобиля:', error);
  }
};

export const updateCar = (carId, carData) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/cars/${carId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carData),
    });
    if (response.ok) {
      const updatedCar = await response.json();
      dispatch({ type: 'UPDATE_CAR_SUCCESS', payload: updatedCar });
    } else {
      console.error('Не удалось обновить автомобиль');
    }
  } catch (error) {
    console.error('Ошибка при обновлении автомобиля:', error);
  }
};
export const addAdvertisement = (advertisement) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:5000/cars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(advertisement),
    });
    const newCar = await response.json();
    dispatch({ type: 'ADD_ADVERTISEMENT', payload: newCar });
  } catch (error) {
    console.error('Error adding advertisement:', error);
  }
};