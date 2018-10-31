import axios from 'axios';
const states = () => ({
	currentUser: {},
});

export const getters = {
	getCurrentUser: state => state.currentUser,
};

const mutations = {
	setCurrentUser(state, data) {
		state.currentUser = data;
	},
};

const actions = {
	setCurrentUser({ commit }, data) {
		commit('setCurrentUser', data);
	},
	async registerUser({ commit }, param) {
		console.log(param);
		const response = await axios.post('http://localhost:5000/users/create', param);
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