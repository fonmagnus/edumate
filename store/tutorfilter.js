const states = () => ({
	tutorFilter: {},
});

export const getters = {
	getTutorFilter: state => state.tutorFilter,
};

const mutations = {
	setTutorFilter(state, data) {
		state.tutorFilter = data;
	},
};

const actions = {
	setTutorFilter({ commit }, data) {
		commit('setTutorFilter', data);
	},
};

export default {
	namespaced: true, 
	state: states,
	getters,
	mutations,
	actions,
};