import moduleActions from './actions';
import {sagas as moduleSagas} from './sagas';
import moduleReducers from './reducers';
import moduleScenes from './scenes';
import moduleTypes from './types';

export const actions = moduleActions;
export const sagas = moduleSagas;
export const reducers = moduleReducers;
export const scenes = moduleScenes;
export const types = moduleTypes;
export default {
  actions,
  reducers,
  sagas,
  scenes,
  types
};

