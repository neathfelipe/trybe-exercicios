export const actionName = "MODIFIED_COUNTER";

export const actionIncrementCounter = (numberModified = 1) => ({
  type: actionName,
  payload: numberModified,
});
