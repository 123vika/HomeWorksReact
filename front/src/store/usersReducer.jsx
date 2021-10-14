import { USER_LOGIN } from './types/usersListTypes';

const initialState = { users: [] };
const usersReducer = (state = initialState, { type, payload }) => {
  console.log(type, payload, 'reducer');

  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        users: [
          state.users.filter((user) => user.id !== payload.id),
          { id: payload.id, checked: payload.checkedLogin },
        ],
      };
    default:
      return state;
  }
};
export default usersReducer;
