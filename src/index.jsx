import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../Composants/Header.jsx';
import Content from '../Composants/Content.jsx';

const Index = () => {
  return(
    <div>
      <Header/>
      <Content/>
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));