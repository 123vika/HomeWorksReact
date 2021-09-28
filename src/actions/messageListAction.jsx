import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
} from '../store/types/messageListTypes.jsx';

export const addMessageList = (userMessage) => ({
  type: ADD_MESSAGE,
  payload: { userMessage },
});
export const deleteMessageList = (userId) => ({
  type: DELETE_MESSAGE,
  payload: userId,
});
