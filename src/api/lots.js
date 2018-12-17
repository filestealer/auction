// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get} from '../utils/net';
import {unFormatPhone} from '../utils';


export function getList() {
  console.log("API LOTS GETLIST");
  return get('Auth::getList', APIUrl + 'auctions/', {});
}

export function getBids() {
  console.log("API LOTS getBids");
  return get('Auth::getBids', APIUrl + 'bids/', {});
}



export function createLot(data) {
  console.log("API LOTS CreateLot", data);

  return post('Lots::CreateLot', APIUrl + 'auctions/', {
    ...data.data
    // "request_category": 1,
    // "auction_type": 1,
    // "request_description": "Вот такой вот аукцион",
    // "delivery_date": "2019-10-02T00:00:00Z",
    // "delivery_address": "куда?:D",
    // "auction_duration": "2019-10-02T00:00:00Z"
  }, {'Authorization': 'Token '+data.token});
}
export function createRequest(data) {
  console.log("API LOTS CreateLot", data);

  return post('Lots::CreateLot', APIUrl + 'bids/', {
    amount: data.price,
    auction: data.id,
    files: [],
  }, {'Authorization': 'Token '+data.token});
}




export default {getList, createLot, createRequest, getBids};
