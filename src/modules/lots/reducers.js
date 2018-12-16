import t from './types';

const defaultState ={
  list: {},
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false
};

export function lotsReducers(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    // case CLEAN_AFTER_SIGN_OUT:
    // 	return defaultState;

    case t.FETCH_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: payload
      });
    case t.FETCH_LIST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        list: [],
      });

    default:
      return state;
  }
}

export default {lots: lotsReducers};
