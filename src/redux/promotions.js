// import { PROMOTIONS } from "../shared/promotions";
import * as ActionTypes from "./ActionTypes";
export const Promotions = (state ={
    isLoading:true,
    errMess:null,
    promotions:[]
}, action)=>{
    switch(action.type){
        case ActionTypes.Add_Promos:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.Promos_Loading:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.Promos_Failed:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
}