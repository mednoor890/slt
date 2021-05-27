import { STATES } from "mongoose";
import { CREATEASS, FETCH_ASS,FETCH_As} from "../constants/actionTypes";

export default (ass=[],action)=>{
switch(action.type){
    case FETCH_ASS:
        return action.payload;
        case FETCH_As:
            return {...ass, association: action.payload};
    
        case CREATEASS :
            return [...ass, action.payload]
default:
    return ass
        }

}