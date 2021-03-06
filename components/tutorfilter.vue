<template lang="pug">
	v-flex.md12
		v-card.md12.pa-4(fluid, color="grey lighten-3")
			v-layout(row wrap)
				v-flex.md12.text-md-center
					span.headline.orange--text Search Your Preferred Tutor
			v-layout.mt-3(row wrap)
				v-flex.md2
				v-flex(md2).px-1
					v-autocomplete(
						:items="gradeList"
						v-model="tutorFilter.grade"
						cache-items
						class="mx-2"
						hide-no-data
						hide-details
						label="Grade"
						color="orange accent-3"
						height="30px"
					)
				v-flex(md2).px-1
					v-autocomplete(
						:items="sessionTypes"
						v-model="tutorFilter.sessionType"
						cache-items
						class="mx-2"
						hide-no-data
						hide-details
						label="Session Type"
						color="orange accent-3"
						height="30px"
					)
				v-flex(md4)
					v-combobox.px-1(v-model="tutorFilter.selectedCourseList"
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
			v-layout(row wrap).mt-1
				v-flex(md2)
				v-flex(md8)
					v-subheader Monthly Fee Range
			v-layout(row wrap)
				v-flex(md2)
				v-flex(md1 shrink style="width:60px").px-2
					v-text-field.text-xs-left(
						label="Rp."
						v-model="feeRange[0]")
				v-flex(md2).px-3
					v-range-slider(v-model="feeRange" :max="maxMonthlyFee" :min="minMonthlyFee" :step="feeInterval" color="orange accent-3")
				v-flex(md1 shrink style="width:60px").px-2
					v-text-field.text-xs-right(
						label="Rp."
						v-model="feeRange[1]")
				v-flex(md2)
					v-autocomplete.mt-1(
						:items="provinceList"
						v-model="tutorFilter.province"
						cache-items
						hide-no-data
						hide-details
						label="Province"
						color="orange accent-3"
						@change="selectProvince"
						height="32px"
					)
				v-flex(md2)
					v-text-field.mt-1(
						:items="cityList"
						v-model="tutorFilter.city"
						cache-items
						hide-no-data
						hide-details
						label="City"
						color="orange accent-3"
						append-icon="place"
						:disabled="!isSelectedProvince"
						height="32px"
					)
			v-layout(row wrap)
				v-flex.md12.text-md-center.mt-2
					v-btn.white--text(color="orange accent-3" round @click="searchTutor") Search Tutor
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
		filteredTutorList: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			gradeList: ['Elementary', 'Junior High School', 'Senior High School'],
			sessionTypes: ['Onsite', 'Online'],
			maxMonthlyFee: 10000000,
			minMonthlyFee: 0,
			feeInterval: 100000,
			feeRange: [500000, 4000000],
			selectedCourseList: [],
			courseList: ['Mathematics', 'Physics', 'Biology', 'Chemistry', 'Economic', 'Programming', 'Painting and Drawing', 'Music'],
			provinceList: ['Jakarta', 'Jawa Barat', 'Jawa Timur', 'Bali'],
			cityList: [],
			isSelectedProvince: false,
		};
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
			tutorList: 'tutor/getTutorList',
		}),
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
			this.updateFilteredTutor(this.fetchTutorList());
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
				if(obj === arr[i]) return true;
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

		updateFilteredTutor(tutors) {
			this.$emit('updateFilteredTutor', tutors);
		}
	},
}
</script>
