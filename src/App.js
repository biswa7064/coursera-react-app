import React, {Component} from 'react';
//import logo from './logo.svg';


//adding navigation bar
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from "./shared/dishes";
//import {dishDetails} from "./shared/comments";
//import DishDetail from './components/DishdetailComponent';
import Main from './components/MainComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      
    };
  }
  render(){
  return (
    <div className="App">
      
      <div className = "bodyPart" style = {{backgroundColor:"black",color:"white"}}>
      
      <Main />
      
      </div>
      
      
    </div>
  );
  }
}

export default App;
//<DishDetail dishes = {this.state.dishes}/>

