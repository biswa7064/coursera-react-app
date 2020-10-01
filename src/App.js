import React, {Component} from 'react';
//import logo from './logo.svg';
//import Menu from './components/MenuComponent';
import './App.css';
import {DISHES} from "./shared/dishes";
//import {dishDetails} from "./shared/comments";
//import DishDetail from './components/DishdetailComponent';
import Main from './components/MainComponent';
import {BrowserRouter} from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      
    };
  }
  render(){
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <div className="App">      
      <div className = "bodyPart">
      
      <Main />      
      </div>     
    </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
//<DishDetail dishes = {this.state.dishes}/>

