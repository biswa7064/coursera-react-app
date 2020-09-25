import React, {Component} from 'react';



//adding navigation bar
import {Navbar, NavbarBrand} from 'reactstrap';

import Menu from './MenuComponent';

import {DISHES} from "../shared/dishes";
//import {dishDetails} from "./shared/comments";
import DishDetail from './DishdetailComponent';

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId){
      this.setState({selectedDish:dishId});
  }

  render(){
  return (
    <div className="Main">
      
      <div className = "bodyPart" style = {{backgroundColor:"black",color:"white"}}>
      
      <Menu dishes = {this.state.dishes} onClick = {(dishId)=>this.onDishSelect(dishId)}/>
      <DishDetail dish ={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
      </div>
      
      
    </div>
  );
  }
}

export default Main;


