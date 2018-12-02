import {takeLatest, takeEvery} from "redux-saga/effects";
import database from "../../../firebase";
import {listenChatRequest, listenChatRetrive} from "./actions";

const chatListen = function*(action) {
  database
    .collection("messages")
    .orderBy("date")
    .onSnapshot(function(snapshot) {
      const messages = [];
      snapshot.docs.forEach(doc => {
        messages.push(doc.data());
      });
      action.payload.dispatch(listenChatRetrive(messages));
    });
};

const addMessage = function*(action) {
  yield database.collection("messages").add({
    ...action.payload
  });
};

export default function* fetchChatSaga() {
  yield takeEvery("MESSAGE_ADD_REQUEST", addMessage);
  yield takeEvery("CHAT_LISTEN_REQUEST", chatListen);
}
