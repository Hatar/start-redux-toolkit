import { INCREMENT, DECREMENT, INCREMENT_BY_Value } from "./types";
const increment = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};
const decrement = async (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};
const incrementByValue = (value, dispatch) => {
  return dispatch({
    type: INCREMENT_BY_Value,
    payload: value,
  });
};

export { increment, decrement, incrementByValue };
