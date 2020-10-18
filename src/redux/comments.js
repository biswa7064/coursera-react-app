
// import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes"

 export const  Comments = (state = {
     errMess : null,
     comments :[]
 }, action)=>{
    switch(action.type){
        //check for action Add_Comment
        case ActionTypes.Add_Comments:
         return {...state, errMess: null, comments: action.payload};

        case ActionTypes.Comments_Failed:
        return {...state, errMess: action.payload};

        case ActionTypes.Add_Comment:
            var comment = action.payload;            
            return {...state, comments: state.comments.concat(comment)};
        default:
            return state;
    }
};

