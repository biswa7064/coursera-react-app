import * as ActionTypes from "./ActionTypes";

export const addComment = (dishId,rating,author,comment)=>({
    type: ActionTypes.Add_Comment,
    payload: {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});