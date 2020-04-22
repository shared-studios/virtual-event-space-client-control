import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import reducer from "../reducers"

const middleware = applyMiddleware(createLogger(), createPromise(), thunk)

export default createStore(reducer, middleware)