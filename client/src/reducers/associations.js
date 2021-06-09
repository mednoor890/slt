import { STATES } from "mongoose";
import { CREATEASS, FETCH_ASS,FETCH_As,LIKEASS} from "../constants/actionTypes";

export default (ass=[],action)=>{
switch(action.type){
    case FETCH_ASS:
        return action.payload;
        case FETCH_As:
            return {...ass, association: action.payload};
    
        case CREATEASS :
            return [...ass, action.payload]
            case LIKEASS:
                return { ...ass, association: ass.association.map((association) => (association._id === action.payload._id ? action.payload : association)) };
default:
    return ass
        }

}