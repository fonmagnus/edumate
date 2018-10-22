<template lang="pug">
	div
		v-layout(row wrap)
			v-flex.md12.text-xs-center.ma-3
				.display-1 Pick Your Favorite Tutor
		v-layout(row wrap)
			v-flex.xs3(v-for="tutor in filteredTutorList")
				v-hover
					v-card.mx-2.my-3(raised slot-scope="{ hover }" class="ma auto")
						v-img(:src="tutor.photo" height="250px")
							div.hovercard.d-flex.v-card--reveal.display-2.white--text.text-xs-left(
								color="orange lighten-5", 
								v-if="hover" 
								@click="")
								v-container
									v-layout(row wrap)
										v-flex(md4)
										v-flex(md2)
											v-icon(x-large color="black") stars 
										v-flex(md6)
											span.display-1.black--text {{ tutor.trustPoint }}
						v-card-title
							span
								v-layout(row wrap)
									strong.ellipsis.orange--text.headline {{ tutor.name }} 
								v-layout(row wrap)
									.caption {{ tutor.city }}, {{ tutor.province }}
						v-card-title
							.subheading.ellipsis {{ tutor.profileIntro }}
						v-card-title
							v-layout(row wrap)
								span(v-for="course in tutor.courseList")
									v-chip(color="orange lighten-5") {{ course }}
						v-card-actions
							v-flex.md6
							v-flex.md4
							//- v-btn.md4.orange--text(flat fluid ) Detail
							v-btn.md4.white--text(fluid color="orange accent-2" @click="openTutorInfo(tutor)") View	
			
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
			showTutorInfo: false,
		};
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
		}),
	},
	methods: {
		openTutorInfo(tutor) {
			this.$store.dispatch('tutor/setSelectedTutor', tutor);
			this.$router.push('/tutoring/detail');
		},
	},
}
</script>

<style scoped>
	.ellipsis {
		text-overflow: ellipsis;
	}
	.subheading {
		font-size: 14px !important;
	}
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
		background-color: #FFCC80;
		height: 100%;
	}
</style>

