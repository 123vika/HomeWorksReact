import { USER_LOGIN } from '../store/types/usersListTypes';

export const userProfileLogin = (userId, checkedLogin) => ({
  type: USER_LOGIN,
  payload: {
    id: userId,
    checkedLogin: checkedLogin,
  },
});
