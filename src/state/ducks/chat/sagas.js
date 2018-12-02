import {takeLatest, put} from "redux-saga/effects";
import {createSagaApiCall} from "../../../helpers/reduxHelper";
import database from "../../../firebase";
import {fetchChatRequest, fetchChatSuccesss} from "./actions";

export default function* fetchChatSaga() {
  yield takeLatest("CHAT_FETCH_REQUEST", function*() {
    const messages = [];

    yield database
      .collection("messages")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          messages.push(doc.data());
        });
      });

    yield put(fetchChatSuccesss(messages));
  });
}
