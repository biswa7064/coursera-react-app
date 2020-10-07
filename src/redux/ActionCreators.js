import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
export const addComment = (dishId,rating,author,comment)=>({
    type: ActionTypes.Add_Comment,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});

export const fetchDishes = () =>(dispatch)=>{
    dispatch(dishesLoading(true));
    setTimeout(()=>{
        dispatch(addDishes(DISHES))
    },2000);
}

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