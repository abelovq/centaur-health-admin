export interface IAuthState {
  isAuth: boolean;
  // TODO change any
  user: null | any;
}

export enum AuthActionsEnum {
  SAVE_CURRENT_USER = 'SAVE_CURRENT_USER',
  CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER',
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  SIGN_OUT = 'SIGN_OUT',
}
