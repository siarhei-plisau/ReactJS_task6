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
  userName: 'fox_1234',
  password: 'fox_1234',
  profession: 'Illustrator & Character Designer',
  about: `Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris porttitor, nibh
          at sagittis tristique, enim magna pretium
          augue, eget consectetur sem dui non urna.
          Integer gravida, diam congue molestie
          fringilla, elit odio rhoncus turpis, ac
          dictum libero elit vel metus. Morbi egestas
          sit amet velit eget venenatis.`,
}

ReactDOM.render( <App userData={store} />, document.getElementById('root') );

