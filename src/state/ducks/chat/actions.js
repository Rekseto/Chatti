export const listenChatRequest = dispatch => ({
  type: "CHAT_LISTEN_REQUEST",
  payload: {
    dispatch
  }
});

export const listenChatRetrive = messages => ({
  type: "CHAT_LISTEN_RETRIVE",
  payload: [...messages]
});

export const addMessage = message => ({
  type: "MESSAGE_ADD_REQUEST",
  payload: {
    username: "Anon",
    date: new Date(),
    message
  }
});

export default {
  addMessage,
  listenChatRequest
};
