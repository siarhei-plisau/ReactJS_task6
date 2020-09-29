import React from 'react';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import NoMatch from '../NoMatch';
import Profile from '../Profile';
import CardContainer from '../CardsContainer';
import FormLogin from '../FormLogin';

import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect,
} from "react-router-dom";


const App = (props) => {
  const {isAuthenticated, userData} = props;
  return (
    <Router>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/login">
            <Main>
              { isAuthenticated ? 
                <Redirect to="/cards" /> :
                <FormLogin />
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

const mapStateToProps = state => {
  return {
    isAuthenticated: state.access.isAuthenticated,
    userData: state.access.currentUser,
  };
};

export default connect(mapStateToProps)(App);
