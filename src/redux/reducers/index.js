import { combineReducers } from 'redux';
import access from './access';
import operationsWithCards from './operationsWithCards';



const rootReducer = combineReducers({
  access,
  operationsWithCards,
});
  
  export default rootReducer;