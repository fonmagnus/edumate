import Vuex from 'vuex';

import customercare from './customercare.js';
import tutorfilter from './tutorfilter.js';
import tutor from './tutor.js';
import user from './user.js';
import util from './util.js';

const modules = {
  customercare,
  tutorfilter,
  tutor,
  user,
  util,
};

const createStore = () =>
  new Vuex.Store({
    modules,
  });

export default createStore;