const states = () => ({
	customerCareLists: [
		{
			id: 1,
			name: 'Arnold Ardianto',
			phoneNumber: '0858-1124-5759',
			photo: 'https://scontent.fcgk4-1.fna.fbcdn.net/v/t1.0-9/41237151_10209505482073427_3852569760248102912_n.jpg?_nc_cat=111&_nc_eui2=AeG5OS1IXqswmL5U2jObEshZraoGtjVJQgWinObVaVTaYvOnfGWUjPgDvpSPb1MjcZz-61qP3ISj2QHpQuhz207RHFcfKKzFrkpCiuinbED-rA&_nc_ht=scontent.fcgk4-1.fna&oh=3dde58c6f71cbb71d9f13708508a080c&oe=5C3E78AD',
		},
		{
			id: 2,
			name: 'Lisa Indraputri',
			phoneNumber: '0812-300-400',
			photo: 'https://scontent.fcgk5-1.fna.fbcdn.net/v/t1.0-9/43072115_551513831962515_4243472944518397952_n.jpg?_nc_cat=108&_nc_eui2=AeEOY17VXFf1oTV7go9xc1lccoV5JfKjoIfmQtFT9b-IgMQPH_vtsNK64hVTNwM7Owj9pgLsC-adohwup50bLgwWO_CUhlKgV2R2wDf5MMV8Hw&_nc_ht=scontent.fcgk5-1.fna&oh=28c4cacae558410a3d4baaed41900241&oe=5C421D5B',
		},
		
		{
			id: 3,
			name: 'Fadil Kamal',
			phoneNumber: '0857-100-4567',
			photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0EuYjF49hIC4G4Ghb-qZ7Dd__fdsRozNn2MHEeNe-bmfvSgN',
		},
		
	],
});

export const getters = {
	getCustomerCareList: state => state.customerCareLists,
};

const mutations = {
	setCustomerCareList(state, data) {
		state.customerCareList = data;
	},
};

const actions = {
	setCustomerCareList({ commit }, data) {
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