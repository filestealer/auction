import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import notifyReducer from 'react-redux-notify';
import appReducers from './modules/app/reducers';
import lotsReducers from './modules/lots/reducers';
import userReducers from './modules/user/reducers';


export default (history) => combineReducers({
  router: connectRouter(history),
  notifications: notifyReducer,
  ...appReducers,
  ...lotsReducers,
  ...userReducers,
})
