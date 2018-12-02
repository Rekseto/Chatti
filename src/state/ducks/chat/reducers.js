import * as R from "ramda";
import createReducer from "../../../helpers/reducerHelper";

const initialState = {
  fetching: false,
  messages: []
};

const actionHandlers = {
  CHAT_LISTEN_RETRIVE: (state, action) => {
    return R.evolve(R.__, state)({
      fetching: R.F,
      messages: R.always(action.payload)
    });
  }
};

export default createReducer(initialState, actionHandlers);
