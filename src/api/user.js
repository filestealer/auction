// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get} from '../utils/net';
import {unFormatPhone} from '../utils';


export function signIn(data) {
  // user = Object.select(user, ['phone', 'password', 'fcm_token']);
  // user.phone = unFormatPhone(user.phone);

  return post('Auth::signIn', APIUrl + 'auth/', {...data});
}

export function fetchProfile(token) {
  // user = Object.select(user, ['phone', 'password', 'fcm_token']);
  // user.phone = unFormatPhone(user.phone);

  return get('Auth::profile', APIUrl + 'profile/', {'Authorization': 'Token '+token});
}


export function signUp(user) {
  user = Object.select(user, [
    'phone', 'email', 'password',
    'name', 'surname', 'company_name', 'company_address', 'company_bin',
    'company_contacts', 'company_description',
  ]);
  user.phone = unFormatPhone(user.phone);
  // TODO: пока регистрироваться с веба могут только работадатели
  user.group = 'employers';
  return post('Auth::signUp', APIUrl + '/user/sign_up', {user});
}

export function signOut() {
  return post('Auth::signOut', APIUrl + '/user/sign_out');
}

export function test() {
  console.log('test');
  return post('Auth::reg', APIUrl + 'register/company/', {
    "name": "TEST COMPANY 2",
    "address": "Somewhere",
    "website": "https://test.kz",
    "description": "test description",
    "balance": 5000,
    "user": {
      "email": "andrey2@osmushko.com",
      "password": "1q2w3e4r"
    }
  });
}
export function test_auth() {
  console.log('test_auth');
  return post('Auth::reg', APIUrl + 'auth/', {
    "email": "andrey2@osmushko.com",
    "password": "1q2w3e4r"
  });
}

export function restorePasswordSend(phone) {
  phone = unFormatPhone(phone);
  return post('Auth::restorePasswordSend', APIUrl + '/user/restore_password_send', {phone});
}

export function restorePasswordCheck(user) {
  user.phone = unFormatPhone(user.phone);
  return post('Auth::restorePasswordCheck', APIUrl + '/user/restore_password_check', user);
}

export function updatePassword(params) {
  return post('Auth::updatePassword', APIUrl + '/user/update_password', params);
}

export default {signIn, fetchProfile, signUp, signOut, restorePasswordSend, restorePasswordCheck, updatePassword, test, test_auth};
