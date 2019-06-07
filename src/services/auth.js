import client from '../providers/client'

export const login = credentials =>
  client.post('users/login', credentials)
