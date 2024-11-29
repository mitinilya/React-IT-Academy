import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import carsReducer from './reducers/carsReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  cars: carsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
