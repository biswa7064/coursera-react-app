import * as ActionTypes from "./ActionTypes";

export const Dishes = (state = {isLoading:true, errMess : null, dishes:[]} , action)=>{
        switch(action.type){
                case ActionTypes.Add_Dishes:
                        return {...state,isLoading: false,errMess:null, dishes:action.payload}
                case ActionTypes.Dishes_Loading:
                        return {...state,isLoading: true,errMess:null, dishes:[]}
                case ActionTypes.Dishes_Failed:
                        return {...state,isLoading: false,errMess:action.payload}
           default:
               return state;
        }
};
