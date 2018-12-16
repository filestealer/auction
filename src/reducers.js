import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import appReducers from './modules/app/reducers';
import lotsReducers from './modules/lots/reducers';
import userReducers from './modules/user/reducers';


export default (history) => combineReducers({
  router: connectRouter(history),
  ...appReducers,
  ...lotsReducers,
  ...userReducers,
})
