import React,{Component} from "react";
import {Button,Label,Modal,ModalBody,ModalHeader,Row,Col} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";


const required = (val)=> val && val.length;
const maxLength = (len)=>(val)=> !(val) || (val.length <= len);
const minLength = (len)=>(val)=> val && (val.length >= len);



class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }

    handleSubmit(values){
       this.props.addComment(this.props.dishId, values.rating, values.author,values.comment);
    }

    render(){
        return(
            <div>
                <div className = "col-md-10 lm-1">
                    <Button type = "submit" id = "button" color = "primary" className = "fa fa-pencil" onClick = {this.toggleModal}> Submit Comment</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <Label htmlFor="rating" className = "col-md-5 lm-1">Rating</Label>
                            <Row className = "form-group ">                                
                            <Col md={10}>
                                    <Control.select model =".rating"name="rating"
                                       className = "form-control "> 
                                        <option>Choose</option>                                      
                                        <option>1</option>                                        
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Label htmlFor="author" md={10}>Your Name</Label>
                            <Row className = "form-group">
                                
                                <Col md={10}>
                                    <Control.text model =".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className = "form-control" 
                                        validators = {{ required, maxLength:maxLength(15), minLength:minLength(3) }} />
                                        <Errors
                                      model= '.author'
                                      className = "text-danger"
                                      show = "touched"
                                      messages = {{
                                          required: "must be required and ",
                                          maxLength:"must be equal to or less than 15 characters long",
                                          minLength:"must be greater than 2 characters long"
                                      }}
                                      /> 
                                       
                                </Col>                        
                            </Row>
                            
                              
                            
                                
                            <Label htmlFor="comment" md={10}>Comment</Label>   
                            <Row className = "form-group">
                                
                                <Col md={10}>
                                    <Control.textarea model =".comment" id="comment" name="comment"
                                        rows="6"
                                       className = "form-control"/>
                                </Col>
                            </Row>
                            <Row className = "form-group">
                                <Col md={{size:10}} >
                                    <Button type="submit" color="primary" className = "lm-1">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                            </LocalForm>
                    </ModalBody>
            </Modal>
            </div>
        )
    }
}

export default CommentForm;
