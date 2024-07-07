import { ADD ,REDUCE } from "../actionType";

let initialstate = {
    counter : 10
}

export const reducer= (state=initialstate , {type , payload}) =>{
    switch (type) {
        case ADD:
            
            return { counter : state.counter + payload};
            case REDUCE:
            
            return { counter : state.counter - payload};
    
        default:
            return state;
    }
}