import React, {Component} from "react";
 

import  {Card,CardImg,CardBody,CardText,CardTitle,Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';


    
    function RenderDish({dish}){
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

    
    
     function RenderComments({comments}) {
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
    


  const DishDetail = (props)=>{
      if(props.dish != null){
      return(
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
          
         <div className = "row">
              <div className = "col-12 col-md-5 lm-1">
              <RenderDish dish ={props.dish} />
              </div>          
            <div className = "col-12 col-md-5 lm-1">                         
            <RenderComments comments = {props.comments}/>
            </div>
            </div>
        </div>
          
      )
      }else{
          return(
              <div></div>
          );
      }
  }




export default DishDetail;