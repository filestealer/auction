import t from './types';

export function fetchList(payload) {
  return {type: t.FETCH_LIST, payload: {page: payload.page,}}
}

export function filterList(payload) {
  return {type: t.FILTER_LIST, payload}
}

export function fetchBids() {
  return {type: t.FETCH_BIDS}
}

export function fetchCategories() {
  return {type: t.FETCH_CATEGORIES}
}

export function openLots() {
  return {type: t.OPEN_LOTS}
}

export function openLot(id) {
  return {type: t.OPEN_LOT, payload: id}
}

export function fetchItem(id) {
  return {type: t.FETCH_ITEM, payload: id}
}

export function acceptBid(data) {
  return {type: t.ACCEPT_BID, payload: data}
}

export function changeDate(payload) {
  return {type: t.CHANGE_DATE, payload}
}
export function changePage(payload) {
  return {type: t.CHANGE_PAGE, payload}
}

export function acceptPartnership(data) {
  return {type: t.ACCEPT_PARTNERSHIP, payload: data}
}

export function createRequest(data) {
  return {type: t.CREATE_REQUEST, payload: data}
}
export function createRequestPartnership(data) {
  return {type: t.REQUEST_PARTNERSHIP, payload: data}
}

export function openCreateLot(id) {
  return {type: t.OPEN_CREATE_LOT, payload: id}
}

export function requestPartnership(payload) {
  return {type: t.REQUEST_PARTNERSHIP}
}



export function createLot(data) {
  return {type: t.CREATE_LOT, payload: data}
}


// noinspection JSUnusedGlobalSymbols
export default {
  fetchList, openLots, createLot, openLot, openCreateLot, createRequest, fetchBids, createRequestPartnership, acceptBid,
  acceptPartnership, fetchItem, changeDate,
};