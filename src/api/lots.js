// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get, postFiles} from '../utils/net';
import {unFormatPhone} from '../utils';


export function getList() {
  console.log("API LOTS GETLIST");
  return get('Auth::getList', APIUrl + 'auctions/', {});
}

export function getBids() {
  console.log("API LOTS getBids");
  return get('Auth::getBids', APIUrl + 'bids/', {});
}

export function getCategories() {
  console.log("API LOTS getBids");
  return get('Auth::getBids', APIUrl + 'categories/', {});
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


export function createRequestPartnership(data) {
  console.log("API LOTS requestPartnership", data);

  return post('Lots::CreateLot', APIUrl + 'partnerships/', {
    ...data
    // "auction": 13,
    // "description": "Мой объем"
  }, {'Authorization': 'Token '+data.token});
}



export function createRequest(data) {
  console.log("API LOTS CreateLot", data);

  // const body = new FormData();
  // data.files.map((e) => {
  //   body.append('files[]', e);
  // });
  // body.append('amount', data.amount);
  // body.append('auction', data.id);
  // debugger;
  // fetch("http://localhost:3001//upload", {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: data
  // }).then((response) =>  {
  //   return response.text();
  // })
  return post('Lots::CreateLot', APIUrl + 'bids/', {auction: data.id, amount: data.amount, files: data.files}, {'Authorization': 'Token '+data.token});
  // return postFiles('Lots::CreateLot', APIUrl + 'bids/', body, {'Authorization': 'Token '+data.token, 'Content-Type': 'application/x-www-form-urlencoded'});
}

export function testFileUpload(data) {
  const body = new FormData();
  // data.files.map((e) => {
  //   body.append('content', e);
  // });
  body.append('content', data.file);
  // body.append('amount', data.amount);
  // body.append('bid', 1);
  // fetch("http://localhost:3001//upload", {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   body: data
  // }).then((response) =>  {
  //   return response.text();
  // })
  // return postFiles('Lots::CreateLot', APIUrl + 'bidfiles/', body, {'Authorization': 'Token '+data.token, 'Content-Type': 'application/x-www-form-urlencoded'});
  return postFiles('Lots::CreateLot', APIUrl + 'files/',  body, { 'Content-Type': 'multipart/form-data'});
  // return postFiles('Lots::CreateLot', APIUrl + 'files/', body, { 'Content-Type': 'application/x-www-form-urlencoded'});

}




export default {getList, createLot, createRequest, getBids, getCategories, testFileUpload, createRequestPartnership};
