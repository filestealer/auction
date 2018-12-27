import {createNotification, NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR, NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_WARNING} from 'react-redux-notify';
import t from "../modules/user/types";


export function normalizeError(error = {}, code = -1) {
  error = error || {};
  if (error && error.object) error = error.object;
  return {
    code: error.code || code,
    message: error.message || 'Unknown Error',
    backtrace: error.backtrace || error.stack || null,
  };
}

export function dateStr(d) {
  if (typeof d !== 'string') {
    d = d.toDateString();
  }

  return d;
}

export function formatPhone(phone) {
  let nphone = (phone || '')
    .replace(/\D/g, '')
    .replace(/[ -]/g, '')
    .substr(0, 11);
  nphone = nphone
    .replace(/^(\d)(\d{3})(\d)/g, '$1 ($2) $3')
    .replace(/\) (\d{3})(\d)/, ') $1 $2');
  nphone = nphone.replace(/ (\d\d)(\d\d)$/g, ' $1 $2');
  return '+' + (nphone || '');
}

export function unFormatPhone(phone) {
  return `+${(phone || '').replace(/[+)( -]/g, '')}`;
}

export function makeNotification(inType, message) {
  let type = NOTIFICATION_TYPE_INFO;
  switch (inType) {
    case 'success':
      type = NOTIFICATION_TYPE_SUCCESS;
      break;
    case 'error':
      type = NOTIFICATION_TYPE_ERROR;
      break;
    case 'warning':
      type = NOTIFICATION_TYPE_WARNING;
      break;
    case 'info':
      type = NOTIFICATION_TYPE_INFO;
      break;
    default:
      type = NOTIFICATION_TYPE_INFO;
      break;
  }

  return {
    message,
    type,
    duration: 3000,
    canDismiss: false,
    forceClose: false,
    // icon: <i className="fa fa-check" />
  }

}
export const mySuccessNotification = {
  message: 'You have been logged in!',
  type: NOTIFICATION_TYPE_SUCCESS,
  duration: 30000,
  canDismiss: false,
  forceClose: false,
  position: 'TopRight',
  showCloseAllBtn: false,

  // icon: <i className="fa fa-check" />
}