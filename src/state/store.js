import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import { routerReducer } from 'react-router-redux'
import * as reducers from "./ducks";

export default function configureStore( initialState ) {

  const rootReducer = combineReducers( {...reducers });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
      }) : compose;
  //
  const enhancers = composeEnhancers(
    applyMiddleware(thunk)
  );

  //TODO: figure out why the following doesn't work but the previous does

  // const enhancers = compose(
  //   window.devToolsExtension ? window.devToolsExtension() : f => f,
  //   applyMiddleware(thunk)
  // );

  return createStore(
    rootReducer,
    initialState,
    enhancers,
    // applyMiddleware(thunk),
  );
}