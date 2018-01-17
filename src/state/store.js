import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import { routerReducer } from 'react-router-redux'
import * as reducers from "./ducks";

export default function configureStore( initialState ) {

  const rootReducer = combineReducers( {...reducers });

  const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  return createStore(
    rootReducer,
    initialState,
    enhancers,
    applyMiddleware(thunk),
  );
}