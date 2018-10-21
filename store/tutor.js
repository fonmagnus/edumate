const states = () => ({
	tutorLists: [
		{
			id: 1,
			name: 'Robert Downey Junior',
			age: 52,
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
			discloseFee: false,
			isOnline: false,
			schedules: [
				{
					id: 1,
					day: 'Monday',
					timeStart: '15.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 5,
				},
				{
					id: 2,
					day: 'Monday',
					timeStart: '19.00',
					timeEnd: '21.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Wednesday',
					timeStart: '15.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
					isAvailable: false,
				},
			],
			achievements: [
				{
					title: 'Research in Jarvis Technology',
					award: 'Nobel Prize',
					year: '2015',
				},
			],
			videos: [
				{
					title: 'My appearance',
					type: 'intro',
					source: 'zB2vhSZSweA',
				}
			],
			testimonies: [
				
			],
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
			discloseFee: false,
			isOnline: true,
			schedules: [
				{
					id: 1,
					day: 'Monday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
				},
				{
					id: 2,
					day: 'Monday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Tuesday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 0,
					maxQuota: 5,
					isAvailable: false,
				},
				{
					id: 4,
					day: 'Tuesday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 5,
				},
				{
					id: 5,
					day: 'Wednesday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
				},
				{
					id: 6,
					day: 'Wednesday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 7,
					day: 'Thursday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
				},
				{
					id: 8,
					day: 'Thursday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 5,
				},
				{
					id: 9,
					day: 'Friday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 5,
				},
				{
					id: 10,
					day: 'Friday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 11,
					day: 'Saturday',
					timeStart: '17.30',
					timeEnd: '19.30',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
				},
				{
					id: 12,
					day: 'Saturday',
					timeStart: '20.00',
					timeEnd: '22.00',
					sessionType: 'Onsite',
					currentQuota: 1,
					maxQuota: 5,
				},
			],
			achievements: [
				{
					title: 'Dance Competition by Song-Park',
					award: 'Best Woman Dancer',
					year: '2018',
				},
				{
					title: 'Seoul Dance Concert',
					award: '1st Favourite Dance Group',
					year: '2017',
				},
			],
			videos: [
				{
					title: 'Best Dancer',
					type: 'intro',
					source: 'z3-eGTgQxTY',
				},
				{
					title: 'Hidden Talent',
					type: 'intro',
					source: 'mexI1rEbi2Y',
				},
				{
					title: 'Ddu du ddu du MV',
					type: 'intro',
					source: 'IHNzOHi8sJs',
				},
			],
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
			discloseFee: true,
			isOnline: true,
			schedules: [
				{
					id: 1,
					day: 'Thursday',
					timeStart: '14.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 1,
					maxQuota: 5,
				},
				{
					id: 2,
					day: 'Friday',
					timeStart: '14.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Saturday',
					timeStart: '14.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 10,
					maxQuota: 10,
				},
			],
			achievements: [
				{
					title: 'Oscar Winner',
					award: 'The Revenant Movie',
					year: '2015',
				},
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
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
			discloseFee: true,
			isOnline: false,
			schedules: [
				{
					id: 1,
					day: 'Monday',
					timeStart: '10.00',
					timeEnd: '14.00',
					sessionType: 'Onsite',
					currentQuota: 7,
					maxQuota: 8,
				},
				{
					id: 2,
					day: 'Monday',
					timeStart: '15.00',
					timeEnd: '19.00',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Friday',
					timeStart: '10.00',
					timeEnd: '14.00',
					sessionType: 'Onsite',
					currentQuota: 1,
					maxQuota: 5,
				},
				{
					id: 4,
					day: 'Friday',
					timeStart: '15.00',
					timeEnd: '19.00',
					sessionType: 'Onsite',
					currentQuota: 10,
					maxQuota: 10,
				},
			],
			achievements: [
				{
					title: 'SCTX Awards',
					award: 'Best Singer',
					year: '2017',
				},
				{
					title: 'Kartini Muda Awards',
					award: 'Best Singer',
					year: '2017',
				},
				{
					title: 'Panaxonik Award Festival',
					award: 'Golden Globe',
					year: '2018',
				},
				{
					title: 'Mothers Day',
					award: 'Top 10 Most Influential Mom',
					year: '2018',
				},
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
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
			discloseFee: false,
			isOnline: false,
			schedules: [
				{
					id: 1,
					day: 'Monday',
					timeStart: '17.00',
					timeEnd: '19.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 5,
				},
				{
					id: 2,
					day: 'Monday',
					timeStart: '19.00',
					timeEnd: '21.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Wednesday',
					timeStart: '15.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 3,
					isAvailable: false,
				},
				{
					id: 4,
					day: 'Wednesday',
					timeStart: '17.00',
					timeEnd: '19.00',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 2,
					isAvailable: false,
				},
			],
			achievements: [
				
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
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
			discloseFee: true,
			isOnline: true,
			schedules: [
				{
					id: 1,
					day: 'Friday',
					timeStart: '10.00',
					timeEnd: '13.00',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 2,
				},
				{
					id: 2,
					day: 'Friday',
					timeStart: '14.00',
					timeEnd: '17.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 4,
				},
				{
					id: 3,
					day: 'Friday',
					timeStart: '18.00',
					timeEnd: '21.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 3,
					isAvailable: false,
				},
			],
			achievements: [
				{
					title: 'Indian Programming Competition',
					award: 'Finalist',
					year: '2013',
				},
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
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
			discloseFee: false,
			isOnline: true,
			schedules: [
				{
					id: 1,
					day: 'Tuesday',
					timeStart: '18.00',
					timeEnd: '20.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 2,
					day: 'Wednesday',
					timeStart: '18.00',
					timeEnd: '20.00',
					sessionType: 'Onsite',
					currentQuota: 4,
					maxQuota: 5,
				},
				{
					id: 3,
					day: 'Friday',
					timeStart: '18.00',
					timeEnd: '20.00',
					sessionType: 'Onsite',
					currentQuota: 5,
					maxQuota: 5,
					isAvailable: false,
				},
			],
			achievements: [
				{
					title: 'Instakilogram',
					award: 'Influencer of the Month',
					year: '2016',
				},
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
		},
		{
			id: 8,
			age: 21,
			name: 'Megumi Fukushiro',
			photo: 'https://sociorocketnewsen.files.wordpress.com/2018/04/bh-1.png',
			courseList: ['Math'],
			province: 'Jakarta',
			city: 'Jakarta Timur',
			lowerBoundFee: 2000000,
			upperBoundFee: 2500000,
			grade: ['Elementary'],
			sessionType: ['Online', 'Onsite'],
			profileIntro: 'Happy teacher ~~',
			trustPoint: 122,
			discloseFee: false,
			isOnline: false,
			schedules: [
				{
					id: 1,
					day: 'Saturday',
					timeStart: '11.00',
					timeEnd: '12.00',
					sessionType: 'Onsite',
					currentQuota: 3,
					maxQuota: 3,
				},
				{
					id: 2,
					day: 'Saturday',
					timeStart: '13.00',
					timeEnd: '14.00',
					sessionType: 'Onsite',
					currentQuota: 1,
					maxQuota: 3,
				},
				{
					id: 3,
					day: 'Saturday',
					timeStart: '15.00',
					timeEnd: '16.00',
					sessionType: 'Onsite',
					currentQuota: 2,
					maxQuota: 3,
					isAvailable: false,
				},
			],
			achievements: [
				{
					title: 'Japanese Mathematics Contest',
					award: 'Semi-Finalist',
					year: '2016',
				},
				{
					title: 'Japanese Mathematics Contest',
					award: 'Finalist',
					year: '2017',
				},
				{
					title: 'Japanese Mathematics Contest',
					award: '1st Champion',
					year: '2018',
				},
			],
			videos: [
				// {
				// 	title: '',
				// 	type: '',
				// 	source: '',
				// },
			],
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