<template lang="pug">
	v-container
		v-layout(row wrap)
			v-flex.pa-4(xs12 class="text-xs-center gray--text orange lighten-3")
				.display-2 What's Your Grade?
		br
		v-layout(row wrap class="orange lighten-3")
			v-flex.xs4
				v-hover
					v-card(slot-scope="{ hover }" class="mx-auto" color="grey lighten-4")
						v-img(src="https://images.freeimages.com/images/premium/previews/9980/9980135-boy-child-elementary-school-student-with-backpack.jpg" height="400px")
							v-expand-transition
								div.hovercard.d-flex.v-card--reveal.display-2.white--text.text-xs-center(color="orange darken-3", v-if="hover" @click="gotoElementary") Elementary School
			v-flex.xs4
				v-hover
					v-card(slot-scope="{ hover }" class="mx-auto" color="grey lighten-4")
						v-img(src="https://www.collegeincolorado.org/images/cic/new/home/high_school.jpg" height="400px")
							v-expand-transition
								div.hovercard.d-flex.v-card--reveal.display-2.white--text.text-xs-center(color="orange darken-3", v-if="hover" ) Junior High School
			v-flex.xs4
				v-hover
					v-card(slot-scope="{ hover }" class="mx-auto" color="grey lighten-4")
						v-img(src="https://hickamhigh.files.wordpress.com/2015/05/o-high-school-students-facebook.jpg" height="400px")
							v-expand-transition
								div.hovercard.d-flex.v-card--reveal.display-2.white--text.text-xs-center(color="orange darken-3", v-if="hover" ) Senior High School
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
		}),
	},
	methods: {
		gotoElementary() {
			this.$store.dispatch('tutorfilter/setTutorFilter', {grade: 'elementary'});
			this.$router.push('/home/tutoring/search');
		},
	},
}
</script>


<style scoped>

	.hovercard:hover{
		cursor: pointer;
	}

	.transparent{
		opacity: 0.6;
	}

	.v-card--reveal {
		align-items: center;
		bottom: 0;
		justify-content: center;
		opacity: .5;
		position: absolute;
		width: 100%;
		background-color: #FFA726;
		height: 100%;
	}

</style>