import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./ducks";

const { notebooks, transcriptions, images, ui, search } = reducers;

export default function configureStore(initialState) {
  const entities = combineReducers({
    notebooks,
    transcriptions,
    images
  });

  const rootReducer = combineReducers({
    entities,
    search,
    ui
  });
  // const rootReducer = combineReducers( {...reducers });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
      })
    : compose;
  //
  const enhancers = composeEnhancers(applyMiddleware(thunk));

  return createStore(
    rootReducer,
    initialState,
    enhancers
    // applyMiddleware(thunk),
  );
}
