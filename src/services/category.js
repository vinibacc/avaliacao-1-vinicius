import client from '../providers/client'

export const getCategories = () =>
  client.get('categories')
