import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { monitorReducer } from './enhancers'
import { logger } from './middleware'
import rootReducer from './reducers/root'

export default function configureStore(preloadedState) {
  // const middlewares = [logger, thunk]
  // const middlewareEnhancer = applyMiddleware(...middlewares)

  // const enhancers = [middlewareEnhancer, monitorReducer]
  // const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState)

  return store
}