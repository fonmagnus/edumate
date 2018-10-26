import axios from 'axios';
const states = () => ({
	randomAmount: -1,
});

export const getters = {
	getRandomAmount: state => state.randomAmount,
};

const mutations = {
	setRandomAmount(state, data) {
		state.randomAmount = data;
	},
};

const actions = {
	setRandomAmount({ commit }, data) {
		commit('setRandomAmount', data);
	},
};

export default {
	namespaced: true, 
	state: states,
	getters,
	mutations,
	actions,
};