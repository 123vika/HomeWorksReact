import { ADD_CHAT_LIST, DELETE_CHAT_LIST } from "./types/chatPageTypes";

const initialState = [];
const chatPageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT_LIST:
      return payload;
    case DELETE_CHAT_LIST:
      const newstate = state.filter((chat) => chat.id !== payload);
      console.log(state);
      return newstate;
    default:
      return state;
  }
};
export default chatPageReducer;
