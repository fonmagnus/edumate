<template lang="pug">
	v-container(fluid)
		v-layout(row wrap fluid)
			TutorFilter(:filteredTutorList="filteredTutorList",
									@updateFilteredTutor="updateFilteredTutor")
		v-layout(row wrap)
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
			searchingTutor: false,
			filteredTutorList: [],
		};
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
			tutorList: 'tutor/getTutorList',
		}),
	},
	mounted() {
		this.filteredTutorList = this.tutorList;
		this.$store.dispatch('util/setRandomAmount', -1);
		window.scrollTo(0,0);
	},
	methods: {
		updateFilteredTutor(tutors) {
			this.filteredTutorList = tutors;
			this.displayTutor = true;
			this.searchingTutor = false;
		},
	},
};
</script>
