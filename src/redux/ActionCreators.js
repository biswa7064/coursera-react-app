import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import {baseUrl } from "../shared/baseUrl";
export const addComment = (dishId,rating,author,comment)=>({
    type: ActionTypes.Add_Comment,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});



export const dishesLoading = () => ({
    type: ActionTypes.Dishes_Loading
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.Dishes_Failed,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.Add_Dishes,
    payload: dishes
});

export const addComments = (comments) => ({
    type: ActionTypes.Add_Comments,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.Comments_Failed,
    payload: errmess
});

export const promosLoading = () => ({
    type: ActionTypes.Promos_Loading
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.Promos_Failed,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.Add_Promos,
    payload: promos
});



export const fetchDishes = () =>(dispatch)=>{
    dispatch(dishesLoading(true));
    return fetch(baseUrl+ "dishes")
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error("Error "+response.status+ ": "+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}



export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error("Error "+response.status+ ": "+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }else{
            var error = new Error("Error "+response.status+ ": "+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}




