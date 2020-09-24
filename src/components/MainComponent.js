import React, {Component} from 'react';



//adding navigation bar
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from './MenuComponent';

import {DISHES} from "../shared/dishes";
//import {dishDetails} from "./shared/comments";
import DishDetail from './components/DishdetailComponent';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
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
      <DishDetail dishes ={this.state.dishes.comments}/>
      </div>
      
      
    </div>
  );
  }
}

export default App;


