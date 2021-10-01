import { ADD_CHAT_LIST, DELETE_CHAT_LIST } from "../store/types/chatPageTypes";

export const addChatList = (userChatList) => ({
  type: ADD_CHAT_LIST,
  payload: userChatList,
});
export const deleteChat = (chatId) => ({
  type: DELETE_CHAT_LIST,
  payload: chatId,
});
