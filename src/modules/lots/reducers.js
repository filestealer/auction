import t from './types';
import moment from "moment/moment";

const defaultState ={
  list: [],
  items: {},
  activePage: 1,
  count: 0,
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false,
  newLot: {},
  bids: [],
  categories: [],
  page: 1,
  delivery_date__gte: moment().format('YYYY-MM-DD HH:mm:ssZ'),
  delivery_date__lte: moment().add(10, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
};

export function lotsReducers(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    // case CLEAN_AFTER_SIGN_OUT:
    // 	return defaultState;

    case t.FETCH_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
        page: payload.page,
        delivery_date__gte: payload.delivery_date__gte || moment().format('YYYY-MM-DD HH:mm:ssZ'),
        delivery_date__lte: payload.delivery_date__lte || moment().add(365, 'days').format('YYYY-MM-DD HH:mm:ssZ'),
      });
    case t.FETCH_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      });
    case t.FETCH_LIST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        list: [],
      });

    case t.FETCH_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        items: {...state.items, [payload.id]: payload},
      });
    case t.FETCH_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        // items: {...state.items, [payload.id]: payload},
      });
    case t.ACCEPT_BID_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        items: {...state.items, [payload.id]: payload},
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
        bids: payload.results || []
      });
    case t.FETCH_BIDS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        bids: [],
      });

    case t.FETCH_CITIES:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      });
    case t.FETCH_CITIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        cities: payload,
      });
    case t.FETCH_CITIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        cities: [],
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
        categories: payload || [],
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
    case t.CHANGE_DATE:
      return Object.assign({}, state, {
        ...payload
        // list: [],
      });

    case t.CHANGE_PAGE:
      return Object.assign({}, state, {
        ...payload
        // list: [],
      });

    default:
      return state;
  }
}

export default {lots: lotsReducers};
