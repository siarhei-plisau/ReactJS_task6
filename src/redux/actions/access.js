import { apiCallUsers } from '../../api/mockedUsersApi';
import { store } from '../store'; 

export const logIn = (user) => ({
    type: 'LOG_IN',
    payload: true,
    user,
  });

export const logOut= () => ({
  type: 'LOG_OUT',
  payload: false
}); 

export const changeUserName = (userName) => ({
  type: 'CHANGE_USERNAME',
  payload: userName
});

export const changePassword = (password) => ({
  type: 'CHANGE_PASSWORD',
  payload: password
});

export const checkErrorLogin = (value) => ({
  type: 'CHECK_ERRORLOGIN',
  payload: value
}); 

export const  submitFormLogIn = () => (dispatch) => {
  const state = store.getState();
  const {userName,  password} = state.access;
  if ( Object.keys(state.access.currentUser).length === 0 ) {
    apiCallUsers()
    .then( (users) =>  {
      const currentUser = users.filter( (item) => (userName === item.userName && password === item.password));
      if ( currentUser.length > 0) {
        dispatch( logIn(currentUser[0]) );
      } else {
        dispatch( checkErrorLogin(true) );
        dispatch( changeUserName('') );
        dispatch( changePassword('') );
      }
    });
  }
}
