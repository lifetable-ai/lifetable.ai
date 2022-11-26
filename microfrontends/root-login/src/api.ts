import { api } from "./util/axios"

export interface postRegisterUser {
  email: string
  username: string
  password: string
  rePassword: string
}

export const registerUser = (postData: postRegisterUser) =>
  api.post('/fakeauth/register', { ...postData })

export interface postLoginUser {
  email: string
  password: string
}

export const loginUser = (postData: postLoginUser) => 
  api.post('fakeauth/check', { ...postData })
