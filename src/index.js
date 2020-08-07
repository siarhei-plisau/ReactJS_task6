import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './Сomponents/App';

const store = {
  user: {
    firstName: 'Andrew',
    lastName: 'Hopkins',
  },
  avatar: {
    image: 'https://s8.hostingkartinok.com/uploads/images/2020/08/91fe43e4401e57b2130b4a0be50bf28c.png',
    alt: 'photo',
  },
}

ReactDOM.render( <App userData={store} />, document.getElementById('root') );

