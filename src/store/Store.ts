import { createStore, Store, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers, { ApplicationState } from "./reducers/rootReducer";
import sagas from "./sagas/Sagas";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

/// <summary>
/// Creates store and sets it into singleton (Store.ts/store)
/// </summary>
export const createAppStore = (testing?: boolean | undefined | null) => {
  store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
};

export type AppStore = Store<ApplicationState>;
export let store: AppStore;
// export let store: any;

// initialize
createAppStore();
