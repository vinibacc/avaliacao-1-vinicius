import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './modules'

const store = createStore(reducer, applyMiddleware(logger))

export default store
