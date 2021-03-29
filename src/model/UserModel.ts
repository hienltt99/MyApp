type userModel = {
  access_token: string,
  expired_time: string,
  name: string,
  email: string,
  password: string,
  address:null | string,
  avatar: null | string,
  user_id: number,
  gender: string,
  phone: string
}

export default userModel;
