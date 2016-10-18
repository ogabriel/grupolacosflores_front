import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List';
import Parceiros from 'material-ui/svg-icons/social/people';
import Home from 'material-ui/svg-icons/action/home'
import './MenuLateral.css';

class MainNavBar extends Component{
  render(){
    return(
      <div className="list-wrapper">
        <List>
          <ListItem primaryText="Home" leftIcon={<Home/>}/>
          <ListItem primaryText="Parceiros" leftIcon={<Parceiros />}/>
          <ListItem primaryText="Noticias"/>
        </List>
      </div>
    );
  }
}

export default MainNavBar