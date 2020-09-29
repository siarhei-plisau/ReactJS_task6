const operationsWithCards = (state={}, action) => {
    switch (action.type) {
      case 'DELETE_CARD':
        const resultCards = state.cards.filter( item => item.id !== action.payload);
        return {
          ...state, 
           cards: resultCards,
        }
      case 'SHOW_SPINNER':
          return {
            ...state, 
            isLoading: action.payload,
          }
      case 'HIDE_SPINNER':
        return {
          ...state, 
            isLoading: action.payload,
        }
      case 'SHOW_CARDS':
        return {
          ...state, 
            cards: action.payload,
        }
      case 'CHANGE_PRICE':
        return {
          ...state, 
          price: action.payload,
        }
      case 'CHANGE_TITLE':
        return {
          ...state, 
          title: action.payload,
        } 
      case 'CHANGE_IMAGE_URL':
        return {
          ...state, 
          imageUrl: action.payload,
        }
      case 'CHANGE_ABOUT':
        return {
          ...state, 
          about: action.payload,
        } 
      case 'ADD_NEW_CARD':
        const copyArrayOfCards = state.cards.slice();
        const newCard = {
          id: action.id,
          price: action.price,
          title: action.title,
          imageUrl: action.imageUrl,
          about: action.about,
        }
        copyArrayOfCards.push(newCard); 
        return {
          ...state, 
          cards: copyArrayOfCards,
        }  
      case 'SET_ERROR_FORM':
        return {
          ...state, 
          errorForm: action.payload,
        }        
      default:
        return state
    }
  }
 
  export default operationsWithCards;