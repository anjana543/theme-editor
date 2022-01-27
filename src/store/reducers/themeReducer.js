import { THEME } from "../actions/actionTypes";

const initialState = {
  theme: {},
};

function themeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case THEME.ADD:
      return { ...state, ...payload };
    case THEME.RESET:
      return initialState;
    default:
      return state;
  }
}

export default themeReducer;
