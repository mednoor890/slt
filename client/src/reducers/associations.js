import { CREATEASS, FETCH_ASS,FETCH_As,LIKEASS,COMMENT} from "../constants/actionTypes";

export default (ass=[],action)=>{
switch(action.type){
    case FETCH_ASS:
        return action.payload;
        case FETCH_As:
            return {...ass, association: action.payload};
            case COMMENT:
                return {
                  ...ass,
                  associations: ass.associations.map((association) => {
                    if (association._id == +action.payload._id) {
                      return action.payload;
                    }
                    return association;
                  }),
                };
        case CREATEASS :
            return [...ass, action.payload]
            case LIKEASS:
                return { ...ass, association: ass.association.map((association) => (association._id === action.payload._id ? action.payload : association)) };
default:
    return ass
        }

}