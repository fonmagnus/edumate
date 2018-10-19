<template lang="pug">
	v-container(fluid)
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
				span.pl-5.pt-5.mt-5.display-1 Why Edumate?
				br
				br
				ul.pl-5
					li
						span.subheading Easy To Use
					li 
						span.subheading Adjust Your Need
					li 
						span.subheading Trustowrthy and Capable Tutors
		br
</template>

<script>
	import HomeBanner from '../../components/homebanner.vue';
	export default {
		components: {
			HomeBanner,
		},
	};
</script>
