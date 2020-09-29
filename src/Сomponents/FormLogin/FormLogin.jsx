import React from 'react';
import {
  changeUserName,
  changePassword,
  submitFormLogIn,
 } from '../../redux/actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './FormLogin.module.scss';

const FormLogin = (props) => {
  const {
    userName,
    password,
    errorLogin,
    handleChangeUserName,
    handleChangePassword,
    submitFormLogIn,
  } = props;

  return (
    <form onSubmit={ (e) => { 
                      e.preventDefault();
                      submitFormLogIn()
                    }
    
      } className={styles.formLogin}>
      { errorLogin ? 
        <div className={styles.errorLogin}>Error! Registration can't be completed.</div> :
        null
      }
      <label>
        User name
        <input
          type="text"
          className={styles.userName}
          value={userName}
          required
          onChange={(e) => { handleChangeUserName(e.target.value) }}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          className={styles.password}
          value={password}
          required
          onChange={(e) => { handleChangePassword(e.target.value) }}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    userName: state.access.userName,
    password: state.access.password,
    errorLogin: state.access.errorLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeUserName: bindActionCreators(changeUserName, dispatch),
    handleChangePassword: bindActionCreators(changePassword, dispatch),
    submitFormLogIn: bindActionCreators(submitFormLogIn, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
