import {all, call} from 'redux-saga/effects'
import {sagas as appSagas} from './modules/app/sagas';
import {sagas as lotsSagas} from './modules/lots/sagas';
import {sagas as userSagas} from './modules/user/sagas';

// import {sagas as geoSagas} from './modules/geo_data/sagas';

export default function* mainSaga() {
  console.log('::mainSaga start');
  const results = yield all([
    call(lotsSagas),
    call(userSagas),
    call(appSagas),


    // call(geoSagas),
  ]);
  console.log('::mainSaga result: ', results);
}
