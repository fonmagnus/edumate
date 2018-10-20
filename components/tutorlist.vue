<template lang="pug">
	v-layout(row wrap)
		v-flex.xs3(v-for="tutor in tutorList")
			v-hover
				v-card.mx-2(slot-scope="{ hover }" class="mx auto")
					v-img(:src="tutor.photo" height="300px")
						div.hovercard.d-flex.v-card--reveal.display-2.white--text.text-xs-center(
							color="orange lighten-5", 
							v-if="hover" 
							@click="")
					v-card-title
						.headline {{ tutor.name }}
					v-card-title(two-line)
						.subheading.ellipsis {{ tutor.profileIntro }}
			
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		tutorList: {
			type: Array,
			required: true,
		},
	},
	computed: {
		...mapGetters({
			tutorFilter: 'tutorfilter/getTutorFilter',
		}),
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

