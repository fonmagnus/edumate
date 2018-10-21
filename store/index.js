import Vuex from 'vuex';

import tutorfilter from './tutorfilter.js';
import tutor from './tutor.js';

const modules = {
  tutorfilter,
  tutor,
};


const createStore = () =>
  new Vuex.Store({
    modules,
  });

export default createStore;