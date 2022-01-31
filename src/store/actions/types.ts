import { AuthActionsEnum } from '../reducers/types';

export interface ISignIn {
  type: AuthActionsEnum.SIGN_IN;
  // TODO clarify any
  payload: any;
}

export interface ISignUp {
  type: AuthActionsEnum.SIGN_UP;
  // TODO clarify any
  payload: any;
}

export interface ISaveCurrentUser {
  type: AuthActionsEnum.SAVE_CURRENT_USER;
  // TODO clarify any
  payload: any;
}

export interface IClearCurrentUser {
  type: AuthActionsEnum.CLEAR_CURRENT_USER;
  payload?: any;
}

export type AuthActions = ISaveCurrentUser | IClearCurrentUser;
