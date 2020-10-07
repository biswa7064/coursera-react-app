
import { COMMENTS } from "../shared/comments";
import * as ActionTypes from "./ActionTypes"

 export const  Comments = (state = COMMENTS, action)=>{
    switch(action.type){
        //check for action Add_Comment
        case ActionTypes.Add_Comment:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
};

