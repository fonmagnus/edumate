import axios from 'axios';
const states = () => ({
  accessToken: {},
  isLoggedIn: false,
});

export const getters = {
  getAccessToken: state => state.accessToken,
  getIsLoggedIn: state => state.isLoggedIn,
};

const mutations = {
	setAccessToken(state, data) {
		state.accessToken = data;
  },
  clearAccessToken(state) {
    state.accessToken = '';
  },
  setIsLoggedIn(state, data) {
    state.isLoggedIn = data;
  },
};

const actions = {
	setAccessToken({ commit }, data) {
		commit('setAccessToken', data);
  },
  setIsLoggedIn({ commit }, data) {
    commit('setIsLoggedIn', data);
  },
	async loginUser({ commit }, param) {
    const response = await axios.post('http://localhost:5000/user_token', param);
    commit('setAccessToken', response.data.jwt);
		return response;
	},
};

export default {
	namespaced: true, 
	state: states,
	getters,
	mutations,
	actions,
};