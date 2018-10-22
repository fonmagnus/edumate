<template lang="pug">
	div(fluid)
		v-layout.pt-3(row wrap)
			HomeBanner
		br
		v-layout(row wrap)
			v-toolbar
				v-tabs(color="grey lighten-3" slider-color="orange accent-3" slot="extension" grow centered)
					v-tab(ripple key="why_edumate")
						span Why Edumate?
					v-tab(ripple key="our_tutor")
						span Our Tutor
					v-tab(ripple key="promo")
						span Promo

		v-layout.pt-3(row wrap)
			v-flex(xs6)
				v-card
					v-img(src="http://syllableslearningcenter.com//wp-content/uploads/2014/04/Syllables-Reading-Tutoring-helps-students-with-dyslexia.jpg" 
								height="400px" 
								class="gray--text")
			v-flex(xs6)
				br
				span.ml-5.pt-5.mt-5.display-1 Why Edumate?
				br
				br
				v-container
					v-layout(row wrap)
						v-icon.mx-5.mb-4(color="orange accent-3") check_circle
						span.mb-4.title.font-weight-light Easy To Use
					v-layout(row wrap)
						v-icon.mx-5.mb-4(color="orange accent-3") check_circle
						span.mb-4.title.font-weight-light Adjust Your Need
					v-layout(row wrap)
						v-icon.mx-5.mb-4(color="orange accent-3") check_circle
						span.mb-4.title.font-weight-light Trustowrthy and Capable Tutor
					v-layout(row wrap)
						v-icon.mx-5.mb-4(color="orange accent-3") check_circle
						span.mb-4.title.font-weight-light Learn anywhere
					v-layout(row wrap)
						v-icon.mx-5.mb-4(color="orange accent-3") check_circle
						span.mb-4.title.font-weight-light Build Your Knowledge
</template>

<script>
	import HomeBanner from '../../components/homebanner.vue';
	export default {
		components: {
			HomeBanner,
		},
	};
</script>
