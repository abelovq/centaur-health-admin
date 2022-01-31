import { AuthActions } from '../actions/types';
import { AuthActionsEnum, IAuthState } from './types';

const initialState: IAuthState = {
  isAuth: false,
  user: null,
};

export default function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case AuthActionsEnum.SAVE_CURRENT_USER: {
      return { ...state, user: action.payload };
    }
    case AuthActionsEnum.CLEAR_CURRENT_USER: {
      return { ...state, user: null };
    }
    default:
      return state;
  }
}
