import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';

    function RenderCard({item,isLoading,errMess}){
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }else
        return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody >
            <CardTitle style = {{color:"green"}}>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle style = {{color:"blue"}}>{item.designation}</CardSubtitle> : null }
            <CardText style = {{color:"black"}}>{item.description}</CardText>
            </CardBody>
        </Card>
        );
    }

function Home(props){
    return(
    <div className="container" >
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader} isLoading = {props.dishesLoading} errMess = {props.dishesErrMess} />
            </div>
        </div>
    </div>
    );
}

export default Home;