import React, {Component} from 'react';

import Menu from './MenuComponent';

import {DISHES} from "../shared/dishes";
//import {dishDetails} from "./shared/comments";
import DishDetail from './DishdetailComponent';
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import {Switch, Route, Redirect} from "react-router-dom";
  

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      
    };
  }

  

  render(){

    const HomePage = ()=>{
      return(
        <Home/>
      );
    }

  return (
    <div className="Main">
      
      <div className = "bodyPart" style = {{backgroundColor:"black",color:"white"}}>
      <Header/>
      <Switch>
        <Route path = "/home" component = {HomePage}/>
        <Route exact path = "/menu" component = {()=><Menu dishes = {this.state.dishes}/>}/>
        <Redirect to = "/home"/>
      </Switch>
      <Footer/>
      </div>
      
      
    </div>
  );
  }
}

export default Main;


