import Sugar from 'sugar';
import {
  INIT, INIT_SUCCESS, INIT_FAILURE,
  CLEAN_AFTER_SIGN_OUT, NAVIGATION_UPDATE,
  OPEN_INFORM_TOASTER, CLOSE_INFORM_TOASTER
} from './types';

Sugar.extend();

const defaultState ={
  list: {},
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false
};

export function appReducers(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    // case CLEAN_AFTER_SIGN_OUT:
    // 	return defaultState;

    default:
      return state;
  }
}

export default {app: appReducers};
