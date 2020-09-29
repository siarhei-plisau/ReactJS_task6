import { createStore, applyMiddleware } from 'redux';
import  rootReducer from '../reducers/index'; 
import thunk from 'redux-thunk';

const initialState = {
  operationsWithCards: {
    isLoading: false,
    cards: [],
    price: '',
    title: '',
    imageUrl: '',
    about: '',
    errorForm: {
      price: false,
      title: false,
      imageUrl: false,
      about: false,
      },
  },
  access: {
    isAuthenticated: false,
    userName: '',
    password: '',
    errorLogin: false,
    currentUser: {},
  }
}
export const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
