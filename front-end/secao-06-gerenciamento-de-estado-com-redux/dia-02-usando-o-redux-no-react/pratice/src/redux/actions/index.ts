export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const actionIncrementCounter = (increment = 1) => ({
  type: INCREMENT_COUNTER,
  payload: increment,
});
