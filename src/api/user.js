// noinspection JSUnresolvedVariable

import {APIUrl} from '../config'
import {post, get, patch, postFiles} from '../utils/net';
import {unFormatPhone} from '../utils';


export function signIn(data) {
  return post('Auth::signIn', APIUrl + 'auth/', {...data});
}

export function fetchProfile(token) {
  return get('Auth::profile', APIUrl + 'profile/', {'Authorization': 'Token '+token});
}

export function fetchUser(id) {
  return get('Auth::profile', APIUrl + 'users/'+id);
}



export function fileUpload(data) {
  const body = new FormData();
  body.append('content', data);
  return postFiles('APP::fileUpload', APIUrl + 'files/',  body, {});
}



export function signUpCompany(user) {
  // user = Object.select(user, [
  //   'phone', 'email', 'password',
  //   'name', 'surname', 'company_name', 'company_address', 'company_bin',
  //   'company_contacts', 'company_description',
  // ]);
  // user.phone = unFormatPhone(user.phone);
  // TODO: пока регистрироваться с веба могут только работадатели
  // user.group = 'employers';
  return post('Auth::reg', APIUrl + 'register/company/', {
    ...user,
    // "name": "TEST COMPANY 2",
    // "address": "Somewhere",
    // "website": "https://test.kz",
    // "description": "test description",
    // "balance": 5000,
    // "user": {
    //   "email": "andrey2@osmushko.com",
    //   "password": "1q2w3e4r"
    // }
  });
}
export function signUpPerson(user) {

  return post('Auth::reg', APIUrl + 'register/person/', {
    ...user,
  });
}

export function updatePerson(payload, id, token) {

  return patch('Auth::reg', APIUrl + 'persons/'+id+'/', {
    ...payload,
  },{'Authorization': 'Token '+token});
}

export function updateCompany(payload, id, token) {
  debugger;

  return patch('Auth::reg', APIUrl + 'companies/'+id+'/', {
    ...payload,
  },{'Authorization': 'Token '+token});
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

export default {signIn, fetchProfile, signUpCompany, signUpPerson,
                signOut, restorePasswordSend, restorePasswordCheck, updatePassword,
                test, test_auth, fileUpload, fetchUser,
                updatePerson, updateCompany};
