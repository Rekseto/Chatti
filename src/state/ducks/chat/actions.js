export const fetchChatRequest = () => ({
  type: "CHAT_FETCH_REQUEST"
});

export const fetchChatSuccesss = data => ({
  type: "CHAT_FETCH_SUCCESS",
  payload: data
});

export default {
  fetchChatRequest,
  fetchChatSuccesss
};
