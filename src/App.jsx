import React, { Component } from 'react';
//import MenuLateral from './components/MenuLateral/MenuLateral';
//import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Parceiros from 'material-ui/svg-icons/social/people';
import Home from 'material-ui/svg-icons/action/home'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import './App.css';
/**
 * Componente principal que está sendo renderizado
 */

const AppBarStyle = {
  backgroundColor: '#5cb85c'
}

class App extends Component {

  /**
   * Renderiza o componente
   */

  constructor(props){
    super(props);
    this.state={open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Laços Flores" 
          style={AppBarStyle}
          onLeftIconButtonTouchTap={this.handleToggle}/>
          <Drawer open={this.state.open}>
            <MenuItem primaryText="Home" leftIcon={<Home/>}/>
            <MenuItem primaryText="Parceiros" leftIcon={<Parceiros />}/>
            <MenuItem primaryText="Noticias"/>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App
// Exporta o componente