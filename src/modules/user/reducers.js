import t from './types';

const defaultState ={
  token: '',
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false
};

export function Reducers(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    // case CLEAN_AFTER_SIGN_OUT:
    // 	return defaultState;

    case t.SIGN_IN:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        token: payload.token
      });
    case t.SIGN_IN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        token: '',
      });
    case t.FETCH_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        profile: payload
      });
    case t.FETCH_PROFILE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        profile: '',
      });

    default:
      return state;
  }
}

export default {user: Reducers};
