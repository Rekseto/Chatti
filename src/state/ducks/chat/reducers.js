import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  fetching: false,
  messages: []
};

const actionHandlers = {
  CHAT_FETCH_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      fetching: R.T
    });
  },
  CHAT_FETCH_SUCCESS: (state, action) => {
    return R.evolve(R.__, state)({
      fetching: R.F,
      messages: R.always(action.payload)
    });
  }
};

export default createReducer(initialState, actionHandlers);
