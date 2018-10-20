<template lang="pug">
	v-container(fluid)
		v-layout(v-if="!displayTutor", row wrap fluid)
			v-flex.md12
				v-card.md12.pa-4(fluid, color="grey lighten-3")
					v-layout(row wrap)
						v-flex.md12.text-md-center
							span.headline.orange--text Search Your Preferred Tutor
					br
					br
					v-layout(row wrap)
						v-flex(md4)
						v-flex(md2)
							v-autocomplete(
								:items="gradeList"
								v-model="tutorFilter.grade"
								cache-items
								class="mx-2"
								hide-no-data
								hide-details
								label="Grade"
								color="orange accent-3"
								box
							)
						v-flex(md2)
							v-autocomplete(
								:items="sessionTypes"
								v-model="tutorFilter.sessionType"
								cache-items
								class="mx-2"
								hide-no-data
								hide-details
								label="Session Type"
								color="orange accent-3"
								box
							)
					br
					v-layout(row wrap)
						v-flex(md4)
						v-flex(md4)
							v-subheader Monthly Fee Range
					v-layout(row wrap)
						v-flex(md3)
						v-flex(md1 shrink style="width:60px")
							v-text-field.text-xs-left(
								label="Rp."
								v-model="feeRange[0]"
								class="mt-0")
						v-flex(md4).px-3
							v-range-slider(v-model="feeRange" :max="maxMonthlyFee" :min="minMonthlyFee" :step="feeInterval" color="orange accent-3")
						v-flex(md1 shrink style="width:60px")
							v-text-field.text-xs-right(
								label="Rp."
								v-model="feeRange[1]"
								class="mt-0")
					br
					v-layout(row wrap)
						v-flex(md4)
						v-flex(md4)
							v-combobox(v-model="tutorFilter.selectedCourseList"
								:items="courseList"
								label="Select Course You Want to Learn"
								chips
								clearable
								solo
								multiple)
								template(slot="selection" slot-scope="data")
									v-chip(:selected="data.selected"
										close
										@input="remove(data.item)"
										color="orange accent-2")
										strong {{ data.item }} 
					br
					v-layout(row wrap)
						v-flex(md4)
						v-flex(md2)
							v-autocomplete(
								:items="provinceList"
								v-model="tutorFilter.province"
								cache-items
								hide-no-data
								hide-details
								label="Province"
								color="orange accent-3"
								box
								@change="selectProvince"
							)
						v-flex(md2)
							v-text-field(
								:items="cityList"
								v-model="tutorFilter.city"
								cache-items
								hide-no-data
								hide-details
								label="City"
								color="orange accent-3"
								box
								append-icon="place"
								:disabled="!isSelectedProvince"
							)
					br
					br
					v-layout(row wrap)
						v-flex.md12.text-md-center
							v-btn.white--text(color="orange accent-3" round @click="searchTutor") Search Tutor
		v-layout(row wrap, v-else)
			v-flex.md12.text-md-center
				LoadingSpinner(v-if="searchingTutor", :searchingTutor="searchingTutor")
				TutorList(v-else, :tutorList="tutorList")

</template>

<script>
import { mapGetters } from 'vuex';
import LoadingSpinner from '../../../components/spinner.vue';
import TutorList from '../../../components/tutorlist.vue';

export default {
	components: {
		LoadingSpinner,
		TutorList,
	},
	data() {
		return {
			gradeList: ['Elementary', 'Junior High School', 'Senior High School'],
			sessionTypes: ['Onsite', 'Online'],
			maxMonthlyFee: 15000000,
			minMonthlyFee: 0,
			feeInterval: 1,
			feeRange: [0, 15000000],
			selectedCourseList: [],
			courseList: ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'Economic', 'Programming', 'Painting and Drawing', 'Music'],
			provinceList: ['Jakarta', 'Jawa Barat', 'Jawa Timur', 'Bali'],
			cityList: [],
			tutorList: [],
			isSelectedProvince: false,
			displayTutor: false,
			searchingTutor: true,
		};
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
		}),
	},
	mounted() {
		this.tutorList = [
			{
				id: 1,
				name: 'Robert Downey Junior',
				age: 56,
				photo: 'https://i.pinimg.com/originals/b1/ac/a1/b1aca1599b009b2299c81f1f2422dabc.jpg',
				courseList: ['Math', 'Physics'],
				province: 'Jakarta',
				city: 'Jakarta Utara',
				lowerBoundFee: 4000000,
				upperBoundFee: 15000000,
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
				lowerBoundFee: 10000000,
				upperBoundFee: 15000000,
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
		];
	},
	methods: {
		remove(item) {
			this.tutorFilter.selectedCourseList.splice(this.tutorFilter.selectedCourseList.indexOf(item), 1);
			this.tutorFilter.selectedCourseList = [...this.tutorFilter.selectedCourseList];
		},
		selectProvince() {
			this.isSelectedProvince = true;
		},
		searchTutor() {
			this.displayTutor = true;
			this.tutorList = this.fetchTutorList();
			this.searchingTutor = false;
		},
		fetchTutorList(){
			let fetchResult = [];
			for(var i = 0; i < this.tutorList.length; i++) {
				if(this.tutorFilter.grade &&
					!this.inArray(this.tutorFilter.grade, this.tutorList[i].grade)) {
					continue;
				}
				if(this.tutorFilter.sessionType && 
					!this.inArray(this.tutorFilter.sessionType, this.tutorList[i].sessionType)) {
					continue;
				}
				if(this.tutorList[i].upperBoundFee < this.feeRange[0] || 
					 this.tutorList[i].lowerBoundFee > this.feeRange[1]) {
					continue;
				}
				if(this.tutorFilter.courseList && 
					 !this.inArrayRange(this.tutorFilter.courseList, this.tutorList[i].courseList)){
					continue;
				}
				if(this.tutorFilter.province && 
					 this.tutorFilter.province !== this.tutorList[i].province) {
					continue;
				}
				fetchResult.push(this.tutorList[i]);	
			}
			return fetchResult;
		},
		inArray(obj, arr) {
			for(var i = 0; i < arr.length; i++) {
				if(obj == arr[i]) return true;
			}
			return false;
		},
		inArrayRange(arrA, arrB) {
			for(var i = 0; i < arrA.length; i++) {
				for(var j = 0; j < arrB.length; j++) {
					if(arrA[i] === arrB[j]) return true;
				}
			}
			return false;
		},
	},
};
</script>
