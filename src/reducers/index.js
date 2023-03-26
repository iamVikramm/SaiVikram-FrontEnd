
import { ADD_DATA } from "../actions"
export default function Data(state=[],action){
    if(action.type === ADD_DATA){
        return action.data
    }
    return state;
}