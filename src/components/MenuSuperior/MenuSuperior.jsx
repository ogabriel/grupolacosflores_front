import React, { Component } from 'react';
import './MenuSuperior.css';

class MenuSuperior extends Component{
  render(){
    return(
      <nav className="navbar">
        <a href="">
          <img className="logo" src="/imagens/logo.png" alt="Logo"/>
        </a>
        
      </nav>
    );
  }
}

export default MenuSuperior;