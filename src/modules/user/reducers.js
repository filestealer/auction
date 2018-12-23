import t from './types';

const defaultState ={
  token: '',
  isFetching: false,
  isRemoving: false,
  isPublishing: false,
  isSaving: false,
  isCreating: false,
  error: false,
  profile: {
    email: ''
  },
  modalActive: false,
  files: {},
};

export function Reducers(state = defaultState, action) {
  const payload = action.payload;

  switch (action.type) {
    // case CLEAN_AFTER_SIGN_OUT:
    // 	return defaultState;

    case t.SIGN_IN:
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
        email: payload.email,
      });
    case t.SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        ...payload,
        // token: payload.token

      });
    case t.SIGN_IN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        token: '',
      });
    case t.FILE_UPLOAD:
      return Object.assign({}, state, {
        isFetching: true,
        error: false,
      });
    case t.FILE_UPLOAD_SUCCESS:
      debugger;
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        files: {...state.files, [payload.file_id]: {...payload}}, //state.files.concat({...state.files, payload},//state.files.push(payload.id),
        // token: payload.token

      });
    case t.FILE_UPLOAD_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
      });
    case t.FILE_UPLOAD_CLEAR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        files: {}
      });
    case t.FILE_DELETE:
      let files = Object.assign({},state.files)
      delete files[payload.file_id];
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        files: files,
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
        profile: {email: ''},
        token: '',
      });
    case t.SHOW_MODAL:
      return Object.assign({}, state, {
        modalActive: true
      });
    case t.HIDE_MODAL:
      return Object.assign({}, state, {
        modalActive: false
      });


    default:
      return state;
  }
}

export default {user: Reducers};
