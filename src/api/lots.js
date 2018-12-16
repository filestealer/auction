// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get} from '../utils/net';
import {unFormatPhone} from '../utils';


export function getList() {
  console.log("API LOTS GETLIST");
  return get('Auth::profile', APIUrl + 'auctions/', {});
}


export function createLot(data) {
  console.log("API LOTS CreateLot");
  return post('Lots::CreateLot', APIUrl + 'auctions/', {
    "request_category": 1,
    "auction_type": 1,
    "request_description": "Вот такой вот аукцион",
    "delivery_date": "2019-10-02T00:00:00Z",
    "delivery_address": "куда?:D",
    "auction_duration": "2019-10-02T00:00:00Z"
  }, {'Authorization': 'Token '+data.token});
}




export default {getList, createLot};
