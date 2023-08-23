import { AnyAction, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension"; 
const INITIAL_STATE = {
  count: 0,
};

const INCREMENT_COUNTER = "INCREMENT_COUNTER";

const reducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      }
      default:
        return state;
  }
};

const action = { type: INCREMENT_COUNTER };

const store = createStore(reducer, composeWithDevTools());

const buttonEl = document.querySelector("button") as HTMLButtonElement;
const count = document.querySelector('p') as HTMLParagraphElement;

buttonEl.addEventListener("click", () => {
  store.dispatch(action);
});

store.subscribe(() => {
  const globalState = store.getState();
  count.innerHTML = globalState.count.toString()
})