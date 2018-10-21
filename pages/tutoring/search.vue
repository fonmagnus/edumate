<template lang="pug">
	v-container(fluid)
		v-layout(v-if="!displayTutor", row wrap fluid)
			TutorFilter(:filteredTutorList="filteredTutorList",
									@updateFilteredTutor="updateFilteredTutor")
		v-layout(row wrap, v-else)
			v-flex.md12.text-md-center
				LoadingSpinner(v-if="searchingTutor", :searchingTutor="searchingTutor")
				TutorList(v-else, :filteredTutorList="filteredTutorList")
</template>

<script>
import { mapGetters } from 'vuex';
import LoadingSpinner from '../../components/spinner.vue';
import TutorList from '../../components/tutorlist.vue';
import TutorFilter from '../../components/tutorfilter.vue';

export default {
	components: {
		LoadingSpinner,
		TutorList,
		TutorFilter
	},
	data() {
		return {
			displayTutor: false,
			searchingTutor: true,
			filteredTutorList: [],
		};
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
			tutorList: 'tutor/getTutorList',
		}),
	},
	methods: {
		updateFilteredTutor(tutors) {
			this.filteredTutorList = tutors;
			this.displayTutor = true;
			this.searchingTutor = false;
		}
	}
};
</script>
