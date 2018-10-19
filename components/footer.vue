<template lang="pug">
	v-container(fluid grid-list-md text-xs-center class="grey darken-2 white--text text-xs-center")
		v-layout(row wrap)
			v-flex(xs4)
				v-card.xs4(flat, tile, class="grey darken-2 white--text")
					.title About Edumate
					br
					a(class="white--text") Blog
					br
					a(class="white--text") Contact Us
					br
					a(class="white--text") Terms And Conditions
					br
					a(class="white--text") Privacy
			v-flex(xs4)
				v-card.xs4(flat, tile, class="grey darken-2 white--text text-xs-center")
					.title Become A Tutor
					br
					a(class="white--text") Requirements
			v-flex(xs4)
				.title Connect With Us
				v-card.xs4(flat, tile, class="grey darken-2 white--text text-xs-center")
					v-card-text(centered)
						v-btn(v-for="icon in icons" class="mx-3 white--text" icon centered @click="goto(icon)")
							v-icon(size="24px" color="white") {{ icon.logo }}
		br
		br
		v-layout(row wrap class="text-xs-center")
			v-flex(xs4)
			v-flex(xs4)
				span.caption Copyright &copy 2018, Edumate Inc.
</template>

<script>
	export default {
		data() {
			return {
				icons: [
					{
						name: 'Facebook',
						logo: 'fa fa-facebook',
						to: 'https://www.facebook.com',
					},
					{
						name: 'Instagram',
						logo: 'fa fa-instagram',
						to: 'https://www.instagram.com',
					},
					{
						name: 'Twitter',
						logo: 'fa fa-twitter',
						to: 'https://www.twitter.com',
					},
				]
			};
		},
		methods: {
			goto(icon){
				window.open(icon.to, '_blank');
			},
		}
	};
</script>

<style scoped>
	a:hover{
		color: #FF9100 !important;
	}
</style>
