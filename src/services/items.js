import client from '../providers/client'

export const getItems = () => client.get('/items')

export const createItem = data => client.post('/items', data)
