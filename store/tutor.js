const states = () => ({
	tutorLists: [
		{
			id: 1,
			name: 'Robert Downey Junior',
			age: 56,
			photo: 'https://i.pinimg.com/originals/b1/ac/a1/b1aca1599b009b2299c81f1f2422dabc.jpg',
			courseList: ['Math', 'Physics'],
			province: 'Jakarta',
			city: 'Jakarta Utara',
			lowerBoundFee: 4000000,
			upperBoundFee: 10000000,
			grade: ['Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'You know who I am',
			trustPoint: 2436,
		},
		{
			id: 2,
			name: 'Lisa Blackpink',
			age: 21,
			photo: 'https://kprofiles.com/wp-content/uploads/Lisa.jpg',
			courseList: ['Music', 'Chemistry', 'Economic'],
			province: 'Jakarta',
			city: 'Jakarta Barat',
			lowerBoundFee: 6500000,
			upperBoundFee: 10000000,
			grade: ['Elementary', 'Senior High School'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Teaching music, dancing, and rapping is my passion and I love to help you grow',
			trustPoint: 1131,
		},
		{
			id: 3,
			name: 'Leonardo Di Caprio',
			age: 48,
			photo: 'https://specials-images.forbesimg.com/imageserve/558c0172e4b0425fd034f8ba/280x425.jpg?fit=scale&background=000000',
			courseList: ['Economic', 'Biology', 'Math'],
			province: 'Jakarta',
			city: 'Jakarta Utara',
			lowerBoundFee: 1500000,
			upperBoundFee: 3000000,
			grade: ['Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'An enviromentalist with a dream to make this world better',
			trustPoint: 769,
		},
		{
			id: 4,
			age: 28,
			name: 'Raisa',
			photo: 'http://cdn2.tstatic.net/jogja/foto/bank/images/raisa_1011_20161110_193235.jpg',
			courseList: ['Music', 'Biology'],
			province: 'Jakarta',
			city: 'Jakarta Selatan',
			lowerBoundFee: 5000000,
			upperBoundFee: 6000000,
			grade: ['Junior High School', 'Senior High School', 'Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Dreamer, Teacher, and Love Evangelist',
			trustPoint: 819,
		},
		{
			id: 5,
			age: 23,
			name: 'Lee Kim Jong',
			photo: 'https://pbs.twimg.com/profile_images/948541222632620033/X178xlTd_400x400.jpg',
			courseList: ['Chemistry', 'Biology'],
			province: 'Jakarta',
			city: 'Jakarta Pusat',
			lowerBoundFee: 1000000,
			upperBoundFee: 2500000,
			grade: ['Junior High School', 'Senior High School', 'Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Digital Enthusiast',
			trustPoint: 18,
		},
		{
			id: 6,
			age: 27,
			name: 'Rastogi Jameerkhan',
			photo: 'http://www.obiettivoamore.it/wp-content/uploads/2016/03/attrarre-uomo-860x484.jpg',
			courseList: ['Programming'],
			province: 'Jakarta',
			city: 'Jakarta Selatan',
			lowerBoundFee: 800000,
			upperBoundFee: 1500000,
			grade: ['Junior High School', 'Senior High School', 'Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Keeping my students at their very best',
			trustPoint: 78,
		},
		{
			id: 7,
			age: 22,
			name: 'Ashley Kane',
			photo: 'http://res.freestockphotos.biz/pictures/10/10355-a-beautiful-blonde-isolated-on-a-white-background-pv.jpg',
			courseList: ['Math', 'Physics'],
			province: 'Jakarta',
			city: 'Jakarta Utara',
			lowerBoundFee: 750000,
			upperBoundFee: 1500000,
			grade: ['Junior High School', 'Senior High School', 'Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: `Hey if you're interested to become better person in school, don't hesitate to contact`,
			trustPoint: 55,
		},
		{
			id: 8,
			age: 21,
			name: 'Megumi Fukushiro',
			photo: 'https://sociorocketnewsen.files.wordpress.com/2018/04/bh-1.png',
			courseList: ['Math'],
			province: 'Jakarta',
			city: 'Jakarta Timur',
			lowerBoundFee: 500000,
			upperBoundFee: 750000,
			grade: ['Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Happy teacher ~~',
			trustPoint: 122,
		},
	],
	selectedTutor: {},
});

export const getters = {
	getTutorList: state => state.tutorLists,
	getSelectedTutor: state => state.selectedTutor,
};

const mutations = {
	setTutorList(state, data) {
		state.tutorList = data;
	},
	setSelectedTutor(state, data) {
		state.selectedTutor = data;
	},
};

const actions = {
	setTutorList({ commit }, data) {
		commit('setTutorList', data);
	},
	setSelectedTutor({ commit }, data) {
		commit('setSelectedTutor', data);
	},
};

export default {
	namespaced: true, 
	state: states,
	getters,
	mutations,
	actions,
};