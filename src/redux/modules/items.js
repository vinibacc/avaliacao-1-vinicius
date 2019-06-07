const LOAD_ITEMS = 'LOAD_ITEMS'

const initialState = {
  data: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ITEMS:
      console.log('items to add', action.payload)
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export const fillItems = items => {
  return {
    type: LOAD_ITEMS,
    payload: items
  }
}
