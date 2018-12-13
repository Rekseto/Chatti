import {call, put} from "redux-saga/effects";
/** 
 * Returns generator which will call a request for given endpoint, then 
 * based on result will dispatch proper action.
 * 
 * @param {string}   endpoint - Location to call a fetch
 * @param {string}   method - Method to use in request
 * @param {Function} success - Action to dispatch when succeed
 * @param {Function} fail - Action to dispatch when fail
 * 
 * @returns  {Function}
 * 
*/
export const createSagaApiCall = (endpoint, method, success, fail) => {
  return function*(action) {
    try {
      const data = yield call(fetch, endpoint, {
        method: method,
        body: JSON.stringify(action.payload)
      });

      const json = yield data.json();
      if (json.success) {
        yield put(success(json.data));
      } else {
        yield put(fail(json.userMessage));
      }
    } catch (error) {
      yield put(fail(error.message));
    }
  };
};
