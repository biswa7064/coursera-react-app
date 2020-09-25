import React, {Component} from "react";
import  {Card,CardImg,CardImgOverlay,CardTitle} from "reactstrap";

//import DishDetail from "./DishdetailComponent";

function RenderMenuItem({dish,onClick}){
    return(
        
            
            <Card onClick = {()=> onClick(dish.id)}>                       
                <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                    
                    <CardImgOverlay>
                        <CardTitle style = {{color:"darkslateblue", fontWeight:"bold", fontSize:"30px"}}>
                        {dish.name}
                        </CardTitle>                           
                    </CardImgOverlay>
            </Card>

            
        
        
    )
}
    
const Menu = (props)=>{
    const menu =props.dishes.map((dish)=>{
        return(
            
            <div key = {dish.id} className = "col-12 col-md-5 m-1">
              <RenderMenuItem dish = {dish} onClick = {props.onClick}/> 
            </div>
            
        )
    });

    console.log("render method invoked");

    return(
        
        <div className = "container">                
            <div className = "row">
                
                {menu} 
                
            </div>              
        </div>
        
    );

}



export default Menu ;