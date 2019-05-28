import api from './api'

export const login = credentials => api.post('users/login', credentials)
export const signUp = credentials => api.post('/users/singup', credentials)