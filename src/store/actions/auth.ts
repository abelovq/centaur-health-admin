import { AuthActionsEnum } from '../reducers/types';
import { IClearCurrentUser, ISaveCurrentUser, ISignIn, ISignUp } from './types';

export const signIn = (payload: any): ISignIn => ({
  type: AuthActionsEnum.SIGN_IN,
  payload,
});

export const signUp = (payload: any): ISignUp => ({
  type: AuthActionsEnum.SIGN_UP,
  payload,
});

export const saveCurrentUser = (payload: any): ISaveCurrentUser => ({
  type: AuthActionsEnum.SAVE_CURRENT_USER,
  payload,
});

export const clearCurrentUser = (): IClearCurrentUser => ({
  type: AuthActionsEnum.CLEAR_CURRENT_USER,
});