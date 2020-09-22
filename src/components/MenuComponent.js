import React, {Component} from "react";
import  {Card,CardImg,CardImgOverlay,CardBody,CardText,CardTitle} from "reactstrap";

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
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

        renderDish(dish){
            if(dish != null){
                return(
                    <Card>
                    <CardImg width = "100%" src = {dish.image} alt = {dish.name}/>
                    <CardBody>
                    <CardTitle style = {{color:"darkslateblue", fontWeight:"bold", fontSize:"30px"}}>
                            {dish.name}
                    </CardTitle> 

                    <CardText style = {{color:"blue"}}>{dish.description}</CardText>  
                        
                    </CardBody>
                    </Card> 
                );

            }else{
                return (
                    <span>not find</span>
                );
            }
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
            <div className = "container">
                <div className = "row">                    
                        {menu}                    
                </div>
                <div className = "row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;