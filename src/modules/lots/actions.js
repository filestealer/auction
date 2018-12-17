import t from './types';

export function fetchList() {
  return {type: t.FETCH_LIST}
}

export function fetchLBids() {
  return {type: t.FETCH_BIDS}
}

export function openLots() {
  return {type: t.OPEN_LOTS}
}

export function openLot(id) {
  return {type: t.OPEN_LOT, payload: id}
}
export function createRequest(data) {
  return {type: t.CREATE_REQUEST, payload: data}
}

export function openCreateLot() {
  return {type: t.OPEN_CREATE_LOT}
}



export function createLot(data) {
  return {type: t.CREATE_LOT, payload: data}
}


// noinspection JSUnusedGlobalSymbols
export default {
  fetchList, openLots, createLot, openLot, openCreateLot, createRequest, fetchLBids,
};