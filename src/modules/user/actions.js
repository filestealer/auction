import t from './types';

export function signIn(data) {
  return {type: t.SIGN_IN, payload: data}
}
export function signUp(data) {
  return {type: t.SIGN_UP, payload: data}
}

export function fetchProfile() {
  return {type: t.FETCH_PROFILE}
}



// noinspection JSUnusedGlobalSymbols
export default {
  signIn, fetchProfile
};