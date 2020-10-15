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

export const fetchDishes = () =>(dispatch)=>{
    dispatch(dishesLoading(true));
    return fetch(baseUrl+ "dishes")
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.Comments_Failed,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.Add_Comments,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

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


