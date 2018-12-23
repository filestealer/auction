import { normalizeError } from '../utils';

const jsonHeaders = {
  // 'Accept': 'application/json',
  'Content-Type': 'application/json',
  // 'Access-Control-Allow-Origin': 'http://localhost:3000',
  // 'Access-Control-Allow-Credentials': 'true',
};

export function get(func, url, headers = jsonHeaders) {
  console.log(`API::${func} -> start`, url);
  // noinspection ES6ModulesDependencies, JSUnresolvedFunction
  return fetch(url, {
    headers: { ...jsonHeaders, ...headers },
    // mode: 'no-cors',
    credentials: 'same-origin',
    // credentials: 'same-origin',
  })
    .then(r => { console.log('SOME RESP', r); return r.json()})
    .then(r => {
      console.log(`API::${func} -> fetched:`, r);
      if (r) return r;
      // if (r && r.object && r.success) {
      //   // noinspection JSUnresolvedVariable
      //   if (!r.is_list) return r.object;
      //   return {
      //     list: r.object,
      //     total: r.total,
      //     per_page: r.per_page,
      //     page: r.page,
      //     pages: r.pages,
      //   };
      // }
      throw r;
    })
    .catch(error => {
      console.log(`API::${func} -> error:`, error);
      throw error; //normalizeError(error, -1);
    });
}

export function post(func, url, params = {}, headers = jsonHeaders) {
  console.log(`API::${func} -> start`, url, params);
  // noinspection ES6ModulesDependencies, JSUnresolvedFunction
  return fetch(url, {
    method: 'POST',
    // mode: 'no-cors',
    credentials: 'same-origin',
    headers: { ...jsonHeaders, ...headers },
    body: JSON.stringify(params),
  })
    .then(r => {
      console.log('>>>>>', r, r.status);
      // if (r.status != 200) throw r;
      return r.json();
    })
    .then(r => {
      console.log(`API::${func} -> fetched:`, r);
      if (r) return r;
      // if (r && r.object && r.success) return r.object;
      throw r;
    })
    .catch(error => {
      console.log(`API::${func} -> error:`, error);
      throw error; //normalizeError(error, -1);
    });
}
export function postFiles(func, url, data, headers = jsonHeaders) {
  console.log(`API::${func} -> start`, url, data, { ...jsonHeaders, ...headers });
  debugger;
  // noinspection ES6ModulesDependencies, JSUnresolvedFunction
  return fetch(url, {
    method: 'POST',
    body: data,
  })
    .then(r => {
      console.log('>>>>>', r, r.status);
      return r.json();
    })
    .then(r => {
      console.log(`API::${func} -> fetched:`, r);
      if (r) return r;
      // // if (r && r.object && r.success) return r.object;
      // throw r;
    })
    .catch(error => {
      console.log(`API::${func} -> error:`, error);
      // throw error; //normalizeError(error, -1);
    });
}


