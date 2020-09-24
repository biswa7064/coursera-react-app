import React, {Component} from "react";
import  {Card,CardImg,CardImgOverlay,CardTitle} from "reactstrap";

import DishDetail from "./DishdetailComponent";

class Menu extends Component{
    constructor(props){
    super(props);
    this.state = {
        selectedDish : null,
        
    }
    console.log("constructor method invoked");
    }

    componentDidMount(){
        console.log("componentDidMount method invoked");
    }

    //change state of selectedDish
    onDishSelect(dish){
        this.setState({selectedDish : dish});
        
    }

    
render(){
    const menu = this.props.dishes.map((dish)=>{
        return(
            <div key = {dish.id} className = "col-12 col-md-5 m-3">
               <Card onClick = {()=> this.onDishSelect(dish)}>                       
                <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                    
                    <CardImgOverlay>
                        <CardTitle style = {{color:"darkslateblue", fontWeight:"bold", fontSize:"30px"}}>
                        {dish.name}
                        </CardTitle>                           
                    </CardImgOverlay>
                </Card>

            </div>
        )
    });

    console.log("render method invoked");

    return(
        <div>
        <div className = "container">
                
            <div className = "row">
                                  
            {menu} 
                                    
            
            </div>
            <div className = "row">
            <div className = "col-12 col-md-5 m-1">
                <DishDetail dish = {this.state.selectedDish}/>
                </div> 
            </div>
           
                          
        
        </div>
        </div>
    );
}
}



export default Menu ;