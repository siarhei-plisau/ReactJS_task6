import React from 'react';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NoMatch from '../NoMatch';
import Profile from '../Profile';
import CardContainer from '../CardsContainer';
import FormLogin from '../FormLogin';


import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
} from "react-router-dom";



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }
    this.access = this.access.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  access() {
    this.setState( {isAuthenticated: true});
  }
  logOut() {
    this.setState( {isAuthenticated: false});
  }

  render() {
    const {userData} = this.props;
    const {isAuthenticated} = this.state;
    return (
      <Router>
        <div className={styles.container}>
          <Header
           userData={userData}
           isAuthenticated={isAuthenticated}
           logOut={this.logOut}
          />
          <Switch>
                   
            <Route path="/login">
              <Main>
                { isAuthenticated ? 
                  <Redirect to="/cards" /> :
                  <FormLogin access={this.access} userData={userData} />
                }
              </Main>
            </Route>
            
            <Route path="/cards">
              <Main>
                { isAuthenticated ? 
                  <CardContainer /> :
                  <Redirect to="/login" />
                }
              </Main>
            </Route>

            <Route path="/profile">
              <Main>
                { isAuthenticated ? 
                  <Profile userData={userData} /> :
                  <Redirect to="/login" />
                }
              </Main> 
            </Route>

            <Route exact path="/">
              { isAuthenticated ?
                <Redirect to="/cards" /> :
                <Redirect to="/login" />
              }
            </Route>
            
            <Route exact path="*">
              <Main>
                <NoMatch isAuthenticated={isAuthenticated} />
              </Main>
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
} 



