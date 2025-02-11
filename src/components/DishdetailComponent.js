import React, {Component} from "react";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import {baseUrl} from "../shared/baseUrl";

import  {Card,CardImg,CardBody,CardText,CardTitle,Breadcrumb, BreadcrumbItem} from "reactstrap";
import { Link } from 'react-router-dom';
import { FadeTransform, Fade } from 'react-animation-components'

    
    function RenderDish({dish}){
        if(dish != null){
            return( 
        <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>   
            <Card>
                <CardImg width = "100%" src = { baseUrl + dish.image} alt = {dish.name}/>
                <CardBody>
                <CardTitle style = {{color:"darkslateblue", fontWeight:"bold", fontSize:"30px"}}>
                        {dish.name}
                </CardTitle> 

                <CardText style = {{color:"blue"}}>{dish.description}</CardText>  
                    
                </CardBody>
            </Card>

        </FadeTransform>            
            );

        }else{
            return (
                <div></div>
            );
        }
    }

    
    
     function RenderComments({comments,postComment,dishId}) {
        const commentsList = 
        comments.map((comment) => {
          return (
        <Fade in>
            <li key={comment.id}>
              <p>{comment.commentDescription}</p>
              <p>-- {comment.author} <br></br>
               {comment.date}</p>
            </li>
        </Fade>
          );
        });
    

        if(comments != null){
            return(
               
                   <Card>
                        <CardBody>
                            <CardText style = {{color: 'blue'}}><h4>Comments</h4>
                   
                    <ul className="list-unstyled">
                    {commentsList}
                    <CommentForm dishId = {dishId} postComment = {postComment} />
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
      if(props.isLoading){
          return(
            <div className="container">
            <div className="row">            
                <Loading />
            </div>
            </div>
          )
      }
      else if(props.errMess){
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            )
      }

     else if(props.dish != null){
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
            <RenderComments comments = {props.comments}
             postComment = {props.postComment} 
             dishId = {props.dish.id}/>
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