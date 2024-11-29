export const addToCart = car => ({
    type: 'ADD_TO_CART',
    payload: car,
  });
  
  export const removeFromCart = carId => ({
    type: 'REMOVE_FROM_CART',
    payload: carId,
  });
  