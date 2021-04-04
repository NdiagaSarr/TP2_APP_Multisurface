import React from 'react';
import ReactDOM from 'react-dom';
import LOGO from '../img/my-name.gif';

const Index = () => {
  return(
    <div>
      <h2>Initialisation du tp2</h2>
      <img src={LOGO} alt="Logo" />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));