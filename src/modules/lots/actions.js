import t from './types';

export function fetchList() {
  return {type: t.FETCH_LIST}
}
export function openLots() {
  return {type: t.OPEN_LOTS}
}

export function openLot(id) {
  return {type: t.OPEN_LOT, payload: id}
}

export function createLot(data) {
  return {type: t.CREATE_LOT, payload: data}
}


// noinspection JSUnusedGlobalSymbols
export default {
  fetchList, openLots, createLot, openLot
};