import t from './types';

export function fetchList() {
  return {type: t.FETCH_LIST}
}
export function openLots() {
  return {type: t.OPEN_LOTS}
}


// noinspection JSUnusedGlobalSymbols
export default {
  fetchList, openLots
};