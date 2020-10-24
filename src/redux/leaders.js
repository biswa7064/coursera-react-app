//import { LEADERS } from "../shared/leaders";
import * as ActionTypes from "./ActionTypes";

export const Leaders = (state = {
    isLoading:true,
    errMess:null,
    leaders:[]
}, action)=>{
    switch(action.type){        
            case ActionTypes.Add_Leaders:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};
    
            case ActionTypes.Leaders_Loading:
                return {...state, isLoading: true, errMess: null,leaders: []}
    
            case ActionTypes.Leaders_Failed:
                return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}