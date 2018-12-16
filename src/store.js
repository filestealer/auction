import logger from 'redux-logger';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
// import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

// const history = createBrowserHistory();
import {history} from 'utils/history'

export const store = createStore(
  createRootReducer(history), // root reducer with router state
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
      logger
    ),
  ),
);
sagaMiddleware.run(rootSaga);

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(routeMiddleware, sagaMiddleware, logger )
// );

