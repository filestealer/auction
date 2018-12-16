import t from './types';

export function signIn(data) {
  return {type: t.SIGN_IN, payload: data}
}
export function signUp(data) {
  return {type: t.SIGN_UP, payload: data}
}

export function openRegistration() {
  return {type: t.OPEN_REGISTRATION }
}

export function openProfile() {
  return {type: t.OPEN_PROFILE}
}
export function showModal() {
  return {type: t.SHOW_MODAL}
}
export function hideModal() {
  return {type: t.HIDE_MODAL}
}

export function fetchProfile() {
  return {type: t.FETCH_PROFILE}
}



// noinspection JSUnusedGlobalSymbols
export default {
  signIn, fetchProfile, openRegistration, signUp, openProfile, showModal, hideModal
};