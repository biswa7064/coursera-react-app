import React, {Component} from "react";
//adding navigation bar
import {Navbar, NavbarBrand,Jumbotron} from 'reactstrap';

class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar  color = "dark">
                    <div className = "container">
                        <NavbarBrand href = "https://github.com/biswa7064/coursera-react-app">Welcome to my github account</NavbarBrand>
                                
                    </div>
                </Navbar>
            
            <Jumbotron>
                <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Pragyan's Restaurant</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
            </Jumbotron>
        </React.Fragment>
        );
    }
}

export default Header;