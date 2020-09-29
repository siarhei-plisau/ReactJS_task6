
const access = (state={}, action) => {
    switch (action.type) {
      case 'LOG_IN':
        return {
          ...state, 
           isAuthenticated: true,
           currentUser: action.user,
        }
      case 'LOG_OUT':
        return {
            ...state, 
            isAuthenticated: false,
            currentUser: {},
            userName: '',
            password: '',
        }
      case 'CHANGE_USERNAME':
        return {
          ...state, userName: action.payload
        }
      case 'CHANGE_PASSWORD':
        return {
          ...state, password: action.payload
        }
      case 'CHECK_ERRORLOGIN':
        return {
          ...state, errorLogin: action.payload
        }
      default:
        return state
    }
  }
  
  export default access;