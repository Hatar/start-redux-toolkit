import { INCREMENT, DECREMENT, INCREMENT_BY_Value } from "../action/types";
const counter = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case INCREMENT_BY_Value:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
