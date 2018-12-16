// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get} from '../utils/net';
import {unFormatPhone} from '../utils';


export function getList() {
  console.log("API LOTS GETLIST");
  return [{name: 1}, {name: 2}];
}

export default {getList};
