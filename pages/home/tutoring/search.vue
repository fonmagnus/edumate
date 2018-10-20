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
				photo: 'https://i.pinimg.com/originals/b1/ac/a1/b1aca1599b009b2299c81f1f2422dabc.jpg',
				courseList: ['Math', 'Physics'],
				province: 'Jakarta',
				city: 'Jakarta Utara',
				lowerBoundFee: 4000000,
				upperBoundFee: 15000000,
				grade: ['Elementary'],
				sessionType: ['Online', 'Onsite'],
				profileIntro: 'No need to Introduce myself.',
			},
			{
				id: 2,
				name: 'Lisa Blackpink',
				photo: 'https://kprofiles.com/wp-content/uploads/Lisa.jpg',
				courseList: ['Music', 'Chemistry', 'Economic'],
				province: 'Jakarta',
				city: 'Jakarta Barat',
				lowerBoundFee: 10000000,
				upperBoundFee: 15000000,
				grade: ['Elementary', 'Senior High School'],
				sessionType: ['Online', 'Onsite'],
				profileIntro: 'Teaching music, dancing, and rapping is my passion and I love to help you grow'
			},
			{
				id: 3,
				name: 'Leonardo Di Caprio',
				photo: 'https://specials-images.forbesimg.com/imageserve/558c0172e4b0425fd034f8ba/280x425.jpg?fit=scale&background=000000',
				courseList: ['Economic', 'Biology', 'Math'],
				province: 'Jakarta',
				city: 'Jakarta Utara',
				lowerBoundFee: 1500000,
				upperBoundFee: 3000000,
				grade: ['Elementary'],
				sessionType: ['Online', 'Onsite'],
				profileIntro: 'An enviromentalist with a dream to make this world better'
			},
			{
				id: 4,
				name: 'Raisa',
				photo: 'http://cdn2.tstatic.net/jogja/foto/bank/images/raisa_1011_20161110_193235.jpg',
				courseList: ['Music', 'Biology'],
				province: 'Jakarta',
				city: 'Jakarta Selatan',
				lowerBoundFee: 5000000,
				upperBoundFee: 6000000,
				grade: ['Junior High School', 'Senior High School', 'Elementary'],
				sessionType: ['Online', 'Onsite'],
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
			this.fetchTutorList();
			this.searchingTutor = false;
		},
		fetchTutorList(){

		},
	},
};
</script>
