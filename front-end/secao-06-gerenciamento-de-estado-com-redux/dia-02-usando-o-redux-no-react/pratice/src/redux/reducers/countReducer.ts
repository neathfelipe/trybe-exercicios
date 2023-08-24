import { AnyAction } from "redux";
import { actionName } from "../actions";

const INITIAL_STATE = {
  count: 0
} 
const reducerCount = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case actionName:
      return {
      ...state,
        count: state.count + action.payload,
    }
    default:
      return state;
  }
}

export default reducerCount;