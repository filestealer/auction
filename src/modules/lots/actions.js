import t from './types';

export function fetchList() {
  return {type: t.FETCH_LIST}
}
export function openLots() {
  return {type: t.OPEN_LOTS}
}

export function openLot(id) {
  return {type: t.OPEN_LOTS, payload: id}
}

export function createLot() {
  return {type: t.CREATE_LOT}
}


// noinspection JSUnusedGlobalSymbols
export default {
  fetchList, openLots, createLot, openLot
};