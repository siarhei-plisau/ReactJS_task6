import { apiCall } from '../../api/mockedApi';
import { store } from '../store'; 

export const deleteCard = (id) => ({
    type: 'DELETE_CARD',
    payload: id
  }); 
  
  export const showCards = (cards) => ({
    type: 'SHOW_CARDS',
    payload: cards,
  });
  
  export const showSpinner = () => ({
    type: 'SHOW_SPINNER',
    payload: true,
  });
  
  export const hideSpinner = () => ({
    type: 'HIDE_SPINNER',
    payload: false,
  });
  
  export const fetchDataCards = () => (dispatch) => {
    const state = store.getState();
    if (state.operationsWithCards.cards.length === 0) {
      dispatch( showSpinner() );
      apiCall()
        .then( (cards) => {
          dispatch( showCards(cards) );
          dispatch( hideSpinner() );
        });
      } else return;
      }
  
  export const changePrice = (price) => ({
    type: 'CHANGE_PRICE',
    payload: price
  });
  
  export const changeTitle = (title) => ({
    type: 'CHANGE_TITLE',
    payload: title
  });
  
  export const changeImageUrl = (imageUrl) => ({
    type: 'CHANGE_IMAGE_URL',
    payload: imageUrl
  });
  
  export const changeAbout = (about) => ({
    type: 'CHANGE_ABOUT',
    payload: about
  });
  
  export const addNewCard = (price, title, imageUrl, about, id) => ({
    type: 'ADD_NEW_CARD',
    price,
    title,
    imageUrl,
    about,
    id,
  });
  
  export const setErrorForm = (error) => 
  ({
    type: 'SET_ERROR_FORM',
    payload: error,
  });