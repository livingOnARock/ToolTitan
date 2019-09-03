import { SET_CATEGORY, CLEAR_TOOLS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case CLEAR_TOOLS:
      return {
        ...state,
        activeTools: {}
      };
    default:
      return state;
  }
};
