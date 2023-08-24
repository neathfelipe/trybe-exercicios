import { AnyAction } from "redux";
import { INCREMENT_COUNTER } from "../actions";

const INITIAL_STATE = {
  count: 0,
};

const countReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
      ...state,
      count: state.count + action.payload
    }
    default:
      return state;
  }
}

export default countReducer;