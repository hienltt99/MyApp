import { TYPES } from "../types"

const loginSuccess = (payload: any) => {
  type: TYPES.LOGIN_SUCCESS,
  payload
}

const clearUser = () =>{
  type: TYPES.CLEAR_USER
}

const signupAccount = (payload: any) => {
  type: TYPES.SIGN_UP_ACCOUNT;
  payload
}

export {
  loginSuccess,
  clearUser,
  signupAccount
}