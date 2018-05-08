import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk
import axios from 'axios'

// export default createStore(   rootReducer,   applyMiddleware(thunkMiddleware,
// loggingMiddleware) )

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export default store
