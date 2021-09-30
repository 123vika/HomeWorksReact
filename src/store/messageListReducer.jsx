import { ADD_MESSAGE, DELETE_MESSAGE } from './types/messageListTypes.jsx';

const initialState = { msg: [] };
const messageListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      console.log(payload, 'reducer');
      return { ...state, msg: [...state.msg, payload] };
    case DELETE_MESSAGE:
      // return state.filter((msg) => msg.id !== payload);
      return {
        ...state,
        msg: state.msg.filter((msg) => msg.id !== payload.id),
      };
    default:
      return state;
  }
};
export default messageListReducer;
