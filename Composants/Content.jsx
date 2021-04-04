import React from 'react';
import LOGO from '../img/my-name.gif';

export default class Content extends React.Component {
    render(){
        return(
            <img src={LOGO} alt="Logo" />
        );
    }
}