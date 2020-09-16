import React from 'react';
import styles from './FormLogin.module.scss';

export default class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      errorLogin: false,
    }
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }
  handleChangeUserName(event) {
    this.setState({userName: event.target.value});
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleLogIn(event) {
    event.preventDefault();
    const {userName, password} = this.props.userData;
    if ( userName === this.state.userName && password === this.state.password) {
    this.setState({errorLogin: false}); 
    this.props.access();
   } else {
    this.setState({
      userName: '',
      password: '',
      errorLogin: true,
    });
   }
  }

    render() {
      const {userName, password, errorLogin} = this.state;
      return (
        <form onSubmit={this.handleLogIn} className={styles.formLogin}>
          { errorLogin ? 
          <div className={styles.errorLogin}>Error! Registration can't be completed.</div> :
           null
          }
          <label>
            User name
            <input
              ref={this.userNameRef}
              type="text"
              className={styles.userName}
              value={userName}
              required
              onChange={this.handleChangeUserName}
            />

          </label>

          <label>
            Password
            <input
              ref={this.passwordRef}
              type="password"
              className={styles.password}
              value={password}
              required
              onChange={this.handleChangePassword}
            />

          </label>
          <button type="submit">Log In</button>

          </form>

    );
  }
}