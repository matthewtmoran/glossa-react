const isElectron = determineElectron();
var api;

  if (isElectron) {
  api = require('./api');
  // import * as electronPipe from './api';
} else {
  api = require('./delegator');
}

// import * as expressPipe from './delegator';

function determineElectron() {
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
    return true;
  }
};


// export const api = isElectron ? electronPipe : expressPipe;
export default api