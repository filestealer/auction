import {createNotification, NOTIFICATION_TYPE_SUCCESS} from 'react-redux-notify';


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