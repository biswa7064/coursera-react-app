import React, {Component} from 'react';
//import logo from './logo.svg';


//adding navigation bar
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from "./shared/dishes";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }
  render(){
  return (
    <div className="App">
      <Navbar  color = "dark">
        <div className = "container">
          <NavbarBrand href = "https://github.com/biswa7064/coursera-react-app">Welcome to my github account</NavbarBrand>
          <NavbarBrand href = "https://www.pexels.com/search/black%20wallpaper/" >wallpaper</NavbarBrand>
          
        </div>
      </Navbar>
      <div className = "bodyPart" style = {{backgroundColor:"black",color:"white"}}>
      <Menu dishes = {this.state.dishes}/>
      </div>
      
      
    </div>
  );
  }
}

export default App;
