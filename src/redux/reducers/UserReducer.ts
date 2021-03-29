import {TYPES} from '../types';
import {UserModel} from '../../model'
type actionType = {
  type: '';
  payload: UserModel;
}

const initState ={
  access_token: '',
  expired_time: '',
  name: '',
  email: '',
  password: '',
  address: '',
  avatar: '',
  user_id: 0,
  gender: '',
  phone: ''
}

const UserReducer = (state = initState, action : actionType) =>{
  const {type, payload} = action;
  switch (type) {
    case TYPES.LOGIN_SUCCESS:
      return{
        ...state,
        access_token: payload.access_token,
        expired_time: payload.expired_time,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        address: payload.address,
        avatar: payload.avatar,
        user_id: payload.user_id,
        gender: payload.gender,
        phone: payload.phone
      }
    case TYPES.CLEAR_USER:
      return{
        ...state,
        ...initState
      }
    case TYPES.SIGN_UP_ACCOUNT:
      return{
        ...state,
        access_token: payload.access_token,
        expired_time: payload.expired_time,
        name: payload.name,
        email: payload.email,
        password: payload.password,
        address: payload.address,
        avatar: payload.avatar,
        user_id: payload.user_id,
        gender: payload.gender,
        phone: payload.phone
      }
    default:
      return state
  }
}

export default UserReducer;