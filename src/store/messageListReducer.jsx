import { ADD_MESSAGE, DELETE_MESSAGE } from './types/messageListTypes.jsx';

const initialState = {};
const messageListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      console.log(payload, 'reducer');
      return { ...state, payload };
    case DELETE_MESSAGE:
      return state.filter((msg) => msg.id !== payload);
    default:
      return state;
  }
};
export default messageListReducer;
