import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import carsReducer from './reducers/carsReducer';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  cart: cartReducer,
  auth: authReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
