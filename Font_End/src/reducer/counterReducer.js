import { INCREMENT, DECREMENT } from "../aciton/type";

const INITIAL_STATE = {
  count: 0,
  name: "thang",
  arr: [
    { name: "thắng", price: 2000 },
    { name: "thiện", price: 5000 },
  ],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        name: "vip",
        arr: [
          { name: "vip", price: 4000 },
          { name: "pro", price: 6000 },
        ],
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        name: "pro",
        arr: [
          { name: "no", price: 1000 },
          { name: "yes", price: 9000 },
        ],
      };

    default:
      return state;
  }
};

export default reducer;
