import React, {Component} from "react";
 

import  {Card,CardImg,CardBody,CardText,CardTitle} from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
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
                <div></div>
            );
        }
    }

    
    
      renderComments(comments) {
        const commentsList = comments.map((comment) => {
          return (
            <li key={comment.id}>
              <p>{comment.commentDescription}</p>
              <p>-- {comment.author} <br></br>
               {comment.date}</p>
            </li>
          );
        });

        if(comments != null){
            return(
               
                    <Card>
                        <CardBody>
                            <CardText style = {{color: 'blue'}}><h4>Comments</h4>
                   
                    <ul className="list-unstyled">
                    {commentsList}
                    </ul> 
                    </CardText>
                    </CardBody>
                    </Card>
               
               
            );
        }else{
            return(
                <div></div>
            )
        }
    }
    


  render(){
      if(this.props.dish != null){
      return(
          
          <div className = "row">
              <div className = "col-12 col-5 m-1">
              {this.renderDish(this.props.dish)}             
              
              </div>
            
            
            <div className = "col-12 col-5 m-1">
                         
            {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
         
          
      )
      }else{
          return(
              <div></div>
          );
      }
  }

}


export default DishDetail;