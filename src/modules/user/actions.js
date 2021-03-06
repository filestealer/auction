import t from './types';

export function signIn(data) {
  return {type: t.SIGN_IN, payload: data}
}
export function signOut() {
  return {type: t.SIGN_OUT}
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

export function openEditProfile() {
  return {type: t.OPEN_EDIT_PROFILE}
}
export function editProfile(payload) {
  return {type: t.EDIT_PROFILE, payload}
}
export function editProfilePopup(payload) {
  return {type: t.EDIT_PROFILE_POPUP, payload}
}
export function openPopup() {
  return {type: t.SHOW_POPUP}
}
export function hidePopup() {
  return {type: t.HIDE_POPUP}
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
export function fileUpload(payload) {
  return {type: t.FILE_UPLOAD, payload}
}

export function deleteFile(payload) {
  return {type: t.FILE_DELETE, payload}
}



// noinspection JSUnusedGlobalSymbols
export default {
  signIn, signOut, fetchProfile, openRegistration, signUp, openProfile, showModal, hideModal, fileUpload,deleteFile, openEditProfile,
  openPopup, hidePopup, editProfilePopup,
};