import React from 'react';
import logo from './logo.svg';

//adding navigation bar
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar  color = "dark">
        <div className = "container">
          <NavbarBrand href = "https://github.com/biswa7064/coursera-react-app">Welcome to my github account</NavbarBrand>
        </div>
      </Navbar>
      
    </div>
  );
}

export default App;
