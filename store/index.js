import Vuex from 'vuex';

import tutorfilter from './tutorfilter.js';

const modules = {
	tutorfilter,
};


const createStore = () =>
  new Vuex.Store({
    modules,
  });

export default createStore;