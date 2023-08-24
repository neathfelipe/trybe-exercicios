import { legacy_createStore as createStore } from "redux";
import countReducer from "./reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(countReducer, composeWithDevTools());

export default store;