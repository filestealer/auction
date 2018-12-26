import t from './types';

const defaultState ={
  list: [],
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false,
  newLot: {},
  bids: [],
  categories: []
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

    case t.FETCH_BIDS:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_BIDS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        bids: payload
      });
    case t.FETCH_BIDS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        bids: [],
      });

    case t.FETCH_CATEGORIES:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        categories: payload
      });
    case t.FETCH_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        categories: [],
      });

    case t.CREATE_LOT:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.CREATE_LOT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        // list: payload
      });
    case t.CREATE_LOT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        // list: [],
      });

    case t.CREATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.CREATE_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        // list: payload
      });
    case t.CREATE_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        // list: [],
      });

    default:
      return state;
  }
}

export default {lots: lotsReducers};
